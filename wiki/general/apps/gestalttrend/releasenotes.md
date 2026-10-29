---
layout: wiki
title: "Gestalt Trend Release Notes"
permalink: /general/apps/gestalttrend/releasenotes.html
---
This page describes the release notes for [Gestalt Trend](https://appstore.intelligentplant.com/Home/AppProfile?appId=3fbd54df59964243aa9cf4b3f04823f6).

### 2026-10-Minor {: .title}

##### New Features

- Added a quick way to get to axes max and min menus.

##### Modifications and Improvements
- Removed exp tags from data request to prevent "No tag definitions could be loaded" error logs

Release date: 2026-10-30

### 2026-09-Minor {: .title}

##### New Features
- Implemented new functionality to fully lock axes.

### 2026-08-Minor {: .title}

##### Modifications and Improvements

- Fixed embedded Trend not updating values when on realtime.
- Updated Trend limits colours to better work on dark modes.
- Fixed user access to file from a group path.

### 2026-07-Minor {: .title}

##### New Features
- Add option to display multi axes transparent with a max/min value.

##### Modifications and Improvements

- Fixed spellings.
- Fixed PnID window breaking the save on Trend.
- Fixed metrics table not updating tags when closed.
- Made table headers static.
- Fixed time menus not updating properly.
- Improved security on file access within organization's groups.
- Refactored cached groups to separate all groups or only user ones.

### 2026-06-Minor {: .title}

##### New Features
- Added functionallity to download a screenshot of a trend
- Added an option to store the preferred Data Function on the user preferences
- Added a setting for user to select whether to only zoom-scroll on the axes.

##### Modifications and Improvements

- Improve the way bad values are interpolated and drawn in Trend
- Updated packages
- Updated libraries

### 2026-04-Minor {: .title}

##### New Features

- Added an feature to mark multiple point on a Trend, PCP or Scatterplot view.
 <img src="/wiki/assets/media/general/apps/gestalttrend/screenshot_2026-04-16_084106.png" alt="screenshot_2026-04-16_084106" style="max-width:400px" loading="lazy" /><img src="/wiki/assets/media/general/apps/gestalttrend/screenshot_2026-04-16_084358.png" alt="screenshot_2026-04-16_084358" style="max-width:400px" loading="lazy" /><img src="/wiki/assets/media/general/apps/gestalttrend/screenshot_2026-04-16_084437.png" alt="screenshot_2026-04-16_084437" style="max-width:400px" loading="lazy" />

##### Modifications and Improvements

- Fixed Trend not loading a PnID window.
- Hide titlebars when Trend is embedded on a PnID for a better seamless integration.
- Adjusted dates layout to window width.
- Fixed metrics table height not resizing properly on embedded dashboards.
- Fixed metrics table not being selectable to copy values.
- Fixed Trend interpolating Bad values with Good status.

### 2026-03-Minor {: .title}

- Moved current time text from titlebar to create more space for menus on embedded or small windows.

<img src="/wiki/assets/media/general/apps/gestalttrend/timemenutrend.gif" alt="timemenutrend" style="max-width:600px" loading="lazy" />

### 2025-11-Minor {: .title}

- Fixed redirection to Home page if a new user goes directly to /Trend or /PnID urls.
- Fixed the tag search dialog closing when clicking on an error message.

### 2025-08-Minor {: .title}

##### Modifications and Improvements

- Fixed FFT view not loading correctly on a saved file.
- Fixes on Metric Menu.

### 2025-07-Minor {: .title}

##### New Features
- Refactor the Metrics view as a window menu.

##### Modifications and Improvements

- Fixed arrow key navigation for scrubber control.
- Fixed scroll zoom on X axis breaking rendering.
- Fixed refresh token not updating correctly.

#### 2025-06-Minor

Release date: 2025-06-27

##### Modifications and Improvements

- Fixed an issue where the selected tag name was being hidden by other tags due to the order they were drawn.
- Modified "unauthorised data source" pop up to show the data source display names instead of the data source id
- Fixed an issue where Trend would load a recent access folder instead of the home folder.
- Fixed an issue where the folder select modal would load a user's personal home folder, rather than their group's home folder
- Added a warning message for when a query has more points than the set limit.

#### 2025-05-Minor

##### New Features

- Added the ability to filter tags by the label property.

##### Modifications and Improvements

- Fixed the end time on the menu and popup showing the year 1969 when the relative end time is set to now.
- Fixed an issue where the window would not resize correctly, and the layout would not be correct, when maximising a window on mobile.
- Fixed the retry button on the data source error modal.
- Fixed the window background colour not consistently changing when modifying the colour.
- Fixed the layout of the icons and time on the window title bars.
- Improved error messages to make them more descriptive and inform the user what actually went wrong.
- Improved UI consistency.
- Added missing option for GMT+0 Coordinated Universal Time in the time zone selection.

#### 2025-04-Minor

##### New Features

- Added an option to set the time zone for a dashboard where all dates will be displayed with respect to that time zone and any queries will also be relative to that time zone.

##### Modifications and Improvements

- Modified the modal windows so that they close when navigating to other dashboards, preventing them from becoming a nuisance.
- Fixed the import modal not displaying an error message when an import fails.
- Fixed the import model not closing when an import is successful.
- Fixed the pinch-zoom trackpad gestures invoking the browser events when performing on the main trend area.

#### 2025-03-Major

##### New Features

- Completely rehauled the CSS of the application to improve the user experience.

##### Modifications and Improvements

- Fixed an issue where you could no longer drag and drop a trend file to load it.
- Modified live updates in Trend to receive all values that have been received since the last update.
- Fixed date picker converting the time to UTC after applying query when local time setting is not UTC.
- Fixed an issue where the user was not being redirected back to the original page after a successful login.
- Fixed an issue where the version cookies were not persisted when embedded in a different domain.
- Updated the user guide to reflect the recent changes.

#### 2025-02-Major

##### New Features
- Added a new option to hide the trendlines in trend view and only display the data points.
- Added a new option to hide individual tags on a Trend view. This will be extended to all views it later updates.

##### Modifications and Improvements
- Added the timestamp of the hovered over point to the mouse label in the XYScatter view.
- Added a notification to inform the user when they are add the end of the search results in the tag search.
- Fixed an issue with UI elements being duplicated when duplicating an existing window.
- Fixed an issue where the font size of the labels in PCP would sporadically change.
- Fixed an issue where Trend would fail to load dashboards saved in an older format.
- Fixed an issue where a user could not log in to the application when using a login that was not attached to an organisation.
- Fixed an issue where opening a recent query that contained special characters would fail.

#### 2025-01-Major

##### New Features
- Added a recent history for files opened by the user to the left hand menu for quicker access in the future.

##### Modifications and Improvements
- Added ability to specify default time settings in the preferences menu.
- Added Improved feedback on the progress and outcome when importing files.
- Fixed an issue where values received in real-time were being discarded when there was more than 1 trend in the window and Fixed an issue where new tags added would not receive updates.
- Added extra validation to the name of files/folder to prevent them contain \, /, & and +.
- Renamed the "Limits" view to "Metrics" and improved it to also display the descriptive statistics of a tag.
- Fixed an issue with the colours of axes when in stack mode.
- Fixed the touch action for Trend on mobile.
- Updated the text on the share URL pop up to be more informative.
- Updated the data source select to display the display name of the data source.
- Fixed an issue where Trend would not load on IOS safari because of an non-existent export.
- Replaced the jquery date pickers with the native HTML5 date pickers.
- Fixed Gestalt throwing console errors repeatedly due to attempting to parse postMessages from browser extensions
- Fixed an issue where demo files would not maintain their URL.
- Fixed an issue where web workers performing background calculations were causing excessive memory use.
- Fixed an issue where exporting a folder would not export any of its underlying folders and files.
- Fixed an issue where the login process would not return the user to the original URL on successful login.

#### 2024-11-Minor
<strong>Modifications and Improvements</strong>

- Improved the exporting of files by allowing the selection of multiple files to export.
- Improved the sharing of plots via URL by shortening any URLS that are too long and would fail.
- Improved the display of trends when there is no data for a period.
- Modified the left panel to close when clicking on the main content area of the application.
- Modified all user actions to display a notification indicating whether it succeeded or failed.
- Fixed an issue where the Tag Manager button would not be displayed when switching back from Simple Trend.
- Fixed a bug where Trend would throw an error when opening empty folders on groups.
- Fixed an issue where windows would not maximize correctly.
- Fixed an issue where PnID windows menus were not aligned correctly.
- Increased the number of points requested when performing a RAW query to 5000.
- Fixed an issue where a new window would be positioned incorrectly if you have previously maximised an existing window.

#### 2024-10-Major

##### Modifications and Improvements

- Modified the embedded trend to use the user's preferences when opening the window.
- Fixed an issue where a vertical line to 0 was being drawn at the start of a trend.
- Hid the open context menu button when on mobile and fixed an issue where the tag table did not display correctly on mobile.
- Fixed an issue where the title bars did not always display when opening a Trend from PnID.
- Fixed an issue where the selected time on Simple Trend would not be updated following a zoom.
- Fixed canvas not being cleared when removing all tags or last tag on a plot. Improved performance of removing large numbers of tags.
- Removed axis display from tag manager and widened tag names field.
- Fixed preview window events not triggering correctly.

#### 2024-09-Major

##### New Features
- <strong>Bulk Import</strong> - Added the ability to Import files and folders in bulk.

##### Modifications and Improvements

- Added the word "bad" on the marker when a value has a bad status.
- Added a highlight to the y axis to indicate when it is locked.
- Added quick buttons on Simple Trend to allow user to add tags, share, change the times, open a file and start a new window.
- Fixed the PcP axis rendering too many intervals when the data-range is very small.
- Removed the dashboard mode option from the settings in the left side menu.
- Allow the colour of the canvas to be specified in a dynamic trend URL.
- Fixed an issue where the personal default settings were overwriting dashboard settings.
- Prevented the opening of the expression evaluator before adding a tag
- Fixed data mapping using bad values to calculate the max and min of a tag.
- Fixed an issue where Trend was not interpolating values correctly.
- Fixed Trend not updating the compare tag when loading a saved dashboard.
- Fixed an issue where Trend would break when there is no data returned for the preview.
- Fixed an issue where a state tag would incorrectly be marked as numeric.
- Fixed an issue where the tracking of a zoom would be lost if you went outside the bounds of the window.
- Removed the min and max markers when rendering digital tags.

#### 2024-07-Major

##### New Features

- <strong>New Demo Files</strong> - Moved the demo files to their own directory, separate from the user's personal files, and added a brand new set.<img src="/wiki/assets/media/general/apps/gestalttrend/screenshot_2024-07-24_095306.png" alt="screenshot_2024-07-24_095306" style="max-width:200px" loading="lazy" />

- <strong>File Audit Trail</strong> - Added an audit trail of who created and last modified a file on the share popup, and on hovering over a file in the left side panel.
<img src="/wiki/assets/media/general/apps/gestalttrend/file_info.gif" alt="file_info" style="max-width:200px" loading="lazy" />

- <strong>Bulk Export</strong> - Added the ability to export files and folders via the left side panel context menu.
<img src="/wiki/assets/media/general/apps/gestalttrend/screenshot_2024-07-24_102014.png" alt="screenshot_2024-07-24_102014" style="max-width:200px" loading="lazy" />
##### Modifications and Improvements
- Modified the rendering of trends to skip any values that have a bad status.
- Modified the value label to hide the unit of measure if the tag is a digital state tag.
- Removed the lock on the time slider if the pre or post scrubs are turned on.
- Removed the edit and delete annotation options for annotations that are read only and modified the "more information" link to be more obvious.
- Reduced the width limit for when the trend compared select box is hidden whilst in the XY Scatter view.
- Improved how stacked mode in trend view works and added axes for each trend viewable on the dashboard.
- Improved the error message when failing to add tags due to invalid time settings.
- Increased the size of the hit area for the multiple selection checkbox.
- Fixed an issue where the wrong data would be assigned to the incorrect tag if there are multiple windows.
- Fixed an issue where a tag could be reordered above the table header.
- Fixed the open dashboard button on the main tab.
- Fixed unlinked plots reverting to default time settings on load of a dashboard
- Fixed the error message after overwriting an existing Trend file.
- Fixed the "Add tags" window being stuck loading after quickly switching between data source.
- Fixed Trend not having any preview data when opening from a PnID dashboard.
- Fixed the tag manager not removing the first row of the tag table upon being opened.
- Fixed the display mode box not updating to reflect the display mode when changing views
- Fixed an issue where the dashboards menu would show underneath the group dashboards menu.
- Fixed an issue where an exception would be thrown if you zoomed to a period with no values.

#### 2024-05-Minor

##### New Features

- <strong>Bulk File Delete:</strong> Added the ability to select multiple files in the left hand menu and delete them as one instead of deleting them individually.
<img src="/wiki/assets/media/general/apps/gestalttrend/bulk-delete-trend.gif" alt="bulk-delete-trend" style="max-width:200px" loading="lazy" />
##### Modifications and Improvements

- Modified data source select to group data sources under the App Store Connect they belong to.
- Modified the value labels to include the tag's unit.
- Fixed an issue where the initial load of data for an embedded PnID did not execute.
- Fixed the request of preview data on non selected tags for a second window.
- Defaulted the PCP view to show only a subset of the data and not all values and improved PCP tag hover detection.
- Fixed the select file modal shrinking after opening the settings modal.
- Fixed an issue where a digital tag would only display the state label at transitions in the data.
- Fixed an instance where the title bars would break into 2 rows
- Fixed an issue where the "share success" modal would not be shown if you had switched to the permissions tab and back before sharing.
- Fixed Trend crashing if multiple windows contain the same tags.
- Fixed an issue where the page within would fail to load up after saving.
- Fixed duplication of the select tag box in the annotation modal.
- Fixed PCP not letting you grab the first tag.
- Fixed an issue where the time was not updated when a new value is received.
- Fixed an issue where the data function select boxes were not syncing correctly.
- Fixed the point disappearing when hovering over it in the scatterplot view.
- Fixed an issue where it was not rendering the correct tag name on the Y-axis.

#### 2024-03-Major

##### Modifications and Improvements
- Moved from bundling script files on demand to bundling files ahead of time to reduce the file size and improve load times.
- Fixed an issue where files that were copied via the “copy contents of folder” action would not load correctly until after a refresh.
- Improved the performance of requesting data in large dashboards.
- Fixed an issue where mobile gestures were being triggered on desktop.
- Fixed the window settings not being loaded correctly for PnID windows embedded in Trend.
- Fixed an issue where the wrong URL would be saved for PnID windows embedded in Trend.
- Fixed an issue where opening a Trend with a custom window would throw an unauthorized popup.
- Removed the settings for specific windows from the left hand menu and added buttons for opening the window configuration modal.
- Fixed modals not displaying their message correctly when an error occurred whilst exporting a file.
- Fixed the maximum and minimum markers showing 1 if the data is flat and zero.
- Added a hold gesture to add annotations whilst on mobile.
- Prevented the default context menu from appearing when right clicking on the application banner.
- Added a menu to allow users to choose the selected tag on mobile.
- Modified the font weight and size of the selected tag to make it more visible in all scenarios.
- Fixed an issue where the timestep in a generated URL would always be parsed as a point number.
- Updated Trend UI to reflect the time settings when loading the data from a generated URL.
- Added the ability to provide custom filters on tag searches.
- Redesigned the Limits view to make better use of screen space and improve the usability.
- Increased the hover zone of annotations to make them easier to click
- Added the tag name the annotation belongs to, to the annotation modal.
- Added a message when trying to open an empty folder from the main menu.
- Fixed an issue where Trend would not render any axis positioned on the right-hand side in multi-axis mode.
- Fixed an issue where Trend the string representation of the values di not match the numeric values.
- Moved the loading Icon to be in the center of the screen and windows.
- Added a "Manage data sources" item and "Help" buttons to the left-hand menu of PnID and Trend.
- Fixed an issue where Trend would not load data when opening from a query string.
- Improved file menu modals to better represent the action being taken.
- Fixed an issue where the logout button would not actually log the user out.

#### 2023-11-Hotfix
##### Modifications and Improvements
- Fixed the missing axis lock icon.
- Fixed an issue where the tag search on Trend would not trigger a search when pressing backspace, delete or pasting.
- Fixed the preview not being shown on mobile.
- Fixed the preview not updating the indicator when change on the main window.
- Fixed the timestep changing to a point count from the initial timestep when selecting a time rage via the preview.
- Fixed Trend showing "live updates" when end date is not "Now".
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
- <strong>Shareable URLs -</strong> Added an option to generate a URL snapshot of a dashboard that can then be shared with other users.
- <strong>New Manual Tags</strong> - Added the ability to manually add tag names to a dashboard to allow adding of metatags and to also serve as placeholders.
- <strong>New File Menu -</strong> Modified the file menu to work as an expandable tree to ease navigation between folders and make it more user-friendly.
- <strong>New File Context Menu -</strong> Added a context menu to the file menu to make it simpler and easier to perform actions against specific files and folders and make the UI cleaner. You can right-click any file/folder to open it.
<img src="/wiki/assets/media/general/apps/gestalttrend/contextmenu-trend.gif" alt="contextmenu-trend" style="max-width:400px" loading="lazy" />
##### Modifications and Improvements

- Added a select all tags button in the Trend Tag Manager.
- Increased the hovering area of a tag on PCP and made the size scale with the number of tags present in the window.
- Fixed an issue where Trend did not show the delete options when deleting a file that had been shared.
- Fixed the colour/highlight preference being assigned the opposite way.
- Fixed an issue where the bounds of a trend zoom were not being calculated correctly.
- Fixed an issue where the "Apply" highlight would display even when there have been no changes to the query settings.
- Defaulted the multi-axis to display all tag axes on the initial change of the setting.
- Fixed the canvas not re-rendering when altering settings in the left-hand menu.
- Removed the date display from the relative time menus.
- Added the ability to create a new folder in the file explorer modal.
- Fixed an issue where copying files with the same file name would not overwrite the existing files and instead duplicate them.
- Added loading indicators when performing various actions on files.
- Improved the display of the menu icon when opening and closing the menu.
- Added a close button to the colour picker.
- Increased the hovering area of the x button on pop-ups.
- Made tweaks to the UI when viewing on mobile.

#### 2023-08-Major

##### New Features
  - <strong>User Preferences -</strong> Added a preferences menu to configure specific settings on Trend such as the default view, display mode and canvas colour.
##### Modifications and Improvements
- Fixed an issue where the rendering would break if you panned to a period that had bad data at the end.
- Fixed arrows shortcut not moving the currently selected time.
- Fixed unlinked windows modifying all windows on zoom, panning and query changes.
- Fixed an issue where you could not enter certain characters when editing the window title.
- Fixed an issue where a dashboard would not load if there were any tag names with a case different to what it was in the data source.
- Fixed the panning of a trend being triggered twice on mobile.
- Fixed the "More information" value of an annotation overflowing the modal.
- Fixed tag search not triggering on mobile.
- Fixed Trend showing "null" if the tag doesn't have a string value.
- Modified the marker label background to be the same colour as the canvas.
- Modified the PcP shading to display darkest lines on newest values when using pre/post scrub.
- Fixed the expression evaluator tags not being available in the selection boxes when in multi-axis mode.
- Modified window settings to disable the menu options when there is no data present in the window.
- Modified the annotations dialogue to only display the "More Info" if there is actually a value to display.
- Expanded the hover area of annotations.
- Fixed typos in the "New Update" notification.
- Increased the permitted file size when importing Trend dashboards from 512kb to 2mb.
- Fixed an issue where following a "save-as" the wrong path would be loaded in the URL.
- Fixed an issue where a group's specific permission level was being checked in validation rather than the user's overall highest permission level.
- Fixed the contrast of text against the background colour of all colour pickers.
- Improved the styling of the import modal.
- Removed file extensions from the save as modals and defaulted the name of the new file as "Untitled".
- Removed the word "dashboards" from the top menu to declutter it.
- Added the name of the currently logged in user to the left panel.
- Fixed an issue where the case of a tag name differed from the requested tag.
- Fixed an issue where the search filter was not being applied when searching against organisation groups.
- Modified the session expire modal so that it will now redirect the user to log in.

#### 2023-04-Major

##### Modifications and Fixes
- Added borders to tags and date pickers for consistency.
- Modified the title bar colour in light mode to make it more distinctive against the main trend window.
- Modified the margin on the scatterplot rendering to provide 10% either side.
- Fixed Trend not panning diagonally when ctrl is pressed.
- Fixed Trend not displaying the tags with the axes colour.
- Fixed Trend title bar being the wrong colour when embedded in PnID.
- Fixed trend import when there is a PnID window not decoding the URL correctly.
- Fixed trends not rendering when the data Source does not support retrieving values at specific times.
- Fixed trend markers not rendering on mouse move.
- Fixed the window order not being saved correctly following a reordering of windows in the dashboard.
- Fixed an issue where there was an offset to hovering over a limit.
- Fixed the tag manager not updating details of when being used on mobile.
- Fixed issue where real-time plots with multiple tags would incorrectly discard incoming values.
- Fixed title bar menus being the incorrect colour when in dark mode.
- Fixed multi-axis not using the normalised values when in normalised mode.
- Fixed Gradient angle getting values from component points instead of boundaries.
- Fixed an issue where state tags were being incorrectly identified as numeric tags and displaying as NaN.
- Fixed the session expiring when a user is currently using Gestalt.
- Fixed an issue where a share could not be revoked.
- Modified embedded components to prevent menu shortcuts being activated.
- Added an import dialogue that allows users to select where to import a file to.
- Fixed the error message when removing an admin from the permissions.
- Fixed pending shares having the wrong icon for folders.
- Removed the close button from session expiry dialogue.
- Modified the display of shares to allow the user to hide them.
- Fixed keyboard shortcuts invoking the browser defaults when focused on certain elements of the UI.
- Modified the Save As dialogue to allow the user to select a folder to save the file to.
- Removed the Save As option at the folder level in main menu.
- Fixed an authentication error occurring when logging in.
- Fixed a query with lowercase "auto" breaking data query in Trend.
- Updated package versions of vulnerable packages.

#### 2023-02-Major

##### New Features

- <strong>Significant Figure Setting:</strong> Added significant figure setting that allows the user to configure how many significant figures to show for values. Defaults to 4 SF.

<img src="/wiki/assets/media/general/apps/gestalttrend/trend_-_significant_figure.gif" alt="trend_-_significant_figure" style="max-width:200px" loading="lazy" />
- <strong>Tag Line Width Setting:</strong> Added line width property for tags to allow the user to customize the widths of individual tags in a window.

<img src="/wiki/assets/media/general/apps/gestalttrend/trend_-_line_width.gif" alt="trend_-_line_width" style="max-width:200px" loading="lazy" />
- <strong>Limits Range:</strong> Added option to display the tag limits as range between the limits.

<img src="/wiki/assets/media/general/apps/gestalttrend/trend_-_range_limits.gif" alt="trend_-_range_limits" style="max-width:200px" loading="lazy" />
##### Modifications and Fixes
- Added shortcut (ctrl + z) for restoring the previous query.
- Added expresion evaluator buttong to the tag search window.
- Added option to override existing files when copying a folder.
- Improved Window Configuration menu to better group the settings and make it easier to navigate.
- Improved display of UI when viewing Trend on a Mobile.
- Improved the display of error messages from the server to the user.
- Improved displayed of compared tag highlighting on PCP.
- Improved performance of loading the tag data in a page.
- Modified the error message when there is an error after refusing a share.
- Fixed the user, in some occasion, not being authorised on intial load of the applicaiton.
- Fixed issues with scaling of the y-axis when using multi-axis mode.
- Fixed PnID tooltip timestamp not working correctly when embedded in Trend.
- Fixed PnID tooltip values displaying as NaN when embedded in Trend
- Fixed issues with zooming and panning on mobile.
- Fixed issue where viewing data in normalised mode would render it upside down.
- Fixed issue where changes made to permissions were not applied.
- Fixed issue where shortcuts were being triggered when typing in input boxes.
- Fixed is where you could not re-order tags.
- Fixed issue where histogram would not render if NaN values were present.
- Fixed issue where the mouse label would render under the PCP.
- Fixed issue where tag search would be applied for any key press.
- Fixed issue where the state of the axis lock would not be persisted.
- Fixed issue where colour/highlight setting was not correctly highlighting the selected tags.
- Fixed issue where tag name would not be rendered on PCP when hovering over it.
- Fixed issue where left-side menu would render undearneath the context bar.
- Fixed issue where resuming a suspended window configured for live updates, would have a blank spot of data for the period it was suspended - it will now fill in any missing data once it is resumed.
- Fixed issue where you could not set the number of points when the RAW query type is selected.
- Fixed issue where a PnId would not be loaded correctly when importing a file.
- Fixed the contrast of markers on a trend.
- Fixed issue where the position of a window would be incorrect when viewing on mobile.

#### 2022-11-Major

##### Modifications and Fixes
- Added some optimisations around the loading of files to make it faster and more robust.
- Added a select file modal that can be used to select a PnID file.
- Added the functionality to reposition existing windows in a dashboard.
- Added the ability to set the maximum and minimum values for multi-axis.
- Added an option to override any existing files with the same name, when copying a folder's content.
- Added an option to copy the file's URL on the share pop up to make sharing easier.
- Added a notification for when something is copied to the clipboard.
- Added an option to show/hide groups that do not contain any files..
- Fixed the share pop up always having "Folder" as its wording even when it was a file being shared.
- Fixed an issue with panning on the trend view whilst on mobile.
- Fixed the PCP view not rendering the tag name on hover.
- Fixed the issue where there would be a delay on rendering tag name when clicking on a tag.
- Fixed the canvas colour DOM element not updating to the selected file colour.
- Fixed an issue where switching themes would not change the canvas colour.
- Fixed the issues where guidelines would render on top of the data.
- Fixed new Trend windows not having the canvas colour set correctly.
- Fixed lock icon displaying when no axis were yet present.
- Fixed an issue where trend would not render if there were two tags with the same name, but a different data source.
- Fixed the Cross Correlation Matrix stuttering whilst panning.
- Fixed hovering on limits when Multi Axis is on.
- Fixed Trend not rendering changes after reordering tags.
- Fixed Trend not cleaning the URL when importing a file.
- Fixed the title bars not loading the window name.
- Fixed time conversion from relative to absolute rounding values.
- Fixed an issue where a file whose name contained a comma could not be saved.
- Improved the mouse label accuracy on Trend view.
- Fixed the “Select all” control on the multi-axis menu.
- Removed the minimize option from the window toolbar.

#### 2022-09-Minor

##### New Features

- <strong>Modifiable Window Colour: </strong> Users can now customise the base colour of the windows in a dashboard.

##### Modifications and Fixes

- Added the option to match all tags on an axis to the axis colour.
- Improvements to real-time data connection to optimise it and make it more robust.
- Improved the error dialogue to provide a more descriptive message.
- Modified the delete file/folder dialogue to reflect whether it is a file or folder being deleted.
- Removed the block on modifying the date pickers when in real time.
- Removed the functionality where setting the end time to now, would automatically turn on "Live Updates".
- Fixed an issue where the ghost annotation not being rendered.
- Fixed an issue where there was a delay on rendering the axes when switching multi-axis on or off.
- Fixed an issue where the Alarm view would not update after a limit change error.
- Fixed an issue where the click and drag zoom on scatter plot view was not working.
- Fixed an issue where mouse panning was stuttering when panning diagonally.
- Fixed an issue where histogram rendering would break if a tag only contained NaN values.
- Fixed an issue where the axis lock icon was being displayed before there were any axes.
- Fixed an issue where digital state tags were displaying their numerical state rather than the string state.
- Fixed an issue where the annotations request would fail if there were too many tags being queried.
- Fixed an issue where query settings were being cached even if the query was invalid.
- Fixed an issue where the dashboard was not being re-render after removing a tag.
- Fixed an issue where the scrub would not retain its position as new values came in.
- Fixed an issue where creating a folder would cause an undefined error.
- Fixed an issue where a window would not be re-rendered after removing a tag.
- Fixed an issue where the zoom level of a window would reset when selecting a new tag.
- Fixed an issue setting the display mode via the configuration settings did not up value on the window toolbar.
- Fixed an issue where display mode options were disabled and greyed out when they shouldn't be.
- Fixed an issue where panning on the X axis was not being calculated correctly.
- Fixed an issue where save as and renaming a file allowing invalid characters.
- Fixed an issue where the tag select no longer be displayed following the resizing of a window.
- Fixed an issue where tags would be given the same colour by default.
- Fixed an issue where tags were not displaying the colour of the axis they were on.
- Fixed an issue where Trend did not prompt the user when their session had expired.
- Fixed an issue where the side menu was cutting of the bottom UI items when viewing on mobile.
- Fixed an issue where duplicating window did not carrying the multi-axis settings over.
- Fixed an issue where Trend would set the start and end time to the same time.
- Fixed an issue where mobile menu height was incorrect when using Firefox.

#### 2022-08-Major

##### New Features

- <strong>Lockable Axes: </strong> Users can now choose to lock an axis, which will fix the displayed range and prevent the window automatically attempting to centre the trend.

##### Modifications and Fixes

- Added the application logo to the side menu.
- Added validation for the naming of a Trend dashboard.
- Added a warning icon on Trend if the real-time connection is not established.
- Added a dialogue that is displayed when the request to retrieve data sources has failed and allows the user to retry the request again.
- Added optimisations to rendering to prevent unnecessary renders and causing the application from locking up on busy dashboards.
- Modified "Allow Updates" to turn on by default if a "Now" period is selected.
- Modified FFT rendering to prevent is from using the colour black for a selected tag when using the dark theme.
- Modified the loading symbol to use the Intelligent Plant logo.
- Modified PCP to hide the tag names when the number of tags does not fit the screen width.
- Improved the styling for windows to make controls fit better.
- Relocated Trend window controls to the title bar to declutter the main window and improved the styling.
- Fixed an issue where creating a folder would fail due to the parent not being found.
- Fixed an issue where the real-time subscription would be lost when the connection dropped.
- Fixed an issue where it would attempt to render an empty window when changing theme.
- Fixed an issue where maximising a window would then cause it to overlay any other window when it was maximised.
- Fixed an issue where the alarm view was rendering titles in the incorrect colours when using the dark theme.
- Fixed an issue where windows would cover the menu button when the context bar is closed.
- Fixed an issue with the tag search were the previous results would not be cleared.
- Fixed an issue where an embedded PnID would not contain the correct time range.
- Fixed an issue where FFT would create a looping copy of itself when receiving new values.
- Fixed an issue where the Cross Correlation view would throw error when there was no data.
- Fixed an issue where the display mode menu was not enabling the correct configuration options.
- Fixed an issue where the trend view would not render correctly if the range of data was 0.
- Fixed an issue where Trend view would not centre tags correctly if they contained a NaN.
- Fixed an issue where the Histogram view would not render correct if any of the tags contained a NaN.
- Fixed an issue where the minimum and maximum markers were not being updated when new values came in.
- Fixed an issue where you could not search for tags by description of unit of measure.
- Fixed an issue where the tag's data was not correctly updated when new values came in.
- Fixed an issue where attempting to copy files to the root would not work.
- Fixed issue where the preview query was hardcoded to use "INTERP" which made the preview inconsistent with what was in the main window, it will now use the same data function as the main query.

#### 2022-06-Major

##### New Features
- <strong>Expression Evaluator Manager:</strong> Users can now review and edit the function used for expression tags.

##### Modifications and Fixes

- Modified Tag Manager to make it more clear the tag name is editable.
- Modified data acquistion of windows to first get a snapshot of all tags before getting historical to improve user experience when in views like calm waters.
- Modified the colour of the calm waters display from green to blue.
- Fixed an issue where a file would be removed even if there existed another admin on it.
- Fixed an issue where expression tag would not be rendered when reorganising tags.
- Fixed an issue where trying to "Save as" a file would save the wrong file name.
- Fixed an issue where the paging and filtering on the user search were not working if the user was included in the list.
- Fixed an issue where the Window Menu would not display the normalise settings.
- Fixed an issue where multiaxis would no longer work when it was turned off.
- Fixed an issue where multiaxis would reset when reopening the settings dialogue.
- Fixed an issue where reverting the data query would not work and only display a blank window.
- Fixed an issue where panning with multiaxis would cause inconsistent scaling of the axes.
- Fixed an issue where the histogram would be rendered over the axis when panning.
- Fixed an issue where Scatter plot would not render if there was a NaN in the dataset
- Fixed an issue where Scatter plot was not rendering the correct data when changing display mode.
- Fixed an issue with the tag manager where it would attempt to reorder the tag when not clicking on the reorder icon.
- Fixed an issue where trend could not receive calls from Taggle.
- Fixed an issue where exception would be thrown when trying to zoom in on a window in a dashboard that had an empty window.
- Fixed an issue where the Allow Updates button would not be turned off when zooming on a window.
- Fixed an issue where peaks in a dataset would be skipped when processing data for display, and would therefore not be displayed.
- Fixed an issue where the minimum and maximum labels were not being displayed in the correct locations.
- Fixed an issue where PnID and Custom windows did not update their titlebars.
- Fixed an issue where you could not save a dashboard with a PnID in after opening it.

##### New Features

- <strong>Copy Folder Contents:</strong> Users can now copy the entirety of a folder's contents to a specified location, allowing files to be moved elsewhere with ease.
- <strong>Export Dashboard:</strong> Users can now export whole Trend dashboards and not just the data.

##### Modifications and Fixes
- Added text to state there are no permissions when viewing permissions on a file/folder.
- Modified dashboard label colour when in dark mode to improve visibility.
- Modified group dashboards area to now display groups you are a member off and not groups that are simply visible to you.
- Modified group dashboards area to now display groups by their organisation.
- Modified groups in the share modal to now display groups by their organisation.
- Modified queries for retrieving file contents that significantly improves the load times of Modified queries for retrieving folder contents that significantly improves the load times of the file explorer.
- Modified method of retrieving real-time updates to improve stability.
- Modified the method in which data is queried to improve load speeds.
- Modified PCP labels to now show descriptions when tag has been set to display descriptions.
- Added ability to navigate to configured URL by right clicking on a given tag in PCP and Calm Waters.
- Added error message when user attempts to accept a share in a location they are not permitted.
- Fixed an issue where removing permissions from a folder could result in the underlying folder structure being deleted.
- Fixed an issue where normalise settings were shown when not in normalisation mode.
- Fixed an incorrect message being shown when accepting a share.
- Fixed an issue where attempting to update a custom window in a dashboard would throw an error.
- Fixed an issue where the timestamp of the current value being sent to custom windows was incorrect.
- Fixed an issue where the application would serve cached content and cause the app to break.
- Fixed an issue where Annotations could not be edited, deleted or navigated between.
- Fixed an issue where saving via the left side panel would cause some properties to not be saved.
- Fixed an issue where the scale of the display would jump drastically when a new time range was applied causing axes and visualisations to be shifted.
- Fixed an issue that could cause large Calm Waters displays to lock up the browser.
- Fixed an issue where the start and end time would be incorrectly offset because of the time zone.
- Fixed an issue where a dashboard label was not being set on load of a dashboard.
- Fixed header and icon in rename dialogue.

#### 2022-03-Major

##### New Features

 <strong>Deviation Monitoring and Display Modes</strong> - Users can now select various display modes, which visualise the data in a number of different ways based on their deviation over defined limits. These new modes include:

- <strong>Absolute</strong>: Window will display the absolute values from the data.
- <strong>Normalised</strong>: Window will display the normalised version of the data in the window.
- <strong>Deviation</strong>: Window will only display data that has exceeded the normal limit.
- <strong>Enumeration</strong>: Window will display data as a set of states base on the limits: Normal, Yellow, Red. These states are derived based on whether the values have exceeded the given limit.

These modes are usable on the following views:
- Trend
- Parallel Coordinate Plot
- Scatter Plot
- Histogram
- Calm Waters

##### Modifications and Fixes

  - Modified default zoom of a trend from 1/3 of the window to 1/2.
  - Modified panning to have a dead band on the x-axis to prevent accidental changing of time range when scrolling.
  - Improvements to the file structure UI to facilitate larger file names
  - Improvements to usability on mobile phones.
  - Improvements to overall loading times of dashboards.
  - Improvements to the file handling system to make it more robust.
  - Removed the allow update control from individual windows.
  - Fixed an issue where user's could accept shares in a location they were not permitted to.
  - Fixed an issue where user's could still access files when they had been removed from the appstore group that access was permitted to.
  - Fixed an issue where the share pop up would crash on the initial opening.
  - Fixed an issue where a new folder would not be created when pressing enter.
  - Fixed an issue where cross-correlation matrix was calculating the correlation for all delays, thereby making loading of dashboards much slower.
  - Fixed an issue where linking a window did not update the state of the control in the file menu button.
  - Fixed an issue where the date controls would not display an error if allow updates was on.
  - Fixed an issue where the relative axis was not being displayed when turned on.
  - Fixed an issue where an unauthorised share would return the incorrect error.
  - Fixed an issue where saving a file in a folder that had a space in it's name would result in an error.
  - Fixed an issue where the file menu is not reloaded once a file has been deleted.
  - Fixed an issue where removing the last permission from the permissions panel will delete the file without providing a warning.
  - Fixed an issue where permission changes will persist after an error is thrown.
  - Fixed an issue where data was being requested twice for a window.
  - Fixed an issue where tags were being removed on successive requests, leading to it eventually requesting no tags.
  - Fixed an issue where user could rename a file to one with no name.
  - Fixed an issue where you could not rename a file in a group structure.
  - Fixed an issue where files could be left orphaned by removing all administrators.
  - Fixed an issue where PnIDs would not load data whilst in a trend dashboard.
  - Fixed an issue where Custom windows would not be notified when the global time range changed.
  - Fixed an issue where the zero line in the trend view was overlaying the trend lines.
  - Fixed an issue where tag descriptions were not being displayed.
  - Fixed an issue where panning multiple times on a window would cause it to break.

#### 2021-10-Major

##### New Features
- Added share system for groups.
- Added share and permitions controls.
- Added functionality to rename files and folders.
##### Modifications and Fixes
- Added Relative time menu to the global main menu.
- Added time controls for window menus.
- Modified tag search window to scroll and better size the results section.
- Modified request of preview data to make it fast and efficient.
- Fixed issue where loading a Trend dashboard with a null scrub time would result in an error.
- Fixed bug where Expression Evaluator did not add the tag to th window.
- Fixed bug where normalised limits would reset on time range change.
- Fixed issue where time pickers on menu pop up did not sync with the time of the window.
- Fixed issue where pop ups where not adjusting to mobile width.
- Fixed bug where scrubs were not being parsed correctly in the side menu.
- Fixed issue where the state of a digital tag was not being displayed.
- Fixed bug where a Trend opened from PnID did not retained the selected dates.

#### 2021-09-Major
<strong>New Features</strong>

- Added ability to remove multiple tags at one time in the tag manager .
- Added a ctrl-s shortcut for saving the current file.
- Added a "duplicate window" button to make a copy of the currently selected window.

<strong>Modifications and Fixes</strong>

- Modified preview data request to always request data using INTERP.
- Modified UI of the main tag search to make input sizing and spacing more consistent.
- Modified tag search so that only the results scroll and not the whole modal.
- Modified setting so trend does not always prompt user to authorise datasources.
- Modified tag manager so that the tag name can be edited to change the display/friendly name.
- Fixed a bug where a file with the same name as an existing one would overwrite without asking the user.
- Fixed a bug where limits would not persist if changed from graph.
- Fixed a bug where the end time would not be updated with user's cached value.
- Fixed a bug where dashboard was not loading when it contained a PCP.
- Fixed an issue where the window name was attempting to be displayed before the DOM had loaded.
- Fixed a bug where toggling colour off would cause the preview to disappear.
- Fixed bug where opening a trend from PnID window sometimes loaded out of time.
- Fixed bug where opening files would thrown an error if the window was opened before.
- Fixed link to release notes to open in a new window.
- Fixed minor UI error for Mozilla Firefox.
- Fixed minor UI error where time pickers width did not adjust to complete date.
- Fixed a bug where if the end time value stored in the cookie was  a * it would throw an error.
- Fixed bug where key down event would not trigger.
- Fixed limits not checking/updating when normalised.
- Fixed PCP getting limits from the wrong variable.
- Fixed a bug where a window with a PnID would not load correctly.
- Fixed a bug where click stop playback would only remove one of the interval callbacks meaning the other windows would continue to play. Clicking again would then stack the callbacks.
- Fixed a bug where the x axis would not draw when it spanned months or years.
- Fixed issue where a new user could end up with a malformed directory.
- Fixed bug where certain file paths caused an error when saving a new file.
- Fixed a bug where a file would not be saved at the correct path.
- Fixed exporting of CSV so it can export data over multiple windows and time ranges.
- Fixed a bug where the views were not being properly initialised when loading a file
- Fixed a bug where Go button did not have a handler for a Custom Window
- Fixed issue where you could not share a file if it was nested in a folder

#### 2021-06-Major
<strong>New Features</strong>

General
- Added a pop up notification if date pickers are attempted to be used whilst live updates is on.
- Added quick "Add tags" button on top-right floating menu.
- Added window time range to top-right of overlay controls.
- Added a linked icon to highlight if a window is linked to the global time range.
- Added a URL property to the tag properties.
- Added a pop up message to indicate when a new version has been released with a link to the changelog.
- Added a new system for managing tags created via the expression evaluator.

<strong>Modifications and Fixes</strong>

General
- Modified the tag annotation request so that each tag is checked to see if their respective data sources are annotation compliant, if not, they are from the annotation request.
- Modified icon menus to only hide when mouse leaves a window rather than after a pre-set time.
- Modified and tweaked the date pickers style.
- Modified and tweaked the side menu style.
- Modified the label and description controls, so that they are now a single control.
- Fixed bug that prevented the play timer from working.
- Fixed bug which stopped user saving a dashboard with a PnID.
- Fixed bug where you could not search for tags.
- Fixed issue where date pickers were not working in the window configuration modal
- Fixed issue where play scrub did no reset to 0 when it got to the end.
- Fixed bug where end time in relative mode would always return a * even when an offset was being applied.
- Fixed bug where window name popup would not persist following a save.
- Fixed the 0 guideline being drawn over the displayed trends.
- Fixed the date format for the date in the icon overlay.
- Fixed bug where play scrub position was not being updated.
- Fixed bug where some menu elements state did not reflect the actual setting value.
- Fixed bug where Expression Tags were not updated when the time range was changed.
- Fixed bug where Expression tags were not being persisted correctly on dashboard save.
- Fixed issue where the tag search was continuously requesting tag pages even though the container was full.
- Fixed a bug where the mouse became stuck when dragging an axis.
- Fixed issue where the tag properties was incorrectly index leading to an error when loading a page.
- Fixed bug where the window name disappeared when switching views.
- Fixed bug where Trend would crash if you tried to save a window that had no tags.

PCP

- Fixed bug where the PCP did not update the play scrub on selection of a data point.
- Fixed bug where the pre and post scrubs were not filtering the tag values on PCP.

Scatter Plot

- Fixed bug where the Scatter Plot view would not reflect the pre and post scrub values.
- Fixed bug where the label was not updated on the Scatter Plot view.

#### 2021-04-Major

This release contains the following changes:

<strong>New Features</strong>

General
- Added Dark Mode.
- Added Name attribute to each window.
- Added tag manager menu to customize settings on each tag.
- Added new menu pop up. This change remove the menu and creates more space on each window.

Calm Waters
- Added information about top deviation tags in Calm Waters.
- Added menu to set a baseline for Calm Waters to render unassigned values.
- Added feature to control zoom in Calm Waters.

<strong>Modifications and Fixes</strong>

General
- Fixed issue where files couldn't be saved inside a folder properly.
- Changed menus to upgrade depending on the view.
- Changed Trend not allowing to add tags before setting date range.
- Fixed issue with FX evaluator not adding custom tag correctly.
- Changed menu so it now updates values from each file.
- Changed top menu to merge between Time and Play menu to create a more accessible menu.
- Fixed issue where load old query would load only time changes and not zoom

Calm Waters
- Fixed issues where Calm Waters rendered unassigned values and borders as 0.

CCMatrix
- Fixed issue where there was no possible to pan horizontally.
Histogram
- Fixed issue where some tags were not being rendered by a value being infinite.
PCP
- Fixed issue where label would get stuck in max and min values.
- Fixed issue where would display all values when hovering on an empty value.

Trend
- Fixed issues where changes on limits were not being saved into the file.

PnID
- Fixed issue where changes on a PnID would not update the Trend Window menus.

#### 2020-11-Major

This release contains the following changes:

<strong>New Features</strong>

General
- Revamped UI to modernise and improve usability
- Added new system to store zoom per tag.
- Created new system of self contained windows. This new system improve coordination between windows.
- Added new warning pop up when limits are set beyond their scope.
- Added a feature to allow real-time update of tag values.

Limits
- Added new feature to edit values from the limits cell.

Trend
  *Added new axis system. This system allows user to separate the tags on multiple axes.
- Added new pop up menu to customize multi axes.

<strong>Modifications and Fixes</strong>

General
- Fixed issue where tags could not be removed from the tag panel.
- Fixed issue where last tag could not be removed from the plot.
- Changed tag panel to fit more tags.
- Changed side menu to include all functionality

Mobile
- Fixed issue where rotation of device would distortion the display
- Removed windows menus to allow more space on the plot.

Limits
- Fixed issue where all the table was rendered instead of the updated value.

Scatter plot
- Changed axis to displaying the correspondent tags name.

#### 2020-04-Hotfix1

This release contains the following changes:

- Fixed performance issue when loading query-intensive dashboards.

#### 2020-03-Hotfix1

This release contains the following changes:

- Fixed issue that would result in the annotations for all tags in a dashboard being requested when adding a new tag.
