---
layout: wiki
title: "Writing Data Query Formulas"
permalink: /excel/formulas.html
---
The Excel Query Add-In adds multiple Excel formulas that can be used to make queries.

The formulas added by the Add-In are Excel array formulas, this means that the result of the formula occupies multiple cells.

Before entering a formula select the range that the results of the query should occupy (if you don't know how many results there will be select a larger area, or a whole column, otherwise the results will be truncated to fit in the selected range).

Once you have written (or edited) a formula press <strong>Ctrl + Shift + Enter</strong> to update the effected range, if you forget to do this you will get a "You can't change part of an array" error from Excel.

If a cell contains "#VALUE" that means that the query has been sent but hasn't completed yet. "#N/A" means that there is no result for that cell (i.e. the range you selected is larger than the number of returned data points).

If no data sources are available you will get a "#N/A" error. You can authorize data sources by visiting [Authorized Applications](https://appstore.intelligentplant.com/Security/Apps), select "Excel Query Add-In" and ensure that the correct data sources are selected
### Get Available Data Sources {: .title}

[This video](https://www.youtube.com/watch?v=Qip6u7J4sfA&list=PLsVwx5rtV9c0duV5jln2IX9BIMDCCEWrY&index=3) shows how to do data source and tag searches.

You can get the data sources available to the Add-In by using the "GetDataSources()" formula.

- Select 2 columns (e.g. A and B)
- Enter "=GetDataSources()" in the formula bar

This takes no parameters.

Press <strong>Ctrl + Shift + Enter</strong>

This will get a list of data sources. The left column is the human readable data source name, the right is the "Fully Qualified Name" the unique identifier for the data source, this is what should be used in the data source parameter for other queries.

For some data sources the human readable and fully qualified names may be the same.

### Tag Search {: .title}

[This video](https://www.youtube.com/watch?v=Qip6u7J4sfA&list=PLsVwx5rtV9c0duV5jln2IX9BIMDCCEWrY&index=3) shows how to do data source and tag searches.

You can get the data sources available to the Add-In by using the "GetTags(...)" formula.

- Select 3 columns (e.g. A:C)
- Enter "=GetTags(<data source name>, <tag query>)" in the formula bar

This takes 2 parameters:
1. The fully qualified name of the data source you would like to query (you can get this using the "GetDataSources()" formula)
1. A search query or filter (e.g. "*" for all tags or "pmp" for all pumps)

Press <strong>Ctrl + Shift + Enter</strong> to enter the formula

This will return a list of tag names, descriptions and units on the specified data source that match the query.

<strong>Examples</strong>

//=GetTags("My Data Source", "*") <br />
=GetTags(B1, C1)//

If the data source name is in cell B1 and filter in C1. This would select the first data source if you had a "GetDataSources()" query in columns A and B.

### Get Snapshot Data {: .title}

[This video](https://www.youtube.com/watch?v=9ST_1PZ4Iz4&list=PLsVwx5rtV9c0duV5jln2IX9BIMDCCEWrY&index=4) shows how to use the "GetNowValue(...)" formula.

You can get the current value of a tag by using the "GetNowValue(...)" formula.

It's also possible to have the timestamp and header row added to the result. If you wish to include these you will need to enter a range the correct size. There will be an extra column for the timestamps and an extra row for the header (i.e. to include headers and timestamps select a 2x2 range, just timestamps would be 2x1, just header would be 1x2 and just the value would be a single cell).

- Select a range the correct size (e.g. A1:B2)
- Enter "=GetNowValue(<data source name>, <tag name>, <include timestamps>, <include headers>)" in the formula bar

This takes 4 parameters:
1. The fully qualified name of the data source you would like to query (you can get this using the "GetDataSources()" formula)
1. The name of the tag you want to query
1. Whether a time stamps column should be included
1. Whether a header row should be included

Press <strong>Ctrl + Shift + Enter</strong> to enter the formula

This will return the current value of the given tag, with headers and timestamps as specified.

<strong>Examples</strong>

<em>=GetNowValue("My Data Source", "Example Tag", false, false)</em>

Would get the current value of "Example Tag".

<em>=GetNowValue("My Data Source", "Example Tag", true, true)</em>

Would get the current value of "Example Tag" with a header row and timestamp.

### Get Historical Data {: .title}

[This video](https://www.youtube.com/watch?v=GTZDaH9phew&list=PLsVwx5rtV9c0duV5jln2IX9BIMDCCEWrY&index=5) shows how to use the "GetHistoricalValues(...)" formula.

You can get the historical data by using the "GetHistoricalValues(...)" formula.

It's also possible to have the timestamp and header row added to the result. If you wish to include these you will need to enter a range the correct size. There will be an extra column for the timestamps and an extra row for the header. The number of rows required for the query will depend on the start and end dates as well as the interval, for example for 2 dates 31 days apart with an interval of "1d" there will by 31 points and therefore you'll need to select 31 rows (plus 1 more if you're including a header).

- Select a range the correct size (e.g. A1:B31)
- Enter "=GetHistoricalValues(<data source name>, <tag name>, <start time>, <end time>, <interval>, <data function>, <include timestamps>, <include headers>)" in the formula bar

This takes 8 parameters:
1. The fully qualified name of the data source you would like to query (you can get this using the "GetDataSources()" formula)
1. The name of the tag you want to query
1. The start time for the query
1. The end time for the query
1. The sample interval, e.g. "1d", "1h"
1. The data function, one of "Interp", "Plot", "Max", "Min", "Avg" or "Raw"
1. Whether a time stamps column should be included,
1. Whether a header row should be included

Press <strong>Ctrl + Shift + Enter</strong> to enter the formula

The start and end times should be an Excel date (e.g. DATE(2018, 01, 01)), a string with a date (e.g. "01/01/2018") or a relative time (e.g. "*-10d").

This will return the current value of the given tag, with headers and timestamps as specified.

<strong>Examples</strong>

<em>=GetHistoricalValues("My Data Source", "Example Tag", TODAY() - 10, TODAY(), "1d", "Plot", false, false)</em>
<em>=GetHistoricalValues("My Data Source", "Example Tag", "*-10d", "*", "1d", "Plot", false, false)</em>

Both of these would get the historical value of "Example Tag" each day for the past 10 days, without timestamps or a header row.

<em>=GetHistoricalValues("My Data Source", "Example Tag", "01/01/2018", "01/02/2018", "1d", "Plot", false, false)</em>
Both of these would get the historical value of "Example Tag" for each day in January 2018, without timestamps or a header row.

### JSON Parsing {: .title}

Some tags return JSON objects when queried. In order to make these more useful in Excel the add-in provide the "ParseJson(...)" formula this can be used to retrieve individual properties from JSON objects.

- Select a cell
- Enter "=ParseJson(<json>, <property name>)" in the formula bar

This takes 2 parameters:
1. The JSON object
1. The name of the property you want to extract (optional, if unspecified the whole object will be returned)

This will return the value of the specified property in the provided JSON. If the JSON is invalid then an error will be returned.

To get nested properties apply the ParseJson(...) formula multiple times. If the value of a property is a nested object then the ParseJson formula returns the JSON from the inner object, this can then be passed to the parse JSON object again to get the properties of the object.

If the property being selected is an array then the formula will return the result as an Excel array and the formula acts like an array formula (i.e. you must select an area the size of the array horizotally and then press Ctrl + Shift + Enter to enter it). Therefore, if the root object is an arra you can parse it by not providing a property name parameter.
## Tips and Tricks {: .title}

### Defined Names {: .title}

You can define a name to make it easier to use the formulas.
1. Copy the fully qualified name of the data source (see the "Get Available Data Sources" section for details) e.g. "My Data Source"
1. Open the "Formulas" tab
1. Click "Define Name" in the "Defined Names" section
1. Enter a meaning full name in the name feel e.g. "DataSource"
1. Enter the fully qualified name of the data source into the "Referes to:" field like this ="<data source name>" e.g. ="My Data Source"

You can now use the name you set in place of the data source name in formulas, e.g. =GetTags("My Data Source", "*") becomes =GetTags(DataSource, "*"). This makes it easier to change the data source and saves you typing out or copying long data source names, like those used by App Store connects.

You can also use this for any other parameters in the UI or in fomrulas.

### Formula Wizard {: .title}

You can more easily enter formulas by using Excel's built in formula wizard.

1. Open the "Formulas" tab
1. Click "Insert Function"
1. Select "GestaltDataExcel Add-In" from the category drop down, or search for the relevant formula
1. Select a formula from the list
1. Fill in the prompted function arguments
