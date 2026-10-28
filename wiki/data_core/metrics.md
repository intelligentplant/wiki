---
layout: wiki
title: "Metrics"
permalink: /data_core/metrics.html
---
The Data Core OpenTelemetry Metrics Driver allows Data Core to observe and collect metrics from applications and services that use the OpenTelemetry standard. It automatically discovers and tracks metric streams, such as performance counters and custom application metrics, and makes these available for monitoring and analysis within Data Core.

### Key Features {: .title}

- Automatic Metric Discovery: Observes metrics from specified OpenTelemetry meters
- Performance Counter Integration: Collects Windows performance counters for host process monitoring.
- Browse Metrics via Asset Model: Metrics associated with each meter can be perused via the "Browse Asset Model" feature. <br /> <img src="/assets/media/data_core/metricsdriver002.png" alt="metricsdriver002" style="max-width:600px" loading="lazy" />
- Easy Integration with IP Historian: Select key metrics and configure historization for long term tracking. <br /> <img src="/assets/media/data_core/metricsdriver003.png" alt="metricsdriver003" style="max-width:600px" loading="lazy" />
- Customizable Limits: Allows configuration of how many metric streams and data points are tracked to optimize driver performance.
- Configurable Export Interval: Lets you set how frequently metrics are updated and exported for analysis.

### Key Settings {: .title}

<img src="/assets/media/data_core/metricsdriver001.png" alt="metricsdriver001" style="max-width:600px" loading="lazy" />

- Meters to Observe: A comma-delimited list of OpenTelemetry meters to observe. Wildcards supported.
- Enable Performance Counters:  When 'True', instrument streams will be created for selected Windows performance counters associated with the host process.

This driver is ideal for users who want to centralize and analyze telemetry data from multiple sources in a consistent, standards-based way.

## Data Core Telemetry {: .title}

A preconfigured instance  of the Metrics driver (entitled "Telemetry") ships with App Store Connect. This can be used to observe real-time Data Core metrics (e.g. Data Source IO operations) and System Performance Counters (e.g. <em>% Processor Time</em> and <em>Available Memory</em>).

<img src="/assets/media/data_core/metrics01.png" alt="metrics01" style="max-width:400px" loading="lazy" />

To use, enable data source:

- Real-Time Data > Data Sources > Telemetry
