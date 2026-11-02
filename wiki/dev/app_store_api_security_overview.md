---
layout: wiki
title: "App Store API Security Overview"
permalink: /dev/app_store_api_security_overview.html
---
Before an application can interact with the <em><strong>App Store %%API%%</strong></em> and access data that belongs to a user, it must obtain explicit authorization from said user. The App Store provides as OAuth2 Authorization Service to facilitate this action. A non-technical summary of the security flow is as follows:

#### Step 1. User Authentication

`Is the user who they claim to be?`

Any interaction between a user and the App Store must be authenticated. If the user is not authenticated, App Store will redirect your request to the log-in page.

<img src="/wiki/assets/media/dev/apisecurity01.png" alt="apisecurity01" style="max-width:200px" loading="lazy" /> <img src="/wiki/assets/media/dev/apisecurity02.png" alt="apisecurity02" style="max-width:200px" loading="lazy" />

This means the App User must have a Microsoft account.

If user agrees, we proceed to App Authentication.
#### Step 2. App Authentication

`Is the App who they claim to be?`

We only trust registered Apps. When you register an App with the App Store, you are assigned:

- An AppId - a unique reference for your application
- An AppSecret - a secret key never to be shared

And for web app developers, we require a record of

- the Web App %%URL%%(s)

We will only trust internet requests from recognized domains.

#### Step 3. App Authorization

`Is the User okay for the App to act for them?`

Each <em><strong>App Store %%API%%</strong></em> method has one or more security pre-requisites. For instance, methods to access a user's App Store Connect data sources are only available if the user has authorized the App to access their data sources.

Thus, the App must tell the App Store which privileges it requires. The App Store then prompts the user to Authorize this request.

<img src="/wiki/assets/media/dev/apisecurity03.png" alt="apisecurity03" style="max-width:200px" loading="lazy" />

#### Step 4. Access Token

Once steps 1-2-3 above are satisfied, the App Store will issue an access token - opening up the <em><strong>App Store %%API%%</strong></em> and allow your App to fully interact with the App Store.

- The <em><strong>App Store %%API%%</strong></em> Methods: https://appstore.intelligentplant.com/apihelp
