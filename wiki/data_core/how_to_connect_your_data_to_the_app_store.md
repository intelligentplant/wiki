---
layout: wiki
title: "How to Connect your Data to the App Store"
permalink: /data_core/how_to_connect_your_data_to_the_app_store.html
---
Connecting to the <strong>App Store</strong> allows you to use your own data sources (including OSIsoft PI, OPC, and more) with <strong>App Store</strong> applications such as <strong>Gestalt Trend</strong> and <strong>PnID</strong>. It does this via a secure outgoing connection. It will not compromise the security of your server or network.

To get up and running, you need to undertake the following tasks:

1. [Install App Store Connect](#install-app-store-connect)
1. [Configure App Store Connect](#configure-app-store-connect)
1. [Connect Data Sources](#connect-data-sources)

Each step is explained in detail below:

### Install App Store Connect {: .title}

The first step in connecting your data to the App Store is downloading and installing App Store Connect.

1. Go to the [App Store](http://appstore.intelligentplant.com), log-in and select <strong>My Account > Get Connected</strong>
1. Click on <strong>Download App Store Connect</strong>
1. Once downloaded, start the Installer (right click and select "run as administrator").

The installer takes you through the following steps. We recommend you choose the default <strong>Typical</strong> set-up option.

<img src="/assets/media/data_core/installdatacore01.png" alt="installdatacore01" style="max-width:300px" loading="lazy" /> <img src="/assets/media/data_core/installdatacore02.png" alt="installdatacore02" style="max-width:300px" loading="lazy" /> <img src="/assets/media/data_core/installdatacore04.png" alt="installdatacore04" style="max-width:300px" loading="lazy" />

### Configure App Store Connect {: .title}

Once installed, open the configuration page (http://localhost:2006/Service)

1. Authorize App Store Connect by selecting "Log In".

The account you use to log-in is important. For example, if you log-in using a work account, the App Store Connection is immediately assoicated with your organization, thus enabling [data sharing with organization colleagues and other parties trusted by your organization](/general/organization_user_and_data_management.html).

Typically, the person in charge of the App Store Connect performs the initial log-in operation. Alternatively, a dedicated service account can be employed. For the latter, the service account does not need any elevated priviliges, but must support interactive login to allow for the initial authentication step.

<img src="/assets/media/data_core/configureasc01.png" alt="configureasc01" style="max-width:300px" loading="lazy" /> <img src="/assets/media/data_core/configureasc04.png" alt="configureasc04" style="max-width:300px" loading="lazy" />

3. Once credentials are set, start it up.

<img src="/assets/media/data_core/configureasc03.png" alt="configureasc03" style="max-width:300px" loading="lazy" />

### Connect Data Sources {: .title}

To connect Data Sources, we need to configure Data Core.

1. Open the App Store Connect configuration page (http://localhost:2006/Service) then select "Configure Data Core"

<img src="/assets/media/app_store_connect/asc_00.png" alt="asc_00" style="max-width:300px" loading="lazy" />

2. From top navigation, select "Real Time Data > Data Sources".

<strong>NB.</strong> Only Data Core Administrators can configure data-sources. If "Real Time Data" is not present in the menu navigation, refer to [Data Core Administrator Privileges](/app_store_connect/data_core_administrator_privileges.html).

<img src="/assets/media/app_store_connect/asc_01.png" alt="asc_01" style="max-width:300px" loading="lazy" />

3. Select "Create a Data Source"

<img src="/assets/media/app_store_connect/asc_03.png" alt="asc_03" style="max-width:300px" loading="lazy" />

You will be presented with a list of available datasources - each with it's own properties and settings. For driver specific information, refer to [Advanced Data Core Configuration](/data_core/advanced_data_core_configuration.html).

[Get in touch](https://www.intelligentplant.com/about-us) and let us know about the data you're connecting.
