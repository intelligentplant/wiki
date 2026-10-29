---
layout: wiki
title: "CSV Data Stream"
permalink: /data_core/csv_data_stream.html
---
Use the CSV Data Stream to configure tag-to-tag mapping via a CSV file.

### Data File Format

The example CSV file below contains mappings to stream a few tags from the Telemetry data source to the RabbitMQ Provider.

<img src="/wiki/assets/media/data_core/csvdatastream_01.png" alt="csvdatastream_01" style="max-width:800px" loading="lazy" />

```
SOURCE_DSN,SOURCE_TAG,DESTINATION_DSN,DESTINATION_TAG
Telemetry,performance_counters.memory.available_mbytes#value,RabbitMQ Producer,performance_counters.memory.available_mbytess#value
Telemetry,performance_counters.processor.pct_processor_time#value,RabbitMQ Producer,performance_counters.processor.pct_processor_time#value
Telemetry,performance_counters.processor.pct_processor_time#value,RabbitMQ Producer,performance_counters.processor.pct_processor_time#value
Telemetry,performance_counters.logicaldisk.c.pct_free_space#value,RabbitMQ Producer,performance_counters.logicaldisk.c.pct_free_space#value
```

//This type of configuration could be employed to push telemetery from a data core node to an App Store Connect instance where the tags are monitored.
//

### Data File Location

The default location for CSV data stream mappings files is:

  %ProgramData%\Intelligent Plant\Data Core Application Host\Service\Applications\App Store Connect\Data\CsvDataStreamMappings

To use an alternative location, create an [Update-safe Configuration](/wiki/data_core/update_safe_configuration.html) file and configure the following setting:

   <add key="dataCore:dataStream:csv:baseDirectory" value="Data/CsvDataStreamMappings" />

Enter the path in the value property (NB. the path must be relative to the Data Core root folder).

### Licence Requirements

None.
