---
layout: wiki
title: "Alarm Analysis: Capturing Alarms & Events from Militarized Network Domains"
permalink: /alarm_analysis/resilient_data_transfer.html
---
### Overview {: .title}

Before reading this guide, you should be familiar with [Alarm Analysis Network Architecture](/wiki/alarm_analysis/alarm_analysis_network_architectures.html) document. This illustrates possible network installations including scenarios where Alarms & Events are collected from a militarized zone and transferred to another network for processing.

In these scenarios, it is necessary to configure Data Core installations to act as a data relay. Moreover, if the connectivity between relays is unreliable, further configuration is required to guarantee resilient data transfer.

This guide focuses on such a scenario

Data is gathered from serial feed and relayed via a Data Core Node from the Process Information Network to an App Store Connect on the Business Network. The relay is configured for Resilient Data Transfer.

![alarmanalysisresilientdatatransfer](/wiki/assets/media/alarm_analysis/alarmanalysisresilientdatatransfer.png)

A two box installation is required, with the following Data Core configuration:

![resilienttransfer_02](/wiki/assets/media/data_core/resilienttransfer_02.png)

- Data Core listens for events (TCP Printer Stream). Arriving events are parsed and sent...
  1. On an immediate data relay to App Store Connect (Fast TCP Out)
  1. To a local data repository (Big Data Sink)

- A second process on the Data Core Node polls the local data repository for stored events (Big Data Source) and sends to...
  1. a further data relay that awaits an Ack from the App Store Connect (TCP Out). If Ack is not received, data is resubmitted.

- App Store Connect listens for incoming events (TCP In) and stores to a local data repository (Big Data Sink).

While connectivity between the PIN and BN is good, all events will reach the destination twice. The fast stream means data arrives quickly, the second stream guarantees resilience. App Store Connect consolidates the two streams  to avoid duplication.

## Step by Step Install and Configuration {: .title}

<strong>1. Install Data Core Node on PIN</strong>

For detailed instructions on how to deploy a Data Core node, see: [Data Core: Stand-Alone Installation](/wiki/data_core/stand-alone_installation.html).

<strong>2. Data Core Node Configuration</strong>

Configure the following Data Core components (assume default settings unless otherwise stated).

For detailed instructions on how to create an Event Source to Sink subscription, see: [Data Core: Create an Event Subscription](/wiki/data_core/event_subscription.html)

<table class="wiki-table">
<tbody>
<tr><th colspan="2"><em>TCP Printer Stream</em></th></tr>
<tr><td>Type</td><td>TCP Printer (Event Source)</td></tr>
<tr><td>Description</td><td>Listen and parse data arriving on TCP channel</td></tr>
<tr><td>Disabled</td><td>False</td></tr>
<tr><td>TCP Port</td><td>9000</td></tr>
<tr><td>Message Delimiter</td><td>New Line {\n}</td></tr>
<tr><td>Maximum Characters per Scan</td><td>4000</td></tr>
</tbody>
</table>

<table class="wiki-table">
<tbody>
<tr><th colspan="2">// Fast TCP Out//</th></tr>
<tr><td>Type</td><td>TCP Event Sink (Event Sink)</td></tr>
<tr><td>Description</td><td>Immediate data transfer to the Business Network</td></tr>
<tr><td>Disabled</td><td>False</td></tr>
<tr><td>TCP Server Host</td><td>[ IP Address of server hosting "Fast TCP In" ]</td></tr>
<tr><td>TCP Server Port</td><td>11000</td></tr>
<tr><td>Username</td><td>[Service account with access to server hosting "Fast TCP In" ]</td></tr>
<tr><td>Password</td><td>[Service account password with access to server hosting "Fast TCP In" ]</td></tr>
<tr><td>Check Response</td><td>No</td></tr>
<tr><td>//Subscribes to://</td><td>TCP Printer Stream</td></tr>
</tbody>
</table>

<table class="wiki-table">
<tbody>
<tr><th colspan="2"><em>Big Data Sink</em></th></tr>
<tr><td>Type</td><td>Big Data Event Sink (Event Sink)</td></tr>
<tr><td>Description</td><td>Save data to the Big Data Store</td></tr>
<tr><td>Disabled</td><td>False</td></tr>
<tr><td>Big Data URL</td><td>http://localhost:9200</td></tr>
<tr><td>//Subscribes to://</td><td>TCP Printer Stream</td></tr>
</tbody>
</table>

<table class="wiki-table">
<tbody>
<tr><th colspan="2"><em>Big Data Source</em></th></tr>
<tr><td>Type</td><td>Big Data Event Source (Event Source)</td></tr>
<tr><td>Description</td><td>Retrieve collected data from Big Data Store</td></tr>
<tr><td>Disabled</td><td>False</td></tr>
<tr><td>Paused</td><td>False</td></tr>
<tr><td>Big Data URL</td><td>http://localhost:9200</td></tr>
<tr><td>Index Filter</td><td>tcpprinterstream.evt_*</td></tr>
<tr><td>Sleep Period</td><td>30</td></tr>
<tr><td>Lag</td><td>60</td></tr>
</tbody>
</table>

<table class="wiki-table">
<tbody>
<tr><th colspan="2">// TCP Out//</th></tr>
<tr><td>Type</td><td>TCP Event Sink (Event Sink)</td></tr>
<tr><td>Description</td><td>Resilient data transfer to the Business Network</td></tr>
<tr><td>Disabled</td><td>False</td></tr>
<tr><td>TCP Server Host</td><td>[ IP Address of server hosting "TCP In" ]</td></tr>
<tr><td>TCP Server Port</td><td>11000</td></tr>
<tr><td>Username</td><td>[Service account with access to server hosting "TCP In" ]</td></tr>
<tr><td>Password</td><td>[Service account password with access to server hosting "TCP In" ]</td></tr>
<tr><td>Check Response</td><td>Yes</td></tr>
<tr><td>//Subscribes to://</td><td>Big Data Source</td></tr>
</tbody>
</table>

<strong>3. Install App Store Connect on BN</strong>

For detailed instructions on how to deploy App Store Connect, see: [How to Connect your Data to the App Store](/wiki/data_core/how_to_connect_your_data_to_the_app_store.html)

<strong>4. App Store Connect Configuration</strong>

Configure the following Data Core components (assume default settings unless otherwise stated).

For detailed instructions on how to create an Event Source to Sink subscription, see: [Data Core: Create an Event Subscription](/wiki/data_core/event_subscription.html)

<table class="wiki-table">
<tbody>
<tr><th colspan="2"><em>TCP In</em></th></tr>
<tr><td>Type</td><td>TCP Event Source (Event Source)</td></tr>
<tr><td>Description</td><td>Receive data from Process Information Network</td></tr>
<tr><td>Disabled</td><td>False</td></tr>
<tr><td>TCP Server Port</td><td>11000</td></tr>
</tbody>
</table>

<table class="wiki-table">
<tbody>
<tr><th colspan="2"><em>Big Data Sink</em></th></tr>
<tr><td>Type</td><td>Big Data Event Sink (Event Sink)</td></tr>
<tr><td>Description</td><td>Save data to the Big Data Store</td></tr>
<tr><td>Disabled</td><td>False</td></tr>
<tr><td>Big Data URL</td><td>http://localhost:9200</td></tr>
<tr><td>Big Data Refresh Interval</td><td>5s</td></tr>
<tr><td>//Subscribes to://</td><td>TCP In</td></tr>
</tbody>
</table>

<strong>5. Firewall Settings</strong>

Firewalls will need to allow passage for the following protocols on ports:

<table class="wiki-table">
<tbody>
<tr><th>Firewall</th><th>Requirements</th></tr>
<tr><td>BN:Internet Network Firewall</td><td>TCP Port 443 open to outbound traffic from computer hosting App Store Connect and user machines to: <br /> <br /> https://appstore.intelligentplant.com <br /> https://login.microsoftonline.com * <br /> <br /> * Required for Microsoft Entra ID log-in. <br /> <br /> For instructions on enabling log-in to the App Store with business accounts, refer to: App Store Registration for Organisations.</td></tr>
<tr><td>Computer hosting App Store Connect</td><td>Windows Firewall	TCP Port 443 open to outbound traffic <br /> TCP Port 11000 open to inbound traffic</td></tr>
<tr><td>PIN:BN Network Firewall</td><td>TCP Port 11000 open to outbound traffic</td></tr>
<tr><td>PCN:PIN Network Firewall</td><td>No inbound access required.</td></tr>
</tbody>
</table>

#### 5. Testing

Assuming that the TCP Printer Stream configured above is listening to an active Alarm & Event stream, we should see evidence of data store to the Big Data repositories on the PIN and BN.

A quick test is to execute a URL search query.

1. Log on to servers hosting Data Core Node

Open web browser and enter
`http://localhost:9200/_cat/indices/tcpprinterstream.evt_*?v`

A "doc.count" greater than zero indicates Alarm & Event data is successfully stored.

```
health status index                          pri rep docs.count docs.deleted store.size pri.store.size
green  open   tcpprinterstream.evtidx_201802   2   0         10            0    211.7kb        211.7kb
```

A "doc.count" field

2. Log on to servers hosting App Store Connect

Open web browser and enter
`http://localhost:9200/_cat/indices/tcpin.evt_*?v`

You should expect to see something like:

```
health status index                          pri rep docs.count docs.deleted store.size pri.store.size
green  open   tcpin.evtidx_201802              2   0         10           10    211.7kb        211.7kb
```

A "doc.count" greater than zero indicates Alarm & Event data is successfully stored.

A "docs.deleted" greater than zero indicates events are arriving on both fast and resilient streams. The data consolidation process marks a duplicate data document for deletion. This is an active measure and clears to zero over time.

#### 6. Next Steps

So far, we've moved Alarm & Event data across a network. We are now ready to configure Alarm Analysis processing.

For more info, see [How to configure an Alarm & Event Import Stream](/wiki/alarm_analysis/how_to_configure_an_alarm_event_import_stream.html).
