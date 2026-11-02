---
layout: wiki
title: "Configuring SQL tag search statement"
permalink: /data_core/connect_to_ip.21.rest_api_via_app_store_connect.html
---
When configuring your own SQL statement to perform a tag search make sure to include 3 columns in your query:
<strong>Name</strong> - column for tag name search results (required).
<strong>Description</strong> - column for tag descriptions (optional).
<strong>UOM</strong> - column for tag engineering units (optional).

Most importantly please add <strong>$FILTER</strong> variable in your LIKE filter to make sure that results are filtered by users input. See an example below.

An example of such query:

//SELECT ar.Name <strong>AS Name</strong>,ar.Definition <strong>AS Description</strong>, amd.MAP_Description <strong>AS UOM</strong>, amd.MAP_SomeColumn FROM all_records AS ar INNER JOIN AtMapDef as amd ON ar.Definition = amd.MAP_DefinitionRecord WHERE ar.Name LIKE '<strong>$FILTER</strong>' ORDER BY ar.Name
//
