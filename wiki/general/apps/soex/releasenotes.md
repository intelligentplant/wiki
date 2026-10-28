---
layout: wiki
title: "Sequence of Events (SoE) Explorer Release Notes"
permalink: /general/apps/soex/releasenotes.html
---
This page describes the release notes for the [Sequence of Events](https://appstore.intelligentplant.com/Home/AppProfile?appId=f3175c7a68774ef1ae96de5e8c16900e) app.

If you experience issues following an update, we recommend that you clear your browser's cache and try reloading the app.

#### 2026-08 (v.5.1.21)

- <code>[Enhancement]</code>: Introduction of "Plant" field.
- <code>[Enhancement]</code>: Introduction of "Event State" field, to facilitate grouping of related events.
- <code>[Enhancement]</code>: Under the hood performance and reliability  improvements

#### 2026-05 (v5.1.17)

Release date: 2026-05-29

- <code>[Bug Fix]</code>: Fix on "Export to CSV" functionality.

#### 2026-04 (v5.1.13)

Release date: 2026-04-29

- <code>[Enhancement]</code>: Query Simplification <br /> The "Copy Search" feature exposed complex text-case handling in the underlying SoEX query. In this release, responsibility for case handling is moved to the database driver, meaning the SoEX query can be simpler. This will improve query use in other apps such as Aperture.

#### 2025-10 (v5.1.0)

Release date: 2025-10-31

- <code>[Enhancement]</code>: "Copy Search" provides a means to copy a search query for use in other apps such as Aperture.

- <code>[Bug Fix]</code>: "SoE Export" now always outputs event-time in unambiguous 24Hr format.

#### 2025-03 (v5.0.70)

Release date: 2025-03-28

- Updated User Guide;
- Moved theme selector inside the user menu;
- Fixed loading of saved searches;

#### 2025-02-28 (v5.0.49)

- Implemented parameter priority;
- Implemented parsing fix from driver in js;
- Implemented browser datetime picker and input validation for start and end time;
- Implemented new colour themes;
- Combined the Asset selection card and the Query Builder card into one card to improve usage of space;
- Moved the Live Update toggle to the top of the results table to be able to toggle live updates when the Query Builder card is collapsed.
- Implemented the ability to use the system colour theme;

#### 2024-09-27

- Included default avatar;
- Fixed issues preventing minification of the SoE bundle in production;
- Fixed bug that caused multiple exports to .csv during or after live mode;
- Fixed bug that prevented that the user configuration was applied after a permanent link was loaded;
#### 2024-06-28

- Updated User Guide;
- Fixed the availability of selected fields in the filter dropdown menu;
- Implemented a work-around for zeroed query ids in the saved queries;
- Improved error logging when saving user asset configurations;
- Improved console logs;
- Implemented check if user asset config file exists before trying to read from it;
- Removed "New Datasource" link from NavBar dropdown;
- Fixed cases of disappearing error messages on the UI, even though error was still valid;
- Fixed a bug in the execution of searches containing a slash ("/").
#### 2024-05-03

- Implemented simple input validation in the query builder;
- Fixed a bug that prevented filtering on duration fields;
- Fixed the query created when selecting `Exclude ""` on empty cells in columns with boolean, numeric and timestamp fields;
- Fixed a bug that prevented the correct display of the search panel, if a field of the properties collection had been selected previously;
- Fixed a bug in the summarization of filters in the "Search" panel;
- Improved search capability on fields belonging to the "properties" collection;
- Updated the user guide;

#### 2024-03

- Fixed a bug in the url query string handling;
- Implemented, that "View event context" shows same columns as main window;
- Fixed the query created when selecting `Exclude ""` on empty cells in columns with text fields;
- Included the extended user manual;
- Implemented, that users can only filter on displayed columns.
- Fixed a bug, that prevented the display of "false" values on boolean fields (e.g. AlarmProperties/Is_Active)

#### 2024-01

- Implemented, that only unique alert messages are shown
- Implemented handling of empty response after query request
- Fixed a bug, that prevented the display of value 0 in the SoE table

#### 2023-11

- Security update

#### 2023-10

New features include:

- Speedier page load.
- Adjustable column widths.
- Improvements to the Excel export function (column order reflects SoE display).
- Security enchancements.

#### 2023-08

- Security update

#### 2023-07

- All Return Timestamps (e.g. Alarm/Manual-Mode/Disabled Timestamp) now displayed in user's local time.
- Bugfix for issue preventing export of fields containing boolean data.
- IP Credits are no longer required to use SoE Explorer (though you must have a license to view non-demo data sources).
- Export to CSV function returns document with same column order as app display.
- Help page updated.
- UI Improvements including "back to top" button.

#### 2023-04

- Fix for right-click "exclude" options. (NB. Right-click option fails if clicking directly over text - still works on white-space within SoE table cell.)

#### 2023-02

- The main explorer dashboard and export to CSV now support sub second display.
- CSV export enhancement to handle content that includes commas.
- Fix for issue that caused the SoE query engine to go into a faulted state following if no hits were found.
- Default display of fields always selected for the first-time view of a new asset.

#### 2022-12

- Source Message field available for reporting.
- SoE display formatting updating to use fixed width font. This is particularly useful for display of the Source Message field where character spacing and alignment is important.

#### 2022-06-24

Minor bug fixes and improvements.

#### 2022-06-17

<strong> Trend Integration Bug Fix </strong>

A bug that occurs when attempting to embedded trend in SOEx will now be fixed.

#### 2022-04

<strong> Trend Integration </strong>

Sequence of Events explorer will now have improved integration when embedded in Trend.

#### 2022-02

<strong> Session Refresh </strong>

Sequence of events explorer sessions will now be refreshed indefinitely.

#### 2022-01

<strong> Session Expiry Issue </strong>

This release contains a fix for the 'Session Expiry' loop issue.

#### 2021-11

<strong> Real Time Updates </strong>

Enable "Live Updates" to view new Alarms & Events as they arrive.

<strong>Integration with Alarm Analysis for exploring the Alarm Response Manual.</strong>

Right click on an Alarm and link through to the Alarm Response Manual (ARM) display on Bad Actor Detail page of Alarm Analysis.

NB. This assumes that you have uploaded and ARM to Alarm Analysis.

<strong> Context Filters </strong>

Right click on any event and select one of three new filters:

- <strong>Context Before</strong> - Open a new SoE tab showing records leading up to the event.
- <strong>Context After</strong> - Open a new SoE tab showing records following the event.
- <strong>Context</strong> - Open a new SoE tab showing records in a 2min period around the event.

<strong> Easy Filter Date Formats </strong>

SoE now uses ISO 8601 date formats (e.g. "2021-11-25 23:03:01").

The advantage of this format is that it facilitates easy filtering. For example, you can include a Time Stamp Filter on all or part of the date.

- <strong>Time Stamp > 2021-11-25 23:03:01</strong> - Show all events after this time
- <strong>Time Stamp > 2021-11-25 23</strong>  Show all events after 11pm
- <strong>TimeStamp > 2021-11-25</strong> - Show all events since 25th Nov
- <strong>Time Stamp > 2021-11</strong> - Show all events since Nov
- <strong>Time Stamp > 2021</strong> - Show all events since 2021

<strong> Extended Field Filtering </strong>

SoE now supports filtering on non-core fields. These fields (exposed under "hidden fields" in the field manager) can include useful site-specific additional values.

<strong> Row Highlighting </strong>

Clicking a row puts it a highlighted on it. This simple feature helps track of rows of interest.

<strong> Hide Filter Panels  </strong>

Dedicate more of your screen space to the SoE view by collapsing the filter panels.

#### 2020-11

- <em><strong>Excel Friendly Dates</strong></em> <br /> The CSV export funtion has been adapterd to return TimeStamp in an Excel-friendly local time (i.e. in the TimeZone of the person downloading the file).

#### 2020-08

- <em><strong>New Feature: Hidden Fields </strong></em>  <br /> Besides showing the standard fields of an Alarm & Event journal, SoE Explorer now also supports display, sort and filter functions on non-standard "hidden" fields. Whether any such fields actually exist will depend on the configuration of specific import flows, but it may contain "import information" (e.g.filename and line number references for data imported from textfile) or extended alarm information particular to certain SCADAs.

- Minor bug fix to the Export to Excel function - certain reserved characters could previously trip it up (#1959)

#### 2020-05

This release contains the following changes:

- Minor bug fixes when the main view wasn't getting sorted by the event timestamp (#1724).
- Bug fixes when not all fields were exported to Excel (#1723).
