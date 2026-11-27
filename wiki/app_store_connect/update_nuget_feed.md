---
layout: wiki
title: "App Store Connect: Update NuGet Feed"
nav: app_store_connect
permalink: /app_store_connect/update_nuget_feed.html
---

This page explains how to move your App Store Connect node from the "stable" NuGet feed to the new "default" feed, and how to switch from automatic to manual updates.

The "stable" feed has been deprecated and will no longer receive updates. When you move to the "default" feed, we strongly recommend that you disable automatic updates, so that you decide when each update is applied.

### App Store Connect Update Manager

We recommend that you use our command-line tool, `ipdc-update`, to make this transition. The tool refers to NuGet feeds as release channels.
You can download the tool from [https://downloads.intelligentplant.com/data-core-update-manager](https://downloads.intelligentplant.com/data-core-update-manager).

Once you have downloaded and unzipped the tool, open a command prompt as **administrator** and navigate to the `ipdc-update` folder. All of the commands on this page must be run from an administrator command prompt.

### Disabling Automatic Updates

To disable automatic updates, run:

`ipdc-update automatic-updates disable`

You will be asked if you want to restart the service. A restart is not required at this step, so type `n` to decline. Pressing Enter without typing `n` will restart the service.

### Changing NuGet Feed

To update your App Store Connect to the new feed, run:

`ipdc-update channel set default --restart`

### Updating App Store Connect

To check whether a newer App Store Connect package is available, run:

`ipdc-update package list --newer-packages-only`

When a new App Store Connect package is available, you can update your App Store Connect by running:

`ipdc-update package install --latest`

The App Store Connect service is stopped while the update is installed and is started again afterwards. A backup of the existing installation is created before the update is applied.
