---
layout: wiki
title: "Update-safe Configuration"
permalink: /data_core/update_safe_configuration.html
---
The Data Core runtime configuration <sup class="wiki-footnote" title="not to be confused with DataCore.config - where data source configuration is stored">[1]</sup> includes a number of default settings. Amending these directly is not recommended as they will be reverted by package updates. However, you can create an external settings file.

1. Navigate to the Data Core runtime directory. For an App Store Connect installation, this is...
    %ProgramData%\Intelligent Plant\Data Core Application Host\Service\Applications\App Store Connect

2. Create file:
  DataCore.Settings.json

3. Add setting overrides such as...

```

{
    "dataCore:application:name":"Intelligent Plant App Store Connect",
    "dataCore:alarmAnalysis:baseDirectory": "Data/ImportScripts",
    "dataCore:scriptEngine:scriptTags:snapshotRecalculation:taskCount": "5"
}
```

New settings will take effect following a service restart.
