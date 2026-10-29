---
layout: wiki
title: "Create a Service Hub App"
permalink: /dev/app_store_-_create_services.html
---
1.Log in into your account on [Intelligent Plant Industrial App Store](https://appstore.intelligentplant.com/)

2.Navigate to "Applications" under "Developer" menu entry (if you haven't registered to be a developer - follow this wiki on [How to become a developer](/wiki/dev/app_store_-_become_a_developer.html)

<img src="/wiki/assets/media/dev/1_appservice.png" alt="1_appservice" style="max-width:300px" loading="lazy" />

3.Click on "Add New Application" in the top right corner

<img src="/wiki/assets/media/dev/3.png" alt="3" style="max-width:300px" loading="lazy" />

4.Provide a service name (e.g. Contoso Services) and a short description.

<img src="/wiki/assets/media/dev/6.png" alt="6" style="max-width:300px" loading="lazy" />

5.On application profile page you can skip straight to the bottom and hit "Add Application" button.

<img src="/wiki/assets/media/dev/2_appdev.png" alt="2_appdev" style="max-width:300px" loading="lazy" />

6.In app setting take a note of your Service App Id and Service App Secret Key. Add a URL to "Authorized Redirect Urls" where your service hub is hosted and append "signin-ip". For example "https://appstoredev.intelligentplant/serviceapphub/signin-ip"

<img src="/wiki/assets/media/dev/1.png" alt="1" style="max-width:300px" loading="lazy" />

## Modify Service Project

1. Open web.config file and update <em><strong>ServiceAppId</strong></em> and <em><strong>ServiceAppSecret</strong></em> with the service app hub which you have created in the steps above.

![service_app_vs](/wiki/assets/media/dev/service_app_vs.png)

2. In the example a SQL repository is used to store user tokens, you could use the example model by modifying the connection string to use your SQL server or you could implement your own solution/ repository.

3. Make sure you call app store debit api action to charge the user for the service.

4. Modify the UI to fit your theme.

## Create service app

1.Follow steps 2 to 4 above to create a service application.

2.On "Add an Application Profile Step" (the one we skipped in step 5 above) add screenshots and/or a description for your service you are going to provide.

<img src="/wiki/assets/media/dev/3_servdev.png" alt="3_servdev" style="max-width:300px" loading="lazy" />

<img src="/wiki/assets/media/dev/4_servdev.png" alt="4_servdev" style="max-width:300px" loading="lazy" />

3.Click "Add Application" to complete this step.

4.On application settings page add "Application Redirect Url". The URL should be where your service hub is hosted, plus two parameters:
<em>"servicename"</em> - service name <strong>must</strong> match the name you gave your application
<em>cost</em> - how much your service costs

For example if service hub is hosted on https://intelligentplant.com/servicehub, the "Application Redirect Url" would look like this:

<em>https://intelligentplant.com/servicehub/?servicename=Alarm%20Report%20Service&cost=33</em>
