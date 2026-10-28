---
layout: wiki
title: "Data Core: Stand-Alone Installation"
permalink: /data_core/stand-alone_installation.html
---
Data Core is Intelligent Plant's data connectivity suite.

<em>App Store Connect</em> is an instance of Data Core pro-configured for connecting data to the Intelligent Plant's app store, but if can also be installed and configured to move data across networks or connect with locally deployed applications.

#### System Requirements

System requirements are the same as App Store Connect.

- [App Store Connect](/app_store_connect/app_store_connect.html)

Alternatively, if your server has an outgoing internet connection, consider creating a new repo configured to connect to the App Store Nuget feed.

<img src="/assets/media/data_core/datacoreinstall06.png" alt="datacoreinstall06" style="max-width:500px" loading="lazy" />

#### Installation

1. Download Installer and latest stable Node Package

- [Installer.DataCore.StandAlone.exe](https://downloads.intelligentplant.com/installers/Installer.DataCore.StandAlone.exe)
- [https://packages.intelligentplant.com/stable/nuget](https://packages.intelligentplant.com/stable/nuget) (DataCore.ApplicationHost.Node)

2. Run Installer

3. Copy package to packages folder

- %ProgramFiles%\Intelligent Plant\Data Core\Packages

4. Open Data Core website

- http://localhost:2006/Service
- Click "Create Application"

<img src="/assets/media/data_core/datacoreinstall01.png" alt="datacoreinstall01" style="max-width:500px" loading="lazy" />

5. Configure the following properties:

- Repository: local
- Name: Data Core Node
- Apply updates: checked
- Enabled: checked
- Click “Add Application”

<img src="/assets/media/data_core/datacoreinstall02.png" alt="datacoreinstall02" style="max-width:500px" loading="lazy" />

6. The Data Core "Application" starts automatically. Now open the Application.

<img src="/assets/media/data_core/datacoreinstall03.png" alt="datacoreinstall03" style="max-width:500px" loading="lazy" />

7. Select "Update License"

<img src="/assets/media/data_core/datacoreinstall04.png" alt="datacoreinstall04" style="max-width:500px" loading="lazy" />

8. Request a Data Core license key from Intelligent Plant, specifying Machine Id.

- Once supplied, enter then click “Update License”.

<img src="/assets/media/data_core/datacoreinstall05.png" alt="datacoreinstall05" style="max-width:500px" loading="lazy" />

9. Finally, reboot the server.

<em>Intelligent Plant Data Core is now running on your server.</em>
