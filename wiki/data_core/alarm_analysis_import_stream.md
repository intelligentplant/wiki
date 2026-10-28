---
layout: wiki
title: "Alarm Analysis Import Stream"
permalink: /data_core/alarm_analysis_import_stream.html
---
Alarm Analysis requires an import stream of Alarm & Event data. The process of importing data is a two-stage process:

  <strong>*Defining the Import Stream</strong>:<br /> Configuring a flow of data from an Event Source (e.g. an Alarm Collector database) to Alarm Analysis. This is defined in Data Core configuration.

  <strong>*Configuring Transform Rules</strong>:<br /> The source data will require parsing, interpretation, and (in some cases) cleaning rules applied.  This is a specialized task requiring domain expertise. Alarm Analysis includes a configuration tool to assist the process.

The instructions below cover the first (more general) stage and describe a use-case where the data is imported from a Process Vue Alarm & Event database on SQL Server.

### 1. Configure Event Source {: .title}

Process Vue persists Alarm & Event data to SQL Server. We can set up SQL Event Source to monitor the Process Vue data base and collect any new records.

- [https://appstore.intelligentplant.com/wiki/doku.php?id=data_core:sqleventsource|SQL Event Source]

### 2. Configure Alarm Analysis Event Sink {: .title}

work in progress...
