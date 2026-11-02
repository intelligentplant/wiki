---
layout: wiki
title: "Upgrading App Store Connect (ASC) to use TLS 1.2"
permalink: /datacore/appstoreconnect_tls.html
---
### Outline

The Transport Layer Security (TLS) protocol is an industry standard designed to help protect the privacy of information communicated over the Internet. All communication between an App Store Connect and the Industrial App Store is encrypted using TLS.

The latest version of App Store Connect uses TLS 1.2 (as recommended by Microsoft). However, earlier installations may still use TLS versions 1.0 or 1.1 (deprecated since Mar 2020).

To check if your App Store Connect requires upgrading, read on...

### Is my App Store Connect affected?

 1. Log on to server hosting App Store Connect software

 2. Check version of file:
  %ProgramFiles%\Intelligent Plant\Data Core\DataCore.ApplicationHost.exe

<img src="/wiki/assets/media/datacore/hostversion.png" alt="hostversion" style="max-width:400px" loading="lazy" />

3. If version is less than <strong>3.2.16245 (8 Feb 2021)</strong> action is required. Either upgrade App Store Connect to the latest version or configure security via windows registry.

### How to upgrade App Store Connect

#### 1. Before you upgrade

1.1 Take a [backup](/wiki/app_store_connect/back_up_and_restore.html)

1.2 Note down any non-standard configuration that will need to be re-applied following the upgrade. This includes...

- [Running Intelligent Plant services under a service account](/wiki/data_core/how_to_run_app_store_connect_under_a_service_account.html)
- [Modifying the Big Data Storage Location](/wiki/big_data_service/modify_data_storage_location.html)
- [Using an alternative Elasticsearch instance](/wiki/big_data_service/use_an_alternative_instance.html)
- [Increasing Big Data Service RAM](/wiki/big_data_service/increase_big_data_service_ram.html)
- [Modifying the Update Check Schedule](/wiki/data_core/app_store_connect_updates.html)

#### 2. Reinstall App Store Connect

The latest version of App Store Connect is available for download from the [Industrial App Store](https://appstore.intelligentplant.com/Home/DataSources)

#### 3. Verify successful upgrade

3.1 Open Windows services and verify the following services are running:

- Intelligent Plant Big Data Service 2.0
- Intelligent Plant Data Core Service

3.2 Open admin UI and check connection status:

- http://localhost:2006/Service/AppStore

3.3 Check data sources are running

- Open admin UI http://localhost:2006/Service/
- Select "Configure Data Core"
- Verify all configured components under "Real-Time Data" and "Alarms & Events" are reporting a healthy status.

### How to configure security via Windows Registry

If you are unable to upgrade App Store Connect, refer to the following Microsoft article for an alternative method of configuring TLS.

- [Transport Layer Security (TLS) best practices with the .NET Framework / For .NET Framework 3.5 - 4.5.2 and not WCF](https://docs.microsoft.com/en-us/dotnet/framework/network-programming/tls#for-net-framework-35---452-and-not-wcf)

Note to Editor: More info required here. Provide explicit instructions for versions of ASC according to respective .net version.
