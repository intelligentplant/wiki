---
layout: wiki
title: "RabbitMQ"
permalink: /data_core/rabbitmq.html
---
[RabbitMQ](https://www.rabbitmq.com) is a popular open source message broker. In a process data context, it can be used for buffering and/or routing data across networks and between servers.

Data Core supports this with two components:

- <strong>Rabbit MQ Producer</strong> - Writes process data to a queue
- <strong>Rabbit MQ Consumer</strong> - Reads process data from a queue

### Getting Started

#### Enable RabbitMQ on Windows

RabbitMQ has several deployment options - below we provide our recommended approach.

<strong>1. Install Erlang</strong>

<em>Erlang is a high-level programming language for real-time systems. It is a pre-requisite of RabbitMQ.</em>

Download and run the [Erlang 64bit Windows Installer](https://www.erlang.org/downloads).

<strong>2. Install RabbitMQ </strong>

Download and run the [RabbitMQ 64bit Windows Installer](https://www.rabbitmq.com/install-windows.html#installer).

When prompted, untick the "Install RabbitMQ Service" option.

<img src="/wiki/assets/media/data_core/rabbitmq_01.jpg" alt="rabbitmq_01" style="max-width:400px" loading="lazy" />

<strong>3. Configure RabbitMQ</strong>

Open "RabbitMQ Command Prompt" in admin mode and execute the following instructions.

  set RABBITMQ_BASE=%PROGRAMDATA%\RabbitMQ
  rabbitmq-service install
  rabbitmq-plugins enable rabbitmq_management
  rabbitmq-service start

<em>The above actions installs the RabbitMQ service to the ProgramData directory (rather than the default action which installs the service to a user-specific AppData folder) and enables the admin UI.</em>

<strong>4. Enable Shovel Plugin (optional) </strong>

<em>The shovel plugin is only required on servers actively pushing data downstream to another server.</em>

Open <strong>RabbitMQ Command Prompt</strong> in admin mode and enter

  rabbitmq-service stop
  rabbitmq-plugins enable rabbitmq_shovel
  rabbitmq-plugins enable rabbitmq_shovel_management
  rabbitmq-service start

#### RabbitMQ Administration

The RabbitMQ Admin UI is accessible on

  http://localhost:15672/

<img src="/wiki/assets/media/data_core/rabbitmq_02.png" alt="rabbitmq_02" style="max-width:400px" loading="lazy" />

<strong>Hint</strong> Bookmark this link.

The default login is Guest/Guest.
<br /> This account account is only permitted for localhost login. Also note port 15672 is closed by default.

### RabbitMQ Producer

RabbitMQ Producer writes tag-value data to a queue.

The default configuration writes persistent messages to a local, durable queue called "data_core.tag_values". This means messages are stored to the hard drive and will survive a server restart.

The keys settings are:

- <strong>Routing Key</strong> <br /> The routing key to set on messages containing snapshot/historical tag values.

### RabbitMQ Consumer

<em>RabbitMQ Consumer reads tag-value data from a queue.</em>

The default configuration reads messages from a local queue called “data_core.tag_values”. The driver will create this queue if it doesn't already exist.

The keys settings are:

- <strong>Queue Names</strong> <br /> A comma-delimited list of RabbitMQ queues to read tag values and/or event messages from.

### More RabbitMQ Resources

- [Enable Resilient Data Transfer with RabbitMQ](/wiki/datacore/enable_resilient_data_transfer_with_rabbitmq.html)
- [Upgrading App Store Connect (ASC) to use TLS 1.2](/wiki/datacore/appstoreconnect_tls.html)
- [RabbitMQ: Change the Hostname](https://dennymichael.net/2014/06/16/rabbitmq-change-the-hostname)
