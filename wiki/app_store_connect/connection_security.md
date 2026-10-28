---
layout: wiki
title: "App Store Connect: Connection Security"
permalink: /app_store_connect/connection_security.html
---
### Encrypted Connection {: .title}

App Store Connect connects to the App Store using Microsoft's SignalR technology, which allows for secure, 2-way communication between App Store Connect and the App Store.

The exact communication protocol is determined by the capabilities of the computer running App Store Connect; if the computer is capable of using HTML5 websockets (Windows Server 2012 or later, Windows 8 or later), the App Store connection will automatically be upgraded to a secure websocket connection for best performance.  Earlier versions of Windows will fall back to other communication protocols, but the connection is always encrypted, regardless of which protocol is used.

The secure connection allows App Store Connect to communicate with the App Store, and vice versa, but prevents any application from accessing your data unless it meets several layers of security requirements.

### Security That Puts You In Control {: .title}

All App Store applications use industry-standard OAuth2 authentication when communicating with the App Store, to ensure that no application can access your data without your permission.  When you open an application, the application must prove to the App Store that it is a genuine application, and tell the App Store about what kind of information it requires (e.g. access to your user profile, access to App Store Connect data sources).  The App Store displays a consent screen where you can decide if the application is allowed to access the scope of information that it is requesting:

<img src="/assets/media/general/authorize.png" alt="authorize" style="max-width:600px" loading="lazy" />

Furthermore, if an application wants to access your App Store Connect data sources, you must explicitly choose which data sources it can access:

<img src="/assets/media/general/auth02.png" alt="auth02" style="max-width:600px" loading="lazy" />

An application cannot access a data source unless you explicitly allow it.  You can revoke access to a data source at any time from the [App Store settings](https://appstore.intelligentplant.com/Security/Apps) page:

<img src="/assets/media/general/auth03.png" alt="auth03" style="max-width:600px" loading="lazy" />

Once you have given your consent to the application to access your information, the application is given a time-limited, encrypted token that it can use to authorize calls to the App Store (e.g. to perform a tag search, or to request tag values).  The token contains information about the application that it was issued to, and about the scope of App Store information that it is allowed to access.  The App Store verifies that the token is genuine, and will reject any request that uses an invalid or expired token.

Information about the exact data sources that an application can access is not stored in the token; instead, this information is stored by the App Store and is verified for every request.  This means that, if you revoke access to a data source, this change is immediate.

To summarise, an application cannot access an App Store Connect data source unless:

- The application is registered with the App Store.
- You explicitly allow the application to access the data source.
- The application is in possession of a valid, time-limited access token that authorizes it to request data.
