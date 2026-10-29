---
layout: wiki
title: "Elasticsearch Best Practice"
permalink: /big_data_service/best_practice.html
---
The App Store Connect installer deploys the Big Data Service: a single node elasticsearch cluster that is employed by the App Store Connection for local data storage. The main use-cases are when the App Store Connection is configured to record process data to IP Historian, and/or record Alarm & Event data to Alarm Analysis. If significant volumes of data are stored, the server administrator should be prepared to monitor and reconfigure the Elasticseach installation to maintain performance and availability.

### Elasticsearch Terminology

<table class="wiki-table">
<tbody>
<tr><td>Cluster</td><td>Elasticsearch is made up of a cluster of one or more nodes. <br /> <br /> The default "Big Data Service" install is composed of only a single node running on the same server as the other App Store Connect processes.</td></tr>
<tr><td>Node</td><td>A node is a single running instance of elasticsearch. <br /> <br /> Typically one node runs per server.</td></tr>
<tr><td>Document</td><td>A document is a structured data object, like a record</td></tr>
<tr><td>Index</td><td>An index is where the documents are stored.</td></tr>
<tr><td>Shard</td><td>An index is made up of one or more shards. <br /> <br /> A shard is defined as either a "primary" or "replica" shard: <br /> * A primary shard is responsible for write operations (index, re-index and delete) and reads. <br /> * A replica shard is responsible only for read operations (searches and gets). <br /> <br /> Each shard is a complete set of all the data in the index. The reason for duplicating the data across multiple shards is to improve availability and read/write throughput.</td></tr>
</tbody>
</table>

### Factors affecting elasticsearch performance...

#### Server Constraints

The server hosting App Store Connect must have suitable for processing and storing data. Consider...
- CPU
- RAM
- Drive size
- Drive type (SSD or hard disk).

Balance this against your requirements:
- What are the data ingestion rates?
- Is data collection constant or at particular times of the day?
- How many users are supported and what activities do they perform?

For our latest server recommendations, refer to the [App Store Connect Quick Reference](http://appstore.intelligentplant.com/nuget/downloads/App%20Store%20Connect%20Quick%20Reference.pdf).

#### Sharding

Data in elasticsearch is stored in shards and the size and number of shards will impact performance and stability.

To obtain a list of all the shards on an elasticsearch node, open the following URL on your App Store Connect server.

  http://localhost:9200/_cat/shards?v

Guidelines:

<strong>Aim for shard sizes between 10GB and 50GB</strong>

Whilst applications manage most of the data processes, there may be some scope to modify sharding and indexing configuration in data core driver configuration. For example, in IP Historian, you can set how many shards are created per index, and you can configure if data is stored in monthly, yearly or one-big index.

<strong>Aim for 20 shards or fewer per GB of RAM allocated to Elasticsearch</strong>

A default installation of App Store Connect allocates only 1GB of RAM to Elasticsearch. If the App Store Connect is importing Alarm Analysis data, it will create 2 shards per calendar month - thus reaching the recommended limit within 10 months. Even a node configured with the max 32GB RAM will reach its limit of 640 indices by 5 years if recording Alarm Analysis data for 5 assets.

Exceeding these limits may lead to issues index corruption. For Alarm Analysis, this could manifest in the loss of monthly blocks of data.

### What to do if you are approaching advised limits?
Most of the options below require specialist knowledge of Elasticsearch. Consult with the Intelligent Plant team if unsure how to proceed.

#### Data Source Configuration

Change data index settings that determine how data is stored. IP Historian exposes index type and sharding properties.

NB. Modifying these settings on a live system is not advised.

#### Scale Up

By default, the big data service assumes a modest RAM allowance. However, this can be increased for better performance.

For more info, refer to: [Increase Big Data Service RAM](/wiki/big_data_service/increase_big_data_service_ram.html).

#### Scale Out

Introduce more Elasticsearch nodes on dedicated infrastructure.

#### Data Archiving

Either remove old data, or migrate old data to another App Store Connect instance dedicated to archiving.

#### Data Consolidation

Re-index smaller indices together. For instance, consolidate Alarm Analysis monthly indices into a single annual index.

NB. The new index would need alias names of all the indices replaced in order to support application function.

#### Single Shard Indices

The data of an index is distributed over its shards. Reducing an index shard count will not have a significant impact on overall storage size, but will increase the size of the remaining shards proportionally. This may be desirable if optimizing Elasticsearch by having fewer larger shards. There are risks, however:

- <em>Lack of Redundancy</em> <br /> If a single shard gets corrupted, the entire index becomes unusable. With two shards, even if one gets corrupted, the other may still hold partial or full data.

- <em>Parallelism & Load Distribution</em> <br /> With two shards, write and query operations are spread across multiple shards, reducing stress on a single shard.

To mitigate these risks:

- Only single-shard older (less used) indices
- Mark single-shard indices as read-only
- Create backups of single-shard indices

For more info on Elasticsearch backup, refer to: [App Store Connect: Back Up and Restore](/wiki/app_store_connect/back_up_and_restore.html).
