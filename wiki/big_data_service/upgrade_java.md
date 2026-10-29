---
layout: wiki
title: "Upgrade Java"
permalink: /big_data_service/upgrade_java.html
---
The big data service uses the Java Runtime Engine 8. It installs with a local version of Java bundled alongside the service, but it can be upgraded by installing a more recent version of Java and reconfiguring the service to use a system install instead.

1. Download and install the latest LTS version of Java 8 from [java.com](https://www.java.com/en/download/).

2. Stop the Big Data Service

- Open Windows Services.
- Find "Intelligent Plant Big Data Service".
- Right-click and select "Stop".

<img src="/wiki/assets/media/big_data_service/bdcustom_02.png" alt="bdcustom_02" style="max-width:500px" loading="lazy" />

3. Launch the Big Data Service manager

- Open a cmd prompt in administrator mode.
- Navigate to %ProgramFiles%\Intelligent Plant\Big Data\es\bin\
- Enter: service.bat manager

<img src="/wiki/assets/media/big_data_service/bdcustom_07.png" alt="bdcustom_07" style="max-width:500px" loading="lazy" />

4. Under the Java tab, update the Java Virtual Machine path to point to the newly installed system JRE.

The path should point to the <strong>jvm.dll</strong> file inside the <strong>bin\server</strong> folder of your Java installation
(e.g. C:\Program Files\Java\jre1.8.0_491\bin\server\jvm.dll).

Click Apply and close the properties window.

<img src="/wiki/assets/media/big_data_service/bd-jre-01.png" alt="bd-jre-01" style="max-width:500px" loading="lazy" />

5. Restart the Big Data Service

- Open Windows Services.
- Find "Intelligent Plant Big Data Service". Right-click and select "Start".

<img src="/wiki/assets/media/big_data_service/bdcustom_05.png" alt="bdcustom_05" style="max-width:500px" loading="lazy" />

6. Finally, when satisfied the Big Data Service is running correctly, the bundled version of JRE can be safely removed.

  - Open Windows Explorer
  - Navigate to %ProgramFiles%\Intelligent Plant\Big Data
  - Delete folder "jre"

<strong>Warning.</strong> These custom settings will be reset if software is re-installed/upgraded.

### Rollback

If an issue is encountered after switching to the system JRE:

1. Stop the Big Data Service.
1. Reopen the Big Data Service manager (<code>service.bat manager</code>).
1. Under the <strong>Java</strong> tab, revert the Java Virtual Machine path to the original bundled JRE location.
1. Click <strong>Apply</strong> and restart the Big Data Service.

If the bundled <code>jre</code> folder has already been deleted, restore it from backup before performing the above steps.
