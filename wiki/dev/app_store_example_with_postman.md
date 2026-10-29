---
layout: wiki
title: "App Store Example using Postman"
permalink: /dev/app_store_example_with_postman.html
---
In this example, we'll use Postman to make an authorization request and %%API%% call to the App Store.

//Postman is an Web %%API%% testing tool that runs on top of Google Chrome. It can be downloaded for free and provides a practical example of an external app interacting with the Industrial App Store.
//

Download and install Postman to get started: [https://www.getpostman.com](https://www.getpostman.com)

##### App Store Authentication and API Call Example

In our example we'll prepare a request to the App Store %%API%% method:[GET api/Resource/UserInfo](https://appstore.intelligentplant.com/ApiHelp/Api/GET-api-Resource-UserInfo)

<em>This returns info about the logged-in user.</em>

<img src="/wiki/assets/media/dev/postman01.png" alt="postman01" style="max-width:600px" loading="lazy" />

If you attempt to execute this directly, you will receive an unauthorized error like the following:

```
{
  "Message": "Authorization has been denied for this request."
}
```

This is because the App Store %%API%% is secured using OAuth2.

To prepare an authorization request, select: <strong>Authorization > OAuth 2.0</strong>

Specify "add authorization data to request headers".

<img src="/wiki/assets/media/dev/postman01b.png" alt="postman01b" style="max-width:600px" loading="lazy" />

Then click <strong>Get New Access Token</strong>.

You will be prompted for the following Authorization parameters:

<img src="/wiki/assets/media/dev/postman02.png" alt="postman02" style="max-width:600px" loading="lazy" />

<table class="wiki-table">
<tbody>
<tr><td>Grant Type</td><td>Authorization Code</td></tr>
<tr><td>Call Back %%URL%%</td><td>%%https://app.getpostman.com/oauth2/callback%%</td></tr>
<tr><td>Auth %%URL%%</td><td>%%https://appstore.intelligentplant.com/AuthorizationServer/OAuth/Authorize%%</td></tr>
<tr><td>Access Token %%URL%%</td><td>%%https://appstore.intelligentplant.com/AuthorizationServer/OAuth/Token%%</td></tr>
<tr><td>Client %%ID%%</td><td>[We'll give you this if you ask]</td></tr>
<tr><td>Client Secret</td><td>[We'll give you this if you ask]</td></tr>
<tr><td>Scope</td><td>%%UserInfo%%</td></tr>
<tr><td>Client Authentication</td><td>Send as Basic Auth header</td></tr>
</tbody>
</table>

This returns an Access Token.

<img src="/wiki/assets/media/dev/postman03.png" alt="postman03" style="max-width:600px" loading="lazy" />

Select "Use Token", try sending the %%API%% request again, and this time we get the %%UserInfo%% result.

<img src="/wiki/assets/media/dev/postman04.png" alt="postman04" style="max-width:600px" loading="lazy" />

##### Summary

In the above example we used Postman to simulate an external app interacting with the App Store. Postman has been registered for use with the App Store and obtained the required security credentials.
For more info, see <strong>[Register your App](/wiki/dev/register_your_app.html)</strong>.

Postman exposes the parameters required to make an OAuth2 authorization request. Your application should execute this behind the scenes. For more info, see <strong>[App Store API Security Overview](/wiki/dev/app_store_api_security_overview.html)</strong>.

Finally, we used App Store as a means of authenticating users and presenting user-information. However, there is an extensive %%API%% available, including methods for user-account debiting and real-time process-data interrogation. For more info, see <strong>[App Store API Documentation](https://appstore.intelligentplant.com/apihelp)</strong>.
