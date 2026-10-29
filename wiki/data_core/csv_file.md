---
layout: wiki
title: "CSV File"
permalink: /data_core/csv_file.html
---
Use the <strong>CSV File</strong> data source driver to mount static process data files.

Enable the loop function to simulate live updating data.

### Data File Format

![csvformat](/wiki/assets/media/data_core/csvformat.png)

The first row contains headers that define tag and timestamp columns.

<strong>Hint</strong> Tag headings can contain sub parsing to include tag name, description and unit fields.

```
tag-name||tag-description||unit
```

Subsequent rows contain time-series tag values.

### Settings

CSV specific settings are listed under "CSV Settings".

![csvfile02](/wiki/assets/media/data_core/csvfile02.png)

#### Key Settings

- <strong>File Path</strong> <br /> The CSV file to use. This must be relative to the base CSV path defined by the hosting application. <br /> The default root folder for CSV files in a standard installation of App Store Connect is (please create this folder if it does not already exist):

`%Program Data%\Intelligent Plant\Data Core Application Host\Service\Applications\App Store Connect\Data\CsvDriver`

- <strong>Time Stamp Field</strong> <br /> The name of the time stamp field in the CSV file. This can also be the zero-based numerical index of the time stamp field.

- <strong>Time Stamp Format</strong> <br /> The time stamp format used in the CSV file. This is defined using a [Microsoft custom date and time format string](https://docs.microsoft.com/en-us/dotnet/standard/base-types/custom-date-and-time-format-strings).  <br /> <br /> For example "dd/MM/yyyy HH:mm" correctly interprets UK formatted timestamp with 24hr notation ("01/11/2021 15:58").

- <strong>Skip Duplicate Values</strong> <br />  Enabling this setting filters out samples that duplicate the same value on contiguous rows. This is useful when running demo data sets with large numbers of tags and rows.

### System Requirements

The CSV driver is RAM intensive. Use the following formulas to calculate the <strong>additional</strong> RAM requirement of a CSV data source.

  [Additional RAM Requirement] = ([Number of Data Points] x 0.5kb) + [Allowance for User Queries]

  [Number of Data Points]  = [Number of Tags] x [Number of Data Rows]

  [Allowance for User Queries] is driven by factors such as number of parallel requests, data function, data volume processed in gernerating query, etc. Query performance monitoring is recommended, but 0.5GB can be used a starting point.

### Licence Requirements

None.

### Troubleshooting

Refer to logs:

`%Program Data%\Intelligent Plant\Data Core Application Host\Service\Applications\App Store Connect\Logs`
