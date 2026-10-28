---
layout: wiki
title: "How to Import Alarm & Event Data"
permalink: /alarm_analysis/how_to_configure_an_alarm_event_import_stream.html
---
Importing Alarm & Event Data requires advanced data core configuration. Contact Intelligent Plant if assistance is required.

### Stage 1: Collect Data {: .title}

Event Source <em>to</em> Big Data Event Sink.

<strong>If your data is already in the Big Data repository, move to Stage 2.</strong>

1. Log onto application server hosting App Store Connect

2. Open App Store Connect: http://localhost:2006/service

3. Select "Configure Data Core"

4. Navigate to: Alarm & Event > Event Sources

5. Create and configure a Data Core Event Source (e.g. SQL Event Source)

<em>For full list of supported event sources, see [Data Core Data Sources](/data_core/data_sources.html)</em>

6. Navigate to: Alarm & Event > Event Sinks

7. Create and configure a Big Data Event Sink

- [Big Data Event Sink](/data_core/bigdataeventsourcesink.html)

8. Add subscription for above Event Sink for Event Source

<strong>Troubleshooting</strong>

Big Data event indices should now be generated on the Big Data service. To confirm, we need to look for index files or use a tool such as Sense plug-in for Chrome.

If no indices exist, refer to App Store Connect log and review for errors.

- C:\ProgramData\Intelligent Plant\Data Core Application Host\Service\Applications\App Store Connect\Logs\App Store ConnectRuntime.log

### Stage 2: Prepare Alarm Analysis Import Stream {: .title}

Big Data Event Source <em>to</em> Alarm Analysis Event Sink

Still on App Store Connect local administration UI (see steps 1-3 above)

1. Navigate to: Alarm & Event > Event Sources

2. Create and configure a Big Data Event Source

- [[data_core:bigdataeventsourcesink|Big Data Event Sink]

Event source should be enabled but paused. This will let us peek at the data and configure transformation rules before activating import.

3. Navigate to: Alarm & Event > Event Sinks

7. Create and configure an Alarm Analysis Event Sink

8. Add subscription for above Event Sink for Event Source

No data is imported yet. But it is ready for review in the Alarm Analysis Import Manager.

### Stage 3: Configure Alarm Analysis Import Stream {: .title}

Configure and test transformation rules using Alarm Analysis Import Manager.

1. Go to App Store and open Alarm Analysis

2. Authorize application to access the Event Source and Event Sink defined in stage 2.

3. Open Alarm Analysis Import Manager

4. Select Import Stream for Event Source and Sink defined in Stage 2.

<strong>Troubleshooting</strong>

Import stream not visible? Make sure application is authorized to access both event source and sink. (This may require Intelligent Plant intervention as no UI exists for explicit Event Sink authorization).

### Stage 4: Activate Alarm Analysis Import Stream {: .title}

Activate import flow (unpause Big Data Event Source)

1. Log onto application server hosting App Store Connect

2. Open App Store Connect: http://localhost:2006/service/AppStore

3. Select “Configure Data Core”

4. Navigate to: Alarm & Event > Event Sources

5. Select Big Data Event Source defined in Stage 2.

6. Change "Paused" setting to false.

Data should now be actively importing to Alarm Analysis.

### Stage 5: Alarm Analysis Data Source {: .title}

To view and share Alarm Analysis data, define an Alarm Analysis Data Source

1. Log onto application server hosting App Store Connect

2. Open App Store Connect: http://localhost:2006/service/AppStore

3. Select “Configure Data Core”

4. Navigate to: Real Time Data > Data Sources

5. Create and configure an "Intelligent Plant Alarm Analysis" Data Source
