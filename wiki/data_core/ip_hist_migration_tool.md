---
layout: wiki
title: "IP Hist Migration Tool"
permalink: /data_core/ip_hist_migration_tool.html
---
The IP Hist migration tool is a command line program that allows you to effciently transfer historical data records from IP Hist v2 (Elastic Search 2) to IP Hist v3 (Elastic Search 7).

See [IP Hist v3](/data_core/iphist_v3.html) for instructions on setting up IP Hist v3.

#### Downloading and Installing the IP Hist Migration Tool

TODO

#### Functionality

The tool provides a number of utility sub-commands to help work with the Elastic Indices used by IP Hist.

You can use '--help' or '-h' to get help information about a command or sub-command.

##### Info

You can verify the connection to an Elatic instance using the info sub-command.

`ip_hist_tool info http://localhost:9203`

By default each sub-command assumes the target Elastic Search instance is version 7. If you receive the following error set the version flag (-v) to fix the issue.

```
The client noticed that the server is not Elasticsearch and we do not support this unknown product
```

`ip_hist_tool info http://localhost:9200 -v 2`

##### List (ls)

You can list available indices on an elastic node using the following command:

```
ip_hist_tool list http://localhost:9203
```

The alias 'ls' can also be used:

```
ip_hist_tool ls http://localhost:9203
```

You can find specific indices by using a filter:

```
ip_hist_tool ls http://localhost:9203 -f *iphistorian*
```

The alias flag '-a' can be used to include index aliases in the command output.

```
ip_hist_tool ls http://localhost:9203 -f *iphistorian* -a
```

##### Delete (rm)

The delete sub-command can be used to delete indices.

To prevent accidental deletions you must provide a name filter to specify which indices should be deleted. The alias 'rm' can also be used.

The command will print the list of indices that match the filter and ask for confirmation before deleting.

<strong>There is no way to recover deleted indices without a backup</strong>

```
ip_hist_tool delete http://localhost:9203 *iphistorian*
ip_hist_tool rm http://localhost:9203 *iphistorian*
```

##### Migration

The migration sub-command reads tag definitions and data samples from a source Elastic Search v2 instance and replicates them on an Elastic Search v7 instance. Notably snapshot tag values are not migrated by this tool.

You must specify the URL of the source and destination Elastic instances. Currently, the source index must be version 2 and the destination must be version 7.

```
ip_hist_tool migrate http://localhost:9200 http://localhost:9203
```

By default this will migrate the tag definitions and data found in the "edge.iphistorian" indices. You can specify different index names using command line paramaters. These should be set to the values of the "Data Index Name Prefix" and "Tag Definitions Index Name" settings in the source data source configuration.

```
ip_hist_tool migrate http://localhost:9200 http://localhost:9203 -t tag-index-name -d data-index-name
```

The migrate sub-command will check if indices with conflicting names already exist on the target Elastic Search instance. If they do you will be asked if these should be deleted before proceding.

Additionally, the tool records its progress to "migration_progress.txt". If the operation is interrupted (e.g. due to an unexpected server restart) you can resume by running the command again. You will be prompted to delete any indices that were paritally migrated (since their exact status is unknown) and migration will resume.

You can skip the migration of the tag index or data index using the appropriate flag:

```
ip_hist_tool migrate http://localhost:9200 http://localhost:9203 --skip-tags
```

```
ip_hist_tool migrate http://localhost:9200 http://localhost:9203 --skip-data
```
