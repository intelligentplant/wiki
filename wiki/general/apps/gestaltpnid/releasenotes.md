---
layout: wiki
title: "Gestalt PnID Release Notes"
permalink: /general/apps/gestaltpnid/releasenotes.html
---
This page describes the release notes for [Gestalt PnID](https://appstore.intelligentplant.com/Home/AppProfile?appId=2a59ca294ce2464cb14694b682294de5).

### 2026-10-Minor {: .title}

Release date: 2026-10-30 <br />

##### New Features

- Added optional axes to scatterplot components
- Added rotation property to select where a component is being rotated from

##### Modifications and Improvements

- Fixed Scatterplot range not being consistent among pair of tags
- Fixed DOM components not working after copying them, due the copy pointing to the wrong ID

### 2026-09-Minor {: .title}

##### New Features

- Implemented a new feature to get data from events manager, regardless of the dashboard data.

### 2026-08-Minor {: .title}

##### Modifications and Improvements

- Fixed embedded Trend not updating values when on realtime.
- Fixed user access to file from a group path.

#### 2026-07-Minor

  *Refactored cached groups to separate all groups or only user ones.

#### 2026-03-Minor

- Fixed right panel closing when modifying component properties.
- Fixed Trend embedded pages not updating when controls play through time.
- Fixed menus borders showing when closed.

#### 2026-01-Minor

- Updated browser tab to display "name" property of dashboard (File's name by default).
- Updated script functions to include dashboard properties.
- Added "margin" as a property available to update by the user.
<img src="/wiki/assets/media/general/apps/gestaltpnid/marginpnid.gif" alt="marginpnid" style="max-width:600px" loading="lazy" />
#### 2025-11-Minor

- Fixed redirection to Home page if a new user goes directly to /Trend or /PnID urls.
- Fixed New Version pop up not showing in PnID.
- Fixed edge case of dashboard blinking when hovering a value if the data has not loaded completely.
- Modified the status binding to display a selected value instead of the status.
- Modified text binding to replace the value by a specified value.
- Fixed the letter "F" not working on components names.

#### 2025-10-Minor

##### New Features
- Added the option for charts to handle their own data range if dashboard is on realtime.

##### Modifications and Improvements
- Automatically load the query when changing from Realtime to Historical.
- Fixed pop up content overflowing.
- Fixed tags opening on a "new window" in Simple Trend due to a incorrect date check.
- Fixed "undefined" being display on dashboards while data loading.
- Update user guides to reflect new graph dates

#### 2025-08-Minor

##### Modifications and Improvements

- Added functionality to search in a PnID dashboard
<img src="/wiki/assets/media/general/apps/gestaltpnid/searchpnid.gif" alt="searchpnid" style="max-width:600px" loading="lazy" />

#### 2025-07-Minor

##### Modifications and Improvements

- Fixed RAW queries not returning the whole data points.
- Fixed refresh token not updating correctly.

#### 2025-06-Minor

Release date: 2025-06-27

##### New Features

- Added option to bind tags by their status or timestamp

##### Modifications and Improvements

- Modified "unauthorised data source" pop up to show the data source display names instead of the data source id.
- Fixed an issue where the folder select modal would load a user's personal home folder, rather than their group's home folder

#### 2025-05-Minor

##### New Features

- Added the ability to filter tags by the label property.

##### Modifications and Improvements

- Improved error messages to make them more descriptive and inform the user what actually went wrong.
- Improved UI consistency.
- Added missing option for GMT+0 Coordinated Universal Time in the time zone selection.

#### 2025-04-Minor

##### New Features

- Added an option to set the time zone for a dashboard where all dates will be displayed with respect to that time zone and any queries will also be relative to that time zone.

##### Modifications and Improvements
- Fixed component's position getting shuffled in the incorrect order when aligning, distributing or undoing.
- Fixed an issue where unfilled line components & Arcs would block the clicking of links that were contained with the bounds of the component.
- Fixed ad error when importing PnID files with a .pnid extension.
- Modified the modal windows so that they close when navigating to other dashboards, preventing them from becoming a nuisance.
- Fixed the import modal not displaying an error message when an import fails
- Fixed the import model not closing when an import is successful.
- Fixed the pinch-zoom trackpad gestures invoking the browser events when performing on the main dashboard area.

#### 2025-03-Major

##### New Features

- Completely rehauled the CSS of the application to improve the user experience.

##### Modifications and Improvements

- Added the ability to hover over and get detailed information of data points on chart components.
- Fixed bar charts defaulting to 10px border if the user does not define a value on creation.
- Fixed an issue where the user was not being redirected back to the original page after a successful login.
- Fixed an issue where the version cookies were not persisted when embedded in a different domain.
- Updated the user guide to reflect the recent changes.

#### 2025-02-Minor

##### Modifications and Improvements
- Added ability to preview edits to charts in background. Modified property names in charts pop ups to be consistent with those on the right panel.
- Fixed the setQuery action not changing the query settings in new dashboards.
- Fixed the display of data source names to make them more friendly in modals for editing chart components.
- Fixed an issue where brackets in display names would break the grouping of data sources.
- Fixed functional components not being properly removed when undoing/redoing an action.
- Changed the event manager modal to only have a single close button.
- Fixed the hover value not displaying correctly when values were non-numeric.
- Fixed an issue where the mouse over label would not render when the data was NaN.
- Fixed an issue where a user could not log in to the application when using a login that was not attached to an organisation.
- Fixed an issue where opening a recent query that contained special characters would fail.

#### 2025-01-Major

##### New Features

- Added a recent history for files opened by the user to the left hand menu for quicker access in the future.

##### Modifications and Improvements
- Added ability to specify default time settings in the preferences menu.
- Added Improved feedback on the progress and outcome when importing and templating files.
- Added extra validation to the name of files/folder to prevent them contain \, /, & and +.
- Fixed fill and font colour on functional components.
- Improved the display of values for tags that do not have any data
- Fixed colour picker not triggering colour change on PnID components
- Fixed saving existing PnID file that is currently opened from prompting to give a file name again
- Updated the text on the share URL pop up to be more informative.
- Updated the data source select to display the display name of the data source.
- Fixed an issue where PnID would not load on IOS safari because of an non-existent export.
- Replaced the jquery date pickers with the native HTML5 date pickers.
- Fixed Gestalt throwing console errors repeatedly due to attempting to parse postMessages from browser extensions
- Fixed an issue where demo files would not maintain their URL.
- Fixed issues with the communication between PnID and Trend
- Fixed an issue where exporting a folder would not export any of its underlying folders and files.
- Fixed an issue where the login process would not return the user to the original URL on successful login.

#### 2024-11-Minor

##### Modifications and Improvements
- Added a border width property to all functional components.
- Improved the exporting of files by allowing the selection of multiple files to export.
- Modified the left panel to close when clicking on the main content area of the application.
- Modified all user actions to display a notification indicating whether it succeeded or failed.
- Fixed selecting cancel on the copy component properties context menu copying an empty set.
- Fixed an issue with the swap tags script function where it would not switch tags if providing a new data source.
- Fixed the browser back button not navigating to previous dashboard after navigating to a broken link.
- Fixed an inconsistency in the decimal places UI
- Fixed an issue where you could make a text component writeable that has no bindings.
- Fixed an issue where creating a binding would fail when no data is returned for the bound tag.
- Fixed an issue where the text component would not break in to a new line.

#### 2024-10-Major

##### New Features

- <strong>Write a value into a tag</strong> - Added the ability to write a value into a tag, by double clicking on a text

##### Modifications and Improvements

- Fixed cross origin check.
- Fixed an issue where the trending options would display on the context menu in edit mode.
- Fixed the back button not navigating to the correct previous page after creating a new dashboard.
- Fixed right panel not updating values after creating new dashboard unless the canvas has been clicked.
- Add a tag to simple trend with a right click if Simple Trend is open on PnID.
- Fixed data queries using points not working. Fixed time controls wording when switching data functions.

#### 2024-09-Major

##### New Features

- <strong>Organisation Functions and Variables</strong> - Added the ability to specify global functions and variables that will be available to all PnIDs within an organisation. [Read the guide here.](/wiki/gestaltpnid/gestalt_pnid/event_manager_reference/global_scripts_guide.html)
- <strong>Bulk Import</strong> - Added the ability to Import files and folders in bulk.
- <strong>Engineering Notations</strong> - Added an option to text components to allow the display of numbers in engineering notations.

##### Modifications and Improvements
  - Modified the UI to hidden when embedded wtihin another PnID.
- Improved the responsiveness of holding to drag a tag on to an embedded trend window.
- Fixed an issue where the PnID events, global functions and variables code would carry over when creating a new PnID.
- Fixed an issue where it would unsubscribe tags from the real=time connection when swapping tags.
- Fixed an issue where saving after selecting cancel in the overwrite file prompt would still overwrite the file.
- Created a set of default properties for each component when creating a binding.
- Fixed an issue with the audit trail of a file not displaying correctly.
- Fixed the trending of tags from PnID (same window but different time range) not working correctly.
- Fixed the embedded trend creating a new window when dropping a new tag on to it.
#### 2024-07-Major

##### New Features
- <strong>Global Scripting Functions and Variables</strong> - Improved the event manager to allow for the defining of functions and variables globally to a page that functional components can then reference in their own scripts, thus reducing the need to duplicate code across components.
<img src="/wiki/assets/media/general/apps/gestaltpnid/global-vars.gif" alt="global-vars" style="max-width:400px" loading="lazy" />
- <strong>Embedded Trending</strong> - Added a new "Embedded Window" when opening tags from PnID in Trend that will create a Trend window within PnID itself and allow the user to drag additional tags from the PnID into the window.
 <img src="/wiki/assets/media/general/apps/gestaltpnid/simple_trend.gif" alt="simple_trend" style="max-width:200px" loading="lazy" />
- <strong>New Demo Files</strong> - Moved the demo files to their own directory, separate from the user's personal files, and added a brand new set.
<img src="/wiki/assets/media/general/apps/gestaltpnid/screenshot_2024-07-24_095306.png" alt="screenshot_2024-07-24_095306" style="max-width:200px" loading="lazy" />
- <strong>File Audit Trail</strong> - Added an audit trail of who created and last modified a file on the share popup, and on hovering over a file in the left side panel.
- <img src="/wiki/assets/media/general/apps/gestaltpnid/file_info.gif" alt="file_info" style="max-width:200px" loading="lazy" />
- <strong>Bulk Export</strong> - Added the ability to export files and folders in bulk via the left side panel context menu.
<img src="/wiki/assets/media/general/apps/gestaltpnid/screenshot_2024-07-24_102014.png" alt="screenshot_2024-07-24_102014" style="max-width:200px" loading="lazy" />
##### Modifications and Improvements
- Updated the Genie and Symbol libraries with new Genies and Symbols.
- Increased the size of the hit area for the multiple selection checkbox.
- Removed the extra border that was appearing on the preferences tabs.
- Fixed the place holder property for inputs not displaying in the properties menu.
- Fixed the mini-map not displaying until you stop panning.
- Fixed an issue where dragging and copy & pasting line components that had been rotated would result in deformation of the line.
- Fixed errors on adding bindings to components due to the tag units not being available.
- Fixed the scatterplot not rendering if a tag's data is flat.
- Fixed an issue where functional components were not drawing at the defined font size.
- Fixed an issue where the context menu was displaying when embedded in an iframe.
- Fixed an issue where the next dashboard would not load once confirming to save the unsaved changes of the previous dashboard.
- Fixed an issue where older pages that did not have a path property on links, would not navigate correctly.
- Fixed an issue where an exception was being thrown when pressing enter to change the font size of a component.
- Fixed an issue where you could not manually add a tag because it would attempt to retrieve the units.

#### 2024-05-Minor

##### New Features

- <strong>Bulk File Delete:</strong> Added the ability to select multiple files in the left hand menu and delete them as one instead of deleting them individually.
<img src="/wiki/assets/media/general/apps/gestaltpnid/bulk-delete.gif" alt="bulk-delete" style="max-width:400px" loading="lazy" />

##### Modifications and Improvements
- Modified data source select to group data sources under the App Store Connect they belong to.
- Modified the post-text value in text bindings to default to the tag's unit.
- Fixed an issue where updating the value in a select component did not actually update the displayed value.
- Fixed an issue where if a write value operation failed it would not inform the user.
- Improved the dragging method for single line, rectangle, and arc to be easier without having to group the component (Hold shift + left click to drag)
- Fixed functional components not applying bindings.
- Fixed an issue where where functional components would not be deleted when in a group and the group was deleted.
- Fixed an issue where you cannot create an Enum binding.
- Removed unnecessary component properties from being displayed on the right hand panel.
- Fixed an issue where the "share success" modal would not be shown if you had switched to the permissions tab and back before sharing.
- Fixed an issue where the mini-map would not appear when panning.
- Fixed release notes popup not appearing.
- Fixed an issue where only the first batch of requests in a queue was aborted on PnID.
- Updated the PnID user guide and added HMI standards, Tips and Tricks, FAQ and Shortcuts guides.

#### 2024-03-Major

##### New Features

- <strong>File Recovery -</strong> PnID will now periodically store a backup of the dashboard currently being worked on, so that in the event of a crash, any unsaved changes will not be lost. Backups can be restored via the left hand menu when clicking on a page.
<img src="/wiki/assets/media/general/apps/gestaltpnid/restorepnid.gif" alt="restorepnid" style="max-width:400px" loading="lazy" />

##### Modifications and Improvements
- Moved from bundling script files on demand to bundling files ahead of time to reduce the file size and improve load times.
- Fixed an issue where files that were copied via the "copy contents of folder" action would not load correctly until after a refresh.
- Added a <em>setPageState(key, value)</em> command in the Event Manager that allows a value to be stored in the page state.
- Fixed an issue where the Event Manager component search did not return results for components inside of a group.
- Modified the tooltip to show the actual timestamps of each tag.
- Added footer tooltip that shows the time of last received value on a PnID (ALT+T shortcut to toggle).
- Fixed the unsaved changes prompt not working correctly on page unload.
- Fixed an issue with unsubscribing from Data Core subscriptions to prevent spamming the Websocket with stale data values when navigating between PnIDs.
- Fixed an issue where hyperlinks or linked PnIDs did not work on buttons.
- Fixed embedded Trends showing a different data if PnID is in real-time mode.
- Fixed the embedded component constantly trying to reload due to unencoded URLs.
- Fixed an issue in templating where it would attempt to parse a trend query string on non trend hyperlinks.
- Prevented the file extension being displayed on PnID files.
- Prevented PnID from going into edit mode when navigating via a broken link.
- Fixed groups displaying underneath symbols and genies in the left-hand menu.
- Fixed an issue where genies stored within a folder would not load.
- Fixed an issue where folders could not be created in the group genies or symbols folder.
- Fixed the radial gradient controls not functioning as expected.
- Fixed page load event not running when the same page is requested, but with a different state.
- Fixed trending tags from PnID using a custom time range.
- Fixed tooltip showing invalid date when a tag has no data loaded.
- Fixed having to click the back button twice when attempting to navigate away from a PnID with am embedded Trend.
- Fixed the Select component not showing selected value.
- Fixed the Range component not showing max, min, and step properties
- Added Optima Roman font to the list of selectable fonts.
- Added the ability for the user to resize the Event Manager modal to their desired size.
- Fixed an issue where the import modal would not reset for successive imports.
- Fixed the templating not working properly when using square brackets in the configuration sheet.
- Modified the position bindings so that they are restricted to the data range defined in the binding.
- Added a message when trying to open an empty folder from the main menu.
- Moved the loading Icon to be to the center of the screen and windows.
- Added "Manage data sources" and "Help" buttons to the left hand menu of PnID and Trend
- Fixed Trend not loading data when opening from query string
- Modified wording to be more specific for file or folder on popups
- Fixed an issue where the logout button would not actually log the user out.

#### 2023-11-Hotfix

##### Modifications and Improvements

- Fixed an issue where the select box would not correctly record the previous value, and it would always be the same as the current.
- Fixed the PnID fill colour property missing from the properties menu.
- Fixed the modal container not resizing on mobile correctly.
- Updated modals to use view port values instead of percentages so that they resize correctly on all devices.
- Fixed an error that would occur when creating a folder while on the "Select File/Folder".
- Fixed Groups menu being visible under files menu if user has too many groups.
- Adjusted the left panel menu to be more clickable when selecting a group.
- Fixed an issue where you could not open a shared folder inside of a group.
- Modified the side menu to automatically close when opening a file on mobile.
- Fixed missing plus icons in gradient and expression evaluator modals.

#### 2023-10-Major

##### New Features
- <strong>New Drop-Down Component -</strong> Added a new Drop-Down Select component that allows users to add a selectable option to a dashboard and bind scripts to it.
- <strong>Shareable URLs -</strong> Added an option to generate a URL snapshot of a dashboard that can then be shared with other users.
- <strong>New Event Manager Actions</strong> - Added <em>swapTags</em> and <em>transformTags</em> actions to the Event Manager that allow the user to swap out the current set of tags in the dashboard, or apply a transformation to the names of the existing tags.
- <strong>New File Menu -</strong> Modified the file menu to work as an expandable tree to ease navigation between folders and make it more user-friendly.
- <strong>New File Context Menu -</strong> Added a context menu to the file menu to make it simpler and easier to perform actions against specific files and folders and make the UI cleaner. You can right-click any file/folder to open it.

  <img src="/wiki/assets/media/general/apps/gestaltpnid/contextmenu.gif" alt="contextmenu" style="max-width:400px" loading="lazy" />
- <strong>New Manual Tags</strong> - Added the ability to manually add tag names to a dashboard to allow the addition of metatags and to also serve as placeholders.

##### Modifications and Improvements
- Added the ability to create a new folder in the file explorer modal.
- Added loading indicators when performing various actions on files to inform the user an action is being processed.
- Added a close button to the colour picker.
- Made tweaks to the UI when viewing on mobile.
- Fixed an issue where a component's properties could not be edited on mobile.
- Improved the display/transition of the menu icon when opening and closing the menu.
- Increased the hovering area of the x button on pop-ups.
- Fixed an issue where text bindings for digital state tags did not use the string version of the state.
- Fixed an issue where you could not edit the bindings of a child component.
- Fixed an issue where creating genie for charts and scatterplots did not save the tags.
- Added automatic retrying of requesting data sources when the initial request fails.
- Fixed an issue where text bindings' prefix and suffix on user preferences were reversed.
- Fixed link on session expiry popup not redirecting to the login page.
- Added an info icon on the bindings pop-up to notify users on how to change a binding's tag data type.
- Added hyperlink as a property that can be templated and made it so hyperlinks are automatically encoded when generating files.
- Fixed an issue where you could not view the properties of components filled with a gradient.
- Fixed Historical PnIDs breaking when tags return no data.
- Fixed an issue where horizontal flipping did not maintain the component's position.
- Fixed the select file modal not resizing on mobile.
- Fixed an issue where functional components could break a page in certain cases.
- Fixed an issue where copying files with the same file name would not overwrite the existing files and instead duplicate them.

#### 2023-08-Major

##### New Features
- <strong>Personal and Group Genies -</strong> Added Default, Personal and Group Genies to separate user/organisation created Genies and prevent them from being accessible by other users.
- <strong>Personal and Group Symbols -</strong> Added Default, Personal and Group Symbols to separate user/organisation created Symbols and prevent them from being accessible by other users.
- <strong>User Preferences -</strong> Added a preferences menu to configure specific settings on PnID such as the default home page, font size and colours.
- <strong>New Context Options -</strong> Added Undo, Redo, Add Link, Add Event and open embedded components in a new window as options to the right click context menu.
- <strong>Unsaved Changes Warning -</strong> Added a warning when a user tries to navigate away from a page with unsaved changes, providing them the option of saving before navigating away.
- <strong>Double Click to Edit Text -</strong> Added the ability to double click a text element to edit the text.
- <strong>Copy Properties of a Component - </strong> Added options to copy and paste properties from one component to another from the context menu.
- <strong>Recently Added Tags -</strong> Added a recently used tags list to the tag browser modal to reduce the time of creating multiple bindings using the same tag.

##### Modifications and Improvements
- Added new set of default Genies & Symbols accessible by all users.
- Added a property and shortcut to disable the tooltip (SHIFT + T to toggle tooltip) for a dashboard.
- Modified default input, button, and range components sizes upon creation to fit the canvas grid.
- Fixed an error on adding a binding after adding a new data row in bindings table.
- Fixed the removal of tags on charts creation table to trigger only when clicking directly on the removal icon.
- Fixed an issue where selecting individual points on a line would not deselect when in a group.
- Updated Packages that contained Vulnerabilities.
- Removed line selection points displaying in a group when the group is not selected.
- Added a border radius property to range components.
- Fixed linking PnID by ID from not displaying the file name on the properties panel.
- Removed partition lines from right properties panel.
- Modified the event names in the event manager to be friendlier to users and added descriptions on how they behave.
- Fixed an issue where double clicking and dragging on smaller components in a group would not allow the user to select and move the component.
- Renamed the border radius property to fillet radius.
- Modified the context menu so only relevant actions are displayed.
- Fixed an issue where selected points on a line would not reset when performing a drag select.
- Fixed rename pop up having the application name as part of the file path.
- Removed the highlight on hover for non clickable text on right properties panel.
- Removed the "delete for everyone" option on delete modal for files that have not been shared.
- Fixed an issue where the tag values returned with an empty string and cause text binding to stop working.
- Fixed the tooltip and context menus from obstructing other UI elements.
- Added existing files in the file manager to make it easier for the user to see what is currently present.
- Fixed the selected tool appearing as deselected when it is still actually selected.
- Fixed an issue where functional components would prevent the user from applying new query settings.
- Adding dragging for all modals to make it more consistent.
- Disabled the paste option in the context menu if there is nothing to paste.
- Fixed an issue where child folders in a folder would not load correctly.
- Fixed an issue where PnID would try to parse the state of tag when it did not have a state value.
- Modified text binding property names from pre-text and post-text, to prefix and suffix.
- Hid the menu icon in embedded PnIDs.
- Removed the option to duplicate files on copying of a folder's contents to another.
- Fixed an issue where you could not minimize an maximised embedded component when double clicking.
- Readded the Save As button at the file/folder level in the left side menu.
- Fixed typos in the "New Update" notification.
- Increased the permitted file size when importing PnIDs from 512kb to 2mb.
- Fixed an issue where following a "save-as" the wrong path would be loaded in the URL.
- Fixed issue where a group's specific permission level was being checked in validation rather than the user's overall highest permission level.
- Fixed the contrast of text against the background colour of all colour pickers.
- Fixed sparklines not rendering when data is flat.
- Fixed the titles of tool buttons not updating when selected.
- Improved the styling of the import modal.
- Fixed tool keyboard shortcuts not highlighting the selected tool.
- Removed file extensions from the save as modals and defaulted the name of the new file as "Untitled".
- Removed the word "dashboards" from the top menu to declutter it.
- Added the name of the currently logged in user to the left panel.
- Fixed an issue where if the case of a tag name differed from the requested tag, it would break the dashboard.
- Fixed an issue where the search filter was not being applied when searching against organisation groups.
- Added validation when setting a custom time range when opening Trend from PnID.
- Modified the session expire modal so that it will now redirect the user to log in.

#### 2023-04-Major

##### New Features
- <strong>New Enumeration Binding Type -</strong> Added a new enumeration binding type that allows bindings to be created for tags that make use of enumeration states.
- <strong>New Co-ordinate Display -</strong> Added a new display for the current mouse coordinates in edit mode (shift + m to enable).
- <strong>New Colour Palette Implementation -</strong> Added a new implementation for the colour palettes.
- <strong>Group Editing Improvements -</strong> Improvements to the management of groups that allows users to modify child components and also any tags contained with a group without the need to ungroup it first.
- <strong>Automatic Tag Selection for Bindings -</strong> Modified the creation of new bindings to automatically set the tag of the previous binding if it exists to help speed up the creation of multiple tags.
- <strong>Tool Selection Improvements -</strong> Modified the component toolbar to group individual tools under common categories.

##### Modifications & Fixes
- Added an option to fill the area under a sparkline.
- Added explanation of binding activation conditions when hovering over the data range input area
- Modified the line width of smaller grid boxes to make them easier to distinguish from the larger grid boxes.
- Fixed undefined error occurring when selecting the root folder in the file dialogue.
- Fixed Trend not updating times when embedded into a PnID.
- Added support for the SRC property when templating PnIDs with embedded components or images.
- Fixed issue where users would have to escape backslashes in template configuration file.
- The Select tool will now be set as default when moving to edit mode.
- Modified the copying of a component to maintain any bound tags.
- Fixed the bounds calculation not including the border width of embedded components.
- Refactored the tooltip implementation to improve performance.
- Fixed an issue where if a genie contained too many tags you were not able to see the ones at the bottom.
- Fix bounds not being rendered on functional components (input, button, range).
- Fixed symbols & genies not displaying inputs, buttons or range components.
- Fixed tooltip not displaying the radius when constructing an arc or circle.
- Restricted the undo buffer to only allow a maximum of 100 commands to prevent out-of-memory issues.
- Fixed an issue where the visible property was not being applied correctly for inputs, buttons and range components.
- Fixed an issue where state tags were being incorrectly identified as numeric tags and displaying as NaN.
- Fixed session expiring when user is currently using Gestalt.
- Fixed an issue where a share could not be revoked.
- Modified embedded components to prevent menu shortcuts being used within them.
- Added an import dialogue that allows users to select where to import a file to.
- Fixed the error message when removing an admin from the permissions.
- Fixed pending shares having the wrong icon for folders.
- Removed the close button from session expiry dialogue.
- Modified the display of shares to allow the user to hide them.
- Fixed keyboard shortcuts invoking the browser defaults when focused on certain elements of the UI.
- Modified the Save As dialogue to allow the user to select a folder to save the file to.
- Removed the Save As option at the folder level in main menu.
- Fixed bounding box padding inconsistencies
- Fixed highlighting of tools becoming stuck.
- Removed Status and debug headers in right side menu.
- Fixed an authentication error occurring when logging in.
- Fixed an issue where the data request would fail if one of the tags requested did not return.
- Fixed the data source error dialogue appearing when the request is unauthorised.
- Updated package versions of vulnerable packages.

#### 2023-02-Major

- <strong>Dashboard Guideline</strong> - Added new dashboard guideline that displays the border of the dashboard's configured dimensions. Can be toggled on and off with Shift + b.

##### Modifications and Fixes

- Added tooltip that displays the size of the component the user is currently drawing.
- Added ability to define the area of an embedded component when adding it to a PnID.
- Added border property for embedded components.
- Added auto completion of code to the script editor.
- Added option to override existing files when copying a folder.
- Improved display of properties in the component properties menu.
- Improved display of UI when viewing PnID on a Mobile.
- Modified the text of the dialogue when there is an error after refusing a share.
- Fixed the user, in some occasion, not being authorised on intial load of the applicaiton.
- Fixed the tooltip displaying when in dialogue windows, when it shouldn't.
- Fixed PnID tooltip timestamp not working correctly when embedded in Trend.
- Fixed PnID tooltip values displaying as NaN when embedded in Trend.
- Fixed issues with zooming and panning on mobile.
- Fixed issue where changes made to permissions were not applied.
- Fixed issue where shortcuts were being triggered when typing in input boxes.
- Fixed issue where the Tag Manager would not open.
- Fixed an issue where state bindings were not applying correctly.
- Fixed issue where a stored script was not being loaded correctly.
- Fixed Trend having a border when embedded +  add a border property.
- Fixed PnID opening a tag in Trend not being set to real time.
- Fixed issue where you could not select the current font size of a text component with the mouse.
- Fixed linked PnID property being assigned undefined if no file is selected.
- Fixed issue where copying a line component would result in a malformed line component being created.
- Fixed issue where sparklines were not rendering the last point in the dataset.
- Fixed issue where linking a PnID by Id would cause the file with the link to be overwritten when navigating to the linked page and saving.
- Fixed issue where grouping an arc would result in the incorrect bounds of the group being calculated.
- Fixed issue where bindings were being set to look at the incorrect tag following a save.
- Fixed issue where not all tags contained in a group were being displayed in the tooltip.
- Fixed issue where context menu would not always appear when clicking on a group.
- Fixed issue where session expired dialogue would appear in embedded windows.
- Fixed issue where the zoom would be inverted for Mac users if they have natural scroll enabled.
- Fixed issue where the zoom would not work as intended on mobile.

#### 2022-11-Major

##### New Features

- <strong>Bar Chart Component</strong> - A new component for displaying aggregate data by interval with the choice to use a sum or average aggregation.
- <strong>Tag Information on Hover</strong> - Added names, values and timestamps of any bound tags when hovering over a component.

##### Modifications and Fixes
- Added minimum and maximum properties to sparkline to allow custom scaling and prevent rendering of points outside of this range.
- Added search controls to the component explorer.
- Added the option to retrieve only the id of the component in the component explorer.
- Added an option to disable the interaction of an embedded component.
- Added the ability to double click an embedded component to maximise it.
- Added a file system modal that the user can use to select a trend dashboard to embed.
- Added a checkbox option to display groups with no files saved to them.
- Added “m” shortcut for opening the left side menu.
- Added radius property to arc components, so user can manually set it.
- Modified Group Dashboards to only display groups that have files.
- Modified unavailable data source modal to provide more information, present friendlier data source names and allow the user to refresh the data source without having to reload the page.
- Modified the method in which files are saved to make it more robust and less prone to errors.
- Modified event manager to disable scripting input until an event is selected.
- Modified templating modal to cancel any pending requests if the user closes the dialogue.
- Modified templating modal to prevent the user from being able to kick of the generation process multiple times.
- Fixed an issue where the line-join property was not being correctly applied
- Fixed an issue where the sparkline would always use 0 as its minimum value when scaling.
- Fixed an issue where sparklines could not be hidden using the visible property.
- Fixed an issue where a file whose name contained a comma could not be saved
- Fixed an issue where text components were not loading their properties correctly.
- Fixed an issue where it did not populate the properties of a newly created chart component.
- Fixed an issue where the application would not work in Safari due to the use of a Regex feature not supported by it.
- Fixed an issue where if a time span was used for the interval, it would not be correctly parsed.

#### 2022-09-Minor

##### New Features

- <strong>Sparkilne Rework:</strong> Sparkline component has been reworked to allow multiple tags to be added that scale relatively to the overall data range and also now contains a data buffer that will display data prior to the configured PnID start time.

##### Modifications and Fixes

- Added an error dialogue when the import of a PnID fails.
- Added the data function to the query parameters when loading page via URL.
- Improved handling of session expiry to allow the user to login and continue on their loaded PnID.
- Improved the UI when using PnID on mobile.
- Modified the scaling of lines with position bindings on them so that it now scale the bindings to.
- Modified the embedded component so that it will now receive updates on query changes that the child application can respond to.
- Fixed an issue where right-clicking on a dashboard item to rename, would cause the default browser menu to appear.
- Fixed an issue where the default alignment for text was not being set correctly.
- Fixed an issue where you could no longer group a single component .
- Fixed an issue where you could group another group infinitely.
- Fixed an issue where the URL for the home page was not displayed.
- Fixed an issue where components linked by ID would not navigate correctly.
- Fixed an issue where opening a link in a new window was not working.
- Fixed an issue where the tag manager would go off the screen and the controls would not be visible.
- Fixed an issue where right-clicking a scatter plot component did not provide the option to trend the data.
- Fixed an issue where tags in a scatterplot were not being persisted on page saves.
- Fixed an issue where no error message was displayed when a data request failed.
- Fixed issues that were preventing the files from bundling incorrectly.
- Fixed an issue where the hitbox of a rotated group was not correct.
- Fixed an issue where groups that contained rotated components did not display their bounding box correctly.
- Fixed an issue where scaling a rotated component would cause the bounding box to become misaligned.
- Fixed an issue where scaling a circle would result in an incorrect translation.
- Fixed an issue where genies were not rendering correctly when they contained a rotated group.
- Fixed an issue where you could not undo the grouping of components.
- Fixed an issue where parsing numbers would failed depending on the locale of the user.
- Fixed an issue where you could not open the context menu when viewing a PnID on mobile.
- Fixed an issue where querying data using PLOT would result in "No Data" being displayed.
- Fixed an issue where querying data using PLOT would result in “No Data” being displayed.
- Fixed an issue where clicking a folder multiple times would prevent the user from saving a file in that folder.
- Fixed an issue where you could rotate & flip a locked component.

#### 2022-08-Major

##### New Features

- <strong>XY Scatterplot component:</strong> Users can now add a XY scatter plot component that will allow them compare tags against one another.

<img src="/wiki/assets/media/general/apps/gestaltpnid/pnid_create_scatter_plot.gif" alt="pnid_create_scatter_plot" style="max-width:400px" loading="lazy" />

- <strong>Event Manager - Set query scripting action:</strong> Users can now create a "Set Query" action in the Event Manager that will alter the PnID's query settings and apply them.
- <strong>Event Manger - Get Tag Data, Sum & Average functions</strong> - Users can now use the <em>getTagData(datasource, tag)</em> shortcut to retrieve all available data for a tag. The returned object also provides the <em>sum()</em> and <em>average()</em> helper methods to make doing these operations simpler.

##### Modifications and Fixes

- Added validation for the Naming of a PnID.
- Added application icon to the side menu.
- Added function to retrieve all tag data in an event manager script.
- Added a copy tag function to the bindings dialogue.
- Added a check to the scripting message handler to ensure the message received is in the expected format.
- Added context menu option for opening the bindings dialogue.
- Added a dialogue that is displayed when the request to retrieve data sources has failed and allows the user to retry the request again.
- Added a dialogue for when an error occurs when applying a new data range.
- Modified error messages to be more informative to the user.
- Modified the loading symbol to use the Intelligent Plant logo.
- Modified the file size limit to 10mb for importing PnIDs to be consistent with what we allow to be posted to the server.
- Modified right side panel to separate the dashboard properties from the selected component properties, into its own static menu.
- Modified Event Manager GetValue function to allow a specific index to be provided.
- Fixed create folder using path instead of parent Id.
- Fixed an issue where the real-time subscription would be lost when the connection dropped.
- Fixed Input, Button, Range and Embedded components disappearing when copying and pasting.
- Fixed an issue where the interpolation of data was creating an extra point.
- Fixed an issue where the start and end date were being set incorrectly, and not maintaining the correct time range.
- Fixed an issue where the time range being interpolated for was way outside of the original query
- Fixed issues with how PnID was managing the start and end time, which was leading to an ever expanding time range and lead to the incorrect number of points being interpolated.
- Fixed an issue where historical data was not being correctly set for tags when creating a binding.
- Fixed an issue where PnID would keep trying to process messages from a trend window that was shut and throw an error.
- Fixed an issue where creating a binding with a new tag would create a separate real-time subscription rather than adding it to the existing one.
- Fixed an issue where subscribing a new tag was causing a serialisation error due to it passing an array of tag names and not a dictionary of tags grouped by data source.
- Fixed an issue where bindings would be assigned to the incorrect tag when data for a tag present in the dashboard was not returned.
- Fixed issue where loading icon was not being displayed when applying new data range.

#### 2022-06-Major

##### New Features

- <strong>Organisation Wide Home PnID:</strong> Users can now create a Home PnID in the "All Users" group, which will set the home page for all members of that organisation.

##### Modifications and Fixes

- Modified the event manger to now display scripting errors.
- Fixed an issue where event manger was not highlighting scripting.
- Fixed an issue where write actions were parsing the values as int instead of as a float.
- Fixed an issue with templating, where configuration values were replacing values they shouldn't.
- Fixed an issue where a file would be removed even if there existed another admin on it.
- Fixed an issue where the paging on the user search was not working if the user was included in the list.
- Fixed an issue where application would break if the user had no Home PnID.
- Fixes an issue in templating when selecting a target folder, which result in the wrong path being set.
- Fixed an issue where renaming a PnID in a group where on reload it would not be found.
- Fixed an issue where PnID would freeze because it would attemptto interpolate from 0001-01-01 then to now.
- Fixed an issue where an iframe with a url that did not include a trailing / would repeatedly reload.

#### 2022-04-Major

##### New Features

- <strong>Generate files from template:</strong> Users can now generate multiple files from a specified PnID with varying configurations of tags, colours and links.
- <strong>Copy Folder Contents:</strong> Users can now copy the entirety of a folder's contents to a specified location, allowing files to be moved elsewhere with ease.
- <strong>Linking directly or relatively:</strong> When linking a component to navigate to a PnID, users will now have the option to either link directly to a given file or use a relative link that will navigate to a file relative to the PnID's location.

##### Modifications and Fixes
- Added text to inform the user there are no permissions when viewing permissions on a file/folder.
- Modified group dashboards area to now display groups you are a member off and not groups that are simply visible to you.
- Modified group dashboards area to now display groups by their organisation.
- Modified groups in the share modal to now display groups by their organisation.
- Modified queries for retrieving folder contents that significantly improves the load times of the file explorer.
- Added error message when user attempts to accept a share in a location they are not permitted.
- Modified method of retrieving real-time updates to improve stability.
- Modified the method in which data is queried to improve load speeds.
- Modified binding of state tags to allow the numeric or string value of the state to be used.
- Modified "Zoom to Fit", "Zoom To Height", "Zoom to Width" properties to be a single property called "Zoom To" where you can select the zoom choice.
- Fixed an issue where removing permissions from a folder could result in the underlying folder structure being deleted.
- Fixed an incorrect message being shown when accepting a share
- Fixed an issue where the embedded component would not always load its content.
- Fixed an issue where setting sparklines to use auto scale would mean they would not work.
- Fixed an issue where auto scaled sparklines would drop of the page when a zero existed in the data.
- Fixed an issue where the application would serve cached content and cause the app to break.
- Fixed an issue where an error would be thrown when attempt to retrieve data sources that support the asset model.

#### 2022-03-Major

##### New Features

- <strong>Embedded page component:</strong> A new component that allows user's to embed content from other sites into there dashboards.
- <strong>File selector modal:</strong> This allows users to select a specific PnID they want a component to link to, thereby removing the need to manually enter a path.

##### Modifications and Fixes

  - Modified the getValue method in the events dialogue so that it can now take a selected point parameter. This means it will take the value of the tag for the currently selected point and not the latest.
  - Modified OnValueUpdate scripting event to also run when value is changed via the range selector.
  - Added an exception when linking to a home pnid from a group, so it correctly loads the user's home file.
  - Modified linking from files that exist in a group so that, by default, it navigates relative to the groups folder, unless a group id is present in the link.
  - Modified bindings that use state tags to allow choice of whether you use the string or numeric representation.
  - Improvements to the file structure UI to facilitate larger file names
  - Improvements usability on mobile phones.
  - Improvements to the file handling system to make it more robust.
  - Fixed an issue where numeric bindings were being activated like a state binding.
  - Fixed an issue where user's could accept shares in a location they were not permitted to.
  - Fixed an issue where user's could still access files when they had been removed from the appstore group that access was permitted to.
  - Fixed an issue where the share pop up would crash on the initial opening.
  - Fixed an issue where a new folder would not be created when pressing enter.
  - Fixed an issue where saving a file in a folder that had a space in it's name would result in an error.
  - Fixed an issue where the file menu is not reloaded once a file has been deleted.
  - Fixed an issue where removing the last permission from the permissions panel will delete the file without providing a warning.
  - Fixed an issue where permissions changes will persist after an error is thrown.
  - Fixed an issue where user could rename a file as empty.
  - Fixed an issue where files could be left orphaned by removing all administrators.
  - Fixed an issue where PnID was not keeping track of the windows it had opened.
  - Fixed an issue where trend was not adding tags to existing windows or creating new plots for differing time range.
  - Fixed an issue where dropping a genie would load the image and not the genie.
  - Fixed an issue where data function would be empty in the settings menu.
  - Fixed an issue where queries would always use the INTERP data function.
  - Fixed an issue where it was not hiding the time controls when switching to a realtime pnid from a historical one.
  - Fixed an issue where you could not rename a file in a group structure.
  - Fixed an issue where locking/unlocking component was displaying the incorrect icon.
  - Fixed an issue where symbols at the root would not load if user had navigated to a sub folder.
  - Fixed an issue where bindings on groups were not being loaded when opening a page.

#### 2021-10-Major

##### New Features
- Added share system for groups.
- Added share and permissions controls.
- Added invert option to create chart component.
- Added functionality to rename files and folders.
##### Modifications and Fixes
- Fixed an issue where you could not edit a binding because the data source could not be found.
- Fixed issue where the chart modal was the width of the entire screen.

#### 2021-09-Major

A minor update that contains the following changes:

##### New Features

- Added Roboto font family as an option in fonts.
- Added the olney light font family as an option in fonts

##### Modifications and Fixes

- Modified adding of tag names to event manager so that they are properly escaped if they contain any special characters.
- Modified setting so PnID does not always prompt user to authorise datasources.
- Modified the console window to be scrollable, so that when many actions are being performed you can see the complete output.
- Fixed a bug where bounds were not being calculated correctly because a text element's line height property was empty.
- Fixed a bug where time picker would revert to absolute time when press enter.
- Fixed a bug where request data when selected start date is after selected End Date
- Fixed a bug where long folder names occupied two spaces.
- Fixed a bug where pressing log out would not prompt to save changes.
- Fixed a bug where PnID crashed if no cookies were found in the browser.
- Fixed the link to release notes to open in a new window.
- Fixed a bug where there was a change the request to initialise a user could be called twice if switching between home and pnid quickly, by moving the process to the onauthenticate method.
- Fixed a bug where certain filepaths caused an issue when saving a new file.
- Fixed a bug where a file would not be saved at the correct path.
- Fixed a bug where the loading symbol would display all the time when displayed in a Trend dashboard.
- Fixed issue where you could not share a file if it was nested in a folder

#### 2021-06-Major

A major update that contains the following changes:

##### New Features

- Added getStringValue function to the event manager that allows the user to retrieve the current string value of a tag.

##### Modifications and Fixes

- Modified opacity being applied in edit mode to prevent control components being difficult to find.
- Modified the align to take a restricted set of values.
- Fixed issue where text's colour would disappear.
- Fixed issue where tags from one data source would end up in results of another if switched whilst request was still ongoing.
- Fixed issue where line thickness binding was not being applied.
- Fixed issue where loading pages with large number of tags on a slower data source would create a race condition that caused the unsubscribing of tags to take place after the subscription of new tags, which meant all tags were unsubscribed.
- Fixed an issue where, tags that had the same name, but from different data sources, would set the data to what ever tag occurred first.
- Fixed issue that meant saving a PnID would reassign bindings to point at tags where the tag name was the same, but the data source was different.
- Fixed bug where, when upon retrieving the requested historical data, it was failing to set it into the correct position.
- Fixed issue that was causing tags to be deleted when saving PnIDs.
- Fixed the font used when displaying a new share.

#### 2021-04-Major

A major update that contains the following changes:
##### New Features

- Added 3 New design components (Input Boxes, Buttons and Range Bars). These allow controls to be added to PnIDs that users can interact with to perform specific actions.
- Added Event Manager and Scripting Engine. This allows users to write their own custom Javascript scripts to perform certain actions. These scripts can then be assigned to a specific event on a component, which will be executed when activated.
- Added "Run Events" property to PnID properties that allows control over whether events should be ran in a page or not.
- Added Components Explorer Modal that allows users to see all component that are currently in a PnID.
- Added unauthorised data source modal, which indicates to the user what data sources they have not authorised when opening a PnID.

##### Modifications and Fixes

- Changed "Align" property so that it now has a restricted set of values.
- Fixed issue where folder would not be created when clicking the create folder icon.
- Fixed issue where user's access token was not being refreshed.
- Fixed issue where selected pallet colours were not being applied to newly created components.
- Fixed issue that caused borders to become the wrong colour.

#### 2021-01-Hotfix1

Minor update to fix an issue regarding real-time tag subscriptions not being removed when a PnID window closes.

#### 2020-05-Hotfix1

This release contains the following changes:
##### New Features

- Added improved tag manager that better displays current values and historical values of tags present in a PnId.
- Added control for selecting the data function to be used in the data request for a PnID.
- Added context menu control to open a linked component in a new window.

##### Modifications and Fixes

- Fixed issue where client-side data interpolation would break when requested data contained bad values.
- Fixed issue where copying a group would not properly copy the bindings.
- Fixed issue with rotation bindings not working on groups or text components.
- Fixed issue where PnID shortcuts would not work when the main menu was open.
- Fixed issue where historical data was not always being requested when adding a binding that used a new tag.
- Fixed issue where vertical position bindings would break on opening of a PnID.
