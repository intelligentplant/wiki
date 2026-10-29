---
layout: wiki
title: "Alarm Analysis Data Retention"
permalink: /alarm_analysis/data_retention.html
---
By default, Alarm Analysis retains all data. The Alarm Analysis application is designed to comfortably execute monthly reports irrespective of how much Alarm & Event history is stored. However, at some point you may wish to expire data to free storage capacity.

The article below provides guidance on configuring a data retention policy.

### How Alarm Analysis stores data {: .title}

Alarm Analysis Import flow can be considered in two stages:

#### 1. Collection

Source Alarm & Event (A&E) data arrives on the import flow and is stored for later processing. We call this the <strong>A&E Raw Data Cache</strong>.

Data is stored in monthly indices determined by date of arrival. This may be different to the date of the actual event record contained in the raw A&E message (remember, the data is unprocessed at this stage so we don't know what it contains).

For an ongoing (near real-time) data flow, the monthly indices of raw data will be closely aligned with A&E event time. However, exceptions may occur. For example, importing a large historical backlog.

The data is stored via the Intelligent Plant Big Data Service to indices with the following format:

- [datasource].evt_YYYYMM <br /> e.g. scadaopc.evt_201908

#### 2. Processing

The source data stored in stage 1 undergoes cleaning and transformation to generate an Alarm Analysis record optimised for analytics and aggregation. This is the <strong>Alarm Analysis database</strong>.

Data is stored in monthly indices determined by the A&E event date. The index name format is:

- [Company].[Asset].msg_YYYYMM <br /> e.g. oilco.osprey.msg_201908

<div class="title wiki-divider" aria-hidden="true"></div>

### The case for keeping unprocessed data {: .title}

Once data has been processed, it <em>could</em> be removed from the collection store. However, this would prevent  re-processing of historic data. This can be pertinent in the early days of configuring an Alarm Analysis Import Flow, where rules are often revised.

Only remove unprocessed data if satisfied historic re-processing of historic is not a requirement.

<div class="title wiki-divider" aria-hidden="true"></div>

### Configuring a Data Retention Policy {: .title}

1. On App Store Connect server, Open App Store Connect (http://localhost:2006/Service) <br />
Then navigate to "Real-Time Data > Data Sources".

<img src="/wiki/assets/media/app_store_connect/asc_01.png" alt="asc_01" style="max-width:300px" loading="lazy" />

2. Select the Alarm Analysis data source for which a Data Retention Policy is required. <br />
Navigate to "Actions > Configure Data Source Settings".

<img src="/wiki/assets/media/alarm_analysis/dataretention01.png" alt="dataretention01" style="max-width:300px" loading="lazy" />

3. Scroll to "Data Retention" settings.

<img src="/wiki/assets/media/alarm_analysis/dataretention02.png" alt="dataretention02" style="max-width:300px" loading="lazy" />

The following settings are available:

<table class="wiki-table">
<tbody>
<tr><th>Setting</th><th>Description</th><th>Example</th></tr>
<tr><td>Delete Expired Indices</td><td>Enable a data retention policy that deletes expired indices. <br /> <br /> Only enable when absolutely sure all other config is correct as this will attempt to permanently delete data. <br /> <br /></td><td>True or False</td></tr>
<tr><td>Index Names</td><td>Indices to be included in deletion checks. <br /> <br />  Wildcards should be employed with care and only used for date suffixes. <br /> <br />  Comma separate multiple names. <br /> <br />  Do not modify when Data Retention is enabled. <br /> <br /></td><td>scadaopc.evt_*</td></tr>
<tr><td>Retention Period</td><td>Specify data retention period in months. <br /> <br /> Do not modify when Data Retention is enabled. <br /> <br /></td><td>6</td></tr>
</tbody>
</table>

<div class="title wiki-divider" aria-hidden="true"></div>

### Schedule {: .title}

The Data Retention Policy (once enabled) is executed daily at 1am.
