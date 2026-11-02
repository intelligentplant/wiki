---
layout: wiki
title: "Logging"
permalink: /big_data_service/logging.html
---
On a default installation of the Big Data Service, Elasticsearch is configured to only log errors. This can be amended however...

### Logging Level

Logging level is defined in the log configuration file:

  %ProgramFiles/Intelligent Plant\Big Data\es\config\logging.yml

Valid logging levels are:

<table class="wiki-table">
<tbody>
<tr><th>Level</th><th>Description</th></tr>
<tr><td>ALL</td><td>The ALL has the lowest possible rank and is intended to turn on all logging.</td></tr>
<tr><td>TRACE</td><td>The TRACE Level designates finer-grained informational events than the DEBUG</td></tr>
<tr><td>DEBUG</td><td>The DEBUG Level designates fine-grained informational events that are most useful to debug an application.</td></tr>
<tr><td>INFO</td><td>The INFO level designates informational messages that highlight the progress of the application at coarse-grained level.</td></tr>
<tr><td>WARN</td><td>The WARN level designates potentially harmful situations.</td></tr>
<tr><td>ERROR</td><td>The ERROR level designates error events that might still allow the application to continue running.</td></tr>
<tr><td>FATAL</td><td>The FATAL level designates very severe error events that will presumably lead the application to abort.</td></tr>
<tr><td>OFF</td><td>The OFF has the highest possible rank and is intended to turn off logging.</td></tr>
</tbody>
</table>

<strong>NB.</strong> When setting a log level, note that logging can introduce a performance overhead. Also, log files are not automatically recycled and can soon generate a significant footprint.

### Log Files

By default, log files are written to:
  %ProgramFiles/Intelligent Plant\Big Data\es\logs

An alternative location can be defined by setting the "path.logs" property in the elasticsearch configuration file:

  %ProgramFiles/Intelligent Plant\Big Data\es\config\logging.yml
