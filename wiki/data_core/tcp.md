---
layout: wiki
title: "TCP Event Source and Sink"
permalink: /data_core/tcp.html
---
Data Core objects "TCP Event Source" and "TCP Event Sink"
provide a mechanism to route Data Core event messages
between Data Core Nodes, potentially crossing network boundaries
and firewalls.

   A Data Core Node is an instance of Intelligent Plant's
   data-routing and data-access software operating as a Windows
   service.

   App Store Connect is a type of Data Core Node pre-configured
   to work with the App Store.

### When to use TCP Event Sink and Source {: .title}

The TCP Event Sink and Source provides a reliable and secure way to relay data across network boundaries and firewalls. Message data is signed, encrypted and relayed on a strictly one-way data-only channel. Minimal firewall configuration is required. This makes it particulary suitable for moving data across high-security militarized networks: for example, from a <strong>Process Control Network</strong> to a <strong>Process Information Network</strong> to a <strong>Business Network</strong>.

The diagram below illustrates such a configuration.

![500](/assets/media/data_core/tcp_06.png)

Alarms & Events (A&E) arrive on a serial feed and are captured by Serial Port Listener, data is collected then relayed. Three distinct data core nodes act as stepping stones across network boundaries. Firewalls at each boundary only require a single rule to allow the downstream flow of secure TCP traffic.

### Secure TCP Connection {: .title}

Connections between the TCP Event Sink and Source are only permitted
if an <em><strong>autheticated</strong></em>, <em><strong>encrypted</strong></em> and <em><strong>signed</strong></em> communication is established.

- TCP authentication on Windows Server 2012 or above (recommended) uses the Kerebos protocol and requires a system account (see "System Account Requirements" below).

- Data signing helps to protect the integrity of the data. namely, it helps the recipient determine whether the data has been tampered with while in transit.

  *Encryption protects the privacy of the data. It helps to ensure that while data is in transit it cannot be deciphered by third parties.

### Resilient Data Transfer {: .title}

The TCP Event Source and Sink supports resilient data transfer.

The diagram below includes a <strong>relient flow</strong> where transmission is guaranteed.

<img src="/assets/media/data_core/resilientflow.png" alt="resilientflow" style="max-width:800px" loading="lazy" />

Resilient flow uses [Microsoft Message Queue (MSMQ)](/data_core/msmqeventsourcesink.html) as a local collector (this is essential if data is arriving on an ephemeral flow). The TCP Event Sink component is then chained to the transactional MSMQ.

The TCP Event Sink is configured with the "Check Response" property set to true. This acts as a guaranteed delivery mechanism - repeating attempts to relay data downstream until a positive acknowledgement is received.

<img src="/assets/media/data_core/tcp_04.png" alt="tcp_04" style="max-width:700px" loading="lazy" />

### Fire & Forget {: .title}

The above "Resilient Data Transfer" method using TCP and MSMQ is not expected to introduce any overhead, however if a faster flow was required, paralel TCP components can be chained directly and configured to "fire-and-forget" by setting the "Check Reponse" property to false. Each event will pass through both fast and resilient flows and are consolidated at their final Alarm Analysis destination.

<img src="/assets/media/data_core/tcp_05.png" alt="tcp_05" style="max-width:700px" loading="lazy" />

### System Account Requirements {: .title}

For TCP authentication, the TCP Client supplies credentials for the TCP server to verify. This could be a service account available on a common domain, or if the Data Core Nodes are on separate networks,  a local windows account defined on the computer hosting the TCP Event Source (as in the picture below).

<img src="/assets/media/data_core/tcp_02.png" alt="tcp_02" style="max-width:300px" loading="lazy" />

The username and password is then supplied in the TCP Event Sink configuration.

<img src="/assets/media/data_core/tcp_03.png" alt="tcp_03" style="max-width:500px" loading="lazy" />

NB. Sensitive Data Core configuration is encrypted.

<strong>Omitting credentials</strong>

If both Data Core Nodes run as Windows services under LocalSystem on machines joined to the same Active Directory domain (or mutually trusted domains), the Username and Password fields can be left blank. The service will authenticate automatically using the machine account (DOMAIN\MACHINENAME$). Explicit credentials must be supplied in all other cases — for example, workgroup machines or machines in untrusted domains.

NB. When credentials are omitted, authentication falls back to NTLM rather than Kerberos. Data is still encrypted and signed, however NTLM does not provide mutual authentication — the TCP Event Sink cannot verify the identity of the TCP Event Source it is connecting to. Future releases are expected to introduce a <em>Require Mutual Authentication</em> option, which will enforce Kerberos and eliminate this limitation. When that option is enabled, or becomes mandatory in a later release, an explicit service account will be required.
