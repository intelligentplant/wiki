---
layout: wiki
title: "Data Source Drivers"
permalink: /data_core/data_sources.html
---
<em><strong>Data Sources</strong> are connections that support <strong>Tag Query</strong> and <strong>Time-Series</strong> data request.</em>

- AVEVA OSIsoft Asset Framework
- [AVEVA OSIsoft PI](/wiki/data_core/connect_to_a_pi_server_via_app_store_connect.html)
- AVEVA Wonderware
- BACnet
- [CSV File](/wiki/data_core/csv_file.html)
- In-Memory Buffer
- Intelligent Plant Alarm Analysis
- Intelligent Plant Historian
- [Met Office API](/wiki/data_core/met_office_api.html)
- Microsoft Azure Event Hub/IoT Hub
- [Modbus TCP](/wiki/data_core/modbus.html)
- [Modbus Serial](/wiki/data_core/modbus.html)
- MQTT
- MTConnect
- OPC Classic
- OPC UA
- Prometheus
- [RabbitMQ](/wiki/data_core/rabbitmq.html)
- Siemens S7
- SNMP Agent
- [Telemetry](/wiki/data_core/metrics.html)
- Wave Simulator
- Windows Performance Counters
- [Custom Drivers](https://github.com/intelligentplant/AppStoreConnect.Adapters)

### Data Streams {: .title}

Data streams are used to map a flow of data from one data source to another.

- Asset Model: Browse a source asset model and map data references to destination tags.
- [CSV](/wiki/data_core/csv_data_stream.html): Use a CSV file to map source tags to destination tags.
- Direct: A direct mapping between a source tag and a destination tag.
- IP Historian/Edge Historian: Create mappings via the source properties of IP Historian tags.
- Pattern: Match source tags using a search filter an map them to destination tags.

### Event Source Drivers {: .title}

<em>Event Sources push events to subscribed Event Sinks.</em>

- [Big Data Event Source](/wiki/data_core/bigdataeventsourcesink.html)
- Event Generator
- [Microsoft Message Queue](/wiki/data_core/msmqeventsourcesink.html)
- Serial Port Printer
- [SQL Event Source](/wiki/data_core/sqleventsource.html)
- [TCP Printer](/wiki/data_core/tcpprinter.html)
- Honeywell Dynamo Collector
- [TCP Event Source](/wiki/data_core/tcp.html)
- [Text File Parser](/wiki/data_core/text_file_event_source.html)
- [Text File Stream](/wiki/data_core/text_file_stream.html)
- [Windows Event Log](/wiki/data_core/windowseventlog.html)
- [Custom Drivers](https://github.com/intelligentplant/AppStoreConnect.Adapters)

### Event Sink Drivers {: .title}

<em>Event Sinks subscribe to Event Sources to process events. For example, save event to a log or database, send an email, etc...</em>

- [Alarm Analysis Event Sink](/wiki/data_core/alarm_analysis.html)
- [A&E Report Sink](/wiki/data_core/aereportsink.html)
- [Big Data Event Sink](/wiki/data_core/bigdataeventsourcesink.html)
- [File System Event Sink](/wiki/data_core/filesystemeventsink.html)
- [Microsoft Message Queue](/wiki/data_core/msmqeventsourcesink.html)
- Email Notification
- [TCP Event Sink](/wiki/data_core/tcp.html)
- [Windows Event Log](/wiki/data_core/windowseventlog.html)
- [Custom Drivers](https://github.com/intelligentplant/AppStoreConnect.Adapters)
