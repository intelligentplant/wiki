---
layout: wiki
title: "Updating Power BI Connection Configuration"
permalink: /power_bi_connector/updating_connection_configuration.html
---
The Intelligent Plant - Industrial Connector for Power BI allows report developers to connect to on-prem data source via the Industrial App Store. This is done via <strong>App Store Connect</strong> - a software service that runs within an organization business network to connect internal data sources to online apps such as Power BI.

A single App Store Connect may host multiple data sources. The example below shows the data sources available on the Intelligent Plant "Demo Data Sources - IPAppStoreNode" App Store Connection.

<img src="/wiki/assets/media/power_bi_connector/powerbi-queryconfig-01.png" alt="powerbi-queryconfig-01" style="max-width:800px" loading="lazy" />

Data points belonging to a data source can then be queried by tag names.

<img src="/wiki/assets/media/power_bi_connector/powerbi-queryconfig-03.png" alt="powerbi-queryconfig-03" style="max-width:400px" loading="lazy" />

A change in the name of an App Store Connection, a data source and/or a tag, will require updates to be made to the Power BI report.

### Where to make changes {: .title}

1. Open the PowerBI Report

2. Select Transform Data > Transform Data

<img src="/wiki/assets/media/power_bi_connector/powerbi-queryconfig-04.png" alt="powerbi-queryconfig-04" style="max-width:600px" loading="lazy" />

3. For each query, select Advanced Editor

<img src="/wiki/assets/media/power_bi_connector/powerbi-queryconfig-05.png" alt="powerbi-queryconfig-05" style="max-width:300px" loading="lazy" />

4. Update the query as required...

4.1. Connection Name

Older reports may use the older query syntax which employ the "Name" parameter and reference the connection's display-name. This was later changed to use the "UrlName" parameter with the connection-id.

If your query uses the latter, no action is required with regard to modifying the connection name.

If the query uses "UrlName" parameter with a connectionId (see pic 4.1a) then no action is required. However, if the query uses the older "Name" parameter with the connections display name (see pic 4.1b), it will require updating.

Contact Intelligent Plant with an example query and they will return a modified version with the appropriate parameters and connection-Id.

pic 4.1a: Current syntax - <em>no action required.</em>
<img src="/wiki/assets/media/power_bi_connector/powerbi-queryconfig-09.png" alt="powerbi-queryconfig-09" style="max-width:800px" loading="lazy" />

pic 4.1b: Legacy syntax - <em>update required.</em>
<img src="/wiki/assets/media/power_bi_connector/powerbi-queryconfig-06.png" alt="powerbi-queryconfig-06" style="max-width:800px" loading="lazy" />

4.2. Data Source Name

The data source name appears alongside the connection name.

If your query uses the "UrlParameter" syntax (see above), then no action is required - the reference is bound to the data source Id. However, if it using the legacy syntax the binding is to the friendly name.

<img src="/wiki/assets/media/power_bi_connector/powerbi-queryconfig-07.png" alt="powerbi-queryconfig-07" style="max-width:800px" loading="lazy" />

4.3. Tag Names

The query will contain 1 or more tags.

<img src="/wiki/assets/media/power_bi_connector/powerbi-queryconfig-08.png" alt="powerbi-queryconfig-08" style="max-width:800px" loading="lazy" />

5. Save and refresh the report.
