---
layout: wiki
title: "Data Requests"
permalink: /dev/app_store_data_requests.html
---
Data requests are executed via the Data Core API.

Support actions include...

#### Get Data Sources

Returns available data sources user.

Endpoints:

- [GET https://appstore.intelligentplant.com/gestalt/datacore/api/data/datasources](https://appstore.intelligentplant.com/ApiHelp/Api/GET-Gestalt-api-data-datasources_filter)

#### Get Tags

Performs a tag search on a data source for the specified filter.

Endpoints:

###### Get Snapshot

Performs a snapshot (i.e. "what is the value now?") data query on a data source for a specified tag.

###### Get Processed Data

Performs a processed (or aggregated) data query (e.g. Max, Min, Avg) on a data source for a specified tag and date range.

Aggregation Function:

- <strong>INTERP</strong> - for interpolated data
- <strong>MIN</strong> - minimum value calculated at each sample interval over a time range
- <strong>MAX</strong> - maximum value calculated at each sample interval over a time range
- <strong>AVG</strong> - mean value calculated at each sample interval over a time range.

###### Get Plot Data

Performs a plot data query on a single data source for a specified tags and date range. Plot is a special type of function that returns the minimum number of data points (for a given set of parameters) required to graphically plot an accurate time-series trend.

###### Get Raw Data

Performs a raw data query (i.e. requests unprocessed data) on a data source for a specified tag and date range. Raw queries are generally not advised as they are likely to return a bulky result-set that may well be cropped by size constraints. If connecting to a Process Data Historian, it is far more efficient to request "Get Processed Data" with an "INTERP" function instead.

##### Time Ranges

Historical data queries will expect a date-range.

For <code>start</code> and <code>end</code>, you can specify either an absolute value or a relative value.  Absolute values should be specified in ISO 8601 format (i.e. <code>yyyy-MM-ddTHH:mm:ss</code>).  You can also include a suffix of <code>Z</code> to indicate a UTC time stamp, or you can specify an offset from UTC.  If no time zone information is provided, the date is assumed to be UTC.  For example, if you wanted to specify 3:30:35am on 01 August 2017 in Central US time, you could specify <code>2017-08-01T03:30:35-06:00</code>.

Relative values can be specified using <code>*</code> to represent the current time.  For example: <code>*-1d</code> = "1 day before current time", <code>*-27.5m</code> = "27.5 minutes before current time", and so on.  Possible time units when specifying a relative time stamp are: <code>d</code>, <code>h</code>, <code>m</code>, <code>s</code>, <code>ms</code>.

More info on App Store API can be found [https://appstore.intelligentplant.com/ApiHelp](https://appstore.intelligentplant.com/ApiHelp)
