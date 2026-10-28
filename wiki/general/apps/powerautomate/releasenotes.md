---
layout: wiki
title: "Industrial Automator for Power BI - Connector Release Notes"
permalink: /general/apps/powerautomate/releasenotes.html
---
This page describes the release notes for the[Industrial Automator](https://appstore.intelligentplant.com/Home/AppProfile?appId=18e880e61fe84e9485fda4eb41462554). No action is required from Power Automate users: updates are made available automatically by Microsoft.

### 2022-08 (August) Update {: .title}

A new set of methods ('Read Snapshot Value', 'Read Plot Values', etc), replace the original methods ('Get Snapshot', 'Get Plot Data', etc).

Besides having slightly different names, these new methods return a result that directly parses into Power Automate's "dynamic fields". (Previously, it was necessary to manually parse items from the json result object.)

The old methods are obsolete, but not discontinued. This means existing flows invoking the old methods can continue to operate.

For an example on how this update makes configuring flows easier, refer to our product demo video:
- [Demo Video](https://youtu.be/_swGn6Tp05E).

For more information on the connector and it's methods, refer to Microsoft Connector documentation:
- https://learn.microsoft.com/en-gb/connectors/industrialappstore/
