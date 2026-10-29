---
layout: wiki
title: "App Store Security"
permalink: /general/security.html
---
The Industrial App Store (IAS) is a marketplace of apps for industrial processes. Contact Intelligent Plant to request a demo or arrange a subscription. Apps perform sensitive data operations, therefore security is paramount.

We aim for the highest web security standards. Here's an overview of our policies.

### Secure Web Requests and HTTPS {: .title}

`Can information you send and request be intercepted over the internet?`

Take a look at the address bar in your web browser.

<img src="/wiki/assets/media/general/https.png" alt="https" style="max-width:600px" loading="lazy" />

Note the padlock and "https" prefix in our web address.

<em>HTTP</em> stands for Hyper Text Transfer Protocol, the communication protocol of the World Wide Web. <em>S</em> stands for secure. It means <strong>all communication between you and the App Store is encrypted</strong>. It is the same approach used in banking websites.

Encryption does not prevent message interception, but it does mean the information content is secure.

<div class="title wiki-divider" aria-hidden="true"></div>

### Logging in to the App Store and User Authentication {: .title}

`Is a user who they claim to be?`

Any interaction between a user and the App Store must be authenticated. If a user is not authenticated, App Store redirects to a log-in page.

The App Store uses Microsoft for authentication. Organizations register with the App Store to allow their employees to log in with their work accounts via Microsoft Entra ID.

Using a trusted 3rd party security provider such as Microsoft for authentication is an increasingly popular method of managing the log-in process. It means you don't need to set-up and remember a dedicated log-in for the App Store, and at no point is your Microsoft password divulged to us.

#### Work Account Authentication

This is managed via Microsoft Entra ID:

//"Entra ID can be integrated with an existing Windows Server Active Directory, giving organizations the ability to leverage their existing on-premises identity investments to manage access to cloud based SaaS applications."
//

[Microsoft Entra ID](https://learn.microsoft.com/en-us/entra/fundamentals/whatis)

<div class="title wiki-divider" aria-hidden="true"></div>

### Application Security {: .title}

`Can I trust the Apps in the App Store?`

The App Store is a marketplace of Industrial Applications from a variety of vendors. However, all adhere to our
security architecture which forces applications to request explicit user authorization.

When you log in to an App Store app, you'll receive an authorization prompt like the following:

<img src="/wiki/assets/media/general/authorize.png" alt="authorize" style="max-width:600px" loading="lazy" />

- An app can only access your App Store profile if <strong><em>you</em></strong> authorize it.
- An app can only charge your App Store account if <strong><em>you</em></strong> authorize it.
- An app can only access datasources <strong><em>you</em></strong> authorize it to access.

You can revoke this authorization at any time.
