---
layout: wiki
title: "Cross Data Updates"
permalink: /alarm_analysis/cross_data_updates.html
---
The Alarm Analysis event sink is where import rules are configured. Events are processed in a strict FIFO (First In - First Out) sequence. During this phase, the event is parsed purely on the content of the individual record.

However, there is a secondary phase called “Cross Data Updates” which works on a wider context which requires reading and updating historic data.

Cross Data checks run independently of the import flow. If enabled, the Cross Data Checks poll the Alarm Analysis indices for new entries. If found, the process then seeks out related records and performs calculations.

Cross Data Updates include the following functions...

<img src="/assets/media/alarm_analysis/crossdatachecks.png" alt="crossdatachecks" style="max-width:1000px" loading="lazy" />

NB. Cross Data Functions incur processing overhead and should only be enabled if required.

### Dupe Check {: .title}

An event is considered a dupe if it shares the following properties with another event:

- Timestamp
- EventType
- AlarmIdentifier
- Paramater
- Priority

If a dupe is identified, the Event Type is updated with a “_Dupe” suffix. The event remains in the Sequence of Events, but is removed from any KPIs.

### Compile Alarm Properties {: .title}

This process matches up ALMs and RTNs and calculates alarm duration, on-to-on duration, off-to-on duration, and flags if chattering. An alarm is considered chattering if it annunciates 3 or more times within a calendar minute.

- On to Off (IO): Time from the alarm coming on to it going off (how long it is on)
- Off to On (OI): Time from alarm going off to it next coming on (how long it is off)
- On to On (II): Time from the alarm coming on to it next coming on (time between alarms)

### Calculate Alarm Disabled Properties {: .title}

Alarm Disabled properties include Alarm Disabled Duration.

This can only be calculated if the Alarm Analysis record has properties:

- EventType: INT (intervention)
- OpAction: DISABLE_ON or DISABLE_OFF

### Calculate Manual Mode Properties {: .title}

Manual Mode properties include Manual Mode Duration.

This can only be calculated if the Alarm Analysis record has properties:

- EventType: INT (intervention)
- OpAction: MANUAL_ON or MANUAL_OFF
