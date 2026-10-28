---
layout: wiki
title: "Alarm Analysis Meta Tags"
permalink: /alarm_analysis/meta_tags.html
---
The KPIs and metrics that make up the Alarm Analysis reports can be queried via <em>meta tags</em>, meaning Alarm Analysis data can be queried and visualised just like any other process data source. A good example of this is Power BI, where you may wish to create a bespoke Alarm Analysis report combined with other data sources.

For a full list of meta tags, refer to the [Industrial Connector Help Page](https://github.com/intelligentplant/IAS-Power-BI-connector)

<strong>Not all Meta Tags are Discoverable</strong>

While Power BI allows free text entry when configuring data queries, others apps such as Gestalt PnID and Trend restrict users to a "search and select" dialog. Generally, this makes UI interaction simpler, however "meta tags" are not constructed like regular tags and may not be available for search. Some meta-tags are dynamic and hold parameters which are interpreted by the Alarm Analysis data source.

For example,

  Oil Co/Osprey/ALM BA report/3.priority

This above meta tag requests the priority of the 3rd most frequently occurring Alarm on the Oil Co Osprey asset. Clearly this is not a value you would expect to interrogate like a regular process data tag, however there may be cases where it is required.

If explicit tag entry is not permitted in an app, and the meta-tag is not available in search, it can be manually added to the Alarm Analysis Tag Index. For more information, refer to: [Alarm Analysis](/alarm_analysis/alarm_analysis.html)
