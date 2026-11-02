---
layout: wiki
title: "Import Errors"
permalink: /alarm_analysis/import_errors.html
---
When configuring an Alarm import flow, there is a setting called <em>Transform<sup class="wiki-footnote" title="&quot;Transform&quot; describes the process of converting a &quot;raw&quot; source message to an Alarm Analysis record.">[1]</sup> Error Tolerance</em>.

![aatransformerrortolerance](/wiki/assets/media/alarm_analysis/aatransformerrortolerance.png)

Depending on the Transform Error Tolerance a transform failure will either block import or be discarded to allow import to continue.

<em>Blocking</em> is useful during the early stages of defining an import flow where there may be problems in the Transform Rule configuration; whereas <em>discarding</em> is useful once an import flow is defined and protects against occasional "bad" data.

If any records are discarded, they can be reviewed in Alarm Analysis by selecting the Import Errors folder in the asset drop down.

<img src="/wiki/assets/media/alarm_analysis/aaimporterror01.png" alt="aaimporterror01" style="max-width:400px" loading="lazy" />
