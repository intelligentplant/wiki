---
layout: wiki
title: "Industrial App Store FAQ"
permalink: /general/industrial_app_store_faq.html
---
Thinking about registering with the App Store but want to know a bit more about it first? You're not alone, below are  our most Frequently Asked Questions. If yours aren't answered, get in touch.

### What is the Industrial App Store? {: .title}

The Industrial App Store is an online marketplace for industrial applications. Industrial Apps typically perform visualization and analysis functions on industrial process time-series data (e.g. pressures, temperatures, choke positons, tank levels, flow-rates, etc...) and/or Alarm & Event data (e.g. outputs from monitors on SCADA, DCS, and ESD systems).

<em><strong>More Info</strong></em>
- [https://appstore.intelligentplant.com](https://appstore.intelligentplant.com)

<div class="title wiki-divider" aria-hidden="true"></div>
### What is App Store Connect? {: .title}

App Store Connect is Intelligent Plant's data-routing and data-access software. It is installed to a customer network and enables connectivity between customer data sources and cloud based applications available on the Industrial App Store.

<em><strong>More Info</strong></em>
- [App Store Connect on the Industrial App Store](https://appstore.intelligentplant.com/Home/AppProfile?appId=a73c453df5f447a6aa8a08d2019037a5)

<div class="title wiki-divider" aria-hidden="true"></div>

### How does App Store Connect work? {: .title}

App Store Connect runs as a windows service on your corporate network (it's the only installation you need to do).

Once set-up, it acts as a data conduit routing queries from Industrial App Store users to data sources configured on your App Store Connection. This video provides a good introduction...

- [App Store Connect Explanation Video](https://youtu.be/84X7k1sS_tU)

<div class="title wiki-divider" aria-hidden="true"></div>

### What historians does App Store Connect support? {: .title}

[Supported Data Sources](/data_core/data_sources.html)

<div class="title wiki-divider" aria-hidden="true"></div>
### Is App Store Connect safe? {: .title}

App Store Connect has already been approved for use by a number of blue chip clients and we're ready to work with your Digital Security Team.

For starters, here's an overview of our [Digital Security Key Features](https://appstore.intelligentplant.com/nuget/downloads/IAS-Digital%20Security-Key%20Features.pdf).

<div class="title wiki-divider" aria-hidden="true"></div>

### Where is data stored? {: .title}

Client data remains on client infrastructure. App Store Connect is not a data transfer tool, it is a connection tool.

<div class="title wiki-divider" aria-hidden="true"></div>

### Have you a privacy policy? {: .title}

Yes, read it [here](https://appstore.intelligentplant.com/Content/assets/legal/IAS-PrivacyPolicy.html).

<div class="title wiki-divider" aria-hidden="true"></div>

### I'm new to the App Store, where do I start? {: .title}

Take a [look around](https://appstore.intelligentplant.com). Click on the app cards for more information and video links. Get in touch with us for more information.

<div class="title wiki-divider" aria-hidden="true"></div>

### How do I connect an historian to the Industrial App Store? {: .title}

App Store Connect ships with connectors for most Industrial Data Historians. The configuration required for each will be slightly different, but the general procedure is the same:

1. Install App Store Connect
1. Configure Real Time Data Source

More information is available on: [How to Connect your data to the App Store](/data_core/how_to_connect_your_data_to_the_app_store.html).

<div class="title wiki-divider" aria-hidden="true"></div>

### Can I use the Industrial App Store to collaborate with colleagues in other companies? {: .title}

The [Wood Review on UK offshore oil and gas recovery (2014)](https://www.ogauthority.co.uk/media/1014/ukcs_maximising_recovery_review.pdf) identified:

   the need for far greater constructive collaboration between operators

With this in mind, we designed data collaboration at the heart of the Industrial App Store. Organizations can enable trusts that enable their employees to work together.

For more information, see [Inter-organization Trust Management](/general/organization_user_and_data_management/trust_management.html).

<div class="title wiki-divider" aria-hidden="true"></div>

### How can I find out if my organization is using the Industrial App Store? {: .title}

Contact <support@intelligentplant.com> and we'll you know.
<div class="title wiki-divider" aria-hidden="true"></div>

### Do I need to install App Store Connect? {: .title}

You only need to install App Store Connect if you want to connect data to applications. If your organization is already registered with the Industrial App Store, the chances are that an App Store Connect has already been set-up and access to organization data sources configured. If so, you should contact your App Store Connect administrator and request access.

If you do not know who your App Store Connect administrator is, contact <support@intelligentplant.com>.

<div class="title wiki-divider" aria-hidden="true"></div>

### How do Microsoft Power Tools (Power BI, Flow Automate, Power Apps) integrate with the Industrial App Store? {: .title}

In March 2019 Microsoft announced that Power BI Desktop would ship with [Intelligent Plant’s Industrial App Store connector](https://powerbi.microsoft.com/en-us/blog/power-bi-desktop-march-2019-feature-summary/#IntelligentPlantsIndustrialAppStore). This means you can now connect your Industrial Data Historians directly Power BI reports (no need to export to excel or SQL first).

Connectors for Microsoft Power Apps and Automate soon followed.

<div class="title wiki-divider" aria-hidden="true"></div>

### How does the Industrial App Store fit with the Industrial Internet of Things (IIOT)? {: .title}

<div class="title wiki-divider" aria-hidden="true"></div>

### My country/company has strict data protection laws. Can I still use the Industrial App Store? {: .title}

App Store Connect can be a good solution where data protection laws prohibit the migration of data across borders. App Store Connect enables access to existing data sources rather than moving data to alternative repositories in other countries.

<div class="title wiki-divider" aria-hidden="true"></div>

### How do you protect passwords and other authentication related information ? {: .title}

We don't store user passwords. We advise organizations that use Microsoft Entra ID to register their organization with the Industrial App Store. This means Microsoft take care of user authentication.

<em><strong>More Info</strong></em>
- [How to register an organization with the App Store](/general/registering_an_organziation_with_the_app_store.html)

<div class="title wiki-divider" aria-hidden="true"></div>

### Do you support multi-factor authentication? {: .title}

Yes. If you register your organization with the Industrial App Store, your Domain Administrator can enable multi-factor authentication on your Microsoft Entra ID.

<em><strong>More Info</strong></em>
- [How to register an organization with the App Store](/general/registering_an_organziation_with_the_app_store.html)
- [What authentication and verification methods are available in Microsoft Entra ID?](https://learn.microsoft.com/en-us/entra/identity/authentication/concept-authentication-methods)

<div class="title wiki-divider" aria-hidden="true"></div>
### How do you protect transmitted data? {: .title}

All internet communication is encrypted via HTTPS.

<div class="title wiki-divider" aria-hidden="true"></div>
### Do you perform security audits? {: .title}

Intelligent Plant (who manage the Industrial App Store) are [ISO 9001](https://en.wikipedia.org/wiki/ISO_9000) and [ISO/IEC 27001](https://en.wikipedia.org/wiki/ISO/IEC_27001) accredited.

![iso-27001-2013-badge-grey](/assets/media/general/iso-27001-2013-badge-grey.png)

<div class="title wiki-divider" aria-hidden="true"></div>

### Will upgrading Windows OS impact Intelligent Plant software? {: .title}

The Industrial App Store model means that apps are hosted in the cloud and therefore software management is not an issue for organization IT departments. However, you may host some software on-prem - for example, App Store Connect, Data Core Nodes, or stand-alone instances of Intelligent Plant apps.

In these cases, refer to our guidance notes for more information.

- [Preparing for a Server Upgrade](/general/preparing_for_a_server_upgrade.html)
