---
layout: wiki
title: "Group Management"
permalink: /general/organization_user_and_data_management/group_management.html
---
Click on <em>View App Store Groups for the organization</em> in the organization portal to open the group management page:

<img src="/wiki/assets/media/general/orgs/admin/groups/admin-groups-list.png" alt="Groups list (administrator view)" style="max-width:1000px" loading="lazy" />

Note that this page does not display groups from your own organization directory; App Store group definitions and memberships are held within the App Store itself.

When your organization is registered with the App Store, two groups are automatically created:

- <em><strong>All Users</strong></em> - any user from your organization who joins the App Store will be added to this group.
- <em><strong>Administrators</strong></em> - members of this group have the ability to create and manage users, groups, app access permissions and so on.

Intelligent Plant will contact you once your organization has registered to identify which users should be added to the Administrators group. Members of this group can then add or remove other members as required.

### Viewing Group Details {: .title}

Click on the <em>Details</em> button to view the details for the group, including group memberships:

<img src="/wiki/assets/media/general/orgs/admin/groups/admin-group-members-2.png" alt="Group details (administrator view)" style="max-width:1000px" loading="lazy" />

Note that non-administrator users cannot view group memberships.

### Viewing Assigned Apps {: .title}

Click on <em>View Assigned Apps</em> to see the apps that members of the group are allowed to sign in to:

<img src="/wiki/assets/media/general/orgs/admin/groups/admin-assigned-apps-group.png" alt="Assigned apps (administrator view)" style="max-width:600px" loading="lazy" />

App access is controlled via [app safe- and block-list management](/wiki/general/organization_user_and_data_management/app_access_management.html). You can also pre-select the data components that members of this group get with each approved app - see [pre-selecting app data components](/wiki/general/organization_user_and_data_management/app_access_management.html#pre-selecting-app-data-components).

### Creating a New Group {: .title}

From the Group Management page, click on <em>Create a new group</em> to open the group editor:

<img src="/wiki/assets/media/general/orgs/admin/groups/admin-create-group.png" alt="Group editor" style="max-width:1000px" loading="lazy" />

Enter the group details and click on <em>Create Group</em> to create the group.

<strong>A note on externally-visible groups:</strong> By default, organization groups are only visible to members of your own organization. However, it is also possible to mark a group as being externally visible. This does not make the group visible to everyone on the App Store; it is only visible to 3rd party organizations that have [marked your organization as trusted](/wiki/general/organization_user_and_data_management/trust_management.html).

The primary reason for creating externally-visible groups is to allow 3rd parties to grant data source access to your users e.g. to assist with app troubleshooting.

### Keeping Group Membership Up to Date {: .title}

Groups can be linked to Microsoft Entra ID groups so that membership is managed in Active Directory rather than by hand on this page. Syncing is strictly one-way (Entra ID to App Store) and only occurs when a user signs in to the App Store portal, so removing a user from an Entra ID group is not reflected immediately. See [Entra ID Syncing](/wiki/general/organization_user_and_data_management/entraid_syncing.html).

### Adding Users to Groups {: .title}

From the group details page, an administrator can add users to a group by clicking on <em>Add Users</em> on the group details page. This will open a user browser where you can search for the users to add to the group:

<img src="/wiki/assets/media/general/orgs/admin/groups/admin-add-users-to-group.png" alt="Add users to group" style="max-width:600px" loading="lazy" />

Select the users to add by clicking on the <em>Select</em> button next to the user. Click <em>Save Changes</em> to add the selected users to the group:

<img src="/wiki/assets/media/general/orgs/admin/groups/admin-new-group.png" alt="Updated group members" style="max-width:1000px" loading="lazy" />

### Removing Users from Groups {: .title}

To remove a user from a group, click on the <em>Remove</em> button next to the user in the group details page. Users cannot be removed from the <em>All Users</em> group.
