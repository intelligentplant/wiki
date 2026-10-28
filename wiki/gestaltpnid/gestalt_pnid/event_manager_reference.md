---
layout: wiki
title: "Event Manager"
permalink: /gestaltpnid/gestalt_pnid/event_manager_reference.html
---
### Introduction {: .title}

In Gestalt PnID's Event Manager we provide several helper functions that help you perform specific actions within your dashboard. This page outlines what each of these functions are, what they do, and information on how they can be used within the event manager.

### Global/Local Scripts {: .title}

Functions and variables can be defined at the scope of a dashboard or at organisation level. See [Global and Local Scripts Guide](/gestaltpnid/gestalt_pnid/event_manager_reference/global_scripts_guide.html) for more information.

### Script Reference {: .title}

#### Change Property

Changes the value of the specified property on a component to the specified value.

###### Method Signatures

```
changeProperty("[Component Id]", "[Property Name]", "[Property Value]")
```

<table class="wiki-table">
<tbody>
<tr><th>Parameter</th><th>Type</th><th>Description</th><th>Required?</th></tr>
<tr><td>Component Id</td><td>string</td><td>The id of the property you want to change a property of.</td><td>Yes</td></tr>
<tr><td>Property Name</td><td>string</td><td>The name of the property you would like to alter.</td><td>Yes</td></tr>
<tr><td>Property Value</td><td>any</td><td>The value to set the property to.</td><td>Yes</td></tr>
</tbody>
</table>

#### Set Position

Changes the position of a component to the provided XY co-ordinate.

###### Method Signatures

```
setPosition("[Component Id]", "[X Position]", "[Y Position]")
```

<table class="wiki-table">
<tbody>
<tr><th>Parameter</th><th>Type</th><th>Description</th><th>Required?</th></tr>
<tr><td>Component Id</td><td>string</td><td>The id of the property you want to change the position of.</td><td>Yes</td></tr>
<tr><td>X Position</td><td>numeric</td><td>The x co-ordinate of the position to move the component to.</td><td>Yes</td></tr>
<tr><td>Property Value</td><td>numeric</td><td>The y co-ordinate of the position to move the component to.</td><td>Yes</td></tr>
</tbody>
</table>

#### Set Query

Changes the query settings of the dashboard.

###### Method Signatures

```
setQuery("[Start Time]", "[End Time]", "[Interval]", "[Data Function]")
```

<table class="wiki-table">
<tbody>
<tr><th>Parameter</th><th>Type</th><th>Description</th><th>Required?</th></tr>
<tr><td>Start Time</td><td>string</td><td>The start date to set the query to, which can either be an absolute date in ISO format or a relative value e.g. *-10d, *-1h.</td><td>Yes</td></tr>
<tr><td>End Time</td><td>string</td><td>The end date to set the query to, which can either be an absolute date in ISO format or a relative value e.g. *, *-1h.</td><td>Yes</td></tr>
<tr><td>Interval</td><td>string</td><td>The interval to set the query to e.g. 1d, 1h, 1m.</td><td>Yes</td></tr>
<tr><td>Data Function</td><td>string</td><td>The data function to set the query to e.g. PLOT, MAX, MIN, INTERP, AVG or RAW</td><td>Yes</td></tr>
</tbody>
</table>

#### Write Value

Writes a value to the snapshot of the specified tag.

###### Method Signatures

```
writeValue("[Datasource Name]", "[Tag Name]", "[Value To Write]", "[Note]", "[Success Callback]", "[Fail Callback]")
```

<table class="wiki-table">
<tbody>
<tr><th>Parameter</th><th>Type</th><th>Description</th><th>Required?</th></tr>
<tr><td>Data Source Name</td><td>string</td><td>The qualified data source name the tag belongs to.</td><td>Yes</td></tr>
<tr><td>Tag Name</td><td>string</td><td>The name of the tag the value is to be written to.</td><td>Yes</td></tr>
<tr><td>Value To Write</td><td>string/numeric</td><td>The value to be written to the tag. It can be a string value or a numeric value.</td><td>Yes</td></tr>
<tr><td>Note</td><td>string</td><td>A note to be attached to the value being written</td><td>No</td></tr>
<tr><td>Success Callback</td><td>function</td><td>Function that will be called when the write is successful.</td><td>No</td></tr>
<tr><td>Fail Callback</td><td>function</td><td>Function that will be called when the write fails.</td><td>No</td></tr>
</tbody>
</table>

#### Query Tag Data

Retrieves the values for the specified tag and time.

###### Method Signatures

```
queryTagValues("[Datasource Name]", "[Tag Name]", "[Start Time]", "[End Time]", "[Interval]", "[Data Function]", "[Success Callback]", "[Fail Callback]", "[Show Notification]")
```

<table class="wiki-table">
<tbody>
<tr><th>Parameter</th><th>Type</th><th>Description</th><th>Required?</th></tr>
<tr><td>Data Source Name</td><td>string</td><td>The qualified data source name the tag belongs to.</td><td>Yes</td></tr>
<tr><td>Tag Name</td><td>string</td><td>The name of the tag the value is to be written to.</td><td>Yes</td></tr>
<tr><td>Start Time</td><td>string</td><td>The start date to set the query to, which can either be an absolute date in ISO format or a relative value e.g. *-10d, *-1h.</td><td>Yes</td></tr>
<tr><td>End Time</td><td>string</td><td>The end date to set the query to, which can either be an absolute date in ISO format or a relative value e.g. *, *-1h.</td><td>Yes</td></tr>
<tr><td>Interval</td><td>string</td><td>The interval to set the query to e.g. 1d, 1h, 1m.</td><td>Yes</td></tr>
<tr><td>Data Function</td><td>string</td><td>The data function to set the query to e.g. PLOT, MAX, MIN, INTERP, AVG or RAW</td><td>Yes</td></tr>
<tr><td>Callback</td><td>function</td><td>Function that will be called when the write is successful.</td><td>Yes</td></tr>
<tr><td>Fail Callback</td><td>function</td><td>Function that will be called when the write fails.</td><td>No</td></tr>
<tr><td>Show Notification</td><td>boolean</td><td>Indicates weather or not to show Success/Fail notification. If missing, the default is false.</td><td>No</td></tr>
</tbody>
</table>

#### Get Value

Retrieves the value for the specified tag.

###### Method Signatures

```
getValue("[Data Source]", "[Tag Name]", "[Use Selected]", "[Index]")
```

<table class="wiki-table">
<tbody>
<tr><th>Parameter</th><th>Type</th><th>Description</th><th>Required?</th></tr>
<tr><td>Data Source</td><td>string</td><td>The data source of the tag to retrieve the value for.</td><td>Yes</td></tr>
<tr><td>Tag Name</td><td>string</td><td>The name of the tag to retrieve the value for.</td><td>Yes</td></tr>
<tr><td>Use Selected</td><td>boolean</td><td>Indicates whether to return the currently selected point, or the latest. True will return the select and false will return the lates.</td><td>No</td></tr>
<tr><td>Index</td><td>boolean</td><td>The index of a specific value in the data array to return. If Use Selected is true this will have no effect.</td><td>No</td></tr>
</tbody>
</table>

#### Get String Value

Retrieves the string value for the specified tag.

###### Method Signatures

```
getStringValue("[Data Source]", "[Tag Name]")
```

<table class="wiki-table">
<tbody>
<tr><th>Parameter</th><th>Type</th><th>Description</th><th>Required?</th></tr>
<tr><td>Data Source</td><td>string</td><td>The data source of the tag to retrieve the string value for.</td><td>Yes</td></tr>
<tr><td>Tag Name</td><td>string</td><td>The name of the tag to retrieve the string value for.</td><td>Yes</td></tr>
</tbody>
</table>

#### Get Tag Data

Retrieves the entire data array for the specified tag.

###### Method Signatures

```
getTagData("[Data Source]", "[Tag Name]")
```

<table class="wiki-table">
<tbody>
<tr><th>Parameter</th><th>Type</th><th>Description</th><th>Required?</th></tr>
<tr><td>Data Source</td><td>string</td><td>The data source of the tag to retrieve the data for.</td><td>Yes</td></tr>
<tr><td>Tag Name</td><td>string</td><td>The name of the tag to retrieve the data for.</td><td>Yes</td></tr>
</tbody>
</table>

#### Get Timestamp

Retrieves the latest timestamp for the specified tag.

###### Method Signatures

```
getTimeStamp("[Data Source]", "[Tag Name]")
```

<table class="wiki-table">
<tbody>
<tr><th>Parameter</th><th>Type</th><th>Description</th><th>Required?</th></tr>
<tr><td>Data Source</td><td>string</td><td>The data source of the tag to retrieve the latest timestamp for.</td><td>Yes</td></tr>
<tr><td>Tag Name</td><td>string</td><td>The name of the tag to retrieve the latest timestamp for.</td><td>Yes</td></tr>
</tbody>
</table>

#### Swap Tags

Swaps out the current set of tags present in the page for a new set. There are four overloads that can be used depending on the requirement:

- Swaps <strong>all of the tags</strong> in a dashboard with a list of tag names that are <strong>from the same data source</strong>.

```
swapTags("[New Tags List]")
```

<table class="wiki-table">
<tbody>
<tr><th>Parameter</th><th>Type</th><th>Description</th><th>Required?</th></tr>
<tr><td>New Tags List</td><td>array</td><td>The collection of tag names to swap out the existing with. Must be of the same length as the existing tag list in the dashboard.</td><td>Yes</td></tr>
</tbody>
</table>

- Swaps <strong>all of the tags</strong> in a dashboard with a list of tag names that are <strong>different from the old data sources</strong>.

```
swapTags("[New Tags List]", "[New Data Sources]")
```

<table class="wiki-table">
<tbody>
<tr><th>Parameter</th><th>Type</th><th>Description</th><th>Required?</th></tr>
<tr><td>New Tags List</td><td>array</td><td>The collection of tag names to swap out the existing with. Must be of the same length as the existing tag list in the dashboard.</td><td>Yes</td></tr>
<tr><td>New Data Sources</td><td>array</td><td>The collection of data source names of the new tags to swap out the existing with. Must be of the same length as the existing tag list.</td><td>Yes</td></tr>
</tbody>
</table>

- Swaps <strong>some of the tags</strong> with a list of tag names that are <strong>from the same data source</strong>

```
swapTags("[New Tags List]", "[Old Tags To Target]", "[Old Data Sources to Target]")
```

<table class="wiki-table">
<tbody>
<tr><th>Parameter</th><th>Type</th><th>Description</th><th>Required?</th></tr>
<tr><td>New Tags List</td><td>array</td><td>The collection of tag names to swap out the existing with. Must be of the same length as the target list</td><td>Yes</td></tr>
<tr><td>Old Tags to Target</td><td>array</td><td>The collection of tag names to target for replacement with the new tags.</td><td>Yes</td></tr>
<tr><td>Old Data Source to Target</td><td>string</td><td>The data source of the old tags.</td><td>Yes</td></tr>
</tbody>
</table>

- Swaps <strong>some of the tags</strong> with a list of tag names that are <strong>different from the old data sources</strong>

```
swapTags("[New Tags List]", "[New Data Sources]", "[Old Tags To Target]", "[Old Data Source to Target]")
```

<table class="wiki-table">
<tbody>
<tr><th>Parameter</th><th>Type</th><th>Description</th><th>Required?</th></tr>
<tr><td>New Tags List</td><td>array</td><td>The collection of tag names to swap out the existing with. Must be of the same length as the old tags to target list.</td><td>Yes</td></tr>
<tr><td>New Data Sources</td><td>array</td><td>The collection of data source names to swap out the existing with. Must be of the same length as the old target tag list.</td><td>Yes</td></tr>
<tr><td>Old Tags to Target</td><td>array</td><td>The collection of old tag names to target for replacement with the new tags.</td><td>Yes</td></tr>
<tr><td>Old Data Source to Target</td><td>string</td><td>The data source of the old tags to target.</td><td>Yes</td></tr>
</tbody>
</table>

#### Transform Tags

Applies a transform to the names of the tags present in the page.
###### Method Signatures

```
transformTags("[Value to be Transformed]", "[New Value]", "[Data Source]")";
```

<table class="wiki-table">
<tbody>
<tr><th>Parameter</th><th>Type</th><th>Description</th><th>Required?</th></tr>
<tr><td>Value to be Transformed</td><td>string</td><td>The substring to target for transformation.</td><td>Yes</td></tr>
<tr><td>New Value</td><td>string</td><td>The new value you want to replace the target string with.</td><td>Yes</td></tr>
<tr><td>Data source</td><td>string</td><td>The data source of the tags you want to target. If none is provided it will target the whole set.</td><td>No</td></tr>
</tbody>
</table>

#### Get Page State

Retrieves a value under the given key from the page state store.
###### Method Signatures

```
getPageState("[key]")
```

<table class="wiki-table">
<tbody>
<tr><th>Parameter</th><th>Type</th><th>Description</th><th>Required?</th></tr>
<tr><td>key</td><td>string</td><td>The key of the value you want to retrieve from the page state.</td><td>Yes</td></tr>
</tbody>
</table>

#### Set Page State

Sets a value under the given key from the page state store.
###### Method Signatures

```
setPageState("[key]", "[value]")
```

<table class="wiki-table">
<tbody>
<tr><th>Parameter</th><th>Type</th><th>Description</th><th>Required?</th></tr>
<tr><td>key</td><td>string</td><td>The key you want to store the value against.</td><td>Yes</td></tr>
<tr><td>value</td><td>any</td><td>The value you want to store against the key.</td><td>Yes</td></tr>
</tbody>
</table>

#### Get Component
Retrieves the object reference of the component matching the specified ID.
###### Method Signatures

```
getComponent("[Component Id]")
```

<table class="wiki-table">
<tbody>
<tr><th>Parameter</th><th>Type</th><th>Description</th><th>Required?</th></tr>
<tr><td>Component Id</td><td>string</td><td>The id of the component you want to retrieve.</td><td>Yes</td></tr>
</tbody>
</table>
