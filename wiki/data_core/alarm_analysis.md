---
layout: wiki
title: "Alarm Analysis Event Sink"
permalink: /data_core/alarm_analysis.html
---
<strong>Alarm Analysis Event Sink</strong> is a data core target object. When connected to a data core event source,  event messages are transformed into <strong>AA event messages</strong> and saved to <strong>Alarm Analysis</strong>. The point of the AA event message structure is to facilitate big data number crunching that can reveal all sorts of useful information from your Alarm & Event log.

Data transformation includes:

- Field Mapping.
- Value overrides: Set a field to an explicit value. For example, "Plant Name".
- Value Mapping: For example, "ALARM_1_RTN", "RETURNTONORMAL", "EVENTRETURN", "NORMAL" all get mapped to "RTN".
- Data Correction.
- De-duplication.
- Data Enrichment: Alarm duration calculated, meta tags identified (e.g. Tag Alm Count), etc...

###### Configuring the AA Event Sink

The <strong>Event Field Mapping</strong> section of the Event Sink exposes AA Event Message fields that can be set.

Examples:

In the following examples, we're setting the Alarm Analysis "Event Type" mapping.

1. Map a source data core event property called "AlarmAction" to the AA "Event Type" field

`AlarmAction`

The double square brackets indicate we're referencing the event-source property collection for a property named "AlarmAction".

2. Value Override

Set event-type to ALM in all cases

`"ALM"`

Quote marks indicate this is a text value (rather than a field).

3. Logic

The mapping supports logic using a c#-style syntax in conjunction with "double bracket" field selectors.

For a single statement, the mapping will infer that the result is to be used directly.

//Example://

Map the value from "AlarmAction" event source field converted to upper-case.

```

((string)[[AlarmAction]]).ToUpper()
```

For more complex multi-line statements, semi-colon statement terminators must be used and an explicit value returned.

//Example://

If the source data "AlarmAction" field is empty, set the AA Event Type value to "EVT"

```

var alarmAction = (string)[[AlarmAction]];
if (string.IsNullOrEmpty(alarmAction))
{
  return "EVT";
}
return alarmAction;
```

4. Default Mappings

The following default mappings are applied.

```
msg.Id = srcEvent.ID;
msg.TimeStamp = srcEvent.UtcEventTime;
msg.EventType = "EVT";
msg.Tag = "Undefined";
msg.MessageDescription = srcEvent.Message;
```

These defaults are the minimum requirements to import a "valid" record, but it may not be accurate. The referenced source event fields belong to the Data Core data container and not the true source data.

##### Advanced Settings

An administrator can prepare a C# code file to perform data transformation, but it is a highly technical task that requires full understanding the underlying data objects. We recommend Intelligent Plant assist with this activity.

The default location for Script Files is in the
  <Data Core Application Root folder>/ImportScripts

To use an alternative location, define the `dataCore:alarmAnalysis:baseDirectory` setting as per ["update-safe" configuration](/wiki/data_core/update_safe_configuration.html) guidance.
