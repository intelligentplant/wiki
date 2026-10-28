---
layout: wiki
title: "Azimuth"
permalink: /azimuth/setting_up_azimuth.html
---
Azimuth helps ensure:
  *efficient maintenance scheduling on major pieces of rotating equipment.
  *reliability
  *downtime tracking (planned/unplanned)

<div class="title wiki-divider" aria-hidden="true"></div>

### Prerequisites {: .title}

- <strong>Alarm Analysis</strong> (<em>type</em>) data source. Source data source, will be used to define equipment events. Azimuth will use these event definitions to monitor equipment.
- <strong>Edge Historian</strong> data source. Target data source, Azimuth will use this datasource to store analysis results.

<div class="title wiki-divider" aria-hidden="true"></div>

### Getting started {: .title}

Azimuth uses asset and equipment hierarchical structure. One or more pieces of equipment can be defined on an asset. For example:

![https:azimuth.intelligentplant.com](/assets/media/azimuth/asseteqhier.png)

1. Adding an asset (subscription)
1. Adding equipment

<div class="title wiki-divider" aria-hidden="true"></div>

### Known issues {: .title}
- Creating a piece of equipment with a duplicate name on the same target datasource will cause to override previous equipment totaliser tag data.
