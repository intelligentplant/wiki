---
layout: wiki
title: "A&E Report Sink"
permalink: /data_core/aereportsink.html
---
### Overview {: .title}

The A&E Report Sink monitors an event flow and will output events to a text file report when it detects a "start message", and will continue until it detects an "end message".

### Requirements {: .title}

- Write access to file-system and sufficient storage to record reports.

### Key Settings {: .title}

- Report start event message: Regular expression to identify start of a report event. NOTE: this message will be included in the report.
- Report end event message:Regular expression to identify end of a report event. NOTE this message won't be included in the report.
- Report length: Max number of events to record in a report. Safety net in case end of report message is not recorded.
- Report output location: Report output location on the file system.

### Useful Links {: .title}

For help with writing regular expressions, try http://regexstorm.net
