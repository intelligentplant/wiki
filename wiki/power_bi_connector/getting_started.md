---
layout: wiki
title: "Getting started"
permalink: /power_bi_connector/getting_started.html
---
This is a quick guide on how to connect and get easy access to your data within Power BI dashboards, reports and datasets.

### What is the Industrial Connector for Power BI? {: .title}

The Industrial Connector solves a common industry problem - getting operational data into Power BI.

Historian data does not come in the tabular format that Power BI desires. Our connector completes this essential task in a way that requires no complicated queries, no secondary data storage location, and no SQL - We connect straight from your historian with our data connectivity software, [App Store Connect](/wiki/app_store_connect/app_store_connect.html).

Users commonly use our Industrial Connector to import process data. However, you can also import Alarm & Event data, along with.[calculated alarm KPIs](https://github.com/intelligentplant/IAS-Power-BI-connector#using-alarm--event-meta-tags-alarm_clock)

<div class="title wiki-divider" aria-hidden="true"></div>

### Getting the Industrial Connector {: .title}

Intelligent Plant's Industrial Connector for Power BI is Microsoft Certified and distributed with Power BI Desktop as of the [(May 2019)](https://powerbi.microsoft.com/en-us/blog/tag/intelligent-plants-industrial-app-store/) update.

<img src="/wiki/assets/media/power_bi_connector/power-bi-solution-overview-approach.png" alt="Solution Overview/Approach" style="max-width:750px" loading="lazy" />

<div class="title wiki-divider" aria-hidden="true"></div>

### How to Access the Industrial Connector and Connect to your data {: .title}

Intelligent Plant's Industrial Connector is accessible via Power BI Desktop.

If your organisation already has a license for the Industrial Connector, follow the steps below on how to access it, or watch our [video walkthrough](https://www.youtube.com/watch?v=b0c59MeByRU)

Before going through the steps, please make sure you have Power BI Desktop installed. You can download it via [Microsoft's official website](https://powerbi.microsoft.com/en-gb/downloads/)

1. Open up Power BI Desktop.
1. On the Home tab, select "Get Data".
1. Enter in "Industrial App Store" and click "Connect".
<img src="/wiki/assets/media/power_bi_connector/ias-connector-01.png" alt="Connect to your data" style="max-width:400px" loading="lazy" />
1. Click "Sign In". The App Authorization page will pop up (if you have used and authorized the connector before, you may not see this window. Skip to step 7.)
1. Select which data sources you wish to use on Power BI Desktop by clicking on them. When selected, they will turn green. Note - If you do not see the data source you need, please contact your Administrator.
1. Scroll to the bottom of the App Authorization page and click "I agree - sign me into Power BI Connector".
1. Click "Connect" and the Navigator window will open within Power BI.
1. You can begin entering in your query. Details on how to create a query can be found further down on this page. Alternatively, our video walkthrough provides explanation.

<img src="/wiki/assets/media/power_bi_connector/navigator-plot.png" alt="Connect to your data" style="max-width:600px" loading="lazy" />

<div class="title wiki-divider" aria-hidden="true"></div>

### Video Walkthrough {: .title}

For more information, you can check our [Industrial Connector YouTube walkthrough](https://youtu.be/b0c59MeByRU?si=ikmEQ7iJ5Q1s5d1s).

Feel free to [get in touch with us](https://www.intelligentplant.com/contact.html) if you need assistance setting up the connector or if you have any questions.

<div class="title wiki-divider" aria-hidden="true"></div>

### Licensing {: .title}

Customers need to purchase a subscription in order to retrieve data using the Industrial Connector. Please[contact Intelligent Plant](https://www.intelligentplant.com/contactus) or ping us an email at info@intelligentplant.com if you have questions.

- An unlicensed data response in Industrial Connector will look like this:
<img src="/wiki/assets/media/power_bi_connector/unlicensed_request_-_full.png" alt="Unlicensed request - full" style="max-width:600px" loading="lazy" />

- Licenses can cover a subset of available data. For example, we can license only tags that begin with FL*. In this scenario, a request multiple tags that are and aren't covered under this rule will look like so:
<img src="/wiki/assets/media/power_bi_connector/unlicensed_request_-_partial.png" alt="Unlicensed request - partial" style="max-width:600px" loading="lazy" />

- And of course, a full license will just display the data as is:
<img src="/wiki/assets/media/power_bi_connector/licensed_request_-_full.png" alt="Licensed request - full" style="max-width:600px" loading="lazy" />

<div class="title wiki-divider" aria-hidden="true"></div>

### How do I fill out the "Get" queries? {: .title}

<strong>Get Processed</strong>

<table class="wiki-table">
<tbody>
<tr><th>Name</th><th>Required</th><th>Type</th><th>Description</th><th>Default</th><th>Example</th></tr>
<tr><td>Tags</td><td>true</td><td>string</td><td>Comma separated tag names to get data for.</td><td>n/a</td><td>Sinusoid,LIC040</td></tr>
<tr><td>Start Date</td><td>true</td><td>string</td><td>Absolute or relative start time to use when performing the data query.</td><td>n/a</td><td>*-10d, 2018-01-15</td></tr>
<tr><td>End Date</td><td>true</td><td>string</td><td>Absolute or relative end time to use when performing the data query.</td><td>n/a</td><td>*-1h, 2020-09-01T00:00:00</td></tr>
<tr><td>Data Function</td><td>true</td><td>option</td><td>Data function/aggregation to use when performing data query.</td><td>n/a</td><td>Interp, Min, Max, Avg</td></tr>
<tr><td>Sample Interval</td><td>true</td><td>string</td><td>The sample interval.</td><td>n/a</td><td>20s, 3h, 1d</td></tr>
<tr><td>Tag Value Field</td><td>false</td><td>option</td><td>Indicate whether to display numerical, string or both tag values. Some tags (digital) might indicate a status which has a more meaningful text value, e.g.OFF, representation than a numerical value, e.g. 0.</td><td>Numeric</td><td></td></tr>
</tbody>
</table>

<strong>Get Plot</strong>

<table class="wiki-table">
<tbody>
<tr><th>Name</th><th>Required</th><th>Type</th><th>Description</th><th>Default</th><th>Example</th></tr>
<tr><td>Tags</td><td>true</td><td>string</td><td>Comma separated tag names to get data for.</td><td>n/a</td><td>Sinusoid,LIC040</td></tr>
<tr><td>Start Date</td><td>true</td><td>string</td><td>Absolute or relative start time to use when performing the data query.</td><td>n/a</td><td>*-10d, 2018-01-15</td></tr>
<tr><td>End Date</td><td>true</td><td>string</td><td>Absolute or relative end time to use when performing the data query.</td><td>n/a</td><td>*-1h, 2020-09-01T00:00:00</td></tr>
<tr><td>Plot Width (Pixels)</td><td>true</td><td>string</td><td>Plot functions on size of screen area, only importing the necessary data to accurately visualise the data trend over time. Enter in your approximate screen width</td><td>n/a</td><td>1920, 720, 100</td></tr>
<tr><td>Tag Value Field</td><td>false</td><td>option</td><td>Indicate whether to display numerical, string or both tag values. Some tags (digital) might indicate a status which has a more meaningful text value, e.g.OFF, representation than a numerical value, e.g. 0.</td><td>Numeric</td><td></td></tr>
</tbody>
</table>

<strong>Get Raw</strong>

<table class="wiki-table">
<tbody>
<tr><th>Name</th><th>Required</th><th>Type</th><th>Description</th><th>Default</th><th>Example</th></tr>
<tr><td>Tags</td><td>true</td><td>string</td><td>Comma separated tag names to get data for.</td><td>n/a</td><td>Sinusoid,LIC040</td></tr>
<tr><td>Start Date</td><td>true</td><td>string</td><td>Absolute or relative start time to use when performing the data query.</td><td>n/a</td><td>*-10d, 2018-01-15</td></tr>
<tr><td>End Date</td><td>true</td><td>string</td><td>Absolute or relative end time to use when performing the data query.</td><td>n/a</td><td>*-1h, 2020-09-01T00:00:00</td></tr>
<tr><td>Maximum Sample Count</td><td>true</td><td>string</td><td>The maximum number of points to return per tag.</td><td>n/a</td><td>100, 500, 1000</td></tr>
<tr><td>Tag Value Field</td><td>false</td><td>option</td><td>Indicate whether to display numerical, string or both tag values. Some tags (digital) might indicate a status which has a more meaningful text value, e.g.OFF, representation than a numerical value, e.g. 0.</td><td>Numeric</td><td></td></tr>
</tbody>
</table>

<strong>Tag Search</strong>

<table class="wiki-table">
<tbody>
<tr><th>Tag Name</th><th>Required</th><th>Type</th><th>Description</th><th>Default</th><th>Example</th></tr>
<tr><td>Tag Name</td><td>true</td><td>string</td><td>The name filter to use.</td><td>*</td><td>LIC*</td></tr>
<tr><td>Page size</td><td>false</td><td>number</td><td>Page size for the results.</td><td>20</td><td>5</td></tr>
<tr><td>Page number</td><td>false</td><td>number</td><td>The page number of the matching results that should be returned.</td><td>0</td><td>2</td></tr>
</tbody>
</table>

<strong>Get Snapshot</strong>

<table class="wiki-table">
<tbody>
<tr><th>Name</th><th>Required</th><th>Type</th><th>Description</th><th>Default</th><th>Example</th></tr>
<tr><td>Tags</td><td>true</td><td>string</td><td>Comma separated tag names to get data for.</td><td>n/a</td><td>Sinusoid,LIC040</td></tr>
<tr><td>Tag Value Field</td><td>false</td><td>option</td><td>Indicate whether to display numerical, string or both tag values. Some tags (digital) might indicate a status which has a more meaningful text value, e.g.OFF, representation than a numerical value, e.g. 0.</td><td>Numeric</td><td></td></tr>
</tbody>
</table>

<strong>Get Data</strong>

<strong>Please note - "Get Data" is part of our legacy API. We highly recommend using the "Get Processed" and "Get Plot" functions instead</strong>

<table class="wiki-table">
<tbody>
<tr><th>Name</th><th>Required</th><th>Type</th><th>Description</th><th>Default</th><th>Example</th></tr>
<tr><td>Tags</td><td>true</td><td>string</td><td>Comma separated tag names to get data for.</td><td>n/a</td><td>Sinusoid,LIC040</td></tr>
<tr><td>Start Date</td><td>true</td><td>string</td><td>Absolute or relative start time to use when performing the data query.</td><td>n/a</td><td>*-10d, 2018-01-15</td></tr>
<tr><td>End Date</td><td>true</td><td>string</td><td>Absolute or relative end time to use when performing the data query.</td><td>n/a</td><td>*-1h, 2020-09-01T00:00:00</td></tr>
<tr><td>Data Function</td><td>true</td><td>option</td><td>Data function/aggregation to use when performing data query.</td><td>n/a</td><td>Interp, Min, Max, Avg</td></tr>
<tr><td>Sample Interval</td><td>true</td><td>string</td><td>The sample interval.</td><td>n/a</td><td>20s, 3h, 1d</td></tr>
<tr><td>Sample Count</td><td>false</td><td>number</td><td>The maximum number of points to return per tag. Takes precedence over the Interval parameter if both specified.</td><td>n/a</td><td>10, 150</td></tr>
<tr><td>Tag Value Field</td><td>false</td><td>option</td><td>Indicate whether to display numerical, string or both tag values. Some tags (digital) might indicate a status which has a more meaningful text value, e.g. OFF, representation than a numerical value, e.g. 0.</td><td>Numeric</td><td></td></tr>
</tbody>
</table>

<div class="title wiki-divider" aria-hidden="true"></div>

### Setting background data refresh {: .title}

- Using the web app.
- Using personal data gateway - instructions available [here](/wiki/power_bi_connector/datarefreshgateway.html).
