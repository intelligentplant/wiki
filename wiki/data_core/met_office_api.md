---
layout: wiki
title: "Met Office API"
permalink: /data_core/met_office_api.html
---
The <strong>Met Office API</strong> data source driver provides a means to integrate with the [Met Office Data Hub](https://datahub.metoffice.gov.uk/) that can be configured to historise weather forecast data.

An independent subscription to the Met Office Data Hub is required to use this driver.

### Supported Forecasts

The driver integrates with Met Office site-specific forecasts:

- Global hourly spot data
- Global three hourly spot data
- Global daily spot data

### Configuration

#### API Key

<strong>Field Name:</strong> <code>ApiKey</code>

Register with the Met Office Data Hub to obtain an API key for your subscription.

#### Locations

One or more locations should be submitted in the format:

<code>(name, latitude, longitude)</code>

<strong>Example:</strong>

```
(Intelligent Plant HQ, 57.1430, -2.1112)
```

#### Met Office Plan

<strong>Field Name:</strong> <code>MetOfficePlan</code>

Select your Met Office API subscription plan from the available site-specific forecasts:

- Global hourly spot data
- Global three hourly spot data
- Global daily spot data

### Forecast Parameters

The following forecast parameters are available:

- <code>feelsLikeTemperature</code>
- <code>max10mWindGust</code>
- <code>maxScreenAirTemp</code>
- <code>minScreenAirTemp</code>
- <code>mslp</code>
- <code>precipitationRate</code>
- <code>probOfPrecipitation</code>
- <code>screenDewPointTemperature</code>
- <code>screenRelativeHumidity</code>
- <code>screenTemperature</code>
- <code>significantWeatherCode</code>
- <code>totalPrecipAmount</code>
- <code>totalSnowAmount</code>
- <code>uvIndex</code>
- <code>visibility</code>
- <code>windDirectionFrom10m</code>
- <code>windGustSpeed10m</code>
- <code>windSpeed10m</code>

### Tag Format

Forecast parameters are presented as tags with the following format:

<code><location>/<met-office-plan>/<forecast-parameter>/<forecast-offset></code>

Where:
- <code><location></code> - The location name as configured
- <code><met-office-plan></code> - The subscription plan (e.g., hourly, three-hourly, daily)
- <code><forecast-parameter></code> - One of the forecast parameters listed above
- <code><forecast-offset></code> - Time offset relative to the tag value timestamp (when the forecast was made)

<strong>Example:</strong>

```
Intelligent Plant HQ/hourly/probOfPrecipitation/006Hrs
```

This tag represents the probability of precipitation at Intelligent Plant HQ, 6 hours from when the forecast was generated.

### Recording Forecast History

The Met Office API driver can be configured in conjunction with a historian and [data stream](/wiki/data_core/data_sources.html#data-streams) rule to record forecast history.

By setting up a data stream that maps Met Office API forecast tags to historian tags, you can:

- Build a historical record of weather forecasts over time
- Compare forecast accuracy against actual weather conditions
- Analyze forecast trends and patterns
- Correlate forecast data with operational data stored in your historian

This configuration allows you to capture not just current forecasts, but maintain a record of how forecasts change over time for any given location and parameter.
