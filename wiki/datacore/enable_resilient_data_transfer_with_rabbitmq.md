---
layout: wiki
title: "Enable Resilient Data Transfer with RabbitMQ"
permalink: /datacore/enable_resilient_data_transfer_with_rabbitmq.html
---
Rabbit MQ supports secure and reliable server-to-server communication, making it the ideal utility for Data Core to employ for process data transfer.

In the following example we consider a network architecture consisting of a source server and a destination server.

1. A Data Core Node on the source server subscribes to real-time tag-values from a SCADA system (via OPC or Modbus).
1. Data Core writes the tag-values to a local RabbitMQ queue.
  1. RabbitMQ is configured to persist messages, meaning data can survive a server shutdown.
1. RabbitMQ pushes encrypted data (messages) downstream to the RabbitMQ queue on the destination server.
  1. Data in transit is encrypted using TLS.
1. The destination RabbitMQ responds with an ack when the message is successfully enqueued.
  1. The upstream RabbitMQ server will only dequeue the message on receipt of an ack. <em>This provides resilience to network outage.</em>
  1. App Store Connect on the destinations server reads the message from the queue and archives the tag value to IP Historian

### Getting Started {: .title}

Before we can commence with configuring Data Core, we must prepare the servers and Rabbit MQ for secure communication.

#### Destination Server Preparation

<strong>1. Install RabbitMQ</strong>

Refer to [RabbitMQ](/data_core/rabbitmq.html)

<strong> 2. Configure Firewall Rules </strong>

Firewall rules must be configured on the destination/downstream server to allow for incoming messages.

Open Windows Defender Firewall and configure two new <strong>Inbound Rules</strong>:

<img src="/assets/media/data_core/rabbitmq_03.png" alt="rabbitmq_03" style="max-width:600px" loading="lazy" />

<table class="wiki-table">
<tbody>
<tr><th>Name</th><th>Description</th><th>Port</th></tr>
<tr><td>AMQP</td><td>Advanced Message Queue Protocol - employed by RabbitMQ</td><td>5672</td></tr>
<tr><td>AMQPS</td><td>Advanced Message Queue Protocol Secure - employed by RabbitMQ</td><td>5671</td></tr>
</tbody>
</table>

The AMQP rule should only be employed for testing and can be disabled when not required. We also recommending restricting access to the above rules by specifying the permitted "Remote IP Address" scope.

<strong> 3. Create a RabbitMQ User </strong>

A new user must be defined on the destination/downstream RabbitMQ server. The source will use this for authorization.

- Open RabbitMQ Administration UI (http://localhost:15672/)
- Select Admin > Users
- Add User
  - Name: data_transfer_user
  - Password: <you decide>
  - Allow read/write permissions on required queues

<strong> 4. Create a Self-Signed CA Certificate </strong>

The certificate is used for TLS encryption.

Create folder:

  C:\Program Files\RabbitMQ Server\certs

and add the following certificate files:

- ca.crt - the certificate authority (must be trusted)
- downstream-rabbitmq.crt - the server certificate
- downstream-rabbitmq.key - the public key

<strong> 5. Create RabbitMQ Configuration File </strong>

Create file:

  %ProgramData%/RabbitMQ/rabbitmq.conf

Add the following settings:

  listeners.ssl.default = 5671
  ssl_options.cacertfile = C:/Program Files/RabbitMQ Server/certs/ca.crt
  ssl_options.certfile   = C:/Program Files/RabbitMQ Server/certs/downstream-rabbitmq.crt
  ssl_options.keyfile    = C:/Program Files/RabbitMQ Server/certs/downstream-rabbitmq.key
  ssl_options.verify     = verify_none
  ssl_options.fail_if_no_peer_cert = false

<strong> 6. Restart RabbitMQ windows service </strong>

The above configuration will not take effect until the service is restarted.

<strong> 7. Create RabbitMQ Queue </strong>

<table class="wiki-table">
<tbody>
<tr><td>Name</td><td>data_core.tag_values</td></tr>
<tr><td>Type</td><td>classic</td></tr>
<tr><td>Durability</td><td>Durable</td></tr>
</tbody>
</table>

NB. The Data Core driver will attempt to create the queue if one is not already defined.

<strong> 8. Define RabbitMQ Operator Policy (optional) </strong>

A policy is a way to dynamically assign properties to queues that are otherwise immutable. We recommend a standard policy that limits how many messages can be buffered and thus avoid the risk of filling the hard-drive. When the limit is hit messages are dropped from the head of the queue.

Select Admin > Policies > Operator Policies > Add /update a policy

Complete the form as follows:

<table class="wiki-table">
<tbody>
<tr><td>Name</td><td>Standard Flow</td><td colspan="1"></td></tr>
<tr><td>Pattern</td><th>%%</th><td>data_core\..*$%%</td></tr>
<tr><td>Apply To</td><td>Queues</td><td colspan="1"></td></tr>
<tr><td>Priority</td><td>2</td><td colspan="1"></td></tr>
<tr><td>Max Length (bytes)</td><td>1000000000</td><td colspan="1"></td></tr>
</tbody>
</table>

#### Source Server Preparation

<strong> 1. Install RabbitMQ </strong>

Refer to [RabbitMQ](/data_core/rabbitmq.html)

NB. Include the <em>optional</em> "RabbitMQ Shovel plugin" step.

<strong> 2. Add Certificate Trust </strong>

Create folder:

   C:\Program Files\RabbitMQ Server\certs

and add the following certificate files:

- ca.crt - the certificate authority

<strong> 3. Create RabbitMQ Configuration File </strong>

Create file:

  %ProgramData%/RabbitMQ/rabbitmq.conf

Add the following settings:

  ssl_options.cacertfile = C:/Program Files/RabbitMQ Server/certs/ca.crt

<strong> 4. Restart RabbitMQ windows service </strong>

The above configuration will not take effect until the service is restarted.

<strong> 5. Create RabbitMQ Queue </strong>

Same as Destination Server Preparation - step 7.

<strong> 6. Define RabbitMQ Operator Policy (optional) </strong>

Same as Destination Server Preparation - step 8.

<strong> 7. Configure RabbitMQ Shovel </strong>

Select Admin > Shovel Management > Add a new shovel

Complete the form as follows:

<img src="/assets/media/data_core/rabbitmq_05.png" alt="rabbitmq_05" style="max-width:600px" loading="lazy" />

<table class="wiki-table">
<tbody>
<tr><td>Name</td><td>Data Core Tag Values</td></tr>
<tr><td>Source</td><td>AMQP 0.9.1</td></tr>
<tr><td>Source URI</td><td>amqp:/ /</td></tr>
<tr><td>Source Queue</td><td>data_core.tag_values</td></tr>
<tr><td>Prefetch count</td><td></td></tr>
<tr><td>Auto-delete</td><td>Never</td></tr>
<tr><td>Destination</td><td>AMQP 0.9.1</td></tr>
<tr><td>Destination URI</td><td>amqps:/ /data_transfer_user:<password>@<servername or ip></td></tr>
<tr><td>Destination Queue</td><td>data_core.tag_values</td></tr>
<tr><td>Add forwarding headers</td><td>No</td></tr>
<tr><td>Reconnect delay</td><td></td></tr>
<tr><td>Acknowledgment mode</td><td>On confirm</td></tr>
</tbody>
</table>

#### Configure Data Core (Source Server)

On the source server, we'll need to configure the following components:

1. A RabbitMQ producer (writing items onto the queue)
1. A Data Stream (reading items from a data source to the queue)

#### Configure App Store Connect (Destination Server)

On the destination server we need to configure:

1. a RabbitMQ consumer
1. an archive (e.g. IPHist)
1. a data stream reading messages from the queue to the archive.

### Fast Data Flow {: .title}

As well as a resilient stream, it may be necessary to configure a fast (near-real-time) flow also. The difference is that whilst the resilient flow is responsible for guaranteed flow of history to the destination data archive, the fast flow will only ever attempt to relay current values.

For more info, refer to [Enable Resilient Data Transfer with RabbitMQ - Fast Flow Variation](/datacore/enable_resilient_data_transfer_with_rabbitmq_-_fast_flow_variation.html)
