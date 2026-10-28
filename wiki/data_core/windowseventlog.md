---
layout: wiki
title: "Data Core Event Source/Sink: Windows Event Log"
permalink: /data_core/windowseventlog.html
---
### Overview {: .title}

Windows Event Log can be employed by data core as both a source of events and repository.

### Event Message Structure {: .title}

The windows event log record is converted to the Data Core Event Message structure. An attempt is made to parse the formatted Windows Event description, however this is dependent on windows context format files which may not be accessible. In this case, the raw message is used.

### Requirements {: .title}

#### Administrator Privileges

In order to write to Windows Event Log, the Event Sink requires elevated privileges (i.e. should run under an account belonging to the local server's Administrator group).
