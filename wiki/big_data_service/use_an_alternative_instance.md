---
layout: wiki
title: "Big Data Service: Use Alternative Instance"
permalink: /big_data_service/use_an_alternative_instance.html
---
Some App Store Connect (Data Core) components require read/write access to an Elasticsearch instance. For example, Alarm Analysis requires a repository to store analysed data.

Installations of App Store Connect and Gestalt include the Big Data Service (a stand-alone instance of Elasticsearch configured for local use), however, any instance of Elasticsearch can be employed (providing it satisfies the Version Requirement).

<strong>Version Requirement</strong>
- Elasticsearch 2.4.0
- Java RE 1.8.0_111

To disable the local Elasticsearch instance and employ another, follow the instructions below:

<strong>1. Disable the Intelligent Plant Big Data Service</strong>

Open Windows Services <br />
Select: Intelligent Plant Big Data Service > Properties <br />
Change Startup type to “Disabled”

<img src="/assets/media/big_data_service/bdcustom_01.png" alt="bdcustom_01" style="max-width:400px" loading="lazy" />

<strong>2. Modify Firewall</strong>

Elastic connections are managed via REST HTTPS calls. Thus, if Elasticsearch instance is not local, server firewall must be open for Port 443 outbound requests.

<strong>3. Elasticsearch dependent Data Core Components</strong>

Any Data Core component that requires an elasticsearch connection (e.g. Alarm Analysis) will need to be updated to reference the alternative Elasticsearch URL.
