---
layout: wiki
title: "Configure Performance Counters to track Server and Data Core Performance"
permalink: /data_core/performance_counters.html
---
Data core can be configured to record server (and data core) processes.

This requires

  1. Registering new performance counters for monitoring data core components.
  2. Configuring the "Performance Counters Data Source".
  2. Defining data tags on an historian.
  3. Configuring a Data Stream rule to relay data from performance counter to historian.

### Registering Performance Counters

To register data core performance counters

 1. Open file explorer and navigate to  `%ProgramFiles%\Intelligent Plant\Data Core`

 2. On file explorer, select: File > Open Winodws PowerShell as administator

 3. In Powershell Prompt, enter .\InstallDataCorePerformanceCounters.ps1 -install -name "App Store Connect"

```

Name,Description,UnitOfMeasure,TagID,MaximumValue,MinimumValue,HighlightStale,Scale,StoredMax,StoredMin,UtcLastModified,ExceptionDeviation,CompressionDeviation,ResampleLimit,CompressionType,IsDigital,UnparsedStates,NOLUpper,NOLLower,SOLUpper,SOLLower,SDLUpper,SDLLower,InterfaceArchivingEnabled,InterfaceNumber,InterfaceDsn,InterfaceTag,InterfaceMin,InterfaceMax
\DataCore$App Store Connect:Hosting Environment\Background Tasks: Average Count,,,11116,1.7976931348623157e+308,0,false,false,,,2018-07-26T17:09:13.4801471Z,2,0,86400000,percent,false,,0,0,0,0,0,0,false,0,,,,
\DataCore$App Store Connect:Hosting Environment\Background Tasks: Maximum Count,,,11117,1.7976931348623157e+308,0,false,false,,,2018-07-26T17:09:13.5583958Z,2,0,86400000,percent,false,,0,0,0,0,0,0,false,0,,,,
\DataCore$App Store Connect:Hosting Environment\Thread Pool: Available Thread Count,,,11118,1.7976931348623157e+308,0,false,false,,,2018-07-26T17:09:13.6137829Z,2,0,86400000,percent,false,,0,0,0,0,0,0,false,0,,,,
\DataCore$App Store Connect:Hosting Environment\Thread Pool: Busy Thread Count,,,11119,1.7976931348623157e+308,0,false,false,,,2018-07-26T17:09:13.6457687Z,2,0,86400000,percent,false,,0,0,0,0,0,0,false,0,,,,
\DataCore$App Store Connect:Script Engine\Registered Script Count,,,11120,1.7976931348623157e+308,0,false,false,,,2018-07-26T17:09:13.6727934Z,2,0,86400000,percent,false,,0,0,0,0,0,0,false,0,,,,
\DataCore$App Store Connect:Script Engine\Script Evaluations/sec,,,11121,1.7976931348623157e+308,0,false,false,,,2018-07-26T17:09:13.7018103Z,2,0,86400000,percent,false,,0,0,0,0,0,0,false,0,,,,
\Memory\Available MBytes,,,11122,1.7976931348623157e+308,0,false,false,,,2018-07-26T17:09:13.7307896Z,2,0,86400000,percent,false,,0,0,0,0,0,0,false,0,,,,
Server.Available_Memory,Available memory on the server,MBytes,948,1.7976931348623157e+308,0,false,false,,,2018-06-15T07:06:32.6046957Z,5,7.5,86400000,absolute,false,,0,0,0,0,0,0,true,0,PerformanceCounters,\Memory\Available MBytes,,
Server.CPU_Usage,% usage of all CPUs on the server,%,949,1.7976931348623157e+308,0,false,false,,,2018-06-15T07:06:32.7496538Z,2,3,86400000,absolute,false,,0,0,0,0,0,0,true,0,PerformanceCounters,\Processor(_Total)\% User Time,,
```
