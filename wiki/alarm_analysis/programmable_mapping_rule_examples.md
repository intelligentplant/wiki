---
layout: wiki
title: "Programmable mapping rule examples"
permalink: /alarm_analysis/programmable_mapping_rule_examples.html
---
For example, to convert an EventType "Alarm_RTN" to RTN you could use the following code:

```
var type = Convert.ToString([[EventTypeName]]);
if(type.Equals("Alarm_RTN"))
{
      return "RTN";
}
else {
      return type;
};
```

To assign a priority order, you could use something like this:

```
var priority = "P" + [[Priority]]; return priority;
```
