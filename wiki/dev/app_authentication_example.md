---
layout: wiki
title: "App Authentication Example"
permalink: /dev/app_authentication_example.html
---
All Apps must authenticate through the App Store OAuth2 Authorization Server.

[https://tools.ietf.org/html/rfc6749|OAuth 2.0) is an IETF specification that allows 3rd party applications to gain limited access to an HTTP service on behalf of a user.

OAuth is used extensively on the web already: if you have ever logged into a 3rd party web site using your Facebook, Google, or LinkedIn account, you have already used OAuth.

The App Store also has its own OAuth service, to allow applications such as the Valve Signature Tool to log users in via the App Store, and to allow those applications to charge users for application usage.

Below is a simple example illustrating the [Authorization Code Grant Flow](https://tools.ietf.org/html/rfc6749#section-4.1) recommended for Web-Server Apps. Note the process is different for Excel, browser-based and other types of App.

There are a number of OAuth2 helper libraries available (depending on your development platform), however the example below considers a basic manual approach.

#### 1. Registering your Web App

In order to use the App Store OAuth service, an application must be registered with the App Store.

##### 1.1 Redirect URIs

When registering your App, you are asked to provide one or more valid Redirect URIs. The Authorization Server will only respond to HTTP requests from registered URIs. This helps prevent [Man-in-the-Middle attacks](https://en.wikipedia.org/wiki/Man-in-the-middle_attack).

Since the HTTP request carries secure information, we also stipulate all requests are from secure HTTPS sources.

##### 1.2 Application Id and Secret Key

Upon App registration, you are assigned an Application Id and Secret Key. The Application Id is considered public information. It composes part of the URL request to the App Store Authorization Server and can easily be identified by the user.

The Secret Key, however, <strong>must</strong> remain confidential. It should only be used server-side (i.e not in the web-browsing client). If a deployed app cannot keep the secret confidential, then an alternative grant flow must be considered.

##### 1.3 Application Status

Your registered App is given a status. Be sure this is not active until you are satisfied it is fully tested. Once an App is "Active" attempts debit requests are treated as genuine and transactions are processed.

##### 1.4 Scopes

OAuth permissions are known as scopes, and are used to control which information about a user an application can access, or restrict the actions that the application can perform on behalf of a user.

When a user is prompted to log into a web site via an OAuth service, the scopes are explained to the user so that they can decide whether or not to proceed.  For example, when logging into the App Store via LinkedIn, a user is informed that the App Store will be able to access profile information including the user's email address, profile picture, and the industry that they work in.

The App Store's OAuth service currently supports 3 scopes:

- <strong>UserInfo</strong> - used to allow an application to access information about a user
- <strong>AccountDebit</strong> - used to allow an application to bill a user for usage
- <strong>DataRead</strong> - used to allow an application to access a user's App Store Connect data

Applications are not obliged to ask for access to all of the above scopes; they can pick and choose the scopes that they require.

#### 2. Authorization

In your App, create a "Log In" link sending the user to:

```

https://appstore.intelligentplant.com/AuthorizationServer/OAuth/Authorize?response_type=code&
  client_id=CLIENT_ID&redirect_uri=REDIRECT_URI&scope=SCOPES
```

<strong>Parameters</strong>

   <strong>*response_type</strong>: The authorization process. In this case, "code" indicates we're authenticating via an "Authorization Code Grant Flow".
   <strong>*client_id</strong>: The Application Id assigned to you.
   <strong>*redirect_uri</strong>: Where the authentication server should return to. If left blank, it will return to the URI of the request. Remember, the Redirect URI must be https address registered with the App Store.
   <strong>*scopes</strong>: These can be specified on the request, or during app registration. Refer to the App Store API and determine which scopes your application requires to function.

The link resolves to a log-in prompt, requesting the user log-in via Microsoft, then authorize the Apps scope request.

If the user clicks "Allow," App Store redirects the user back to your site with an authentication code.

```

https://www.YourApp.com/cb?code=AUTH_CODE_HERE
```

The Authentication Code should not be returned to the app user. In the "Authorization Code Grant Flow", it is the responsibility of your server-side code to then request the Authentication Code be exchanged for an access token. <em>Note this request contains the Secret Key parameter.</em>

```

POST https://appstore.intelligentplant.com/AuthorizationServer/OAuth/Token
    grant_type=authorization_code&
    code=AUTH_CODE_HERE&
    redirect_uri=REDIRECT_URI&
    client_id=CLIENT_ID&
    client_secret=CLIENT_SECRET
```

The server replies with an access token

```
    "access_token":"RsT5OjbzRn430zqMLgV3Ia"
```

#### 3. Authenticated Requests

Now that you have an access token, you can make requests to the App Store API.

##### 3.1 Access Tokens

When an application logs a user in via an OAuth service, they receive an access token for the user, also known as a bearer token, as well as information about when the access token expires, and (possibly) a refresh token that can be used to retrieve a new access token when the old one expires, instead of requiring the user to explicitly log into the application again.

The token contains embedded information about the user, and is signed and encrypted by the OAuth service so that only the machine that issued the token can authenticate requests made using the token.  When an HTTP request is authenticated using a bearer token, a `ClaimsIdentity` object is assigned to the OWIN request object that contains all of the claims that were embedded in the token.

To authenticate requests made to the App Store API, the calling application must include a valid access token in the HTTP headers of the request.  The token is specified using the `Authorization` HTTP request header, using the `Bearer` authentication scheme.  For example:

```

var request = new HttpRequestMessage(HttpMethod.Get, "https://appstore.intelligentplant.com/api/resource/getuserinfo");
request.Authorization = new AuthenticationHeaderValue("Bearer", "my_access_token");

var response = await httpClient.SendAsync(request, someCancellationToken).ConfigureAwait(false);
...
```
