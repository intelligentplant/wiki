---
layout: wiki
title: "Managing Approved Apps & Data Access"
permalink: /general/organization_user_and_data_management/app_access_management.html
---
App security is made up of three controls that, used together, let you hand a team an app that already has the right data sources selected:

- the <strong>approved apps list</strong> decides which apps are available to an organization;
- a per-app <strong>access control list</strong> limits app access to specific groups or users;
- <strong>pre-selected data components</strong> makes the app-consent flow easier.

If you are setting this up for the first time, work through them in that order: enable the list, grant the app to a group, then pre-select the relevant data sources for that group.

Organizations can use approved and blocked app lists to control the apps that their users are allowed to sign in to.

<strong>Important:</strong> By default, the approved apps list is disabled for newly-registered organizations, meaning that its users can sign in to any app that is not block-listed. <strong>Intelligent Plant recommends enabling the approved apps list for full control over app access.</strong>

To view the app access overview page, click on the <em>Configure app security for <Your Organization Name></em> link in the organization portal actions. The overview page displays a summary of the approved- and block-list status:

<img src="/wiki/assets/media/general/orgs/admin/app-access/safe-list/app-safe-list-disabled.png" alt="Approved apps list status (disabled)" style="max-width:1000px" loading="lazy" />

To enable the approved list, click on <em>Enable Approved Apps List</em>:

<img src="/wiki/assets/media/general/orgs/admin/app-access/safe-list/app-safe-list-enabled.png" alt="Approved apps list status (enabled)" style="max-width:1000px" loading="lazy" />

When the approved apps list is enabled, it can be disabled by clicking on <em>Disable Approved Apps List</em>.

### Managing the Approved Apps List {: .title}

When the safe list is enabled, click on <em>Manage Approved Apps</em> on the app security overview to open the approved list management page:

<img src="/wiki/assets/media/general/orgs/admin/app-access/safe-list/app-safe-list-1.png" alt="Approved apps" style="max-width:1000px" loading="lazy" />

#### Adding Apps to the Approved List

To add apps to the approved list, click on the <em>Add Apps to List</em> button. This will open the app browser, allowing you to page through the available apps and select the ones you want to add to the list:

<img src="/wiki/assets/media/general/orgs/admin/app-access/safe-list/app-safe-list-2.png" alt="App browser" style="max-width:700px" loading="lazy" />

#### Removing Apps from the Approved List

Click on the <em>Remove</em> button next to a safe-listed app to remove it from the approved list.

#### Managing Access Permissions

You can restrict access to any approved app to specific organization groups and users using an access control list. To manage permissions for an approved app, click on <em>Settings</em> next to the list entry:

<img src="/wiki/assets/media/general/orgs/admin/app-access/safe-list/app-safe-list-4.png" alt="Approved app permissions" style="max-width:1000px" loading="lazy" />

By default, when an app is added to the approved list, the <em>All Users</em> group is granted access permissions to the app. Existing permissions can be removed by clicking on the <em>Remove</em> button next to the entry.

Grant permission to a group by clicking on the <em>Add Groups</em> button. Similarly, permissions for individual users can be granted by clicking on the <em>Add Users</em> button. After saving changes entries will be added for the selected users or groups:

<img src="/wiki/assets/media/general/orgs/admin/app-access/safe-list/app-safe-list-7.png" alt="Updated app permissions" style="max-width:1000px" loading="lazy" />

Note that multiple access control list entries can apply to the same user (for example, if the user is a member of multiple groups, and all of those groups have been granted access). A user is allowed to sign into an approved app if any access control list entry grants them access.

Once you have granted access to a user or group, you can also pre-select data components that the user or group can use with the app. See below for details.

#### Pre-selecting App Data Components

You can pre-select the data components that a user or group can use with an approved app. Pre-selecting data components means that users do not have to select the component themselves when signing into the app or when managing data access permissions on the <em>My Apps</em> page. This can speed up your onboarding process and ensure that users always have access to the data components that they need for their workflows.

To get started, click on the <em>Manage Data Access</em> button next to the access control list entry for the user or group. This will open the data component browser for the user or group:

<img src="/wiki/assets/media/general/orgs/admin/app-access/safe-list/data_component_preselection.png" alt="Pre-selecting data components" style="max-width:700px" loading="lazy" />

Note that only data components that the user or group has permission to access are displayed. Permissions are managed on-premises using App Store Connect.

When signing into an app or viewing the My Apps page, pre-selected data components are automatically selected and cannot be unselected:

<img src="/wiki/assets/media/general/orgs/admin/app-access/safe-list/my-apps-preselected-data-component.png" alt="Pre-selected data component on My Apps page" style="max-width:1000px" loading="lazy" />

If multiple access control list entries apply to the same user, all pre-selected data components will be automatically available to the user when they sign into the app. For example, if you pre-select data components for your "All Users" group and then add a separate access control list entry for a specific user and assign additional data components to the user, the user will have access to pre-selected data components from both entries.

### Managing the Block List {: .title}

From the app access overview page, click on <em>Manage Blocked Apps</em> to open the block list management page:

<img src="/wiki/assets/media/general/orgs/admin/app-access/block-list/app-block-list-1.png" alt="Blocked apps" style="max-width:1000px" loading="lazy" />

#### Adding Apps to the Block List

Adding an app to the block list will immediately prevent all users in the organization from using the app, <em>even if it has been added to the approved list</em>.

To block-list an app, click on <em>Add Apps to List</em>. This will open the app browser, allowing you to page through the available apps and select the ones you want to add to the block-list:

<img src="/wiki/assets/media/general/orgs/admin/app-access/block-list/app-block-list-2.png" alt="Selecting apps to add to the block list" style="max-width:700px" loading="lazy" />

Click <em>Save Changes</em> to update the block list:

<img src="/wiki/assets/media/general/orgs/admin/app-access/block-list/app-block-list-3.png" alt="Updated block list" style="max-width:1000px" loading="lazy" />

#### Unblocking Apps

Click on the <em>Remove</em> button next to a blocked app to remove it from the block list.
