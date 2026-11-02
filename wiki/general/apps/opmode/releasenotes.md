---
layout: wiki
title: "OpMode Release Notes"
permalink: /general/apps/opmode/releasenotes.html
---
This page describes the release notes for [OpMode](https://appstore.intelligentplant.com/Home/AppProfile?appId=7a72322ebdda43f893f7852fb07350f0).

#### 2025-03

- Fixed recurring tasks failing due to improper session refreshing. Added redirection to App Store when user encounters 404 error
- Fixed unable to trigger profiling retries when a failure has occurred

#### 2025-02

- Fixed Trend connection when creating or editing an area
- Fixed an issue where adding a new area would instead replace an old area

#### 2024-08

This release contains the following changes:
- Fixed Trend Connection for Creating/Editing an area
- Fixed "Open Trend window with this area/mode" buttons
- Changed wording for successful mode creation to differentiate from successful profiling
- Fixed updating mode not working properly
- Fixed updating mode to include multiple areas not working properly
- Added an option to remove output tags from output data source when deleting a mode or a module
- Fixed historical import conflicting when two modes configured on two different modules have the same name
- Disabled hangfire remote requests
