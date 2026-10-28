---
layout: wiki
title: "App Store Connect - Troubleshooting"
permalink: /app_store_connect/troubleshooting.html
---
### Collecting Diagnostic Information {: .title}

You can create a diagnostics report file as follows:

1. Download the [App Store Connect command line administration tool](https://downloads.intelligentplant.com/data-core-update-manager) (<code>ipdc-update</code>) onto your App Store Connect machine.
1. Unzip the downloaded archive and open a PowerShell prompt in the folder you unzipped the archive into.
1. Run the following command, specifying the path to the folder to create the diagnostics report in:

```
.\ipdc-update diagnostics collect --path <OUTPUT_DIR>
```

A zip file will be created containing diagnostic information and log files. You can send this file to Intelligent Plant when making a support request. You can also review the collected log files yourself to identify possible issues.

You can view help on how to customise the report as follows:

`.\ipdc-update diagnostics collect --help`

### Issues with Drivers {: .title}

For issues relating to individual data connections, refer to driver specific notes: [Supported Data Sources](/data_core/data_sources.html).

### App Store Connect Fails to Automatically Start {: .title}

We have seen incidents where the Intelligent Plant Data Core windows service fails to start. This is more likely to occur in resource heavy configurations and/or on shared servers with multiple processes competing for limited resources.

Windows services have a default 30s time-out on start-up. If this trips, the service will silently fail (i.e. no evidence in data core logs). Moreover, the "window service recovery option" to attempt repeated restarts are not registered.

There are two options:

1. Manually start the "Intelligent Plant Data Core Service" via Windows Services.

2. Extend the default time-out period for Windows Services. The following powershell script sets the timeout to 3 minutes.

```
Set-ItemProperty -Path "HKLM:\SYSTEM\CurrentControlSet\Control" -Name ServicesPipeTimeout -Value 180000 -Type DWord
```

### Data Core License has expired {: .title}

For non-standalone instances of App Store Connect (ASC), if your ASC has not been connected to the Data API for over 60 days, you will see a message that reads "Your Data Core licence expired at [Date]".

If your ASC is able to connect to the Data API, it will automatically download a new Data Core license. If it cannot connect to the Data API because its access token and refresh token have expired, then you will need to log out of ASC and log back in again.

For standalone instances of ASC, this renewal of Data Core licenses does not happen automatically. Intelligent Plant will need to provide you with a Data Core license for your machine.
