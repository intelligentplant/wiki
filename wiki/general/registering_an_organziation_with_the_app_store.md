---
layout: wiki
title: "Registering an Organization with the Industrial App Store"
permalink: /general/registering_an_organziation_with_the_app_store.html
---
If an organization uses Microsoft Entra ID (formerly Azure AD), we recommend that they register with the Industrial App Store.

- [Organization Registration Sign Up Page](https://appstore.intelligentplant.com/Onboarding/SignUp)

Registering allows the Industrial App Store to delegate the responsibility of user authentication to your organization's Microsoft Entra ID.

<em><strong>Registering has the following advantages:</strong></em>

- Single Sign-On is enabled for users, meaning they can log in to the Industrial App Store with their work credentials.

- Organizations can enforce the use of security features such as multi-factor authentication (MFA) when signing users in.

- Organizations can control who can sign in to IAS via Entra ID groups.

- Organizations can review Industrial App Store sign-in activity via Azure Portal.

<em>Organizations can remove the Industrial App Store from their approved application list at any time. Registering <strong>does not allow</strong> Intelligent Plant to browse an organization's Microsoft Entra ID, view or modify group memberships, or obtain secure credentials such as passwords.</em>

<em>For more information about how Entra ID supports user sign-in, refer to Microsoft's notes on [Understanding Entra ID application consent experiences](https://learn.microsoft.com/en-us/entra/identity-platform/application-consent-experience).</em>

### Who can Register an Organization? {: .title}

To register with the Industrial App Store, your organization must use Microsoft Entra ID. If your organization uses Microsoft 365 Enterprise, (formerly Office 365) you are already using Microsoft Entra ID!

To be able to register your organization, you must be assigned to one of the following [Microsoft Entra ID Roles](https://learn.microsoft.com/en-us/entra/identity/role-based-access-control/permissions-reference#global-administrator):

- Global Administrator
- Application Administrator
- Cloud Application Administrator

If you are unsure if you have the required permissions, contact your IT administrator.

### How does Organization Registration Work? {: .title}

On successful registration, <strong>Intelligent Plant Industrial App Store</strong> is added to your organization's Entra ID Enterprise Applications list.

IT administrators can view registered applications and configure or review user access via Azure Portal.

### What Permissions are Requested? {: .title}

The Industrial App Store requests the ["Sign in and read user profile"](https://docs.microsoft.com/en-us/graph/permissions-reference#user-permissions) permission for the [Microsoft Graph](https://docs.microsoft.com/en-us/graph/). This permission (also known as <code>User.Read</code>) allows the Industrial App Store to retrieve basic information about your organization's users when they sign in to personalise their experience. For more info on how this data is used, refer to our [Privacy Policy](https://appstore.intelligentplant.com/Content/assets/legal/IAS-PrivacyPolicy.html).

Consent for this scope is requested on behalf of your organization, which is why you must be in one of the required administrative roles described above in order to grant this consent.

The Industrial App Store previously used Microsoft's [Azure AD Graph](https://docs.microsoft.com/en-us/graph/migrate-azure-ad-graph-overview) to retrieve user information. When registering your organization, you may see "Sign in and read user profile" listed twice in the requested permissions (once for the Microsoft Graph and once for the Azure AD Graph):

<img src="/wiki/assets/media/general/orgs/ias_aad_permissions.png" alt="ias_aad_permissions" style="max-width:200px" loading="lazy" />

Microsoft has announced that the Azure AD Graph is being retired in favour of the Microsoft Graph. Requesting the permission from both APIs allows the Industrial App Store to maintain backwards compatibility until support for the Azure AD Graph is removed.
