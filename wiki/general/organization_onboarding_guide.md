---
layout: wiki
title: "Organization Onboarding Guide"
permalink: /general/organization_onboarding_guide.html
---
This guide provides an overview of the steps needed to onboard your organization to the Industrial App Store (IAS), from initial registration through to managing users and creating a customized onboarding experience for your employees.

### What is the Industrial App Store? {: .title}

The Industrial App Store is a marketplace of apps for industrial processes with an architecture that enables secure connectivity between cloud-based apps and your on-premises data sources. Through [App Store Connect](/wiki/app_store_connect/app_store_connect.html), apps can connect directly to  live data without time-consuming uploads, giving you immediate access to interactive analysis tools. All communication is encrypted via HTTPS, apps must request explicit user authorization to access data or resources, and [security](/wiki/general/security.html) is paramount.

The App Store uses Microsoft Entra ID for authentication, allowing organizations to leverage their existing identity infrastructure and security policies.

### Step 1: Register Your Organization {: .title}

Before your employees can use the Industrial App Store, your organization needs to be registered. The registration process depends on whether you already use Microsoft Entra ID.

#### If You Already Use Microsoft Entra ID

If your organization uses Microsoft 365 Enterprise or other Microsoft cloud services, you already have Entra ID! You can proceed directly to registering with the Industrial App Store.

<strong>Requirements:</strong>
- Your organization uses Microsoft Entra ID
- You have one of these Entra ID roles: Global Administrator, Application Administrator, or Cloud Application Administrator

<strong>Benefits of Registration:</strong>
- Single Sign-On for employees using work credentials
- Enforce MFA and other security features
- Control access via Entra ID groups
- Monitor sign-in activity via Azure Portal

➜ <strong>[Complete Registration Guide](/wiki/general/registering_an_organziation_with_the_app_store.html)</strong>

#### If You Don't Have Microsoft Entra ID

Organizations without Microsoft Entra ID can create a dedicated Entra ID tenant specifically for managing access to the Industrial App Store. Microsoft offers a free tier that provides all necessary features.

<strong>When to Create a Dedicated Tenant:</strong>
- Your organization doesn't use Microsoft 365 or Azure services
- You want centralized authentication and access control
- You want to leverage security features like MFA
- You want full control over who accesses your data

<strong>Setup Overview:</strong>
1. Create a free Azure account
1. Set up an Entra ID tenant (e.g., "IAS - Your Company")
1. Add employee user accounts
1. Configure security settings (MFA, conditional access)
1. Register the tenant with the Industrial App Store

Your organization maintains full control over the tenant, including user accounts, credentials, and security policies.

➜ <strong>[Detailed Setup Instructions](/wiki/general/creating_entra_id_for_app_store_access.html)</strong>

### Step 2: Understand User Management {: .title}

Once your organization is registered, administrators can manage users, groups, and access through the organization portal.

<strong>Access the Organization Portal:</strong>

Sign in to the App Store with your work account, then navigate to <strong>My Account > My Organization</strong>

<strong>Administrator Capabilities:</strong>

- <strong>[User Management](/wiki/general/organization_user_and_data_management/user_management.html)</strong> - View and manage organization users
- <strong>[Group Management](/wiki/general/organization_user_and_data_management/group_management.html)</strong> - Create and manage user groups (including an Administrators group)
- <strong>[App Security](/wiki/general/organization_user_and_data_management/app_access_management.html)</strong> - Control which apps users can access
- <strong>[Trust Management](/wiki/general/organization_user_and_data_management/trust_management.html)</strong> - Manage trusted connections with other organizations
- <strong>[Audit Logs](/wiki/general/organization_user_and_data_management/audit_logs.html)</strong> - Review organization activity and changes

<strong>Groups are how you avoid per-user setup.</strong> Both app access and data source access can be granted to a <em>group</em> instead of to individual users, so a new joiner inherits everything the moment they are placed in the right group. If your organization uses Entra ID, membership can be managed in Active Directory and synced into the App Store - see [Entra ID Syncing](/wiki/general/organization_user_and_data_management/entraid_syncing.html).

➜ <strong>[Organization Management Overview](/wiki/general/organization_user_and_data_management.html)</strong>

### Step 3: Pre-approve Apps and Data Sources for your Teams {: .title}

Make sure users have access to the correct apps and relevant data sources.

- <strong>Enable the approved apps list</strong> - turns app access into something you grant rather than something that happens by default. It is <strong>disabled for newly registered organizations</strong>.
- <strong>Grant each approved app to a group</strong> - every approved app carries an access control list. Grant it to the groups that need it instead of leaving it on the <em>All Users</em> group.
- <strong>Pre-select the data components for that group</strong> - members get those data components automatically, and cannot unselect them, when they sign into the app or open the <em>My Apps</em> page.

The result for a new joiner: they sign in, the app is already available to them, and the data sources their team relies on are already selected and locked in.

<strong>Recommended sequence:</strong>

1. Create App Store groups that match your real teams - see [Group Management](/wiki/general/organization_user_and_data_management/group_management.html).
1. Link them to your Entra ID groups if membership is managed in Active Directory - see [Entra ID Syncing](/wiki/general/organization_user_and_data_management/entraid_syncing.html).
1. In App Store Connect, authorize those groups on the data sources they need. Prefer authorizing groups over individual users - see [Share your data with other App Store users](/wiki/app_store_connect/share_your_data_with_other_app_store_users.html).
1. Enable the approved apps list, add your apps, grant each app to the groups that need it, and pre-select their data components - see [App Security](/wiki/general/organization_user_and_data_management/app_access_management.html).
1. Test with one account in each group before announcing it: sign in as that user and confirm the app appears, the pre-selected data source is locked in, and a query returns data.

<strong>Important:</strong> pre-selection only offers data components that the user or group already has permission to access. Those permissions are granted on-premises in App Store Connect, so pre-selection will appear to offer nothing until the data source authorization rules are in place.

One step always stays personal: the user still confirms once that the app may act on their behalf, as described in [App Store Security](/wiki/general/security.html). The App Store then remembers it, so they are not asked again.

➜ <strong>[App Security: approved apps, per-app permissions and pre-selected data components](/wiki/general/organization_user_and_data_management/app_access_management.html)</strong>

### Step 4: Create an Onboarding Page (Optional) {: .title}

Organization administrators can create a custom onboarding page that new users see when they first log in to the Industrial App Store.

<strong>What You Can Do:</strong>
- Customize the welcome message for your organization
- Provide organization-specific instructions or guidelines
- Use Markdown formatting for rich content
- Choose whether users see it once or until assigned to a group

<strong>How to Create:</strong>
1. Go to <strong>My Account > My Organization</strong>
1. Click <strong>Edit</strong> at the bottom of the default onboarding page
1. Customize using Markdown language
1. Configure display settings (first login only vs. every login)

Existing users can view the onboarding page at any time via <strong>My Account > My Organization</strong>, but only administrators can edit it.

➜ <strong>[Onboarding Page Configuration Guide](/wiki/general/onboarding_page.html)</strong>

### Additional Resources {: .title}

- [App Store Security Overview](/wiki/general/security.html)
- [App Security: approved apps, per-app permissions and pre-selected data sources](/wiki/general/organization_user_and_data_management/app_access_management.html)
- [Entra ID Group Syncing](/wiki/general/organization_user_and_data_management/entraid_syncing.html)
- [Organization Registration Sign Up Page](https://appstore.intelligentplant.com/Onboarding/SignUp)
- [Microsoft Entra ID Documentation](https://learn.microsoft.com/en-us/entra/fundamentals/)
- [Industrial App Store Privacy Policy](https://appstore.intelligentplant.com/Content/assets/legal/IAS-PrivacyPolicy.html)

### Need Help? {: .title}

If you need assistance with onboarding your organization or have questions about the process, contact Intelligent Plant support for guidance.
