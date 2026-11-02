---
layout: wiki
title: "Antivirus Exclusion"
permalink: /big_data_service/antivirus_exclusion.html
---
Antivirus utilities constantly scan files and folders for suspicious activity. This can impede App Store Connect functionality, particularly if your App Store Connect is responsible for processing and recording high volumes of data.

For efficient data processing, we recommend Windows Security exclusions are configured for the following folders:

- %ProgramData%\Intelligent Plant\Data Core Application Host\Service\Applications\App Store Connect\Data
- %ProgramData%\Intelligent Plant\Data Core Application Host\Service\Applications\App Store Connect\Logs
- %ProgramFiles%\Intelligent Plant\Big Data\es\backup *
- %ProgramFiles%\Intelligent Plant\Big Data\es\data *

<em>* NB. These are default folder locations. In custom installations Big Data folders are often mapped to dedicated data drives.</em>

Instructions on how to configuring an exclusion for Microsoft Windows Security:

- [Add an Exclusion to Windows Security](https://support.microsoft.com/en-us/windows/add-an-exclusion-to-windows-security-811816c0-4dfd-af4a-47e4-c301afe13b26#:~:text=Go%20to%20Start%20%3E%20Settings%20%3E%20Update,%2C%20file%20types%2C%20or%20process.)
