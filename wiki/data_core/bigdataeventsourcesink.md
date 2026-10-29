---
layout: wiki
title: "Big Data Event Source/Sink"
permalink: /data_core/bigdataeventsourcesink.html
---
### Overview {: .title}

Intelligent Plant's <strong>Big Data Service</strong> (part of the App Store Connect installation) is employed by Data Core as an event source and sink. Using it as a sink can be useful if we wish to define a local collecting area.

For example, if we're monitoring an OPC data-source, our ultimate destination may be a Alarm Analysis. We can start collecting data immediately, while fine-tuning Alarm Analysis import rules.

However, it is not suitable for multi-server event flow - <em>see <strong>Data Loss vulnerability</strong> below</em>.

Data is stored to Big Data in monthly indices. The index name is derived automatically from event source.

### Requirements {: .title}

- Big Data Windows Service must be running

#### Key Settings

- Big Data URL - <em>Address of underlying Big Data/Elasticsearch service</em>
- Index Filter (Event Source only) - <em>Only indices matching filter are included in data polling.</em>
- Lag (Event Source only) - <em>Writes to big data are not available for immediate read (consider the time taken to index and index refresh interval). The lag period (seconds) makes sure we never look for data later than "UtcNow - lag."</em>

#### Data Storage

If using Big Data Event Sink, be sure to have sufficient disk space. If dealing with high volumes of data, consider contacting Intelligent Plant to request a custom installation of App Store Connect employing a dedicated data drive.

#### Data Loss Vulnerability!

A vulnerability exists if employing the Big Data event source/sink for buffering event-flow across multiple data core servers.

For example, imaging the following 2 server Data Core architecture:

1. Events arrive on an upstream server -> Big Data Buffer -> Transmitted downstream
1. Events arrive on the downstream server -> Big Data (Elasticsearch) Buffer -> Archived to Alarm Analysis

Big Data/Elasticsearch buffering is employed on both servers.

When data is written to Elasticsearch, it is not immediately available for data-read - the period between ingestion and availability is referred to as the “Refresh Interval”.

- To make sure we read all records from the buffer and maintain sequence order, we use the Data Core event property “UtcCreationTime” – <em>this time at which an event entered the Data Core system</em>.

- To make sure we don’t miss records that are “mid-ingestion”, we configure a “lag period” - <em>do not read records later than "UtcNow – lag period"</em>.

This works well in a single-server architecture. On the upstream server, it is reasonable to expect an event to be available for read from the buffer within 2s of arriving on the flow. The default lag period of 60s provides plenty of contingency.

The issue manifests when the event is transmitted to a downstream server and buffered again.

The second buffer works in exactly the same way, but the “UtcCreationTime” value remains the time at which the server entered the upstream system. If there is an extended disconnection between both servers (eg. network outage), the “UtcCreationTime” may be well in the past.

To provide some mitigation, the buffer-read “lag” on the downstream server could be set at 10m - but if it takes longer than 10m for the event to arrive downstream, we have a problem...

All data will arrive on the downstream buffer, but the "lag" period no longer provides protection against reading data mid-ingestion. This may result in skipping a events during a catch-up period.

Therefore, we recommend employing an alternative buffer for cross server operations (e.g. [MSMQ](/wiki/data_core/msmqeventsourcesink.html) or [RabbitMQ](/wiki/data_core/rabbitmq.html)), or disabling the downstream buffer altogether.

However, the case remains that Big Data / Elasticsearch buffer is still useful in that it's easy to configure and provides raw data storage - extremely important during a commissioning phase where Alarm Analysis Import Rules may undergo change and a re-import of history is required.
