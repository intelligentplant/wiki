---
layout: wiki
title: "Preparing for Azure AD Graph retirement"
permalink: /general/azure_ad_graph_retirement.html
---
### Outline

<strong>Azure AD Graph</strong> is an API gateway to Azure services, including authentication. This allows employees of organizations that have [registered with the Industrial App Store](/wiki/general/registering_an_organziation_with_the_app_store.html) to log in using their work credentials.

Microsoft have deprecated Azure AD Graph in favour of [Microsoft Graph](https://docs.microsoft.com/en-us/graph/overview). We expect Azure AD Graph to be discontinued some time in 2023.

Intelligent Plant are preparing for this transition and currently request organizations to grant user.read consent to both Azure AD Graph and Microsoft Graph. However, if your organization registered before Microsoft Graph was available they will need to re-register now.

### Is my organization affected?

An Azure AD administrator for your organization can check current Graph consents:

 1. Log in to [Azure Portal](https://portal.azure.com)

 2. Navigate to Azure Active Direcory > Enterprise Applications > Intelligent Plant Industrial App Store > Security > Permissions

<img src="/wiki/assets/media/general/msgraph01.png" alt="msgraph01" style="max-width:600px" loading="lazy" />

If Microsoft Graph User.Read claim is <strong>not</strong> listed, then action is required.

### How to grant user.read consent to Microsoft Graph?

The easiest method is to simply repeat the Organization Registration process:

- [Registering an Organization with the Industrial App Store](/wiki/general/registering_an_organziation_with_the_app_store.html)

### References

- [Update your applications to use Microsoft Authentication Library and Microsoft Graph API](https://techcommunity.microsoft.com/t5/azure-active-directory-identity/update-your-applications-to-use-microsoft-authentication-library/ba-p/1257363)
