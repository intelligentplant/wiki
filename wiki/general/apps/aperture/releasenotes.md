---
layout: wiki
title: "Aperture Release Notes"
permalink: /general/apps/aperture/releasenotes.html
---
This page describes the release notes for [Aperture](https://appstore.intelligentplant.com/Home/AppProfile?appId=74c36f214aa84f549454f5ffd561d86f).

#### 2026-05
App Version: <em>pending</em> <br />
Release date: 2026-05-29 <br />

Included in this release...

- <em>pending</em>

#### 2026-03
App Version: 5.2.6 <br />
Release date: 2026-03-27 <br />

Included in this release...

- <code>[Enhancement]</code>: Value at Time <br /> The Valve Report date-range filter now filters the underlying data directly, not just the displayed results. This allows accurate reporting of valve states for selected periods, such as during asset shutdowns, ensuring users can reliably verify valve activity on specific dates.

- <code>[Enhancement]</code>: Time Out parameter <br /> "Time Out" is how long the monitor will wait for a movement to complete. If this period elapses the movement is marked as "Timed Out" and the monitor returns to waiting for a new movement to start. The "Time Out" period was initially 10 x Movement Target Time. The introduction of an explicit parameter provides better coverage for measuring slow delays on valves with very short movement targets.

- <code>[Enhancement]</code>: Valve Movement History Chart - Limit Reached Warning <br /> The Valve Movement History chart executes a data query over a large date-range. In the unlikely circumstance that it hits a query limit (query limits are generally defined on the data store rather than Aperture itself), a warning will alert the user that some values may be omitted and to reduce the requested period for more accurate results.

- <code>[Enhancement]</code>: User Manual <br />  A comprehensive PDF user manual is now bundled with Aperture.<br /> This provides step‑by‑step guidance on setup, configuration, and advanced reporting, reducing onboarding time for new users and serving as a reference for power users.

#### 2026-02

App version: 5.1.23 <br />
Release date: 2026-02-19

- <code>[Enhancement]</code>: Performance Improvements <br />
The valve‑monitor calculation was temporarily reduced to a daily cycle because of scaling issues exposed by the increasing number of Aperture asset configurations. This release reverts the calculation to an hourly cycle while keeping the system’s performance stable.

#### 2026-01

App version: 5.1.17 <br />
Release date: 2026-01-30

- <code>[Enhancement]</code>: Valve Report Customisation <br /> Hide/show, re-arrange and resize the columns of the main Aperture valve report
- <code>[Enhancement]</code>: Valve Report "Status" sort <br /> Revised column sort behaviour on the "status icon" column.
- <code>[Enhancement]</code>: UI improvements to accommodate large Valve Report tables.
- <code>[Bug Fix]</code>: Preserve column order when exporting valve configuration to CSV file.
- <code>[Bug Fix]</code>: Consistent regional date formatting.
- <em>Other under the hood enhancements</em>

#### 2025-12

App version: v5.1.7 <br />
Release date: 2025-12-19

- <code>[Enhancement]</code>: Display "Timed Out" movements. A "Timed Out" movement is when a completion event is not detected within the monitoring period (monitoring period is “10 x Valve Movement Target Time”).
- <code>[Enhancement]</code>: Display "Uncommanded" movements. An uncommanded movement is when a completion event is detected without an assoiciated command.
- <code>[Enhancement]</code>: Under the hood performance improvements.

#### 2025-09

App version:  4.11.71 <br />
Release date: 2025-09-26

- <code>[New Feature]</code>: Dynamic Valve Report fields <br /> The valve report now supports extra valve fields. To create new fields, use the "Export Valve Configuration" to get the base template, add extra columns and values, then reimport.
- <code>[New Feature]</code>: Dynamic fields support inline editing.
- <code>[New Feature]</code>: Export configuration <br /> To facilitate bulk editing and introduction of dynamic fields, use the "Export Valve Configuration" button.
- <code>[Enhancement]</code>: Standard IAS top level navigation added ("manage data sources", "resource links", "log out", etc...)
- <code>[Enhancement]</code>: Improved validation in Asset and Valve data-input forms.
- <code>[Bug Fix]</code>: Direct editing of date fields in SoE Explorer supported

#### 2025-08

App version:  4.11.54 <br />
Release date: 2025-08-29

- Security administration enhancements: More options to manage user and group security level.
- Controls to prevent accidental delete of assets or valves.
- Performance improvements on delete operations.
- Date formats set to regional standards (NB. Date format is derived from the web-browser language settings - e.g. if English(UK) is your preferred language then "dd/MM/yyyy" date format is used).

#### 2025-07

App version:  4.11.38 <br />
Release date: 2025-07-25

- Reliability improvements to KPI calculation background process.
- Bugfix: An issue where it was possible for a valve-monitor to skip key events was fixed.
- UI improvements to asset "edit and delete" operations.
- "Last Update" date and time added to Asset overview to clearly show when KPI calculations last executed.
- New login page.
- "Manage Datasources" link added to user navigation control.

#### 2025-06

App version: 4.11.27 <br />
Release date: 2025-06-7

- Fixed application logging.

#### 2024-12

- Modified the check for reports background task to run from daily to hourly.
- Modified background tasks to check and refresh tokens before proceeding with processing.
- Added an asset total runs tag, which gets incremented every time an asset background task completes successfully.
- Added a check to make sure the user has permission to write to the data source when launching the update asset background task, informing them if they do not.
- Fixed an issue where the background task for generating reports would fail if the user did not have a valid token.

#### 2024-08

- Added Query Bar to valve dashboard to allow better filtering on valves.
- Fixed issue with returning to Assets page on creation end editing
- Improved CSS across the application.

#### 2024-06
- Added a button to allow there user to force a check for new movements on valves of the asset.
- Added the time taken of the latest time stamp to the valve table and grid overview.
- Added a button that allows the user to export an asset's valves and their statuses.
- Added the ability for the user to edit an asset.
- Added the ability to set an alias on an asset for display purposes.
- Extended the period of time we calculate movements for when creating a valve to 18 months.
- Improved the performance of retrieving valves and their statuses, as well as the rendering of the valve records.
- Modified valve view so the sort order is shared between table and grid view.
- Fixed an issue where properties of a valve were not being filled in the edit page.
- Fixed an issue where background task was not being executed for assets.
- Fixed an issue where valve movement chart was rendering points the in correct way.
- Fixed an issue, where upon logging in, it would direct you to a non-existent page.
- Fixed an issue where task would run when time was equal to now and removed check for no ongoing reports to launch request.
- Updated the endpoint for writing values, Improved background task handling and allowed existing valves to be overwritten when importing them.
- Redesigned asset card to be more consistent with valve cards and allowed assets to be deleted.
- Fixed an issue where if a valve contained 100s of movements it would fail to write to the tag.
- Improved checking of bad event results from AA data source.

#### 2024-03

This release contains the following changes:
- Added Table View to Valve Dashboard.
- Fixed an issue where the page number would not reset when changing the filter in the Sequence of Events Viewer.
- Added the date of the latest movement for each valve.
- Added navigation buttons to return to the previous page.
- Modified data requests to use the new endpoint for sequence of event data.

#### 2023-09

This release contains the following changes:
- Security updates for Aperture

#### 2022-07-Hotfix1

This release contains the following changes:

- Updated script libraries that contained vulnerabilities.
- Fixed an issue where filtering of columns was not working correctly in the sequence of events explorer.
