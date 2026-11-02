---
layout: wiki
title: "Facit Release Notes"
permalink: /general/apps/facit/releasenotes.html
---
This page describes the release notes for the [Facit](https://appstore.intelligentplant.com/Home/AppProfile?appId=c368dea13cad40b1807dbf72a8782dd3) app.

#### 2026-04
App Version: 4.0.231 <br />
Release date: 2026-04-24 <br />

Included in this release...

- <code>[Enhancement]</code>: Persistent URL filters - this facilitates embedding within dashboards.
- Under the hood performance and reliability improvements.

#### Dec 2023 at v4.0.203.0

- Improved the handling of monitors in error state
- Fixed a bug, that prevented assigning a user to a case
- Fixed a bug, that did not reset the Action modal when it was closed
- Changed the way the page is loaded to improve performance.

#### Nov 2023 at v4.0.184.0

- Improvements to security

#### Oct 2023 at v4.0.168.0

- App enhancements to facilitate embedding with Gestalt PnID and Trend dashboards.
- Bug Fix for problems caused by tag-names including "/"
- Content security improvements

#### Sep 2023 at v4.0.119.0

- Removed the asset selection page. The app now remembers your last used asset by saving its name locally in your browser's storage. This should make reloading the app quicker by skipping the asset selection step.
- Introducing a new in-app [User Guide](https://facit.intelligentplant.com/Content/Facit%20-%20User%20Guide.pdf). You can easily access it from the drop-down menu in the top right corner.
- Additional minor bug fixes and improvements for a smoother user experience.

#### Aug 2023 at v4.0.73.0

<em><strong>Monitors page</strong></em>

We have introduced major enhancements regarding the display of monitor configuration. When double-clicking a row, it expands and reveals all the monitor details. Administrators of Data Core will notice that Monitors in Facit now display each configuration in a familiar and consistent design, akin to the configuration page in Data Core. This allows users to understand the references in monitor calculations, view underlying template details, or access trigger times and settings, all without switching to the remote Data Core configuration interface.

Additionally, this page now properly displays 'Disabled' and 'Pending first calculation' monitors.

<em><strong>Dashboard page</strong></em>

The Dashboard page contains an aggregated view of Alerts. Each row of this table is a Case. Right-click the case and select "View Monitor" to view the monitor that generated the alerts for the Case.

To enhance identification, we've added a new column that displays the type of Alerts each Case row aggregates.

Added new column that displays the Priority of the Case.

<em><strong>All pages</strong></em>

Every page in Facit now allows sorting on columns in ascending or descending order.

The default sorting for following pages is as follows:

- Dashboard: Descending on Time stamp column
- Monitors: Ascending on Name column
- Furthermore, the issue with filtering on multiple column fields has been resolved.

NB. The above updates are for the Facit application only - server-side monitors are not impacted by this release.

#### Apr 2022

<em><strong>Facit Script Tags</strong></em>

Script Tags are the "under the hood" functionality that have always driven the Facit monitors. However, as the variety and sophisticaion of Script Tags has grown, it makes sense for them to be given a prominent appearance in Facit.

You will soon be able to view and configure Script Tags in the Facit UI. To make the relationship between <em>Script Tag</em> and <em>Alert</em> more obvious, the default Alarm Analysis parsing of Facit events will reflect the Script Tag name in full.

For example, <br /> a Script Tag called <strong>$$LIC0101.State</strong> that raises event <strong>High Alert</strong>, will be parsed:

```
Event.Tag: LIC0101.State
Event.AlarmId: High Alert
```

<em>Previously, it was parsed...</em>

```
Event.Tag: LIC0101
Event.AlarmId: State
```

Note that Alarm Analysis calculation of duration will be broken for Facit Alerts that straddle the above transition. Also KPI counts will spike for reporting periods straddling the transition since the same alert may appear twice (with a subtly different name).

#### Mar 2021

- Minor update to support Click-thru-to-Trend links
