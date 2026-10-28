---
layout: wiki
title: "Preparing App Store Connect for Facit Monitoring"
permalink: /facit/preparefacitmonitoring.html
---
The following document provides instructions on how to configure App Store Connect for Facit Monitoring. It is intended for App Store Connect administrators (IT Professionals with access to on-site App Store Connect software services).

### Introduction {: .title}

Facit requires a number of Data Core components to be built and configured before end-users can employ the online app for surveillance monitoring. Fortunately, App Store Connect takes care of most of the heavy lifting.

<strong>1.</strong> Log on to the <strong>App Store Connect server</strong>.

<strong>2.</strong> Open the <strong>App Store Connect admin console</strong>.

<strong>3.</strong> Enable the <strong>Facit Data Source</strong>.

<img src="/assets/media/facit/facit_03.png" alt="facit_03" style="max-width:600px" loading="lazy" />

<strong>3.1</strong> Navigate to <strong>Real-Time Data > Data Sources</strong>.

<strong>3.2</strong> Select <strong>Facit > Details > Actions > Configure Settings > General Settings > Disabled</strong>.

<strong>3.3</strong> Set to <em>False</em>.

<strong>4.</strong> Apply Licence.

<strong>4.1</strong> Request <strong>Alarm Analysis Licence Key</strong> from Intelligent Plant. We will require your Machine Id - this is listed under the Data Source properties.

<img src="/assets/media/facit/facit_04.png" alt="facit_04" style="max-width:600px" loading="lazy" />

<strong>4.2</strong> Set [Alarm Analysis Licence](/alarm_analysis/licensing.html)

<strong>5.</strong> Build required Data Core components.

<strong>5.1</strong> Navigate to <strong>Facit > Details > Actions > Custom Functions Calls</strong>

<strong>5.2</strong> Enter...
- Custom Function Name: SetUpFacit
- Parameters:
  - name - A named instance of Facit (e.g. "WindCo Facit"). Alternatively, omit to use default name "Facit".
  - target - Any data source which Facit will monitor (e.g. My Historian).

<img src="/assets/media/facit/setupfacitcustomfunction.png" alt="setupfacitcustomfunction" style="max-width:600px" loading="lazy" />

This instantiates the following Data Core components along with the necessary event subscriptions and monitoring data access.

- Facit: An Alarm Analysis data source from which Script Tags actively monitor a target process data source.
- Facit Limit Historian: A store for limit values.
- Facit Archive Historian: A store for Script Tag calculated results.
- Facit Alarm Analysis Sink: A process that writes Facit events to Alarm Analysis.

<strong>6.</strong> Configure security access to Facit related data sources.

Create a "Facit Users Group", where members have access to the Facit app and each of the following data sources:

- Facit - Read/Write
- Facit Limit Historian - Read/Write
- <em>Target</em> Data Sources - Read-Only

See [Organization User and Data Management](/general/organization_user_and_data_management.html) for more info.
