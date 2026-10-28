---
layout: wiki
title: "Increase Service Timeout"
permalink: /data_core/increase_service_timeout.html
---
Data Core consists of two windows services:

<img src="/assets/media/data_core/ip_dc_services.png" alt="ip_dc_services" style="max-width:700px" loading="lazy" />

We've observed that the Intelligent Plant Data Core Service does not always reliably start following an ungraceful shutdown of a VM Host (i.e. a power cut).

The underlying cause is not fully understood, but we believe it is related to the high resource overhead of extra checks Windows performs following a dirty shutdown, resulting in a service start timeout. Moreover, windows service recovery options (which should attempt further restarts) do not trigger on a timeout.

If Data Core is performing a critical function in an environment with an unreliable power source, consider configuring an extended <em>service-timeout</em> to mitigate for this problem.

<strong>Microsoft Guidance</strong>

- [A slow service does not start due to time-out error in Windows](https://learn.microsoft.com/en-us/troubleshoot/windows-server/system-management-components/service-not-start-events-7000-7011-time-out-error)
