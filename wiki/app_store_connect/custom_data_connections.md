---
layout: wiki
title: "App Store Connect: Custom Data Connections"
permalink: /app_store_connect/custom_data_connections.html
---
App Store Connect can connect to a wide range of data sources, but we don't have drivers for everything (yet)!

If you have a custom data source that you want to connect to the Industrial App Store, you can use our [open source adapter toolkit](https://github.com/intelligentplant/AppStoreConnect.Adapters) to write your own driver that is hosted in an external ASP.NET Core application. App Store Connect can speak to your driver using REST API, gRPC, or ASP.NET Core SignalR interfaces.

You can even use our [templates](https://github.com/intelligentplant/AppStoreConnect.Adapters/tree/main/src/DataCore.Adapter.Templates) for Microsoft's [.NET SDK](https://docs.microsoft.com/en-us/dotnet/core/tools/dotnet-new) to get started in just a few minutes!

If you have written a driver that you think would be useful to other Industrial App Store users, please [contact us](https://www.intelligentplant.com/about-us) to discuss distributing your driver with App Store Connect.
