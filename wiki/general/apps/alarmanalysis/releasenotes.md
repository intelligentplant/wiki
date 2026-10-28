---
layout: wiki
title: "Alarm Analysis Release Notes"
permalink: /general/apps/alarmanalysis/releasenotes.html
---
This page describes the release notes for the [Alarm Analysis](https://appstore.intelligentplant.com/alarmanalysis) app.

If you experience issues following an update, we recommend that you clear your browser's cache and try reloading the app.

### 2026-06 {: .title}
App Version: v3.3.182 <br />
Release date: 2026-06-26 <br />

- Security administration: routine package updates

### 2025-11 {: .title}
App Version: v3.3.181 <br />
Release date: 2025-11-09 <br />

- <strong>Priority Distribution Colour Update</strong> <br /> Priority charts will be ordered and coloured in accordance with their priority rating. <br /> NB. For this function to work as expected, alarm import must be configured to assign a valid "PriorityOrder" value: P1..P6.

- <strong>New KPI: "Mean Average Number of Standing Alarms per Day"</strong> <br /> The daily average number of alarms that are on for 24hr or more during the reporting period.

- <strong>New KPI: "Total Number of Stale Alarms"</strong> <br /> The total number of alarms that are on for 24hr or more during the reporting period.

#### 2025-03

App Version: 3.3.152 <br />
Release Date: 2025-03-28

- Fixed a bug that incorrectly displayed the Disable barcode if the last event was a DISABLE_ON event with automatic unshelving.
- Fixed a bug that caused tags being absent from the Bad Actor Overview page.
- Updated user menu to include link to user guide.
- Corrected the display of tag description in the Stale Alarm Report
- Improved sorting of different tables
- Improved naming of table headers and made it consistent between tables.
- Security updates.

- Alarm Analysis sessions extended: Improvements in user-session management means users will only need to log-in if accessing Alarm Analysis from a new device or if 30 days or more have passed since their last visit.

- The request to "Debit your Industrial App Store account for app usage" has been removed: The concept of draw-down credits for apps has been phased out. Alarm Analysis requires an "asset-licence" to view production data.

#### 2025-01
App Version: 3.3.107 <br />
Release Date: 2025-01-19

- <code>[Enhancement]</code> Bar Code improvement: Bar code banding displayed as long as an ON <em>or</em> OFF transition occurs within the report period (previously, the band would only display if an ON <em>and</em> OFF transition occurred. This improves display of Alarm, Disable and Manual-Mode bar codes.

- <code>[Bug Fix]</code> "10 Minute Intervention Frequency Distribution" chart fixed

- <code>[Enhancement]</code> Improved telemetry for tracking app performance.

#### 2024-11
App Version: 3.3.84 <br />
Release Date: 2024-11-29

Requires AA driver version 3.2.20744 or later.

- Stale alarm report extended up to 999 rows.
- Bad Actor Contribution chart now supports day, hour and 10 min aggregation.
- Disable duration calculation now accommodates automatic unshelving.
- Accuracy enhancements to the Disable Barcode displays
- Fixes for a number of DST transition glitches.

#### 2024-09
App Version: 3.3.52<br />
Release Date: 2024-09-27

- Fixed and re-introduced link to Gestalt Trend;
- Removed link to App Store Connect from the dropdown menu on the navigation bar;
- Removed link to "New Datasources" from the dropdown menu on the navigation bar.
- [Alarm Analysis Driver enhancements](/general/apps/appstoreconnect/releasenotes.html#section202409)

#### 2024-08
App Version: 3.3.39<br />
Release Date: 2024-08-30

- Trend Link Removed: A direct link to Gestalt Trend to view Alarm State over time has been removed pending review of app licencing terms and conditions.
- [Bug Fix]: Fix for "Manual Duration not displaying".
- Alarm Analysis Driver updates (more info:[App Store Connect Release Notes](/general/apps/appstoreconnect/releasenotes.html#section202408))
- Data Navigation Control bug fix:<br /> Fix for issue where certain report date-ranges have the potential to break navigation controls.

#### 2024-07
App Version: 3.3.14<br />
Release Date: 2024-07-26

- Security Updates
- Alarm Analysis Driver updates (more info:[App Store Connect Release Notes](/general/apps/appstoreconnect/releasenotes.html#section202407))

#### 2024-01
App Version: 3.2.19875<br />
Release Date: 2024-07-24

- Advanced Filtering is now a URL parameter, which means that users can create browser bookmarks of the Alarm Report with a filter applied to them
- Updated Intelligent Plant's address on the second page of the generated document reports
- Security Fixes

#### 2022-12
App Version: 3.2.18758<br />
Release Date: 2022-12-01

- ARM Administration restricted to users with admin clearance
- ARM now supports tag names that include restricted characters
- Alarm Intelligence - Phase 1: Introduction of new features to streamline Alarm & Event import.
- Upgraded to .Net 4.8

#### 2022-01
App Version: 3.2.17439<br />
Release Date: 2022-01-28

- Advanced Filtering is no longer in Preview. The <strong>[filtered]</strong> prefix is added to the name of the charts which are affected by the query.
- Made improvements to the generated document report. Document report now works with a specified Advanced Filtering query.
- Ability to configure the number of Bad Actors & Interventions from the settings menu.
- Improvements to the stability of the application.

#### 2021-10
App Version: 3.2.16905<br />
Release Date: 2021-10-05

- Enhanced <strong>Alarm Response Manual (ARM)</strong> Functionality. Administrators can now upload and edit their Asset ARM documents.
- Complex A&E parsing rules now supported in distinct c# files.
- Performance improvements to data relay methods employed in data streams from secure networks.

#### 2021-04
App Version: 3.2.16466<br />
Release Date: 2021-04-20

- <strong>Daylight Savings:</strong> Improved handling of Daylight Saving transitions including highlights on reports where transitions occur.
- <strong>Improved Navigation:</strong> Navigation Bar slider can be used to traverse complete A&E history
- <strong>Current Month KPIs:</strong> Key Performance Indicators now calculated for the days elapsed in the current month.

#### 2021-01
App Version: 3.2.16207<br />
Release Date: 2021-01-26

- SOEx like filtering.
- Dedicated report export button for quick access.
- General UI updates and under the hood improvements.

#### 2020-11
App Version: 3.2.15936<br />
Release Date: 2020-11-19

- Fixed instances when downloading Ms Word report might fail
- KPI calculation updates
- KPI configuration persistence bug fixes

#### 2020-07
App Version: 3.2.15372<br />
Release Date: 2020-07-30

- Route Import Errors to an Alarm Analysis Index [[more info](/alarm_analysis/import_errors.html)].
- Document AA Event Sink Import "Historic Scan Limit" Settings.
- Stale Alarm ordering.
- Frequency distribution chart fails.
- Frequency distribution chart colouring.
- Asset Timezone handling [[more info](/alarm_analysis/assettimezone/asset_time_zone.html)].
- Ensure all KPI descriptors in full Title Case for consistency.
- UI components for major new feature - SOEx like filtering.

#### 2020-05
App Version: 3.2.14962<br />
Release Date: 2020-05-19

This release contains the following changes:

- Updated Alarm Analysis: Scattergram Plot Position (#1128).
- Period Average % above target (>10) displays red x for zero (#1814).
- Function to exclude missing data (#1549). Requires ASC package update as well.
- KPI configuration column names (#1825).
- Ensure Bad Actor “Top 20” key does not always say “20” as it can be changed in config (#1553).
- Changing number of bad actors to display will affect bad actor contribution chart (previously 20 was shown regardless of the setting).
- Better error handling when specifying URL parameters.
- Asset tree navigation now indicates which asset is selected.
- Minor consistency and UI issues fixed.
- Under the hood improvements.
