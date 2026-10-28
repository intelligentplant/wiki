---
layout: wiki
title: "Data Functions"
permalink: /dev/data_functions.html
---
We support a number of different data functions for retrieving process data from Industrial App Store data sources, and the parameters specified can vary a little bit depending on the type of query, and in some cases, the data source(s) you will be querying. You should ensure that you have using IntelligentPlant.DataCore.Client; in your namespace imports, because there are a number of extension methods available to simplify some of the queries depending on whether you want to e.g. query a single data source or multiple data sources in one call. When you use an overload that allows multiple data sources to be queried, the return type will be a dictionary where the key is the data source name and the value is the result from that data source.

### General Notes {: .title}

There should be XML documentation included with every package, so Visual Studio should be able to display Intellisense information about all of the methods, parameters, and response types, which you may find helpful.

When performing a query for historical data, the client will generally allow you to specify a time range using DateTime objects, or as strings that can be parsed into DateTime objects. All query timestamps are assumed to be in UTC if no time zone information is available when a timestamp string is parsed. When specifying a timestamp string, you can either use the ISO 8601 format (e.g. "2020-07-16T13:04:37Z"), or you can specify a relative time expression.

Likewise, for queries that require some sort of time interval, the client will typically provide overloads that accept TimeSpan or string objects. String intervals can either be literal TimeSpan values (e.g. "01:30:00" for 1.5 hours), or they can use short-hand notation. You will also find method overloads that allow you to specify an interval count rather than a time interval; in these overloads, the number you specify will be used to calculate a time interval based on the query time range.

You can find more details about how relative timestamps and short-hand time intervals can be specified here: https://github.com/intelligentplant/IntelligentPlant.Relativity

To summarise the data query types quickly below:

#### Snapshot

These are queries for current tag values, performed using the ReadSnapshotTagValuesAsync methods on the client's DataSources property.

#### Raw

These are queries for the raw values stored in the historian archive, performed using the ReadRawTagValuesAsync methods on the client's DataSources property. In addition to specifying the tag names to query, you also specify a time range for the query, and the maximum number of samples to retrieve per tag. Most historians will place an absolute limit on the number of samples to retrieve per tag, and also on the overall maximum number of samples that will be returned in a single query.

#### Plot

Plot queries are used to retrieve historical tag values for visualisation on a chart, performed using the ReadPlotTagValuesAsync methods on the client's DataSources property. The query works by dividing the query time range into a number of equally-sized time buckets that you specify in the query parameters, and then selecting a small number of raw values in each bucket that are deemed to be meaningful. The exact selection algorithm is dependent on the historian vendor, but would typically involve selecting e.g. the first, last, minimum and maximum value in each time bucket, so the sample count returned for each tag can be up to 4x the number of intervals specified in the query.

#### Processed/Aggregated

Processed data queries (also referred to as aggregated data queries) use data functions to aggregate the raw data in the historian, and are performed using the ReadProcessedTagValuesAsync methods on the client's DataSources property. When asking for aggregated data, you specify the function name and a sample interval that you want to perform the aggregation at. For example, you might want to compute the average value of a tag at hourly sample intervals in the 24 hours leading up to the current time.

The available data functions vary by historian, but most drivers will typically support at least the following:

- <strong>INTERP</strong> - at each time interval, interpolate a value based on the values immediately before and immediately after the interval start and/or end times.
- <strong>AVG</strong> - average value for each time interval specified in the query.
- <strong>MIN</strong> - minimum tag value in each time interval. depending on the historian, this may return the actual raw timestamp of the minimum value, or it may return a value with the timestamp set to the start time of the interval.
- <strong>MAX</strong> - maximum tag value in each time interval. depending on the historian, this may return the actual raw timestamp of the minimum value, or it may return a value with the timestamp set to the start time of the interval.

Some historians (such as our own, and OSIsoft PI) also support functions to compute e.g. the number of raw samples that were recorded in a given time interval, the percentage of recorded values that have good-quality status, and so on. Our current driver model does not provide a way of discovering which functions are available on a given data source, but we hope to add this in the future to make requesting processed data a little bit easier.

### Example of function differences on Trend {: .title}

In this example, we are looking at our office temperature over a week, with interval set to a 1 hour period.

#### Plot

<img src="/assets/media/dev/trend_-_plot.png" alt="trend_-_plot" style="max-width:900px" loading="lazy" />

#### Interp

<img src="/assets/media/dev/trend_-_interp.png" alt="trend_-_interp" style="max-width:900px" loading="lazy" />

#### Min

<img src="/assets/media/dev/trend_-_min.png" alt="trend_-_min" style="max-width:900px" loading="lazy" />

#### Max

<img src="/assets/media/dev/trend_-_max.png" alt="trend_-_max" style="max-width:900px" loading="lazy" />

#### Avg

<img src="/assets/media/dev/trend_-_avg.png" alt="trend_-_avg" style="max-width:900px" loading="lazy" />
