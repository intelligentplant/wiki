---
layout: wiki
title: "MSMQ Event Source/Sink"
permalink: /data_core/msmqeventsourcesink.html
---
### Overview

Data Core can read and write Alarm & Event (A&E) data from Microsoft message queues. This can be used for temporary data caching when configuring resilient data flows.

For example, imagine a Data Core Node is responsible for subscribing to A&E data from an ephemeral data source such as a serial printer feed, then sending it to a downstream server. Introducing an intermediate message queue will protect us from data loss if the downstream network connection is interupted.

### Getting Started

#### 1. Enable MSMQ on Windows Server

Enable Message Queuing Services via Server Features.

<img src="/wiki/assets/media/data_core/msmq01.png" alt="msmq01" style="max-width:600px" loading="lazy" />

#### 2. Create Queue(s)

Create a queue using Computer Management.

<strong>NB.</strong> Data Core can only communicate with private queues on the local server.

<img src="/wiki/assets/media/data_core/msmq02.png" alt="msmq02" style="max-width:500px" loading="lazy" />

#### 3. Queue Config

We recommend configuring transactional queues with an explicit storage capacity.

<img src="/wiki/assets/media/data_core/msmq03.png" alt="msmq03" style="max-width:500px" loading="lazy" />

If "Authenticated" is selected and [Data Core is running under a service account](/wiki/data_core/how_to_run_app_store_connect_under_a_service_account.html), then the service account must have send/receive/delete security privileges.

#### 4. Configure an Event Sink

A <em>Microsoft Message Queue</em> Event Sink will write any messages arriving on an event subscription flow to a MSMQ.

The key settings are listed under <em>Message Queue Settings</em>. Configure these to reference your local queue with equivalent properties.

<img src="/wiki/assets/media/data_core/msmq04.png" alt="msmq04" style="max-width:600px" loading="lazy" />

#### 5. Configure an Event Source

A <em>Microsoft Message Queue</em> Event Source reads messages from the MSMQ and relays to downstream subscribers. Note that the message will only be removed from the queue if all subscribers respond with a successful acknowledgement, therefore we recommended one event sink subscription per MSMQ event source.

The key settings are listed under <em>Message Queue Settings</em>. Configure these to reference your local queue.

<img src="/wiki/assets/media/data_core/msmq05.png" alt="msmq05" style="max-width:600px" loading="lazy" />

### Optional Settings

#### Set MSMQ to use custom storage location

By default MSMQ created in system partition, use the following method to move MSMQ files to a different location.

- Open "Computer Manager" and expand "Services and Applications"
- Right-click on "Message Queuing" mouse over "All Task" then click "Take Message Queuing Offline" <br /> Click "Yes"
- Use xcopy command to copy MSMQ directory to different volume. <br /> Xcopy c:\windows\system32\msmq d:\msmq /O/X/E/H/K <br /> <em>This copies contents and security settings.</em>

After copying to new location.

- Right click on "Message queuing" and click on "Properties"
- Click on the "Storage" tab
- Change the folder locations and select new location.
- Click "OK" and a prompt will appear to reboot the system.
- Reboot the system for the changes to take effect.
- Open "Computer Manager" and expand "Services and Applications"
- Right click on "Message Queuing" mouse over "All Task" then click "Bring Message Queuing Online"

### Further Notes

- [Administer Security for Message Queuing](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-server-2003/cc738047(v=ws.10)?redirectedfrom=MSDN)
