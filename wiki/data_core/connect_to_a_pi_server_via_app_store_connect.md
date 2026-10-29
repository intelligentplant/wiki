---
layout: wiki
title: "Connect to a PI Server via App Store Connect"
permalink: /data_core/connect_to_a_pi_server_via_app_store_connect.html
---
Before you can configure an PI Server connection, App Store Connect must be running. If you have not done this yet, refer to: [How to Connect your Data to the App Store](/wiki/data_core/how_to_connect_your_data_to_the_app_store.html)

App Store Connect also requires <strong>OSIsoft PI Data Source Driver</strong>. To make this available, we suggest installing
<strong>PI AF Client 2014 or above (64bit)</strong>.

### To configure a PI Server connection {: .title}

1. Open you App Store Connection and select "Data Sources".

![piconfig01](/wiki/assets/media/data_core/piconfig01.png)

2. Select "Create New Data Source"

![piconfig02](/wiki/assets/media/data_core/piconfig02.png)

3. Select Type "OSISoft PI" and provide a name for your Data Source connection.

![piconfig03](/wiki/assets/media/data_core/piconfig03.png)

4. Configure your PI Server settings. Most of the default settings should suffice, however you will need to enter details for "Server", "Username" and "Password". Finally, set the "Disabled" setting to "False".

![piconfig04](/wiki/assets/media/data_core/piconfig04.png)

<em>Your PI App Store Connection is now available.</em>

### Test your PI Server connection {: .title}

A quick test of your connection is available from the above administration pages. Return to the "Data Sources" page (step 2 above) and choose "Tags".

![piconfig05](/wiki/assets/media/data_core/piconfig05.png)

The Tags page allows you to query available tags on your PI Server.

![piconfig06](/wiki/assets/media/data_core/piconfig06.png)
