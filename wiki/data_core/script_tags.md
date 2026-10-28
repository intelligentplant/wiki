---
layout: wiki
title: "Script Tags"
permalink: /data_core/script_tags.html
---
Script Tags provide a highly configurable way to define calculation and event raising tags.

Script tags can be written in:

- C#
- FLEE (Fast Lightweight Expression Evaluation) - [more info](https://github.com/mparlak/Flee/wiki/Examples)

### Script Tag Templates {: .title}

A number of pre-configured script tags exist to perform the following functions:

#### Calculations

- <strong>Accumulator Calculator</strong> <br /> Calculates the accumulated result of a monitored process tag for a given period (e.g. a day).

- <strong>Aggregation Calculator</strong> <br /> Periodically calculate an aggregation of a process tag.

- <strong>Average Calculator</strong> <br /> Periodically calculates the average value of a process tag.

- <strong>Delta Calculator</strong> <br /> Calculates the delta between the value of two input tags.

- <strong>Delta with Offset Calculator</strong> <br /> Calculates the delta between the value of two input tags, then applies an offset.

- <strong>Energy Based Availability Calculator</strong> <br /> Energy-Based Availability (EBA) is the ratio of actual to expected energy production.

- <strong>Gas Velocity Calculator</strong> <br /> Calculates gas velocity using flow rate and pressure.

- <strong>Normalized Deviation Calculation</strong> <br /> Calculates the normalized deviation of a process value.

- <strong>Ratio Calculator</strong> <br /> Calculates the ratio and between two input tags.

- <strong>Time Based Availability Calculator</strong> <br /> Time-Based Availability (TBA) is an energy expression denoting the ratio of a time-period (e.g. a day) when power is available. It does not discriminate the cause of downtime (e.g. a deliberate stop for maintenance, no/low wind conditions).

- <strong>Time Based Delta Calculator</strong> <br /> Monitors the rate of change of a process tag over a time period.

- <strong>Turbine Status</strong> <br /> A turbine has three basic power-production states: 1. Power; 2. No Wind; 3. No Power.

- <strong>Turbulence Intensity Calculator</strong> <br /> Turbulence Intensity (TI) is a measurement of wind speed turbulence. It is the ratio of wind speed StdDev to Mean.

- <strong>Turbulence Intensity Forecast Calculator</strong> <br /> Turbulence Intensity Forecast (TI) is an measurement of wind speed turbulence derived from forecasted Wind and Gust Speed (rather than observed wind speed variance).

- <strong>Unit Converter</strong> <br /> Convert process value from one unit to another.

#### Sensor Quality Checks

- <strong>Bad Data Detection</strong> <br /> Data quality check that raises alert if monitored tag returns NaN or has a 'bad' status.

- <strong>Channel Deviation Detection</strong> <br /> Checks for deviation in output from a sensor with two data channels. An alert indicates that one or both of the channels is unreliable. The method is to regularly compare Channel A and Channel B and check if difference is within acceptable instrument error tolerance. Default configuration is to check 24hr average difference 4 times per day.

- <strong>Flatline Detection</strong> <br /> Script tag that checks for flatlining data (i.e. process tags where the tag may be updating regularly, but the sensor value is not changing).

- <strong>Frozen Signal Detection</strong> <br /> Script tag that periodically ensures that newer values are being received for a tag.

#### Process Data Alerts

- <strong>Equipment Running Status Monitor</strong> <br /> Monitors the running status of a piece of equipment and triggers and resets events when the status changes.

- <strong>Fleeting Excursion Monitor</strong> <br /> Script tag template for monitoring sensors such as acoustic sand probes that can generate fleeting excursions.

- <strong>Hi/Lo Limit Monitor</strong> <br /> Performs a Hi/Lo limit monitor check.

- <strong>Limit Monitor</strong> <br /> Script tag that periodically monitors a process tag value against a limit using MIN/MAX aggregated data. <br /> <em>Use the FleetingExcursionMonitor template if you require a high degree of accuracy.</em>

- <strong>Limit Monitor 1 Precondition</strong> <br /> Limit monitor that will only trigger or reset an excursion event if a precondition tag value check is met.

- <strong>Limit Monitor 2 Precondition</strong> <br /> Limit monitor that will only trigger or reset an excursion event if two precondition tag value checks are met.

- <strong>Limit Monitor 3 Precondition</strong> <br /> Limit monitor that will only trigger or reset an excursion event if three precondition tag value checks are met.

- <strong>Logic Gate Alert</strong> <br /> An alert that can be used to summarise the status of multiple alerts using an AND or OR operator.

- <strong>Time Based Delta Monitor</strong> <br /> Monitors the rate of change of a process tag over a time period.

- <strong>Value Change Monitor</strong> <br /> Monitors a tag and emits an event every time the value of the tag changes.

#### Troubleshooting

The Data Core Admin UI shows information related to the processing of an individual Script Tag via the "Info" and "Additional Properties" icons.

<img src="/assets/media/data_core/scripttags-00.png" alt="scripttags-00" style="max-width:400px" loading="lazy" />

The Data Core API also exposes information related to all Script Tags for a data source.

- [DataCoreAdminUrl]/datacore/api/diagnostics/scripting/[dataSourceName]
