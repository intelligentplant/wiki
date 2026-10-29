---
layout: wiki
title: "Text File Stream"
permalink: /data_core/text_file_stream.html
---
The Text File Stream event source is used in situations where a SCADA is "printing" A&E data to a text file.

The event source monitors a specified directory, and will scan files for new rows.

Under the hood, the event source keeps a record of files in the directory, their "last modified" date, and how many rows it has already read. If the file is updated, the event source will pick up from the last row it previously read.

The complete row is passed to a Data Core event's "Message" property. That is, there is no parsing of the text file row other than where it starts and ends.

### Key Settings

- <strong>Import Folder</strong> <br /> Path to import folder.

- <strong>Filename Filter</strong> <br /> Specify a file search filter. This parameter can contain a combination of valid literal path and wildcard (* and ?) characters. Comma separate multiple filters.

- <strong>EOLn Terminator</strong> <br /> The EOLn termintor signifies the end of the message.

### Tips

<strong>Archiving</strong> <br /> To keep the event source lean, an independent process should archive files that no longer receive updates.
