---
layout: wiki
title: "Enable Resilient Data Transfer with RabbitMQ - Fast Flow Variation"
permalink: /datacore/enable_resilient_data_transfer_with_rabbitmq_-_fast_flow_variation.html
---
As well as a resilient stream (see [Enable Resilient Data Transfer with RabbitMQ](/datacore/enable_resilient_data_transfer_with_rabbitmq.html)), it may be necessary to configure a fast (near-real-time) flow also. The difference is the resilient flow is responsible for guaranteed flow of history to the destination data archive, but the fast flow will only ever attempt to relay current values.

In situations where a connection is unreliable, this means that dashboard displays will show the latest values as soon as connections are available, rather than be delayed with a catch-up lag.

To implement a fast flow, a parallel stream is configured but with "ephemeral" settings.

### RabbitMQ Settings {: .title}

#### Fast Flow Queue

<table class="wiki-table">
<tbody>
<tr><td>Name</td><td>data_core.tag_values.fast</td></tr>
<tr><td>Type</td><td>classic</td></tr>
<tr><td>Durability</td><td>Transient</td></tr>
</tbody>
</table>

#### Fast Flow Operator Policy

<table class="wiki-table">
<tbody>
<tr><td>Name</td><td>Fast Flow</td><td colspan="1"></td></tr>
<tr><td>Pattern</td><th>%%</th><td>data_core\..*\.fast$%%</td></tr>
<tr><td>Apply To</td><td>Queues</td><td colspan="1"></td></tr>
<tr><td>Priority</td><td>2</td><td colspan="1"></td></tr>
<tr><td>Max Length (bytes)</td><td>1000000000</td><td colspan="1"></td></tr>
<tr><td>Message TTL (ms)</td><td>60000</td><td colspan="1"></td></tr>
</tbody>
</table>

#### Fast Flow Shovel

<table class="wiki-table">
<tbody>
<tr><td>Name</td><td>Fast Data Relay</td></tr>
<tr><td>Source</td><td>AMQP 0.9.1</td></tr>
<tr><td>Source URI</td><td>amqp:/ /</td></tr>
<tr><td>Source Queue</td><td>data_core.tag_values.fast</td></tr>
<tr><td>Prefetch count</td><td></td></tr>
<tr><td>Auto-delete</td><td>Never</td></tr>
<tr><td>Destination</td><td>AMQP 0.9.1</td></tr>
<tr><td>Destination URI</td><td>amqps:/ /data_transfer_user:<password>@<servername or ip></td></tr>
<tr><td>Destination Queue</td><td>data_core.tag_values.fast</td></tr>
<tr><td>Add forwarding headers</td><td>No</td></tr>
<tr><td>Reconnect delay (s)</td><td>15</td></tr>
<tr><td>Acknowledgment mode</td><td>No ack</td></tr>
</tbody>
</table>

### Data Core Settings {: .title}

Besides configured RabbitMQ Producer and Consumer drivers, and the Data Stream Rules that manage the routing of data within a Data Core instance, a new component is required - the In-Memory Data Source. The <em>resilient</em> stream is routed to an archive (e.g. IP Hist) whilst the fast flow is configured to an In-Memory data source. The In-Memory data source can then be configured to route historical queries to the archive.
