---
layout: wiki
title: "IP Historian"
permalink: /iphist/index.html
---
<em>The Process Data Historian from Intelligent Plant</em>

### Introduction {: .title}

Intelligent Plant's data historian is integrated as a part of Data Core. As such, it can take advantage of Data Core's data streaming capabilities to observe and record incoming tag values from any other supported data source.

For many data sources (such as Modbus, MQTT, and more), it is possible to automatically forward tag values from the source using a simple one-click configuration.

Additionally, IP Historian tags can be configured up-front to define a source data source and tag name, allowing new source-to-destination tag mappings to be configured automatically as you create new historian tags.

### How Historians Work - Exception and Compression {: .title}

During a hackathon that Intelligent Plant helped host in 2020, we noticed that many of the participants instinctively went for raw data when trying to identify periods of interest within the data. The following video explains why that isn't always the best option, and how exception and compression can be used to make the data more manageable.

[How Historians Work - Exception and Compression](https://www.youtube.com/embed/k0wTxhzDyBM)

### Data Query Types {: .title}

IP Historian supports a number of different types of data queries.

#### Snapshot

Snapshot queries return the current values of the tags polled.

#### Raw

A raw query returns the unprocessed data for a tag i.e. the actual data points persisted in the historian's archive.

Raw queries are generally not advised as they are likely to return a bulky result-set that may well be cropped by size constraints. In the majority of cases, a plot or aggregated data query can return a data set that is acceptable for the task at hand.

#### Plot

Plot queries return a best-fit data set for a given query time range and level of granularity, suitable for visualisation in a chart. For every interval in the chart, the minimum and maximum values for a tag will be returned, as well as values that best represent the shape of the raw data (as far as is possible based on the requested granularity).

#### Values-at-Times

A values-at-times query is used to retrieve the value of a tag at specified points in time. IP Historian will return the closest raw value at or before each specified sample time.

#### Aggregated

Aggregated queries can be used to perform ad hoc processing and filtering of raw historical data based on a query time range and sample interval. IP Historian supports a number of aggregation functions, as described below:

- <strong> ANNOTATIONCOUNT</strong>: Groups the raw data for a tag into buckets using the specified sample interval and returns the number of annotations defined on a tag in each bucket.

- <strong> AVG</strong>: Groups the raw data for a tag into buckets using the specified sample interval and computes the mean value of a tag in each bucket.

- <strong>COUNT</strong>: Groups the raw data for a tag into buckets using the specified sample interval and returns the number of raw samples in each bucket.

- <strong> DELTA</strong>: Groups the raw data for a tag into buckets using the specified sample interval and returns the signed difference between the first and last raw samples in each bucket.

- <strong> INTERP</strong>: Groups the raw data for a tag into buckets using the specified sample interval and interpolates a value at each bucket start and/or end time using the values from the previous and current buckets.

- <strong> MIN </strong>: Groups the raw data for a tag into buckets using the specified sample interval and returns the minimum value from each bucket. Note that the original raw samples are returned, so the values are the "true" minimum values.

- <strong> MAX</strong>: Groups the raw data for a tag into buckets using the specified sample interval and returns the maximum value from each bucket. Note that the original raw samples are returned, so the values are the "true" maximum values.

- <strong> PERCENTBAD</strong>: Groups the raw data for a tag into buckets using the specified sample interval and computes the percentage of raw samples in each bucket that have a quality flag set to "bad".

- <strong> PERCENTGOOD</strong>: Groups the raw data for a tag into buckets using the specified sample interval and computes the percentage of raw samples in each bucket that have a quality flag set to "good".

- <strong> RANGE</strong>: Groups the raw data for a tag into buckets using the specified sample interval and returns the absolute difference between the first and last raw samples in each bucket.

- <strong> STDDEV</strong>: Groups the raw data for a tag into buckets using the specified sample interval and returns the standard deviation for each bucket.

- <strong> TAVG</strong>: Calculates a time-based rolling average for a tag.

- <strong> VARIANCE</strong>: Groups the raw data for a tag into buckets using the specified sample interval and returns the variance for each bucket.

#### Annotations

IP Historian allows annotations to be recorded against tags at specific points in time. Annotations can be used to track or highlight events a tag value exceeding an operating limit, an action taken as part of a workflow, and so on.

#### Specifying Query Time Ranges

As part of the Data Core data connectivity layer, IP Historian can accept query time ranges specified as both absolute timestamps (using standard ISO 8601 formatting), or as relative timestamps (e.g. 30 minutes before the current time).

### Archiving Model {: .title}

IP Historian supports multiple indexing models depending on the requirements of the data being recorded:

- "One Big Index" - optimised for constant or infrequently-changing values.
- "Index per Day/Month/Year" - stores data in an index that will periodically roll over to provide the best balance between data storage and query performance.

When recording process data, we normally recommend "Index per Month" as the optimal indexing period.

### Backing Up {: .title}

Indexes can be backed up and restored on another IP Historian instance.

### System Requirements {: .title}

See [See App Store Connect System Requirements](/app_store_connect/app_store_connect.html).

However, note the system requirements should be adjusted for the particular use-case of the historian. If you intend to support historization of large data volumes and intensive data queries, a more powerful spec is required. Please consult with the Intelligent Plant support team for detailed guidance.

### Configuration Best Practice {: .title}

Details to follow.

### Licensing {: .title}

When connecting IP Historian to the Industrial App Store, there is no licensing cost. An initial 1000 tag licence is supplied, but can be increased free of charge by client request.

IP Historian deployments that are not directly connected to the Industrial App Store (e.g. deployments on a PIN or PCN) require a paid-for licence that is issued in 1000 tag increments.

#### How to find your Machine ID

It is necessary to know the Machine ID of your system for licensing to be completed. To find your Machine ID, you must first open App Store Connect and select "Configure Data Core".

Go to your Data Sources and click "Details" on the historian that you wish to use.

<img src="/assets/media/app_store_connect/data_core_-_data_sources_selection.png" alt="data_core_-_data_sources_selection" style="max-width:300px" loading="lazy" />

<img src="/assets/media/app_store_connect/data_core_-_details.png" alt="data_core_-_details" style="max-width:500px" loading="lazy" />

Under Action, click "Configure Data Source Settings"

<img src="/assets/media/app_store_connect/data_core_-_configure_settings.png" alt="data_core_-_configure_settings" style="max-width:300px" loading="lazy" />

And at the bottom you will see the Machine ID for your system.

<img src="/assets/media/app_store_connect/data_core_-_machine_id.png" alt="data_core_-_machine_id" style="max-width:800px" loading="lazy" />
### IPHist - IPHist replication {: .title}

Connections can be setup in datacore to provide reslient transfer of historical data between IPHist instances. this means that a loss in connectivity will not result in a permanent loss of data on the remote IPHist to the datasource. that data will be back filled, and consistent.

For further information regarding replication and data resilience, contact support@intelligentplant.com.

### Other historian - IPHist replication, or vice-versa {: .title}
