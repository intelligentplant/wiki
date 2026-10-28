---
layout: wiki
title: "How to Run App Store Connect under a Service Account"
permalink: /data_core/how_to_run_app_store_connect_under_a_service_account.html
---
When configuring a Data Source Connection in <strong>App Store Connect</strong> you have the option to specify username and password credentials. However, this may not always be desired.

Rather than specify explicit credentials in the connection object, you may prefer to have the underlying App Store Connect Windows Service employ an account that has data access permissions.

//The following instructions describe how to enable this process://

<strong>1. Do not specify user credentials in Data Source Connection</strong>

If left blank the default behaviour is to use App Store Connect service account.

<img src="/assets/media/data_core/serviceacct03.png" alt="serviceacct03" style="max-width:500px" loading="lazy" />

<strong>2. Service Account Security</strong>

As well as PI Access, the service account should have rights configured on the local server folder:

- Read & Execute: %ProgramFiles%/Intelligent Plant
- Full Control: %ProgramData%/Intelligent Plant

<strong>3. Modify the App Store Connect Service Account</strong>

3.1 In Windows Services, select: <strong>Intelligent Plant Data Core Service</strong>

<img src="/assets/media/data_core/serviceacct01.png" alt="serviceacct01" style="max-width:500px" loading="lazy" />

3.2. Change default Local System account to preferred alternative.

<img src="/assets/media/data_core/serviceacct02.png" alt="serviceacct02" style="max-width:500px" loading="lazy" />
