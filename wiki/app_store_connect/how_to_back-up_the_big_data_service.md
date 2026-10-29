---
layout: wiki
title: "Instructions"
permalink: /app_store_connect/how_to_back-up_the_big_data_service.html
---
<strong>1. Prepare Big Data Service for Backups</strong>

Before we can take a back-up, a configuration change is required. This modification is only required on initial set-up.

If you have already downloaded, deployed and configured the Back-Up utility (or installed "App Store Connect" which includes the back-up utility) proceed to step 3.

<strong>1.1. Stop the Big Data Service</strong>

<img src="/wiki/assets/media/app_store_connect/backup00.png" alt="backup00" style="max-width:600px" loading="lazy" />

Open Windows Services.

Find “Intelligent Plant Big Data Service”.

Right click, then select “Stop”.

<strong>1.2. Set a back-up location</strong>

Edit Elasticsearch configuration file: C:\Program Files\Intelligent Plant\Big Data\es\config\elasticsearch.yml

<em>This is a text file using YAML format and can be edited using Wordpad.</em>

```

#Define Physical Repo for snapshots
#More info: <https://www.elastic.co/guide/en/elasticsearch/reference/current/modules-snapshots.html>
path.repo: ["backup"]
```

Uncomment the path.repo entry (remove hash) and enter a back up location (e.g. "backup").

<em>NB. The suggested location ("backup") is relative to the big data service. To store data to an explicit location use format "c:<br />temp<br />Backup" (with double back-slashes).</em>

<strong>1.3. Restart the Big Data Service</strong>

<img src="/wiki/assets/media/app_store_connect/backup02.png" alt="backup02" style="max-width:600px" loading="lazy" />

Open Windows Services.
Find “Intelligent Plant Big Data Service”.
Right click, then select “Start”.

<strong>2. Download the Big Data Back Up Utility</strong>

Download and unzip the contents of the BackupUtility to your App Store Connect server.

- [Download BackupUtility](https://downloads.intelligentplant.com/downloads/BigData.BackupUtility.zip)

We suggest deploying the back-up utility to the Intelligent Plant programs folder:

- C:\Program Files\Intelligent Plant\BackupUtility

<strong>3. Take a Snapshot </strong>

Open the BackupUtility folder and double click "Snapshot.bat" to run.

<img src="/wiki/assets/media/app_store_connect/backup01.png" alt="backup01" style="max-width:600px" loading="lazy" />

This creates a database restore point protecting against data corruption or accidental loss.

The console window automatically closes after 10 seconds.

<strong> 3.1 Manage Snapshots (optional) </strong>

For advanced Snapshot management (create/delete/list/restore) open the BackupUtility manager: double click "BackupUtility.exe".

<img src="/wiki/assets/media/app_store_connect/backup04.png" alt="backup04" style="max-width:600px" loading="lazy" />

#### 3 Archive back-up files

To protect against hardware failure, the contents of the back-up folder should be copied to an alternative location.

- BackUp Folder: C:\Program Files\Intelligent Plant\Big Data\es\backup
