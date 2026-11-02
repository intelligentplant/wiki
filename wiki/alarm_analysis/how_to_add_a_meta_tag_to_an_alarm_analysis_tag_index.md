---
layout: wiki
title: "How to add a \"Meta Tag\" to an Alarm Analysis Tag Index"
permalink: /alarm_analysis/how_to_add_a_meta_tag_to_an_alarm_analysis_tag_index.html
---
<em>Adding a meta-tag to an Alarm Analysis Tag Index will make it tag discoverable and allow other apps to query it.</em>

<strong>Complexity Level:</strong> Advanced <br />
<strong>Required Privileges:</strong> App Store Connect Admiminstrator

To administer an Alarm Analysis Tag Index, you must log on the App Store Connect server hosting the Alarm Analysis data source. The instructions below are useful Powershell command.

<strong>1. Identifiy Alarm Analysis tag indices</strong>

  ### Get all AA Tag Indices

  Invoke-WebRequest -Uri http://localhost:9200/_cat/indices/*tagidx?v `
     -Method Get `
     | Select-Object -Expand Content

Tag Indices names are constructed thus:

   [orgname].[assetname].tagidx
   e.g. "oilco.osprey.tagidx"

<strong>2. Find a meta-tag in the tag index</strong>

  ### Find tag

  $body='{
      "query":{
          "term":{
              "id":"Oil Co/Osprey/ALM BA report/3.priority"
          }
      }
  }'

  Invoke-RestMethod -Uri http://localhost:9200/oilco.osprey.tagidx/_search `
    -ContentType 'application/json' `
    -Method Post `
    -Body $body `
    | ConvertTo-Json -Depth 20

The above query is checking the "oilco.osprey.tagidx" for meta-tag "Oil Co/Osprey/ALM BA report/3.priority".

<strong>3. Add an meta-tag to a tag index</strong>

Only add a meta-tag to the tag-index, if...

- It does not already exist - <em>check using the find-tag script above.</em>
- You have a valid meta-tag name - <em>check against the meta-tag list.</em>

  ### Create tag

  $body='{
    "id": "Oil Co/Osprey/ALM BA report/3.priority",
    "fullName": "Oil Co/Osprey/ALM BA report/3.priority",
    "name": "Oil Co/Osprey/ALM BA report/3.priority",
    "tag": "",
    "alarmIdentifier": "",
    "type": "",
    "description": "Bad Actor Priority",
    "eventTagType": "kpi",
    "uom": "",
    "lastUpdateUtc": "2023-06-21T10:52:56.2978113Z"
  }'

  Invoke-RestMethod -Uri http://localhost:9200/oilco.osprey.tagidx/eventtag/ `
    -ContentType 'application/json' `
    -Method Post `
    -Body $body `
    | ConvertTo-Json -Depth 20

<strong>4. Delete a meta-tag from the tag index</strong>

Every tag in the tag index has a unique "_id" field (e.g. "AYjeEdp6nSbnh-NXfE0C"). This must be specified in the delete request.

Use the search query above to obtain the "_id".

  ### Delete tag

  Invoke-RestMethod -Uri http://localhost:9200/oilco.osprey.tagidx/eventtag/AYjeEdp6nSbnh-NXfE0C `
    -ContentType 'application/json' `
    -Method Delete `
    | ConvertTo-Json -Depth 20
