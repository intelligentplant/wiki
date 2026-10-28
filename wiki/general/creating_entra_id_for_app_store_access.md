---
layout: wiki
title: "Creating an Entra ID for Industrial App Store Access"
permalink: /general/creating_entra_id_for_app_store_access.html
---
If your organization does not currently use Microsoft Entra ID (formerly Azure AD), you can create a dedicated Entra ID tenant specifically for managing user access to the Industrial App Store.

### When this approach is recommended {: .title}

Creating a dedicated Entra ID tenant is recommended when:

- Your organization does not use Microsoft 365 Enterprise or other Microsoft cloud services that include Entra ID.

- You want to manage Industrial App Store user authentication and access control centrally.

- You want to leverage security features such as multi-factor authentication (MFA) and conditional access policies.

- You want to maintain control over who can access your organization's data via the Industrial App Store.

Once you have set up your Entra ID tenant, you can [register your organization with the Industrial App Store](/general/registering_an_organziation_with_the_app_store.html) to enable Single Sign-On and centralized access management.

### What is Microsoft Entra ID? {: .title}

Microsoft Entra ID is Microsoft's cloud-based identity and access management service. For the Industrial App Store, it handles user authentication and allows your organization to control which employees can access the platform and your data.

### Setting Up a Dedicated Entra ID Tenant {: .title}

#### Basic Configuration

To create and configure an Entra ID tenant:

1. <strong>Create an Azure account</strong> (if you don't have one)
  - [Sign up for a free Azure account](https://azure.microsoft.com/en-us/free/)

1. <strong>Set up your Entra ID tenant</strong>
  - [Create a new tenant in Microsoft Entra ID](https://learn.microsoft.com/en-us/entra/fundamentals/create-new-tenant)
  - Choose a meaningful tenant name (e.g., "IAS - <Company Name>")

1. <strong>Add users to your directory</strong>
  - [Add or delete users in Microsoft Entra ID](https://learn.microsoft.com/en-us/entra/fundamentals/add-users)
  - Create accounts for employees who need access to the Industrial App Store

1. <strong>Configure security settings</strong> (recommended)
  - [Enable multi-factor authentication](https://learn.microsoft.com/en-us/entra/identity/authentication/concept-mfa-howitworks)
  - [Configure conditional access policies](https://learn.microsoft.com/en-us/entra/identity/conditional-access/overview)

#### Example: Wind Co

An energy supplier "Wind Co" creates an Entra ID tenant named "IAS - Wind Co", adds employee accounts, configures security policies, then [registers with the Industrial App Store](/general/registering_an_organziation_with_the_app_store.html). Their employees can then sign in using Entra ID credentials, with access managed centrally by IT administrators.

### Managing Your Entra ID Instance {: .title}

<strong>Your organization maintains full control and responsibility</strong> for managing the Entra ID tenant, including user accounts, credentials, security policies, and sign-in monitoring. Sensitive employee information remains under your organization's direct control.

<em>Intelligent Plant does not have access to your Entra ID tenant, user credentials, or directory information. The Industrial App Store only receives basic profile information when users sign in, as described in our [security documentation](/general/security.html).</em>

### Pricing and Licensing {: .title}

Microsoft Entra ID is available in multiple tiers:

- <strong>Entra ID Free</strong> - Included with Azure subscriptions, provides core identity management features sufficient for Industrial App Store integration.

- <strong>Entra ID Premium P1/P2</strong> - Offers advanced features such as enhanced security, identity protection, and privileged identity management.

For most organizations using the Industrial App Store, the free tier provides all necessary functionality.

For detailed pricing information, refer to [Microsoft Entra pricing](https://www.microsoft.com/en-us/security/business/microsoft-entra-pricing).

### Additional Resources {: .title}

- [What is Microsoft Entra ID?](https://learn.microsoft.com/en-us/entra/fundamentals/whatis)
- [Microsoft Entra documentation](https://learn.microsoft.com/en-us/entra/fundamentals/)
- [Registering an Organization with the Industrial App Store](/general/registering_an_organziation_with_the_app_store.html)
- [App Store Security Overview](/general/security.html)
