---
layout: wiki
title: "Licensing"
permalink: /alarm_analysis/licensing.html
---
### Alarm Analysis Licensing

Alarm Analysis is licensed at the data source level.

There are 3 ways to set up or update a AA license:

#### 1. Using App Store Connect

1. Open App Store Connect. Double click the <em>App Store Connect</em> on your desktop or open a browser window and navigate
1. Hit <em>Configure Data Core</em>.
1. Navigate to <em>Real-Time Data</em> -> <em>Data Sources</em> and find the Alarm Analysis data source you wish to licence
1. Click on <em>Details</em> and then at the bottom of the page <em>Actions</em> -> <em>Custom Function Call</em> (NOTE: if you don't see <em>Custom Function Call</em> it means you are not an administrator. Please get in touch with ASC administrator to perform this action or to add you to the administrator's group).
1. Enter the following values into the designated fields:
  1. Custom function name:  `SetLicenceKey`
  1. Parameters:
```json
{
"LicenceKey": "your-new-licence-key-here"
}
```

1. Click <em>Run</em>. If all executed correctly you should see <em>HTTP Response Code: 200</em> as well as a <em>true</em> value below indicating that the new licence was set. Restart the data source.

  <img src="/wiki/assets/media/alarm_analysis/aa-licensing-dc.jpg" alt="A&E licensing" style="max-width:600px" loading="lazy" />

#### 2. Using Alarm Analysis app

<em>Coming soon.</em>

#### 3. Licence File

<em>Coming soon.</em>
