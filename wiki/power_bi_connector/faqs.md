---
layout: wiki
title: "Frequently Asked Questions"
permalink: /power_bi_connector/faqs.html
---
### How do I fix the "Delete credentials" error? {: .title}

<strong>Error message:</strong><br />
<em>We're unable to connect. Please delete your credentials and try again later.</em>

<img src="/wiki/assets/media/power_bi_connector/delete-credentials-symptom.png" alt="Delete credentials - symptom" style="max-width:600px" loading="lazy" />

<strong>Solution:</strong><br />
One thing to try would be to remove the permission of the connector and try to log in again.<br />
<br />
To do that you go to <strong>File > Option and Settings > Data source settings</strong>.<br />
<br />
You should then see the following:
<img src="/wiki/assets/media/power_bi_connector/data-source-settings.png" alt="Data source settings" style="max-width:600px" loading="lazy" />

Here you can then select the Industrial App Store and click "<strong>Clear Permissions</strong>".<br />
<br />
This should remove any existing credentials and allow you to log in again.

<div class="title wiki-divider" aria-hidden="true"></div>

### How do I modify my query to use parameters? {: .title}

Adding parameters to your Power BI dashboard can be an extremely useful way to change the data query, and is quick and easy to do.

You can create parameters after adding data from IAS to your Power BI dashboard. To do this, click "Transform Data" which will open the Power Query Editor window. In there, go to the Home tab and select "Manage Parameters".

<img src="/wiki/assets/media/power_bi_connector/power_bi_-_manage_parameters.png" alt="power_bi_-_manage_parameters" style="max-width:400px" loading="lazy" />

Click "New" to start a new parameter and begin filling out the parameters details.

<img src="/wiki/assets/media/power_bi_connector/power_bi_-_editing_parameters.png" alt="power_bi_-_editing_parameters" style="max-width:400px" loading="lazy" />

Once you have made all of the parameters you need, insert them in to the original query like so:

<img src="/wiki/assets/media/power_bi_connector/power_bi_-_modifying_query.png" alt="power_bi_-_modifying_query" style="max-width:800px" loading="lazy" />

Apply and Close the editor to go back to your dashboard. Now the parameters can be edited by going to Transform Data -> Edit Parameters.

<img src="/wiki/assets/media/power_bi_connector/power_bi_-_changing_parameters.png" alt="power_bi_-_changing_parameters" style="max-width:400px" loading="lazy" />

<div class="title wiki-divider" aria-hidden="true"></div>

### How do I fill out the "Get" queries? {: .title}

<strong>Get Processed</strong>

<table class="wiki-table">
<tbody>
<tr><td colspan="2">Name</td><td colspan="2">Required</td><td colspan="2">Type</td><td colspan="2">Description</td><td colspan="2">Default</td><td colspan="2">Example</td></tr>
<tr><td colspan="2">Tag Name(s)</td><td colspan="2">true</td><td colspan="2">string</td><td colspan="2">Comma separated tag names to get data for.</td><td colspan="2">n/a</td><td colspan="2">Sinusoid,LIC040</td></tr>
<tr><td colspan="2">Start Date</td><td colspan="2">true</td><td colspan="2">string</td><td colspan="2">Absolute or relative start time to use when performing the data query.</td><td colspan="2">n/a</td><td colspan="2">*-10d, 2018-01-15</td></tr>
<tr><td colspan="2">End Date</td><td colspan="2">true</td><td colspan="2">string</td><td colspan="2">Absolute or relative end time to use when performing the data query.</td><td colspan="2">n/a</td><td colspan="2">*, *-1h, 2020-09-01T00:00:00</td></tr>
<tr><td colspan="2">Function</td><td colspan="2">true</td><td colspan="2">option</td><td colspan="2">Data function/aggregation to use when performing data query.</td><td colspan="2">n/a</td><td colspan="2">Interp, Plot, Min, Max, Avg, Raw</td></tr>
<tr><td colspan="2">Interval</td><td colspan="2">false</td><td colspan="2">string</td><td colspan="2">The sample interval.</td><td colspan="2">n/a</td><td colspan="2">20s, 3h, 1d</td></tr>
<tr><td colspan="2">Display</td><td colspan="2">false</td><td colspan="2">option</td><td colspan="2">Indicate whether to display numerical, string or both tag values. Some tags (digital) might indicate a status which has a more meaningful text value, e.g.OFF, representation than a numerical value, e.g. 0.</td><td colspan="2">Numeric</td><td colspan="2"></td></tr>
</tbody>
</table>

<strong>Get Plot</strong>

<table class="wiki-table">
<tbody>
<tr><td colspan="2">Name</td><td colspan="2">Required</td><td colspan="2">Type</td><td colspan="2">Description</td><td colspan="2">Default</td><td colspan="2">Example</td></tr>
<tr><td colspan="2">Tag Name(s)</td><td colspan="2">true</td><td colspan="2">string</td><td colspan="2">Comma separated tag names to get data for.</td><td colspan="2">n/a</td><td colspan="2">Sinusoid,LIC040</td></tr>
<tr><td colspan="2">Start Date</td><td colspan="2">true</td><td colspan="2">string</td><td colspan="2">Absolute or relative start time to use when performing the data query.</td><td colspan="2">n/a</td><td colspan="2">*-10d, 2018-01-15</td></tr>
<tr><td colspan="2">End Date</td><td colspan="2">true</td><td colspan="2">string</td><td colspan="2">Absolute or relative end time to use when performing the data query.</td><td colspan="2">n/a</td><td colspan="2">*, *-1h, 2020-09-01T00:00:00</td></tr>
<tr><td colspan="2">Interval</td><td colspan="2">false</td><td colspan="2">string</td><td colspan="2">The maximum number of points to return per tag.</td><td colspan="2">n/a</td><td colspan="2">20s, 3h, 1d</td></tr>
<tr><td colspan="2">Display</td><td colspan="2">false</td><td colspan="2">option</td><td colspan="2">Indicate whether to display numerical, string or both tag values. Some tags (digital) might indicate a status which has a more meaningful text value, e.g.OFF, representation than a numerical value, e.g. 0.</td><td colspan="2">Numeric</td><td colspan="2"></td></tr>
</tbody>
</table>

<strong>Get Raw</strong>

<table class="wiki-table">
<tbody>
<tr><td colspan="2">Name</td><td colspan="2">Required</td><td colspan="2">Type</td><td colspan="2">Description</td><td colspan="2">Default</td><td colspan="2">Example</td></tr>
<tr><td colspan="2">Tag Name(s)</td><td colspan="2">true</td><td colspan="2">string</td><td colspan="2">Comma separated tag names to get data for.</td><td colspan="2">n/a</td><td colspan="2">Sinusoid,LIC040</td></tr>
<tr><td colspan="2">Start Date</td><td colspan="2">true</td><td colspan="2">string</td><td colspan="2">Absolute or relative start time to use when performing the data query.</td><td colspan="2">n/a</td><td colspan="2">*-10d, 2018-01-15</td></tr>
<tr><td colspan="2">End Date</td><td colspan="2">true</td><td colspan="2">string</td><td colspan="2">Absolute or relative end time to use when performing the data query.</td><td colspan="2">n/a</td><td colspan="2">*, *-1h, 2020-09-01T00:00:00</td></tr>
<tr><td colspan="2">Interval</td><td colspan="2">false</td><td colspan="2">string</td><td colspan="2">The maximum number of points to return per tag.</td><td colspan="2">n/a</td><td colspan="2">20s, 3h, 1d</td></tr>
<tr><td colspan="2">Display</td><td colspan="2">false</td><td colspan="2">option</td><td colspan="2">Indicate whether to display numerical, string or both tag values. Some tags (digital) might indicate a status which has a more meaningful text value, e.g.OFF, representation than a numerical value, e.g. 0.</td><td colspan="2">Numeric</td><td colspan="2"></td></tr>
</tbody>
</table>

<strong>Tag Search</strong>

<table class="wiki-table">
<tbody>
<tr><td colspan="2">Tag Name</td><td colspan="2">Required</td><td colspan="2">Type</td><td colspan="2">Description</td><td colspan="2">Default</td><td colspan="2">Example</td></tr>
<tr><td colspan="2">Tag Name(s)</td><td colspan="2">true</td><td colspan="2">string</td><td colspan="2">The name filter to use.</td><td colspan="2">*</td><td colspan="2">LIC*</td></tr>
<tr><td colspan="2">Page size</td><td colspan="2">false</td><td colspan="2">number</td><td colspan="2">Page size for the results.</td><td colspan="2">20</td><td colspan="2">5</td></tr>
<tr><td colspan="2">Page number</td><td colspan="2">false</td><td colspan="2">number</td><td colspan="2">The page number of the matching results that should be returned.</td><td colspan="2">0</td><td colspan="2">2</td></tr>
</tbody>
</table>

<strong>Get Snapshot</strong>

<table class="wiki-table">
<tbody>
<tr><td colspan="2">Name</td><td colspan="2">Required</td><td colspan="2">Type</td><td colspan="2">Description</td><td colspan="2">Default</td><td colspan="2">Example</td></tr>
<tr><td colspan="2">Tag Name(s)</td><td colspan="2">true</td><td colspan="2">string</td><td colspan="2">Comma separated tag names to get data for.</td><td colspan="2">n/a</td><td colspan="2">Sinusoid,LIC040</td></tr>
<tr><td colspan="2">Display</td><td colspan="2">false</td><td colspan="2">option</td><td colspan="2">Indicate whether to display numerical, string or both tag values. Some tags (digital) might indicate a status which has a more meaningful text value, e.g.OFF, representation than a numerical value, e.g. 0.</td><td colspan="2">Numeric</td><td colspan="2"></td></tr>
</tbody>
</table>

<strong>Get Data</strong>

<strong>Please note - "Get Data" is part of our legacy API. We highly recommend using the "Get Processed" and "Get Plot" functions instead</strong>

<table class="wiki-table">
<tbody>
<tr><td colspan="2">Name</td><td colspan="2">Required</td><td colspan="2">Type</td><td colspan="2">Description</td><td colspan="2">Default</td><td colspan="2">Example</td></tr>
<tr><td colspan="2">Tag Name(s)</td><td colspan="2">true</td><td colspan="2">string</td><td colspan="2">Comma separated tag names to get data for.</td><td colspan="2">n/a</td><td colspan="2">Sinusoid,LIC040</td></tr>
<tr><td colspan="2">Start Date</td><td colspan="2">true</td><td colspan="2">string</td><td colspan="2">Absolute or relative start time to use when performing the data query.</td><td colspan="2">n/a</td><td colspan="2">*-10d, 2018-01-15</td></tr>
<tr><td colspan="2">End Date</td><td colspan="2">true</td><td colspan="2">string</td><td colspan="2">Absolute or relative end time to use when performing the data query.</td><td colspan="2">n/a</td><td colspan="2">*, *-1h, 2020-09-01T00:00:00</td></tr>
<tr><td colspan="2">Function</td><td colspan="2">true</td><td colspan="2">option</td><td colspan="2">Data function/aggregation to use when performing data query.</td><td colspan="2">n/a</td><td colspan="2">Interp, Plot, Min, Max, Avg, Raw</td></tr>
<tr><td colspan="2">Interval</td><td colspan="2">false</td><td colspan="2">string</td><td colspan="2">The sample interval.</td><td colspan="2">n/a</td><td colspan="2">20s, 3h, 1d</td></tr>
<tr><td colspan="2">Number of Points</td><td colspan="2">false</td><td colspan="2">number</td><td colspan="2">The maximum number of points to return per tag. Takes precedence over the Interval parameter if both specified.</td><td colspan="2">n/a</td><td colspan="2">10, 150</td></tr>
<tr><td colspan="2">Display</td><td colspan="2">false</td><td colspan="2">option</td><td colspan="2">Indicate whether to display numerical, string or both tag values. Some tags (digital) might indicate a status which has a more meaningful text value, e.g. OFF, representation than a numerical value, e.g. 0.</td><td colspan="2">Numeric</td><td colspan="2"></td></tr>
</tbody>
</table>

<div class="title wiki-divider" aria-hidden="true"></div>

### What is the difference between using "Get Raw" compared to "Get Data" - Function = "Raw"? {: .title}
There is no difference between these two approaches in terms of the data it returns. "Get Raw" is part of our newer API where we have separated out the types of queries as they each have different inputs. The "Get Data" is our legacy API which contains them all in a single endpoint.

<div class="title wiki-divider" aria-hidden="true"></div>
### How do time zones work with the Industrial Connector? {: .title}
The Industrial Connector requires that the user specify UTC timestamps when absolute query timestamps (such as a start date of 2023-04-12T00:00, for example) are used.

Time zones can be ignored when using relative times (e.g. "*-20m", "*-7d")

<div class="title wiki-divider" aria-hidden="true"></div>
### Contact support {: .title}

If any of the aforementioned issues persist, feel free to [get in touch with us](https://www.intelligentplant.com/contact-us).
