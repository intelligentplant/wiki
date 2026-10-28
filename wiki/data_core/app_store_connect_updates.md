---
layout: wiki
title: "App Store Connect Updates"
permalink: /data_core/app_store_connect_updates.html
---
Once installed, App Store Connect automatically receives runtime software updates.

By default, App Store Connect receives updates from its stable channel. You can also use a pre-release channel to get access to preview features.

The easiest way to configure the channel you want to use is by downloading the [App Store Connect command line administration tool](https://downloads.intelligentplant.com/data-core-update-manager) (<code>ipdc-update</code>) onto your App Store Connect machine.

### Modifying the App Store Connect release channel {: .title}

You can view the available feeds by running the following command:

`ipdc-update channel list`

Your current channel will be highlighted (this will be "Stable" by default). You can select a different channel as follows:

```
ipdc-update channel set <NAME>
```

For example:

`ipdc-update channel set Beta`

Note that changing the channel requires the App Store Connect service to be restarted. The administration tool will offer to restart the service for you.

### Modifying the App Store Connect update check schedule {: .title}

By default, App Store Connect automatically updates when new software packages are available. This results in short periods of downtime.

Updates are usually published on Fridays during UK business hours, but pre-release packages and security updates may be published at other times. If this is not convenient, you can use the command line administration tool to set your update schedule:

```
ipdc-update automatic-updates schedule set <SCHEDULE>
```

Replace <code><SCHEDULE></code> with your preferred CRON schedule. For example, to check for updates at 8am on the first Tuesday of every month:

`ipdc-update automatic-updates schedule set "0 0 8 ? 1/1 TUE#1 *"`

Make sure that you enclose the schedule in quotes. You can use tools such as [CronMaker](http://www.cronmaker.com/) to create your preferred schedule definition.

### Disabling App Store Connect automatic updates {: .title}

We don't recommend disabling automatic updates altogether, but you can elect to install updates manually using the command line administration tool as follows:

`ipdc-update automatic-updates disable`

When automatic updates are disabled, you must find and install updates manually. You can view the available packages in your current release channel as follows:

`ipdc-update package list`

The command will list the available packages and will highlight if a newer package is available. You can update to the latest package as follows:

`ipdc-update package install --latest`

You can also update to a specific package version:

```
ipdc-update package install <VERSION>
```

### Re-enabling App Store Connect automatic updates {: .title}

To re-enable automatic updates, run the following command:

`ipdc-update automatic-updates enable`
