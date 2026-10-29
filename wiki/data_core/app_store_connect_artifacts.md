---
layout: wiki
title: "App Store Connect Artifacts"
permalink: /data_core/app_store_connect_artifacts.html
---
App Store Connect allows you to connect your data sources to cloud-based apps available on the [Industrial App Store](https://appstore.intelligentplant.com).

For general information on App Store Connect, refer to the [app_store_connect:app_store_connect|wiki].

An installer is available on the [App Store](https://appstore.intelligentplant.com/Home/AppProfile?appId=a73c453df5f447a6aa8a08d2019037a5).

The installer sets up the following artifacts:

### Windows Services {: .title}

<img src="/wiki/assets/media/data_core/iasartifacts_01.png" alt="iasartifacts_01" style="max-width:600px" loading="lazy" />

Two services control the operation of:

- <strong>Intelligent Plant Big Data Service</strong> <br /> Local data repository that can scaled up for high-performance high-volume data storage. Employed by [Alarm Analysis](/wiki/alarm_analysis/alarm_analysis.html) and the IP Historian.

- <strong>Intelligent Plant Data Core Service</strong> <br /> Handles data connection, routing and security.

### File-System {: .title}

The main folders are:

- <strong>%Program Files%\Intelligent Plant\Big Data</strong> <br /> Default location of the Big Data run-time and storage files, though a common custom configuration is to [map the data storage location to a dedicated data drive](/wiki/big_data_service/modify_data_storage_location.html).

- <strong>%Program Files%\Intelligent Plant\Data Core</strong> <br /> The Data Core Service host.

- <strong>%Program Data%\Intelligent Plant</strong> <br /> The actual Data Core files. Includes connection drivers and configuration files.
