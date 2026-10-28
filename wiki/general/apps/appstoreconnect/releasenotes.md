---
layout: wiki
title: "App Store Connect Release Notes"
permalink: /general/apps/appstoreconnect/releasenotes.html
---
This page describes the release notes for [App Store Connect](https://appstore.intelligentplant.com/Home/AppProfile?appId=a73c453df5f447a6aa8a08d2019037a5). Your App Store Connect will automatically download the update. You can configure the update schedule for your App Store Connect by following the instructions available [here](https://appstore.intelligentplant.com/wiki/doku.php?id=data_core:app_store_connect_updates).

### App Store Connect Update Manager {: .title}

We have released a new command-line tool to simplify App Store Connect administrative operations such as enabling and disabling automatic updates, setting the update schedule, switching between release channels and so on.

You can download the tool from https://downloads.intelligentplant.com/data-core-update-manager

### 2026-10 {: .title}

Release date: 2026-10-30 <br />
Version: <em>Details pending</em>

### 2026-08 {: .title}
Release date: 2026-08-28 <br />
Version: 4.1.202

This release brings the following changes:<br />

General:<br />
- <code>[Enhancement]</code>: Adds the ability to import script tags in bulk using JSON files in the UI.

AA Driver:<br />

- <code>[Enhancement]</code>: Introduction of Event Tracking for Active(ACT) and Clear(CLR) events. This includes On-Duration, Off-Duration, and On-to-On-Duration.
- <code>[Enhancement]</code>: Introduction of "Act/State" meta tag, for trending transition of ACT/CLR events.
- <code>[Enhancement]</code>: Introduction of "Event State" field, to facilitate grouping of related events.

CSV Driver:
- <code>[Bug Fix]</code>: Fixes a bug where a historical query that fell within the CSVs original time span would start at the wrong point, causing an empty or incomplete result set to be returned.

TCP Event Sink:
- <code>[Bug Fix]</code>: Fixes a credential check in the TCP Event Sink.

### 2026-06 {: .title}
Release date: 2026-06-26 <br />
Version: 4.1.193 <br />

This release brings the following changes:<br />

General:<br />
- <code>[Enhancement]</code>: Reliability improvement to token management which will remove the need for administrator intervention to refresh login. (NB. On most deployment, this is very unlikely to occur).

AVEVA PI Driver
- <code>[Enhancement]</code>: Improved thread management to reduce risk of thread exhaustion when issuing queries to PI Historian

Alarm Analysis Driver:
- <code>[Enhancement]</code>: Introduced more support for selective exposure of Alarm & Event data from multiple assets.
### 2026-05 {: .title}
Release date: 2026-05-29 <br />
Version: 4.1.190

This release brings the following changes:<br />

General:<br />
- <code>[Enhancement]</code> Updates adapter toolkit libraries. <br />
- <code>[Enhancement]</code> Adds sample time interval option to trends in the App Store Connect UI. <br />
- <code>[Enhancement]</code> Display errors to the user when creating a CSV data stream (i.e., non-existent file). <br />
- <code>[Enhancement]</code> Adds Enable/Disable data source button to quick actions in the App Store Connect UI. <br />
- <code>[Enhancement]</code> Adds support for Adapter custom functions. <br />
- <code>[Security]</code> Mitigations for security issues in some 3rd party libraries. <br />
- <code>[Bug Fix]</code> Fixes an issue where the UI would crash when using interface tag mapping with a digital IP Historian tag. <br />
- <code>[Bug Fix]</code> Fixes an issue where data stream rules would sometimes miss matching tags on start-up. <br />
- <code>[Bug Fix]</code> Fixes an issue where the Pattern data stream rule would add wildcards around filters when created in the UI but not when the filters were refreshed - i.e., when a tag is created or deleted. <br />
- <code>[Bug Fix]</code> Fixes an issue where the Pattern data stream rule would use the name filter on the description field when a description filter was defined. <br />

Alarm Analysis Driver: <br />
- <code>[Enhancement]</code> Improvements to Stale Alarm calculations. <br />
- <code>[Enhancement]</code> Moves case-insensitive search precautions to the SOE custom function. <br />

Alarm Analysis Event Sink: <br />
- <code>[Bug Fix]</code> Fixes an issue where the event sink would ignore the NumberOfShards setting when configuring elastic search. <br />

IPHist v3: <br />
- <code>[Enhancement]</code> Optimisations to plot and interp queries. <br />
- <code>[Bug Fix]</code> Fixes an issue where IPHist v3 would always archive incoming samples if exception deviation was set to zero. <br />

IPHist v2: <br />
- <code>[Bug Fix]</code> Fixes an issue where IPHist v2 would always archive incoming samples if exception deviation was set to zero. <br />

Modbus Driver: <br />
- <code>[Bug Fix]</code> Fixes TCP connection disposal. <br />

CommandPipeCSV: <br />
- <code>[Bug Fix]</code> Fixes bug where child processes would start when the driver was disabled. <br />

Expression Evaluator: <br />
- <code>[Enhancement]</code> Updates packages. <br />
- <code>[Enhancement]</code> Adds the 'concat' function for string concatenation. <br />

Aperture Driver (Preview): <br />
- <code>[Enhancement]</code> New preview driver for storing and querying Aperture data. <br />

EtherCAT Driver (Preview): <br />
- <code>[Enhancement]</code> New preview driver for EtherCAT. <br />

DNP3 Driver (Preview): <br />
- <code>[Enhancement]</code> New preview driver for DNP3. <br />

Home assistant Driver (Preview): <br />
- <code>[Enhancement]</code> New preview driver for Home assistant. <br />

### 2025-10 {: .title}

Release date: 2025-10-31 <br />
Version: 4.0.33 <br />

This release brings the following changes:

General:
- <code>[BREAKING CHANGE]</code> App Store Connect will no longer export global "All Users" authorization rules by default. App Store Connect administrators who have such rules configured can opt into exporting them by following the instructions in the App Store Connect log file once the latest update has been installed.
- <code>[Enhancement]</code> Improvements to the help text when configuring script tag data pre-fetch settings to explain some of the nuance involved in different calculation scenarios and to clarify that pre-fetch settings only apply to tag references with pre-fetch enabled.
- <code>[Bug Fix]</code> Fixes an issue where frozen data alert script tags did not correctly detect frozen data events when being run retrospectively on historical data.
- <code>[Bug Fix]</code> Fixes an issue in the data stream UI where some configured tag mappings were not being displayed. Note that this was a cosmetic issue and did not affect the actual delivery of data from source to destination.

Alarm Analysis Driver:
- <code>[Enhancement]</code> Improvements to stale alarm timing.

AVEVA OSIsoft PI Driver:
- <code>[Enhancement]</code> Improved handling when PI bulk query limits are hit.

### 2025-08 {: .title}

Release date: 2025-08-29 <br />
Version: 3.2.21643

This release brings the following changes:

General:
- <code>[Enhancement]</code> Updates to the latest v6 preview version of our [driver toolkit](https://github.com/intelligentplant/AppStoreConnect.Adapters).

OPC UA Driver:
- <code>[Enhancement]</code> Add support for OPC UA reverse connect. This allows an OPC UA server behind a firewall to make an outbound connection to a TCP listener run by the driver to establish communication.

Siemens S7 Driver:
- <code>[Enhancement]</code> Miscellanous functional improvements.

### 2025-06 {: .title}

Release date: 2025-06-27 <br />
Version: 3.2.21562

This release brings the following changes:

General:
- <code>[Enhancement]</code> Security improvements to the App Store Connect UI through the addition of <code>integrity</code> and <code>crossorigin</code> attributes to all script and CSS references.

IP Historian v2 Driver:
- <code>[Bug Fix]</code> Fixes an issue that caused interpolated data to be misaligned when the first ever historical sample for a tag fell between the query start time and the query end time.

IP Historian v3 Driver:
- <code>[Bug Fix]</code> Fixes an issue that caused interpolated data to be misaligned when the first ever historical sample for a tag fell between the query start time and the query end time.

OPC Classic Driver:
- <code>[Bug Fix]</code> Fixes an issue where initialising a connection to an OPC AE server could fail.

### 2025-05 {: .title}

Release Date: 2025-05-30 <br />
Version: 3.2.21515

This release brings the following changes:

General:
- <code>[Enhancement]</code> Modifications to allow the Data API to know the version of drivers that are connected to the Industrial App Store. This allows apps such as Alarm Analysis to enable or disable specific reports and features based on the compatibility level of the AA data source being used.
- <code>[Enhancement]</code> Add support for OTLP telemetry export. Export using the legacy Jaeger format has been removed since all modern versions of Jaeger support OTLP ingestion.
- <code>[Bug Fix]</code> Fixes an issue where the compression deviation calculation could be performed using the wrong sample when using compression in a data stream.
- <code>[Enhancement]</code> UI improvements when configuring the input data type for an ad hoc script tag.

Alarm Analysis Driver:
- <code>[Task]</code> Under the hood improvements and housekeeping.

IP Historian v2 Driver:
- <code>[Enhancement]</code> UI enhancements to provide better guidance when setting exception/compression deviation for tags.

IP Historian v3 Driver:
- <code>[Enhancement]</code> UI enhancements to provide better guidance when setting exception/compression deviation for tags.

### 2025-04 {: .title}

Release Date: 2025-04-25 <br />
Version: 3.2.21435

This release brings the following changes:

General:
- <code>[Bug Fix]</code> Fixes an issue where drivers such as the CSV data source that use Data Core's built-in compression filter support calculated incorrect compression deviation limits. Note that this did not affect IP Historian.

Alarm Analysis Driver:
- <code>[Task]</code> Under the hood improvements and housekeeping.

IP Historian v2 Driver:
- <code>[Enhancement]</code> When performing a snapshot write, IP Historian will now ignore all samples older than the snapshot timestamp for the destination tag. The behaviour of history writes has not changed.

IP Historian v3 Driver:
- <code>[Enhancement]</code> When performing a snapshot write, IP Historian will now ignore all samples older than the snapshot timestamp for the destination tag. The behaviour of history writes has not changed.

### 2025-03 {: .title}

Release Date: 2025-03-28 <br />
Version: 3.2.21416

This release brings the following changes:

General:
- <code>[Enhancement]</code> When rewinding a script tag, you can now choose the initial value to set at the start of the rewind period.
- <code>[Enhancement]</code> Under-the-hood enhancements to telemetry configuration.

Alarm Analysis Driver:
- Fixed the Disable barcode when the last event was a <code>DISABLE_ON</code> event with duration property and automatic unshelving.
- Fixed the value assigned to the <code>TagDescription</code> field in the Stale Alarm report.
- Introduced the <code>priorityOrder</code> and <code>priorityOrder-a</code> metatags into the <code>EventBadActorMapper</code> to allow sorting on priority order.

Azure Event Hubs Driver:
- <code>[Enhancement]</code> Reduced memory usage when parsing custom JSON payloads.

IP Historian v2 Driver:
- <code>[Enhancement]</code> When using a label filter on a tag search, you can now specify multiple labels to match by separating them with spaces e.g. <code>my-first-label my-second-label</code>.
- <code>[Enhancement]</code> When writing tag values to IP Historian, the historian will now ignore incoming samples that exactly match the timestamp, value and quality of the current snapshot for the destination tag. This improves behaviour when data stream rules that use the historian as their destination are restarted.

IP Historian v3 Driver:
- <code>[Enhancement]</code> When using a label filter on a tag search, you can now specify multiple labels to match by separating them with spaces e.g. <code>my-first-label my-second-label</code>.
- <code>[Enhancement]</code> When writing tag values to IP Historian, the historian will now ignore incoming samples that exactly match the timestamp, value and quality of the current snapshot for the destination tag. This improves behaviour when data stream rules that use the historian as their destination are restarted.
- <code>[Task]</code> The "Preview" flag has been removed from the IP Historian v3 Driver!

MQTT Driver:
- <code>[Enhancement]</code> Reduced memory usage when parsing custom JSON payloads.

RabbitMQ Driver:
- <code>[Enhancement]</code> Reduced memory usage when parsing custom JSON payloads.

### 2025-02 {: .title}

Release Date: 2025-02-28 <br />
Version: 3.2.21309

This release brings the following changes:

General:
- <code>[Enhancement]</code> Calls to retrieve available data sources can now optionally filter the results based on driver capabilities and the permissions that the calling user has on the data source.

Driver Health Status Driver <em>(Alpha Package Only)</em>:
- <code>[Enhancement]</code> A new driver that can be used to expose the health status of other Data Core drivers as tags. This is useful when you want to monitor e.g. disconnections from a Modbus device over time.

In-Memory Buffer Driver:
- <code>[Enhancement]</code> Improvements to the way that tag values are loaded from disk when data persistence is enabled.

IP Historian v2 Driver:
- <code>[Enhancement]</code> A label filter can now be specified in a tag search using either the built-in <code>Label</code> search filter or by using IP Historian's custom <code>Labels</code> tag property filter.

IP Historian v3 Driver:
- <code>[Enhancement]</code> A label filter can now be specified in a tag search using either the built-in <code>Label</code> search filter or by using IP Historian's custom <code>Labels</code> tag property filter.

OPC Classic Driver:
- <code>[Enhancement]</code> When connecting to an OPC AE server, an idle timeout can now be specified to automatically reconnect to the server if no event messages are received for a specified period of time.

### 2025-01 {: .title}

Release Date: 2025-01-31 <br />
Version: 3.2.21266

This release brings the following changes:

General:
- <code>[Enhancement]</code> All relative timestamps and sample intervals in API calls can now be specified using composite offsets/durations (e.g. <code>3H 15M 47S</code>).
- <code>[Enhancement]</code> Tag searches can now specify a label filter, for drivers such as IP Historian that support tag labels.

Alarm Analysis Driver:
- <code>[Enhancement]</code> Under-the-hood improvements in preparation to new Alarm Analysis app features.

IP Historian v2 Driver:
- <code>[Enhancement]</code> Tags can now define up to 20 labels that can be used to link associated tags together.

IP Historian v3 Driver:
- <code>[Enhancement]</code> Tags can now define up to 20 labels that can be used to link associated tags together.

OPC UA Driver:
- <code>[Enhancement]</code> Improved documentation for various driver settings.

### 2024-11 {: .title}

Release Date: 2024-11-29

Version: 3.2.21150

This release brings the following changes:

General:
- <code>[Enhancement]</code> Secondary HTTP listeners run by Data Core and App Store Connect nodes now allow JWT authentication to be used.

Alarm Analysis Driver:
- <code>[Enhancement]</code> Miscellaneous parsing and query improvements.

IP Historian v2 Driver:
- <code>[Bug Fix]</code> Fixes an issue where interpolated queries did not include the final raw sample before the query end time when computing results.

IP Historian v3 Driver:
- <code>[Bug Fix]</code> Fixes an issue where interpolated queries did not include the final raw sample before the query end time when computing results.

### 2024-10 {: .title}

Release Date: 2024-10-25 <br />
Version: 3.2.21057

This release brings the following changes:

General:
- <code>[Enhancement]</code> Display names and descriptions for data sources, event sources and event sinks can now be edited in the App Store Connect UI after the driver has been created.
- <code>[Enhancement]</code> Improvements to the data sources, event sources and event sinks pages in the App Store Connect UI.
  - The UI now indicates if a driver is visible to the Industrial App Store or not.
  - It is now possible to copy both the local ID and fully-qualified App Store Connect ID for a driver to the clipboard.
  - A new Quick Actions menu allows for faster access to common driver actions.
- <code>[Enhancement]</code> Improvements to the script tag rewind feature. Rewinding a script tag will now disable the script tag prior to rewinding and re-enable it after rewinding has completed. This ensures that the script tag does not emit any values while the rewind is in progress.
- <code>[Enhancement]</code> Script tag rewind can now be initiated from the App Store Connect UI.
- <code>[Enhancement]</code> Script tags no longer include a property containing all of the input data to the script by default. This change significantly reduces the size of the script tag state in situations where e.g. each iteration of the script receives a large array of input data. The previous behaviour can be re-enabled by enabling debug mode on the script tag.
- <code>[Bug Fix]</code> Fixes an issue where requests made to a secondary App Store Connect HTTP listener that had authentication disabled would always fail with a 403 Forbidden response. This affected organisations who use a reverse proxy when forwarding data to App Store Connect over HTTP from an upstream source.
- <code>[Enhancement]</code> App Store Connect can now conditionally connect to multiple Data API endpoints, and will dynamically recheck which endpoints to connect to on a periodic basis.
- <code>[Enhancement]</code> Better detection of scenarios where an App Store Connect disconnects and the Data API restarts before the App Store Connect reconnects.
- <code>[Enhancement]</code> Miscellaneous small under-the-hood improvements and performance enhancements.
- <code>[Security]</code> Mitigations for security issues in some 3rd party libraries.

Alarm Analysis Driver:
- <code>[Enhancement]</code> Scriptable event transforms now use the latest version of the Roslyn C# compiler.
- <code>[Enhancement]</code> Items in the parsed event "Properties" collection now support full-text non-case specific "SoE" search. (Previously it was case-specific and limited to individual word matching).  NB. This will only take effect on new indices (i.e. data parsed from Oct 2024 for Alarm Analysis data sources with a monthly indexing regime). Other parsed event fields remain full-text case-specific.

Data Simulator Driver:
- <code>[Bug Fix]</code> Fixes an issue that caused requests to retrieve the available properties for a tag to fail.

IP Historian v2 Driver:
- <code>[Bug Fix]</code> Fixes an issue where requesting aggregated data for a tag where the time range lies entirely before the first sample in the historian could result in a large memory spike.

IP Historian v3 Driver:
- <code>[Bug Fix]</code> Fixes an issue where requesting aggregated data for a tag where the time range lies entirely before the first sample in the historian could result in a large memory spike.

### 2024-08 {: .title}

Release Date: 2024-08-30 <br />
Version: 3.2.20671

This release brings the following changes:

General:
- <code>[Enhancement]</code> Faster performance when looking up authorization rules from the in-memory rule store.
- <code>[Enhancement]</code> Experimental support for rewinding script tags to recalculate from a specific point in time. This feature is not fully implemented yet and is not yet available in the App Store Connect UI.

Alarm Analysis Driver:
- <code>[Enhancement]</code> Facit annotations now include suppression events.
- <code>[Bug Fix]</code> Fix for issue that prevented Import Error handling.
- <code>[Bug Fix]</code> Fix for issue that prevented Alarm/Return pairing in some cases.

IP Historian/Edge Historian v2 Driver:
- <code>[Enhancement]</code> Annotations indices are now created with zero replicas. See notes below for important details.

IP Historian/Edge Historian v3 Driver:
- <code>[Enhancement]</code> Annotations indices are now created with zero replicas. See notes below for important details.

OPC UA Driver:
- <code>[Enhancement]</code> Better recovery when OPC UA data subscriptions or event subscriptions report problems that break the subscription but that do not cause the OPC UA connection to report that it has degreaded health.

#### Notes on IP Historian v2/v3 annotations indices

Prior to this release, annotations indices were accidentally being created in Elasticsearch with a single replica. On single node clusters, this resulted in Elasticsearch health checks always returning a warning status, as the cluster did not contain a second node that the replica could be allocated to. You may have observed that your IP Historian data sources report a degraded health status as a result of this issue.

This release changes the default behaviour so that new annotations indices are created with no replicas. However, existing annotations indices must be manually modified to set the number of replicas to zero. This can be performed using Windows PowerShell as follows:

```powershell
$elasticsearch = 'http://localhost:9200'

# Get all indices
$indices = Invoke-RestMethod "$elasticsearch/_cat/indices?format=json"

# We want to modify open annotations indices with more than zero replicas configured.
$indicesToModify = $indices | Where-Object {($_.index.EndsWith('annotations')) -and ($_.status -eq 'open') -and ($_.rep -gt 0)}

foreach ($item in $indicesToModify) {
    $indexName = $item.index
    Write-Host "Setting replica count for index $indexName"
    Invoke-RestMethod -Method PUT -Uri "$elasticsearch/$indexName/_settings" -ContentType 'application/json' -Body '{"index": {"number_of_replicas": 0}}'
}
```

You may wish to copy and paste the above script into a local <em>.ps1</em> file for easier execution. Once the number of replicas has been reset for existing annotations indices you should find that the health status of the Elasticsearch cluster returns to normal and that IP Historian data sources report healthy status within a minute of the change.

If you find that a non-good health status is still being reported please contact us as this may have a different root cause.

### 2024-07 {: .title}

Release Date: 2024-07-26 <br />
Version: 3.2.20537

This release brings the following changes:

General:
- <code>[Enhancement]</code> Updates to the `DataCore.config` file (that holds configuration settings for data sources, event sources, event sinks, etc.) are now saved using a safer write strategy that prevents corruption if a power event occurs while the file is being written.
- <code>[Enhancement]</code> Under-the-hood changes to enable faster start-up times for App Store Connect and standalone Data Core nodes.
- <code>[Enhancement]</code> Improved memory usage in data stream rules.
- <code>[Enhancement]</code> Allow Data Core to opt out of using WinHTTP by setting the `dataCore:enableWinHttpHandler` setting in `DataCore.settings.json` to `false`. The default behaviour when the host machine is running Windows 11 or Windows Server 2022 or later is to use WinHTTP so that HTTP/2 can be used.
- <code>[Enhancement]</code> Improved management of App Store Connect connections has been enabled for installs using the alpha channel. Beta and stable installs can opt into this feature by setting the `appStoreConnect:useClientManager` setting in `DataCore.settings.json` to `true`.
- <code>[Enhancement]</code> App Store Connect is now more resilient to DNS changes.
- <code>[Enhancement]</code> Licence information can be viewed directly in the App Store Connect UI.
- <code>[Enhancement]</code> All event sources now support a `GetLatestEventMessage` custom function that returns the last message emitted by the driver.

Alarm Analysis Driver:
- The following changes help administrators adhere to [best practice](/big_data_service/best_practice.html) with regard to Elasticsearch index and shard management.
  - <code>[Enhancement]</code> "Indexing Regime" configuration setting added to Alarm Analysis driver with "IndexPerMonth" (default) and "IndexPerYear" options. Setting can be changed safely at any point, but will only affect new indices.
  - <code>[Enhancement]</code> "Number of Shards" and "Refresh Interval" settings added to Alarm Analysis driver to allow more control over index creation. Settings can be changed safely at any point, but will only affect new indices.

AVEVA OSIsoft Asset Framework Driver:
- <code>[Bug Fix]</code> Fixes an issue where data query results for digital state tags would only report the name of the state and not its numeric value. A similar issue in the PI driver was fixed in the previous release.

IP Historian/Edge Historian v3 Driver:
- <code>[Bug Fix]</code> Snapshot tag value timestamps were being incorrectly reported on systems set to use non-UTC time zones. Historical tag values were not affected by this issue.
- <code>[Bug Fix]</code> Snapshot tag values are now correctly deleted when the owning tag is deleted.
- <code>[Enhancement]</code> Cancellation of tag loading at start-up happens more quickly if the driver is stopped while it is still initialising.

Modbus Driver:
- <code>[Bug Fix]</code> Fixes an issue where a Modbus driver could continue sending requests to a device after driver had started shutting down.

OPC UA Driver:
- <code>[Enhancement]</code> Adds a mitigation for OPC UA servers that do not correctly set a unique identifier on events that they emit.
- <code>[Enhancement]</code> Enriches emitted event messages using properties from the OPC UA node corresponding to the condition definition.
- <code>[Enhancement]</code> Improves connection recovery.
- <code>[Enhancement]</code> When browsing OPC UA asset models, the App Store Connect UI now selects appropriate icons based on the node type and properties.

TCP Printer Event Source Driver:
- <code>[Bug Fix]</code> Better handling for when closing a TCP session raises an error.

### 2024-05 {: .title}

Release Date: 2024-05-31 <br />
Version: 3.2.20385

This release brings the following changes:

General:
- <code>[Enhancement]</code> Under-the-hood changes that will allow for faster startup times in future releases.
- <code>[Enhancement]</code> Applying driver setting updates via the App Store Connect UI is now significantly faster.
- <code>[Enhancement]</code> The API supports a new "get tags by ID/name" endpoint for retrieving tag definitions when you already know the tag ID or name.
- <code>[Enhancement]</code> Performance improvements in all data source drivers when publishing value changes to the driver's data pipe.
- <code>[Bug Fix]</code> Timestamps on samples being written to the API will now always be converted to UTC.

Alarm Analysis Driver:
- <code>[Enhancement]</code> Improved alarm-return pairing.
- <code>[Enhancement]</code> Improved stale alarm reporting.
- <code>[Enhancement]</code> Added new cross data checks driver setting: <em>"Include Disabled Alarms in the Compilation of Alarm Properties"</em>. When set to true and the <em>"Compile Alarm Properties"</em> setting is enabled, then the on-to-on duration, off-to-on duration, and chattering alarm properties will also be compiled for messages with the following event types: <code>ALM_SHL</code>, <code>ALM_DIS</code>.
- <code>[Bug Fix]</code> Corrected an issue in the de-duping process that could substantially reduce performance of cross data checks.

AVEVA OSIsoft PI Driver:
- <code>[Bug Fix]</code> Fixes an issue where data query results for digital state tags would only report the name of the state and not its numeric value.

IP Historian/Edge Historian v2 Driver:
- <code>[Bug Fix]</code> Fixes an issue where post-processing of some data queries could give erratic results if data was recorded to the archive using non-UTC timestamps.

IP Historian/Edge Historian v3 Driver:
- <code>[Enhancement]</code> Beta and stable packages now include a preview driver for IP Historian v3.
  - IP Historian v3 is a major update to IP Historian that requires Elasticsearch v7 or later. You must provide your own Elasticsearch cluster to use IP Historian v3.
- <code>[Bug Fix]</code> Fixes an issue where post-processing of some data queries could give erratic results if data was recorded to the archive using non-UTC timestamps.

MQTT Consumer Driver:
- <code>[Enhancement]</code> New preview driver for receiving messages from MQTT brokers supporting all versions of MQTT up to and including v5.0. The existing legacy MQTT driver does not support MQTT 5.0. This driver was previously only available in the alpha package.
  - The driver supports the same ad hoc JSON parsing rules as the Azure Event Hub and RabbitMQ drivers.

MQTT Server Driver:
- <code>[Enhancement]</code> New preview driver that runs an MQTT broker, allowing external clients to publish messages that are converted into tag values. This driver was previously only available in the alpha package.
  - The driver supports the same ad hoc JSON parsing rules as the Azure Event Hub and RabbitMQ drivers.
  - The MQTT broker is for ingress only; it does not allow clients to subscribe to receive value changes or messages from other Data Core sources.

Text File Stream Event Source:
- <code>[Enhancement]</code> The method of determining if a monitored text file has been modified is now more robust.
- <code>[Enhancement]</code> The sleep period between file system checks has been exposed as a configurable setting. The default check is every 5 seconds. If files are infrequently modified this can be extended to a longer period to reduce processing overhead.

### 2024-04 {: .title}

Release Date: 2024-05-03 <br />
Version: 3.2.20238

This release brings the following changes:

General:
- <code>[Enhancement]</code> Performance improvements when applying authorization rules.
- <code>[Enhancement]</code> All data sources now support the ability to force data writes to go to snapshot or history.

Alarm Analysis Driver:
- <code>[Enhancement]</code> Facit annotations are now treated as read-only and have had their "more info" links amended.

Azure Event Hub/IoT Hub Driver:
- <code>[Enhancement]</code> Improvements to JSON payload parsing to support MQTT-style wildcards when including or excluding properties from the JSON document.

CSV Driver:
- <code>[Enhancement]</code> Reduced memory usage.

IP Historian/Edge Historian v2 Driver:
- <code>[Enhancement]</code> The tag cache can now be disabled to reduce memory usage. Tag searches will be slower when the cache is disabled.
- <code>[Enhancement]</code> The health status for a running IP Historian driver now includes the health status of the Elasticsearch cluster that the driver is connected to.

IP Historian/Edge Historian v3 Driver:
- <code>[Enhancement]</code> Alpha package includes a preview driver for IP Historian v3.
  - IP Historian v3 is a major update to IP Historian that requires Elasticsearch v7 or later. You must provide your own Elasticsearch cluster to use IP Historian v3.

Met Office Driver:
- <code>[Enhancement]</code> Updated to consult the latest Met Office Data Hub (https://datahub.metoffice.gov.uk/)
  - Supported weather plans now include: Global hourly spot, Global three hourly spot and Global daily spot.
- <code>[Enhancement]</code> Changes to how three-hourly forecast are recorded.
- <code>[Enhancement]</code> Significant Weather description accompanies Significant Weather Code - e.g. 1 : Sunny Day

RabbitMQ Driver:
- <code>[Enhancement]</code> Improvements to JSON payload parsing to support MQTT-style wildcards when including or excluding properties from the JSON document.

### 2024-03 {: .title}

Release Date: 2024-03-22 <br />
Version: 3.2.20136

This release brings the following changes:

General:
- <code>[Enhancement]</code> General layout improvements for the App Store Connect UI, including a better experience on smaller screen devices.
- <code>[Enhancement]</code> Layout improvements to the configuration UI for data sources, event sources and event sinks. It is now easier to navigate between setting categories and apply filters to locate the setting(s) that you are looking for.
- <code>[Enhancement]</code> Layout improvements to the data stream UI. You can quickly switch between the latest observations and the rule definitions using a tabbed view.
- <code>[Enhancement]</code> Improvements to relative timestamp parsing in data queries. In addition to using <code>*</code> as a placeholder for the current time, it is now also possible to specify a number of additional relative time origin keywords, including the start of the current hour, day, week, month and year. The time zone for the relative time origin can be specified using the <code>tz</code> query string parameter or <code>X-TimeZone</code> request header on any API call. The time zone is specified using the IANA time zone database format (e.g. <code>America/New_York</code>) or the Microsoft time zone identifier (e.g. <code>Eastern Standard Time</code>).
  - Timestamp parsing improvements have been made possible by delegating parsing to Intelligent Plant's [Relativity](https://github.com/intelligentplant/IntelligentPlant.Relativity) library.
- <code>[Fix]</code> Fixes an issue where clicking on a link in the UI to view details for a tag or script tag was not always able to load the details page. This was caused by an issue with the way the UI was handling some encoded names/IDs.
- <code>[Fix]</code> Fixes an issue where script tags that were triggered by snapshot value changes in referenced tags would not trigger if the referenced tag was another script tag.
- <code>[Fix]</code> Renaming a source or destination tag used in a data stream tag mapping now correctly removes the last observation for the old mapping from the UI.

Azure Event Hub/IoT Hub Driver:
- <code>[Enhancement]</code> When parsing ad hoc JSON payloads, the consumer driver now supports parsing the payload using custom JavaScript. The script is invoked for every incoming message, but can opt to pass the payload onto the default parser. This allows for more complex parsing scenarios than the default parser can handle.

IP Historian/Edge Historian Driver:
- <code>[Enhancement]</code> When configuring a linked interface tag for an IP Historian tag, it is now possible to specify the direction of the link (i.e. whether the linked tag is a source or destination for the IP Historian tag).
- <code>[Enhancement]</code> When configuring an IP Historian data stream rule, you can choose if the rule is an ingress rule or an egress rule. The interface tag link direction for IP Historian tags is used to determine if the tag supports ingress or egress.
- <code>[Enhancement]</code> An automatic egress rule can be configured for IP Historian data sources, in addition to the existing automatic ingress rule.
- <code>[Enhancement]</code> The publish intervals for automatic ingress and egress rules are now configuraable via driver settings.
- <code>[Enhancement]</code> Improvements to the in-memory tag definition cache.

MQTT Consumer Driver (alpha package only):
- <code>[Enhancement]</code> New preview driver for receiving messages from MQTT brokers supporting all versions of MQTT up to and including v5.0. The existing legacy MQTT driver does not support MQTT 5.0.

MQTT Server Driver (alpha package only):
- <code>[Enhancement]</code> New preview driver that runs an MQTT broker, allowing external clients to publish messages that are converted into tag values.
  - The driver supports the same ad hoc JSON parsing rules as the Azure Event Hub and RabbitMQ drivers.
  - The MQTT broker is for ingress only; it does not allow clients to subscribe to receive value changes or messages from other Data Core sources.

OPC UA Driver:
- <code>[Enhancement]</code> Adds support for writing tag values.
  - Writing array values is not currently supported.
- <code>[Enhancement]</code> Asset model nodes and tags now include the access permissions that the driver has on the tag or node.
- <code>[Enhancement]</code> Server certificates that fail validation are now logged so that the certificate can be inspected and trusted if required.
- <code>[Enhancement]</code> Client certificates no longer need to have a trusted root certificate to be used for client authentication. This simplifies the use of self-signed client certificates.

RabbitMQ Driver:
- <code>[Enhancement]</code> When parsing ad hoc JSON payloads, the consumer driver now supports parsing the payload using custom JavaScript. The script is invoked for every incoming message, but can opt to pass the payload onto the default parser. This allows for more complex parsing scenarios than the default parser can handle.

### 2024-01 {: .title}

Release Date: 2024-01-26 <br />
Version: 3.2.19859

This release brings the following changes:

General:
- Miscellaneous performance improvements, in particular to data streams.
- All setting names in <code>DataCore.settings.json</code> are now case-insensitive.
- <code>DataCore.settings.json</code> now allows settings to be specified using nested JSON objects. For example, the following configuration is now valid and is equivalent to specifying a non-nested property named <code>DataCore:Application:Name</code>:

```json
{
  "DataCore": {
    "Application": {
      "Name": "My App Store Connect"
    }
  }
}
```

- The default file system-based key/value store can now buffer pending changes in memory and periodically flushes them to disk. In particular, this improves performance when the system is configured to run large numbers of script tags or in-memory buffer tags that persist values to disk. Background flush is enabled by setting the <code>DataCore:DataStore:FlushInterval</code> configuration setting in <code>DataCore.settings.json</code> to a time span value e.g. <code>00:00:10</code> for a 10 second flush interval.
- The C# script tag engine now allows compilation to be skipped for script tags built from templates. This can significantly improve startup time when using large numbers of script tags. Compilation skipping can be enabled by setting the <code>DataCore:ScriptEngine:CSharp:SkipTemplateCompilation</code> configuration setting in <code>DataCore.settings.json</code> to <code>true</code>.

CSV Driver:
- The driver now correctly applies both per-tag and per-query sample limits.

In-Memory Buffer Driver:
- When configured to persist tag values, the buffer now provides a setting to specify if values should be persisted to a single data store key, or if one key per tag should be used. The latter option is the default behaviour as it mirrors the existing behaviour of the buffer. The former option can be used to reduce the number of keys that need to be read from or written to disk when using a file system-based data store, which can help to improve performance when buffering large numbers of tags.

IP Historian/Edge Historian:
- Better handling of data queries that specify tags that do not exist.
- Performance improvement when writing large numbers of samples to the driver.

Microsoft Azure Event Hub/IoT Hub Driver:
- Fixes an issue where the consumer driver was not correctly processing messages received from the Event Hub.

Remapper Driver:
- Tag searches for script tags now work correctly.

### 2023-09 Hotfix 1 {: .title}

Release Date: 2023-10-02 <br />
Version: 3.2.19629

This hotfix patches the following issues:

AVEVA OSIsoft PI/AF Drivers:
- Fixes an issue where all tag values returned from PI and AF queries were being assigned the current UTC time as their timestamp.

RabbitMQ Consumer Driver:
- Fixes an issue in the Rabbit MQ consumer driver where messages that were sent without any custom headers could not be processed.

### 2023-09 {: .title}

Release Date: 2023-09-29 <br />
Version: 3.2.19623

This release brings the following changes:

General:
- All drivers can define a startup delay to wait for before the driver will be initialised.
- Significant performance improvements when performing a bulk creation of tag definitions in the App Store Connect UI.
- Fixes a memory leak that could occur when running a driver out-of-process causing the external executable to eventually crash. This issue was typically observed when using the OPC Classic (DA/HDA/AE) driver, which needs to run in a 32-bit process.
- Data stream rules can now filter values that get sent to destination tags using value change, exception and compression filtering. This is a preview feature that does not currently have a configuration UI. Please contact us for more information!
- Updates to the latest version of the [App Store Connect adapters toolkit](https://github.com/intelligentplant/AppStoreConnect.Adapters). Among other things, this update fixes issues where toolkit-based drivers could cause the App Store Connect UI to display the incorrect runtime health status for the driver.
- Ensures that unmanaged resources created by drivers such as TCP listeners are correctly stopped when the App Store Connect runtime is being stopped in order to apply an update.

AVEVA Wonderware Driver:
- Integer-based tags now automatically provide a visualisation hint that they should be displayed using stepped lines.

In-Memory Buffer Driver:
- When persisting values to disk, the buffer now ensures that values that are waiting to be trimmed are not saved.

Microsoft Azure Event Hub/IoT Hub Driver:
- Significant performance and memory usage improvements.
- Adds the ability to batch multiple observations together into a single Azure Event Hub message, and to compress the message payload.

Modbus Driver:
- Robustness improvements to handle scenarios where the Modbus device crashes.
- CSV mapping files now support configuring a factor and offset for a mapping. If specified, this takes precedence over the "scale low" and "scale high" columns.

OpenTelemetry Metrics Driver:
- Adds min/max tags for histogram instruments.

TCP Printer Driver:
- Adds settings to control if event messages are trimmed before being emitted to remove leading and trailing white space, and if event messages that consist solely of white space are emitted or discarded.

Prometheus Driver (canary stream only):
- New driver for reading metrics from HTTP endpoints that use the [Prometheus exposition format](https://prometheus.io/docs/instrumenting/exposition_formats/#text-based-format).

RabbitMQ Driver:
- Improvements to connection resiliency and telemetry.
- Significant performance and memory usage improvements.
- Adds the ability to batch multiple observations together into a single RabbitMQ message, and to compress the message payload.

### 2023-04 {: .title}

Release Date: 2023-04-28 <br />
Version: 3.2.19254

This release brings the following changes:

General:
- App Store Connect now uses HTTP/2 by default for all HTTP requests when running on Windows 11 or Windows Server 2022 or later.
- Improved handling when App Store Connect reconnects to the Industrial App Store without a full disconnection being detected by SignalR.
- Adds support for the v3.0.0 App Store Connect adapter toolkit clients and base libraries.
- UI now adds a two-click solution for recording any non-IP Historian tag to IP Historian when the historian has an automatic ingress rule enabled (see below).
- Disabled driver instances are now displayed in separate groups in the UI.
- Fixes an issue where App Store Connect would never connect to the Industrial App Store if an active network connection was not available at startup time.
- Fixes an issue where an error during data stream initialisation could prevent other rules from initialising.
- Miscellaneous small fixes and performance improvements

Big Data Drivers:
- Fix for an issue where event selection could fail to advance if querying from multiple big data sources.

CSV Driver:
- Memory usage is reduced, in particular for large CSV data sets.
- Fix an issue where queries for best-fit or interpolated data over large numbers of raw samples could cause a lage spike in memory.
- Fix an issue where the "Maximum Raw Query Sample Count" setting was not being correctly applied when retrieving raw samples for aggregation.

IP Historian/Edge Historian
- New simplified user experience when configuring IP Historian tags using the Data Core/App Store Connect UI.
- A new driver setting allows creation of an automatic ingress data stream rule for IP Historian whenever the driver starts. This rule creates data stream mappings for all destination IP Historian tags that have source information configured.
- `PLOT` data queries now correctly use step interpolation when interpolating values for tags that have the "prefer stepped visualisation" flag set.
- Deleting a tag no longer deletes its history or annotations from the big data store.

Modbus Driver:
- Add a connection timout to all Modbus TCP connections.
- Add an optional shutdown grace period to be configured to allow an ongoing operation to complete if the driver is being shut down.

RabbitMQ Drivers:
- Rabbit MQ data/event source and event sink drivers are now available as preview drivers in the stable release package. RabbitMQ can be used for reliable data transfer between Data Core/App Store Connect nodes.

Wonderware Driver:
- Add driver setting to allow the Wonderware `wwTimeStampRule` query parameter to be explicitly specified when querying the SQL interface.

### 2022-09 {: .title}

Release Date: 2022-09-23 <br />
Version: 3.2.18489

This release brings the following changes:

General:
- All drivers now have a configurable startup timeout (defaults to 2 minutes). This prevents rogue or badly-configured drivers from blocking App Store Connect startup.
- Generation of tag mappings in all data stream rules has been rewritten to improve startup time.
- Data stream rules can now specify a minimum sample quality filter e.g. a rule can specify that source values with bad quality are discarded instead of being forwarded to destination tags.
- Data stream rules can now have a startup priority associated with them. Note that this cannot yet be assigned via the App Store Connect UI.
- All templated script tags can now configure an evaluation delay in the same way that ad hoc script tags can.
- `HiLoLimitMonitor` script tag now supports on delays and off delays.
- When reconnecting to the Industrial App Store, App Store Connect now processes all reconnection attempts on a dedicated background task.
- Fixes an issue where script tags can get "stuck" when processing a data set containing duplicate timestamps for an individual tag.
- Fixes an issue that could cause an App Store Connect to think that there was a mismatch between its local drivers and the proxies for its local drivers on the Industrial App Store.

Alarm Analysis Data Source:
- Alarm State Tag - historical view of Alarm State can now be added into e.g. process trends.

Big Data Event Source:
- Improvements to the way message backlogs/historical catch-up are processed.

CSV Data Source:
- CSV driver can now optionally filter out samples that duplicate the same value on contiguous rows. This is useful when running demo data sets with large numbers of tags and rows.

IP Historian/Edge Historian Data Source:
- Add metrics related to writing samples to the historian archive.
- Fixes issue where description and unit tag search filters were not being correctly applied.
- Fixes an issue in `PLOT` queries where NaN values could cause spiking values to be omitted from the query result.

Modbus Data Source:
- Startup performance improvements when using mapping CSV files that reference a large number of Modbus addresses.
- Reduction in memory usage when polling Modbus devices and when caching snapshot values.
- Add metrics related to polling of Modbus devices.
- Default operation delay on Modbus data sources is now 100ms. This ensures better reliability when connecting to a serial port device.

Remapper Data Source:
- New preview driver (available in alpha channel).
- Acts as a reverse proxy to tags on other data sources (i.e. allows you to create a single data source where tags from multiple other data sources can be queried).
- Mappings configured via CSV file.

Serial Printer Event Source:
- Driver extended to expose "handshake" control protocol properties used in establishing a serial port communication.
- "Intelligent Response" implemented. This allows the driver to detect and respond to control messages written to the serial port.

### 2022-04 {: .title}

Release Date: 2022-04-29 <br />
Version: 17828

This release brings the following changes:

General:
- Improved telemetry metrics.
- New content security policy for the App Store Connect user interface.
- Mitigations against some websocket deadlock issues that can prevent App Store Connect from being stopped or restarted.
- The timeout used by App Store Connect when registering with the Industrial App Store has been increased.
- Improvements to the way that App Store Connect processes requests received from the Industrial App Store. These improvements will be enabled automatically once the changes are enabled in the IAS Data APIs.
- Improvements to the way that data stream rules are initialised, so that rules are now initialised in serial to reduce overhead at startup time when multiple rules with large numbers of tag mappings are used.
- Improvements to the way that App Store Connect notifies the Industrial App Store of driver lifetime events.

Alarm Analysis Event Sink:
- When parsing events generated by Facit, the tag and alarm identifier are now inferred from the script tag name and event name respectively.

Edge Historian:
- Fixes an issue where the text display value for a sample could be incorrect in requests for interpolated or average values.

Modbus:
- Improved health check UI messages.
- Sub-second polling intervals can now be specified.
- Tags that do not use a Modbus address as their tag name are now always sorted first in tag searches.
- Driver can optionally prevent its default polling interval from being overridden by individual tag definitions.

Azure Event Hubs:
- Azure Event Hub drivers now have support for message digests (SHA-384), HMAC-based message signatures (HMAC-SHA384), and encrypted message bodies (AES-256-CTR).

Taggle:
- Fixed some tag indexing bugs.

### 2022-01 {: .title}

<strong>NOTE: </strong> Roll-out of this release was paused due to issues where some clients did not have .NET Framework 4.8 installed. Roll-out will resume on 11 March.

This release brings the following changes:

General:
- .NET Framework 4.8 required.
- App Store Connect will now compress query responses it sends to the Industrial App Store by default.
- Improvements to driver initialisation.
- Improvements to data stream when initialising auto-archiving data stream rules for data sources.
- Script tags can now configure an evaluation delay that is applied between the trigger firing and the script being evaluated.
- When creating a script tag, the start time for the initial calculation can be supplied instead of being inferred from the input data settings. This allows the script tag to start calculating from any point in history up until the current time.

Alarm Analysis:
- Improvements to advanced filter queries.

OPC Classic:
- Set default DCOM authentication level on remote OPC connections to Packet Integrity as required by Microsoft's mitigations for CVE-2021-26414.
- Fixes an issue where some OPC AE event message fields were not included in the equivalent App Store Connect event message object.

TCP Printer Event Source:
- Refactored to share the same core implementation as the Serial Printer Event Stream driver.
- Limitations can now be placed on the number of concurrent TCP sessions.

Azure Event Hub:
- New preview drivers for publishing values to and receiving values from Microsoft Azure Event Hubs. The consumer driver also has the ability to parse arbitrary JSON payloads into separate tag values.

Metrics:
- New preview driver for collecting readings from OpenTelemetry-compatible metric instruments and publishing them as tag values.

### 2021-09 {: .title}

This release brings the following changes:

General:
- Telemetry improvements.
- App Store Connect now uses v2.2 of the App Store Connect adapter toolkit when connecting to 3rd party drivers (https://github.com/intelligentplant/AppStoreConnect.Adapters).
- In limit monitor script tags, you can now choose how the monitor should handle scenarios where a limit tag value is NaN. Previously, it was only possible to configure this behaviour for process tag values, meaning that a NaN limit tag value could cause the calculation's progress to become stuck.
- Aggregate calculator script tag template now uses the timestamp provided to it by the script engine when computing samples, rather than the timestamp returned by the underlying historian that aggregates the data.
- Fixes an issue where computing the previous trigger time before a start time for a CRON schedule could result in the start time being returned by mistake.
- Fixes an issue where event sources that were run out-of-process did not correctly create subscriptions to emit event messages.
- Refactor data stream implementation (for transferring real-time or historical data from source to destination data sources) to improve handling of downstream back pressure.
- Snapshot data stream rules that use a forwarding interval can now choose to forward only the most-recently-received values for each tag at the end of each interval.
- Allow HTTP requests being sent to an App Store Connect (e.g. from a process control network) to use GZip compression in the request body.

Alarm Analysis:
- Adds support for importing and exporting Alarm Response Manual with custom field support. The update changes the way that ARM data is indexed and will perform a one-off reindex of existing records; existing ARM users are advised to check their data after applying the update. Full documentation is available in the App Store Connect user interface under Documentation / Alarm Analysis / Alarm Response Manual (ARM).
- When visualising Alarm Analysis data in Gestalt Trend, data series will now be displayed using trailing edge instead of interpolating a straight lie between samples.

AVEVA Wonderware:
- Fixes an issue where multiple results could be returned for digital tags in tag search and data queries.
- Fixes an issue where values-at-times queries returned NaN values.
- Adds support for Wonderware 2010 running on SQL Server 2008 SP3.

Big Data Event Source:
- Modification of how "lag" is handled during document polling. The "Lag" parameter protects against skipping past documents that have not appeared in the Elasticsearch index yet (documents do not appear until an index refreshes, and even then, not all documents appear simultaneously). Rather than filtering for documents that have a "creation-time < now-lag", we now exclude documents that have a "route.timestamp > now-lag". This provides better protection for deployments where events transit through multiple nodes/hops (i.e. where the creation time may no longer be a recent value).

CSV:
- Performance and resource usage improvements when aggregating CSV data.

HTTP Proxy:
- If the endpoint for an HTTP proxy data source is not available when the driver starts, an error will now be raised immediately instead of the driver getting caught in an infinite retry loop.
- HTTP proxy data source can now optionally disable persistent real-time connection if it is not required.

IP Historian/Edge Historian:
- IP Historian data stream rule will now automatically create a mapping if a source tag is created that is already referenced by an existing destination IP Historian tag.
- Fixes an issue where a tag's compression filter would temporarily block incoming values if the last-archived value for the tag was NaN.

Modbus:
- Adds support for reading/writing 64-bit numeric values (IEEE 754 floating point, signed/unsigned long integers).
- Adds support for reading/writing UTF-8 strings (in addition to existing support for ASCII strings).
- Allows a hosted Modbus device to be configured using the same CSV device map files used when connecting to remote Modbus devices. This allows Modbus devices hosted by App Store Connect to use all supported Modbus data types instead of coercing all values received from other data sources into 32-bit floating point numbers.
- Attempts to write NaN values to address ranges intended for numeric values via Data Core will now be rejected.

OPC UA:
- Non-fatal connection issues no longer cause the OPC UA driver to stop processing a subscription. Previously, an intermittent issue such as a timeout when polling the OPC UA server to check for new subscription items would cause the driver to treat the subscription as completed with a failure.
- Self-signed X.509 client certificates can now be loaded from the Windows certificate store as well as from the file system.

### 2021-05 {: .title}

This release brings the following changes:

General:
- General bug fixes and improvements.
- Initial support for exporting App Store Connect trace information using the OpenTelemetry standard.
- App Store Connect now uses v2.0 of the App Store Connect adapter toolkit when connecting to 3rd party drivers (https://github.com/intelligentplant/AppStoreConnect.Adapters).
- New script tag templates.
- Naming conventions can optionally be enforced when creating data sources <code>[PREVIEW]</code>.
  - This allows rules to be defined so that e.g. all Modbus data sources on a node must have a name that starts with 'Modbus-'.

IP Historian/Edge Historian:
- Performance and stability improvements.

AVEVA Wonderware:
- Performance and stability improvements for the AVEVA Wonderware driver.

OPC UA:
- Performance and stability improvements for the OPC UA driver.

MT Connect:
- New driver for MTConnect (https://www.mtconnect.org/) <code>[PREVIEW]</code>.

### 2021-02 {: .title}
<span style="color:grey;font-weight:bold;">App Store Connect <i>Service</i> update available.</span>

The App Store Connect Service is the host that supports the running App Store Connect <em>process</em>. Unlike the App Store Connect process, it requires manual intervention to update. The service can be updated by downloading and running the [App Store Connect Installer](https://appstore.intelligentplant.com/Home/AppProfile?appId=a73c453df5f447a6aa8a08d2019037a5).

NB. Reinstalling App Store Connect may reset some custom configuration options. If in doubt, consult <support@intelligentplant.com>.

Changes include:

- Improved shut-down and restart control
- Requires .Net 4.8 (included in installer)

### 2021-01 {: .title}

This release contains the following changes:

- Recovery improvements when an App Store Connect is unexpectedly disconnected from the Industrial App Store (e.g. due to a network issue).
- Improvements to Edge Historian query performance.
- Improvements to the Alarm Analysis programmable transform.
- The Modbus driver can now be used to host a virtual Modbus TCP device.

### 2020-10 {: .title}

  - Alarm Analysis licensing. Unlicensed AA (Alarm Analysis) data sources will respond with '<em>Subscription not found or expired</em>' message which indicates that the data source needs to be licensed. For details on how to apply a licence please check the steps [here](https://appstore.intelligentplant.com/wiki/doku.php?id=alarm_analysis:licensing) or contact support@intelligentplant.com.

### 2020-07 {: .title}

- Alarm Analysis Data Source Driver
  - Day count aggregations simplified to use a 24hr period. Previously, the Alarm Analysis driver would accommodate time-zone logic. Now however, it is the responsibility of the calling app (e.g. Alarm Analysis, SoE Explorer, Facit, etc...) to handle timezone.
  - Foundations for Alarm Analysis licensing.

### 2020-05 {: .title}

This release contains the following changes:

- Improvements to the Alarm Analysis data source driver in preparation for the next Alarm Analysis app release.
- Edge Historian tags can be configured to record the current value only (i.e. no history).
- New aggregate functions supported in Edge Historian: `AnnotationCount`, `Count`, `PercentGood`, `PercentBad`, `Range`, `Delta`, `StdDev`, `Variance`
- `Range` aggregate function now supported in OSIsoft PI and AF drivers.
- Improvements to automatic reconnection in PI and AF drivers.
- Fix for older versions of IE when browsing tags in the App Store Connect UI.
- Improvements to the App Store Connect trending UI.
- Miscellaneous small improvements.

### 2020-03 {: .title}

This release contains the following changes:

- Improvements and bug fixes related to Alarm Analysis data import and reporting queries.
- Improvements and bug fixes related to the restart of data stream rules (used to transfer real-time data from a source data source to a destination data source such as App Store Connect's Edge Historian).
- Fixes for some C# script tag templates that called back into Data Core for historical data.
- JavaScript-based script tags are now deprecated in favour of C#-based script tags.
- A new driver for [Aspentech IP.21](https://www.aspentech.com/en/products/msc/aspen-infoplus21), capable of interfacing with its HTTP-based REST API. This driver is in preview and will receive improvements over the coming months.
- Miscellaneous bug fixes.
