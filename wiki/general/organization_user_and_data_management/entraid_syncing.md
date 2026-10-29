---
layout: wiki
title: "Entra ID Syncing"
permalink: /general/organization_user_and_data_management/entraid_syncing.html
---
### Overview {: .title}

Entra ID (formerly known as Azure AD) is a representation of a Microsoft Active Directory on the cloud.

It is possible to sync Entra ID group members with Industrial App Store Groups (IAS). This allows organization IT departments to manage IAS users through the familiar tools of Active Directory.

### Key Points {: .title}

<strong>Group syncing only occurs when a user signs into the IAS portal.</strong>

This has a number of implications:

- Users must sign out of the IAS portal and then sign back in to collect any Entra ID group membership changes.

- Removing a user from an Entra ID group will not have an immediate effect. Log in is only forced when a user session expires, and this will depend on user and application behaviour. If removing user access is urgent, they should be removed directly from the IAS group (which will take immediate effect) <em>and</em> the Entra ID group.

<strong>Syncing is strictly one-way</strong>

Changes in Entra ID group memberships propagate to IAS groups, but not vice versa.

Removing a "synced" user from an IAS group does not remove them from the Entra ID group - meaning that there IAS group membership may be re-added on next login. The IAS portal admin UI will warn of this scenario.

<strong> Adding users directly to IAS Groups is not recommended when Entra ID syncing is configured </strong>

If a user is added directly to an IAS group, or were added before an Entra ID group association was made, their account is not tied to the Entra ID Group.

Consider removing all historic IAS group memberships, then advise users to log-out and back in again. This time the membership will be tied to the EntraID group.

### Quick Start {: .title}

You must explicitly register the Entra ID groups that you want to sync with IAS groups. Once registered, an Entra ID group can be linked to zero, one or more IAS groups. An organisation can currently register up to 1000 Entra ID groups, and can create up to 1000 links in total between all registered Entra ID groups and IAS groups.

To register an Entra ID group, you need both its Entra ID object identifier and its display name - <em>the IAS does not have permission to browse Entra ID tenants and get these items automatically</em>.

To register an Entra ID group and link it with IAS groups follow these steps:

1. Navigate to your organisation administration page.

2. In the Actions panel at the bottom of the page click on the link to manage external groups:

<img src="/wiki/assets/media/general/organization_user_and_data_management/entraid_001.png" alt="entraid_001" style="max-width:500px" loading="lazy" />

3. Click on the "Register External Group" button at the bottom of the table of registered groups:
image.png4. Paste in the Object ID and display name for the Entra ID group. You can copy and paste these from the Azure portal if required:

<img src="/wiki/assets/media/general/organization_user_and_data_management/entraid_002.png" alt="entraid_002" style="max-width:500px" loading="lazy" />

4. Paste in the Object ID and display name for the Entra ID group. You can copy and paste these from the Azure portal if required:

<img src="/wiki/assets/media/general/organization_user_and_data_management/entraid_003.png" alt="entraid_003" style="max-width:500px" loading="lazy" />

5. Once the Entra ID group has been registered, click on the "Link to Industrial App Store Groups" button on its details page:

<img src="/wiki/assets/media/general/organization_user_and_data_management/entraid_004.png" alt="entraid_004" style="max-width:500px" loading="lazy" />

6. Select the IAS groups that you want to link the Entra ID group with in the dialog that appears and then click Save Changes:

<img src="/wiki/assets/media/general/organization_user_and_data_management/entraid_005.png" alt="entraid_005" style="max-width:500px" loading="lazy" />

7. Add users to the Entra ID group and then make the users sign out of IAS and then sign in again. They will automatically be added to the linked IAS groups.
