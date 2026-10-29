---
layout: wiki
title: "IAS Portal - Release Notes"
permalink: /general/apps/appstore/releasenotes.html
---
This page describes the release notes for the [Industrial App Store](https://appstore.intelligentplant.com) portal.

### 2026-04

App version: v3.2.21660 <br />
Release date: 2026-05-29

- <code>[Bug Fix]</code>: Fixed an issue where adding one or multiple users to an IAS group could result in an error.

### 2025-10

App version: v3.2.21648<br />
Release date: 2025-10-31

- Under-the-hood updates.

### 2025-08

App version: v3.2.21639<br />
Release date: 2025-08-29

- Under-the-hood changes to support our new Model Context Protocol (MCP) server, for connecting generative AI applications to your Industrial App Store data.

### 2025-06

App version: v3.2.21557<br />
Release date: 2025-06-27

- <strong>New feature:</strong> We've added an RFC 8414 OAuth authorization server metadata endpoint.
- <strong>New feature:</strong> Configure app data source assignments at an organisation level
  - <strong>Your organisation must have the app safe list enabled to use this feature!</strong>
  - Access control list (ACL) entries that grant users or groups in your organisation access to an app can now be used to pre-assign data sources that the user or group can use with the app.
  - You can only pre-assign data sources owned by your organisation i.e. you cannot pre-assign data sources that a 3rd party organisation has shared with your organisation.
  - If multiple ACL entries apply to the same user, all pre-selected data sources across all the matching entries will be used.

#### Onboarding Improvements

Configuring organisation-level app data source assignments is the latest onboarding improvement we have made to the Industrial App Store. <strong>You can now provide a frictionless onboarding experience for your users</strong> by following these steps:

1. Create Industrial App Store security groups to manage access to data sources and apps.
1. Configure App Store Connect authorisation rules granting security groups access to the data sources they require.
1. Configure app access control lists to grant security groups access to the apps they require, and pre-select the data sources you want the group to use in each app.
1. Link Entra ID groups and roles to your Industrial App Store security groups, so that users will automatically be added to the correct IAS security groups when they sign in.

By implementing these steps, all your users have to do is sign into an app such as Gestalt Trend and the Industrial App Store will take care of the rest of the onboarding process!

### 2025-05

Release date: 2025-05-30

- Under-the-hood changes in preparation for future enhancements.

### 2025-03

Release date: 2025-03-28

- Layout and content improvements on the My Apps page.
- The My Apps and app sign-in pages now have the ability to quickly assign/unassign all data sources on an individual App Store Connect to/from an app.
- The organisation management pages now use a more compact layout and now provides a button to easily copy the organisation ID when configuring trusts with other organisations.
- The <code>AccountDebit</code> app scope is now obsolete and cannot be added to new app registrations or re-added to existing registrations if it is removed.

### 2025-02

Release date: 2025-02-28

- We have removed login to the Industrial App Store via Google. All logins must now use Microsoft Entra ID.
- You can now link Microsoft Entra ID roles to Industrial App Store groups. Previously it was only possible to link Entra ID groups to IAS groups.
  - Links are now automatically created to link the <em>Global Administrators</em>, <em>Cloud Application Administrators</em> and <em>Application Administrators</em> roles in Entra ID to the Industrial App Store <em>Administrators</em> group for your organisation.

### 2025-01

Release date: 2025-01-31

- Several under-the-hood performance improvements.
- Fixes an issue that prevented some valid images from being uploaded when editing an app profile page.
- Improvements to scenarios where IAS is being displayed in an iframe in an authorised 3rd party origin (such as FutureOn FieldTwin).
- Removal of some legacy features.

### 2024-11

Release date: 2024-11-29

- Improved performance when apps exchange refresh tokens.
- Apps can now sign users into the Industrial App Store using the [OAuth 2.0 Device Authorization Grant](https://datatracker.ietf.org/doc/html/rfc8628).
  - This sign-in flow is intended to simplify the sign-in process from command-line applications and scripts.
  - App developers must explicitly enable the Device Authorization Grant on an app's registration page before it can be used.
- Fixes an issue that prevented images from being uploaded to app profiles in some scenarios.

### 2024-10

Release date: 2024-10-25

- Fixes an issue where notification management fails if a user's email address has changed case in Entra ID.
- Miscellaneous under-the-hood improvements.
- Mitigations for security advisories in 3rd party libraries that we use.

### 2024-09

Release date: 2024-09-27

- When performing changes that affect user or data source authorisations (such modifying group memberships or allowing an app to access a data source), the changes will now take effect immediately instead of taking up to 5 minutes to propagate through the Industrial App Store services.

### 2024-08

Release date: 2024-08-30

- Some under-the-hood changes to support custom logon experiences for trusted partners.

### 2024-07

Release date: 2024-07-26

- Fixes an issue that prevented users from signing in using personal Google accounts.
- When viewing members for an organisation group, an indicator is now shown next to the user's name if they were added to the Industrial App Store group because they are a member of a linked Entra ID group.

### 2024-05

Release date: 2024-05-31

- Under-the-hood improvements and updates to 3rd party components.

### 2024-04

Release date: 2024-05-03

- Users added to IAS groups via an Entra ID group membership can now be removed from the IAS groups via the portal (with a warning that the user may be re-added the next time the user's Entra ID group memberships are synced).
- IAS now supports signing users in while being displayed inside an iframe hosted by a trusted 3rd party.
- Microsoft Transact landing page improvements
- Miscellaneous under-the-hood bug fixes and improvements

### 2024-01
- Fixes login page welcome logo not adjusting size correctly on mobile.
- Adds initial support for Entra ID group syncing.

Entra ID group syncing is a new feature that allows your administrator to link Entra ID groups with Industrial App Store groups. Once links have been established, your Industrial App Store group memberships will be updated when you sign into IAS based on your Entra ID group memberships.

This feature can be used to quickly onboard new users to give them access to data sources, PnID dashboards and so on as soon as they sign into the Industrial App Store for the first time.

### 2023-08
- Fixes a notification management issue that occurs when you do not have an email address configured in your Azure Active Directory profile.
- Introduces a new Organization Welcome Pages feature.
  - Allows an organization to define a custom page to display to their users the first time they sign into the Industrial App Store or every time they visit unless they have been assigned to an IAS user group.
  - The page can include app cards for commonly-used apps, instructions for requesting access to data sources, links to Teams channels and so on.
  - To view your welcome page, visit https://appstore.intelligentplant.com/myorg or click on the My Account > My Organization link in the Industrial App Store navigation menu.
  - Welcome pages can be edited by anyone who is in the Administrators group for your organization.
- Miscellaneous security updates.

### 2023-07
- Security updates and bug fixes.

### 2023-04
- Added functionality for users to manage notification settings.
- The [Industrial App Store privacy policy](https://appstore.intelligentplant.com/Content/assets/legal/IAS-PrivacyPolicy.html) has been updated to clarify how and when we will contact you.
- Provided integration for purchasing applications through the [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps?search=Intelligent%20Plant%20Ltd&page=1).

### 2022-12

- Integration with Freshsales for new user emails.

### 2022-09

- TLS 1.0 and 1.1 no longer supported <br /> In adherance with Microsoft Cybersecurity guidelines, the Industrial App Store will only support secure communication using the latest cyphers. All App Store Connects should be updated to version 3.2.16245 or above by this date.

### 2022-04

- New content security policy.
- App card ordering has changed.
- Improved flow when creating new app registrations.
- Refresh of the app consent and 'My Apps' pages to make it easier to identify and select authorized App Store Connect data sources.
- Under-the-hood changes to prepare for transition to Microsoft Graph when logging into the Industrial App Store with a Work or School (Azure Active Directory) account.
- Removal of live chat. Don't worry - a new live chat feature will be available soon!

### 2022-01

- Updates on the feel and look for the Industrial App Store home page.
- Addition of a quick start option.
- When selecting data sources for an app, your available data sources are now grouped by App Store Connect.

### 2021-04

- Digital Security Policy document link corrected.
- An alternative "App Store Connect" installer link added.

### 2021-01

- Quick view feature. You can now preview the app without navigating to the profile page.
- General improvements and UI fixes.

### 2020-11

- Fixes on how videos are displayed in the portal
- Refresh token lifespan reduced
- Fixed an issue when revoking app consent
- Added Google analytics to the portal
- Fixed an issue when developers are trying to change app status from the quick access table
- Minor UI and usability updates

### 2020-10

- Fixed cancel button on application authorization page giving 500 error
- Allow apps to be owned by organisations instead of individuals
- Able to revoke app consent

### 2020-07

- Allow IP address-based security for internal API routes
- Error while creating new apps due to expected files/folders being missing
- App Store Error Pages misconfigured

This release contains the following changes:

- Secret Key validation when using PKCE flow.
- App Store Custom Error Pages.
- Minor fixes for the new app publishing process.
- Functionality to remove app profile media.

### 2020-05

This release contains the following changes:

- Secret Key validation when using PKCE flow.
- App Store Custom Error Pages.
- Minor fixes for the new app publishing process.
- Functionality to remove app profile media.

### 2020-04

This release contains the following changes:

- You are no longer required to log in to browse the available apps in the Industrial App Store.
- We have fixed an issue that could sometimes prevent JavaScript applications from successfully signing in when using the OAuth2 authorisation code flow.
- We have fixed an issue that prevented JavaScript applications from being able to query the user info API endpoint.
- We have fixed some issues related to updating app settings, including editing or cropping the icon and banner image for an app.

### 2020-03

This release contains the following changes:

- A bug that prevented organisation users from being removed from groups has been fixed.
- We have refreshed the app settings page for app developers.
- [PKCE support](https://oauth.net/2/pkce/) has been added for public apps that were previously using the [OAuth 2.0 implicit flow](https://oauth.net/2/grant-types/implicit/). Implicit flow is still available, but app developers must now explicitly enable it if it is required by an app.
- Secret keys for apps are no longer visible in the settings page. Now, the secret key is only displayed when it is initially created. You can reset the secret key for your app at any time.
- You can pre-select all scopes required by your app from the app settings screen, and you can also pre-specify whether or not your app requests offline access (i.e. refresh tokens) by default. This simplifies the creation of the redirect URL your app uses when logging a user in. These options can still be specified in the redirect URL if preferred.
- We've fixed a few other under-the-hood bugs.

### 2020-02

This release contains a high-priority fix related to changes in the way Google Chrome handles cookies. The change affected the way organisation users signed in using their Azure Active Directory credentials.
