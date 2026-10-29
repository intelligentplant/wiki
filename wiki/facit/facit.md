---
layout: wiki
title: "Facit"
permalink: /facit/facit.html
---
Facit is a cloud-based app available on the Industrial App Store that provides real-time monitoring and alerting options on Industial Processes.

It is part of the <em>Alarm Analysis</em> suite of tools developed by Intelligent Plant that brings <em>Alarm & Event</em> data collection into the heart of Industrial Process analytics. It can be integrated with an existing Alarm System to provide an alternative Alarm Management dashboard with fully audited Alarm Investigation workflow, or configure <em>Facit Monitors</em> to raise independent alerts.

<div class="wiki-centre">
<iframe width="560" height="315" src="https://www.youtube.com/embed/GHZG2R6SzYw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

To play around with Facit, go to the [Industrial App Store](https://appstore.intelligentplant.com) and select the Facit app card. A default demo data source is available.

For more information, contact our sales team at info@intelligentplant.com

### Getting Started {: .title}

Facit uses [App Store Connect](/wiki/app_store_connect/app_store_connect.html) - a query-routing and data-access software service that connects on-site data sources to off-the-shelf apps available on the <em>Industrial App Store</em>. Many companies already have App Store Connections - to check, contact your IT team or [Intelligent Plant](https://www.intelligentplant.com/contact-us). (Note we will only respond to organization queries from verified organization email domains).

Assuming that you have an App Store Connection available, you will need to contact your App Store Connect administrator to [Prepare Facit Monitoring](/wiki/facit/preparefacitmonitoring.html).

### Facit Data Sources {: .title}

A typical Facit deployment will consist of four data sources:

<strong>Target Data Source</strong>
- The historian cotaining process data to be monitored. (e.g. PI, Wonderware, IP21, etc...)

<strong>Facit</strong>
- Alarm Analysis data source where monitoring calculations are executed and results stored.
- This is also where investigation audit is recorded.

<strong>Facit Limit Historian</strong>
- IP Historian instance for storage of limits (e.g. a Normal Operating Limit for a process tag).
- This historian has a "one-big-index" configuration, best suited for slow-moving or static data.

<strong>Facit Archive Historian</strong>
- IP Historian instance whare results of monitoring calculations are stored.
- This historian has a "monthly indexing" configuration, best suited for data the updates regularly.

### Facit Monitors {: .title}

The Facit application includes an administration UI for the configuration of monitors (coming soon).

### Data Core Script Tags {: .title}

For low level administration of Facit Monitors, App Store Connect administrators can configure [Script Tags](/wiki/data_core/script_tags.html) on the Facit data source via the App Store Connect UI.

<span style="background-color:#eee; padding:10px; float: right;">

<b>Facit Monitors</b> are actually Data Core Script Tags stored to the Facit data source on the App Store Connection. This means monitoring is executed on or near the target data source which facilitates high performance, fine-grained monitoring.
</span>
&nbsp;<br/>

### Notifications {: .title}

For advance notification services, Facit can be used in conjunction with Microsoft Power Automate to trigger workflows, emails, text messages, status updates, reports, etc...

### Quick Links {: .title}

- <strong>[Prepare Facit Monitoring](/wiki/facit/preparefacitmonitoring.html)</strong> <br /> Instructions for App Store Connect administrators on preparing App Store Connect for Facit Monitoring.

- <strong>[Data Core Script Tags](/wiki/data_core/script_tags.html)</strong> <br /> Information related to Data Core Script Tags, the building blocks of Facit Monitors.
