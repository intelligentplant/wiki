---
layout: wiki
title: "App Store Connect: Back Up and Restore"
permalink: /app_store_connect/back_up_and_restore.html
---
App Store Connect is quick to install, but at some point you may wish to consider a back up policy. Particularly if you've configured multiple data sources and/or are using the built-in Edge Historian to store application data (e.g. Alarm Analysis or Controller Consultant reports).

Depending on your circumstances, the following options are available:

### Virtual Machine Snapshot {: .title}

If App Store Connect is installed on a Virtual Machine, snapshot is a reliable way to back-up an entire server. However, we also recommend backing up "Big Data" as well (see below).  Refer to VM documentation for information on how to create, schedule and restore snapshots.

### Manual Backup {: .title}

If snapshot is not an option, configuration and data files can be manually backed up and restored. Instructions are provided below.

<strong>1. Back Up App Store Connect Configuration</strong>

To protect against hardware failure, the contents of the App Store Connect program-data folder should be copied to an alternative location.

- C:\ProgramData\Intelligent Plant\Data Core Application Host\Service\Applications\App Store Connect

<strong>2. Back Up Big Data</strong>

2.1 Download the "BigData.BackupUtility"

The "BigData.BackupUtility" is a simple console app for managing Elasticsearch snapshots.

Whilst it has an interactive mode, it's main intention is to be invoked from Windows Task Scheduler.

It is available for download from: [http://downloads.intelligentplant.com/downloads/BigData.BackupUtility.zip](http://downloads.intelligentplant.com/downloads/BigData.BackupUtility.zip)

2.2 Take a database Snapshot

Execute the BackupUtility batch file "Snapshot.bat" to run.

- BackupUtility: c:\Program Files\Intelligent Plant\Big Data\BackupUtility\Snapshot.bat

<img src="/assets/media/app_store_connect/backup01.png" alt="backup01" style="max-width:600px" loading="lazy" />

This creates a database restore point protecting against data corruption or accidental loss.

The console window automatically closes after 10 seconds.

2.3 Archive back-up files

To protect against hardware failure, the contents of the back-up folder should be copied to an alternative location.

- BackUp Folder: C:\Program Files\Intelligent Plant\Big Data\es\backup

### Manual Restore {: .title}

<strong>1. To recover App Store Connect configuration</strong>

1.1 Stop Intelligent Plant Data Core windows service

1.2 Revert configuration files from archive

1.3 Re-start Intelligent Plant Data Core windows service

<strong>2. Revert Big Data to a snapshot</strong>

For advanced Snapshot management (create/delete/list/restore) open the BackupUtility manager: double click "BackupUtility.exe".

<img src="/assets/media/app_store_connect/backup04.png" alt="backup04" style="max-width:600px" loading="lazy" />

List returns all available snapshots. Note the snapshot id is actually a time-stamp (format: YYYYMMddHHmmss).

Enter: Restore <em>SnapshotID</em>
(e.g. Restore 20170131093011)

### Scheduled Backup {: .title}

To configure a regular scheduled backup, create a Windows Scheduled Task to execute one of following batch files:

- <strong>Snapshot.bat</strong> - Execute a snapshot

- <strong>SnapshotWithPurge.bat</strong> - Execute a snapshot with purge (purge is explained in the Data Retention Policy section below).

Below is a sample configuration.

NB. Remember to specify a valid account and adjust schedule to your own preference.

```

<?xml version="1.0" encoding="UTF-16"?>
<Task version="1.2" xmlns="http://schemas.microsoft.com/windows/2004/02/mit/task">
  <RegistrationInfo>
    <Date>2019-03-25T15:49:45.0817232</Date>
    <Author>Intelligent Plant</Author>
    <Description>Daily Big Data Backup</Description>
  </RegistrationInfo>
  <Triggers>
    <CalendarTrigger>
      <StartBoundary>2019-03-25T23:02:55</StartBoundary>
      <Enabled>true</Enabled>
      <ScheduleByDay>
        <DaysInterval>1</DaysInterval>
      </ScheduleByDay>
    </CalendarTrigger>
  </Triggers>
  <Principals>
    <Principal id="Author">
      <UserId></UserId>
      <LogonType>Password</LogonType>
      <RunLevel>HighestAvailable</RunLevel>
    </Principal>
  </Principals>
  <Settings>
    <MultipleInstancesPolicy>IgnoreNew</MultipleInstancesPolicy>
    <DisallowStartIfOnBatteries>true</DisallowStartIfOnBatteries>
    <StopIfGoingOnBatteries>true</StopIfGoingOnBatteries>
    <AllowHardTerminate>true</AllowHardTerminate>
    <StartWhenAvailable>false</StartWhenAvailable>
    <RunOnlyIfNetworkAvailable>false</RunOnlyIfNetworkAvailable>
    <IdleSettings>
      <StopOnIdleEnd>true</StopOnIdleEnd>
      <RestartOnIdle>false</RestartOnIdle>
    </IdleSettings>
    <AllowStartOnDemand>true</AllowStartOnDemand>
    <Enabled>true</Enabled>
    <Hidden>false</Hidden>
    <RunOnlyIfIdle>false</RunOnlyIfIdle>
    <WakeToRun>false</WakeToRun>
    <ExecutionTimeLimit>P3D</ExecutionTimeLimit>
    <Priority>7</Priority>
  </Settings>
  <Actions Context="Author">
    <Exec>
      <Command>"c:\Program Files\Intelligent Plant\Big Data\BackupUtility\SnapshotWithPurge.bat"</Command>
      <WorkingDirectory>c:\Program Files\Intelligent Plant\Big Data\BackupUtility</WorkingDirectory>
    </Exec>
  </Actions>
</Task>
```

### Data Retention Policy {: .title}

Snapshot takes an incremental backup of the Big Data state. Incremental means each snapshot is dependent on the others that have gone before it, and thus may become inefficient if too many snapshots are maintained. Therefore, it is advised to have an archiving and data retention policy in place.

### Archiving Snapshots {: .title}

Snapshots are saved to a backup folder. For a typical App Store Connect installation, the location is:

`C:\Program Files\Intelligent Plant\Big Data\es\backup`

<em>For custom configuration, see [Big Data Service: Modify Data Storage Location](/big_data_service/modify_data_storage_location.html)</em>

Providing a Snapshot is not actively being taken, it is safe to <strong>copy</strong> the entire "Snapshots" folder to an achive location.

<strong>Do not cut or delete files from Snapshots</strong> as this will break the incremental integrity of the files contained.

### Safely Removing Snapshots / Purge Command {: .title}

Snapshots can be removed using the Backup Utility and executing the <strong>Purge</strong> command. This will delete old snapshots according to the retention policy defined in the config file.

<strong>Retention Policy</strong>

It is assumed that the backup schedule is configured to record a snapshot at least once per day.

A "day retention policy" of 7 will keep the last 7 snapshots. If more than one snapshot is recorded in a day, the most recent survives a purge.

A "month retention policy" of 6 will keep daily snapshots spanning the last 6 months. If more than one snapshot is recorded in a month, the most recent survives a purge.

<strong>To modify the retention policy</strong>:

1. Open the BackUp Utility config file. <br /> For a default installation, the config file is located:

`C:\Program Files\Intelligent Plant\Big Data\BackupUtility\BackupUtility.exe.config`

2. Refer to  <strong>AppSettings</strong> section and modify <strong>DayRetentionPolicy</strong> setting.

```

  <appSettings>
    <add key="BigDataUrl" value="http://localhost:9200"/>
    <add key="DayRetentionPolicy" value="7"/>
    <add key="MonthRetentionPolicy" value="6"/>
  </appSettings>
```

3. Save file <br /> The new setting will take effect the next time the BackupUtility is started.
