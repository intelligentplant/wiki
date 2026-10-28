---
layout: wiki
title: "Dashboarding"
permalink: /dashboarding/dashboarding.html
---
#### When designing a dashboard, there are multiple things to consider:
- Reporting Method
- Are calculations required?
- Does data need to be stored?

This Implementation Table provides details on a variety of methods that could be used when working towards building dashboards.

<strong>For Calculations</strong>

A number of key areas should be considered when deciding which calculation method should be selected.

<table class="wiki-table">
<tbody>
<tr><th>Method</th><th>Scale Limit</th><th>Responsibility for Scaling</th><th>Possible Complexity</th><th>Ease of Replication</th><th>Experience Required</th><th>IP Protection</th><th>Effort to create single dashboard</th><th>Effort to create many dashboards</th></tr>
<tr><td><strong>Templated Script Tags</strong></td><td>ASC Server</td><td>Intelligent Plant</td><td>Low (Orchestrated)</td><td>Upload Instances (Easy)</td><td>Basic Configuration (Select Tags)</td><td>Tags can be seen by client admin, new instances can be created by admin</td><td>Low</td><td>Low (import)</td></tr>
<tr><td><strong>Custom Script Tags</strong></td><td>ASC Server & Code Efficiency</td><td>Developer</td><td>Low (Orchestrated)</td><td>Developer Responsible</td><td>Basic Code (Scripting)</td><td>Code can be seen and copied/modified by admin</td><td>Low</td><td>High (Up To Developer)</td></tr>
<tr><td><strong>Custom Script Tags With DLL</strong></td><td>ASC Server & Code Efficiency</td><td>Developer</td><td>Low (Orchestrated)</td><td>Developer Responsible</td><td>Medium Code (Compilation/Linking)</td><td>DLL code can be obfuscated but decompilation possible.</td><td>Low</td><td>High (Up To Developer)</td></tr>
<tr><td><strong>Jupyter Hub</strong></td><td>Bandwidth & Capacity Of Server Instance</td><td>Developer</td><td>Medium (Manually Run)</td><td>Developer Responsible</td><td>Basic Python</td><td>Scripts are stored on intelligent plant server - could be accessed by someone if they broke contract.</td><td>Medium</td><td>High (Up To Developer)</td></tr>
<tr><td><strong>App Implementation (Ext. Host)</strong></td><td>Bandwidth & Server Host & Code Efficiency</td><td>Developer</td><td>High (Fully Open)</td><td>Developer Responsible</td><td>Advanced Coding</td><td>No one else can possibly see how your app does something, but they could attempt to replicate results through reverse engineering</td><td>Depends On App</td><td>Depends On App</td></tr>
<tr><td><strong>App Implementation (Local Install)</strong></td><td>Server Host & Code Efficiency</td><td>Developer</td><td>High (Fully Open)</td><td>Developer Responsible</td><td>Advanced Coding</td><td>A local install would mean anyone with access to the client host could decompile or attempt to reuse code.</td><td>Depends On App</td><td>Depends On App</td></tr>
<tr><td><strong>Power Automate</strong></td><td>Bandwidth & Azure Limits On Data, Executions Etc..</td><td>Developer</td><td>Very Low (Orchestrated, Restricted)</td><td>Developer Responsible</td><td>Drag And Drop</td><td>Depends on sharing level</td><td>Low</td><td></td></tr>
</tbody>
</table>

#### Script Tags
Through Intelligent Plant’s application – Facit, it is possible to create and configure script tags that perform calculations with your data.
There are two ways of creating these script tags:

##### Templated script tags
Intelligent Plant’s Facit has pre-made script tags available to users. These can perform a variety of calculations already. It is just a matter of configuring the templates with your data.
Key features of Templated Script Tags in Facit:
- Speed – Templated script tags make it quick and easy for the user to create the script tags that they need. Creating multiple script tags is straightforward, with configuration being the only main time sink in this process.
- No coding – Templated script tags have been coded for the user already, thus no coding experience is required. This method allows anyone with knowledge of the calculations to configure the script tags.
A clear disadvantage of using templated script tags is that if the calculation you require is not performed by any of the templated script tags available, then an alternative method would need to be used.

##### Custom (Ad-hoc) script tags
If you need or wish to create a custom script tag, this can also be done on Facit.
Although the coding experience required to create custom script tags would likely be minimal, the time to make multiple script tags would be considerably longer than with templated script tags.
The key features of Custom Script Tags in Facit:
- More freedom – Being able to code your own script tags means that you are not restricted to the templated script tags available from Intelligent Plant. You have the ability to code any script tag that you require.
- Easy to create – As long as the developer has basic coding experience, then creating custom script tags should be straightforward.
The effort required to create many script tags will be significantly higher than by using templated script tags, and the efficiency of the code can significantly impact scaling.

#### Jupyter Hub
Jupyter Hub brings the power of notebooks to groups of users. It gives users access to computational environments and resources without burdening the users with installation and maintenance tasks. Users - including students, researchers, and data scientists - can get their work done in their own workspaces on shared resources which can be managed efficiently by system administrators.
Jupyter Hub runs in the Industrial App Store, and makes it possible to serve a pre-configured data science environment to any user in the world. It is customizable and scalable, and is suitable for small and large teams, academic courses, and large-scale infrastructure.
Key features of JupyterHub in the Industrial App Store:
- Customisable – JupyterHub can be used to serve a variety of environments. It supports dozens of kernels with the Jupyter server, and can be used to serve a variety of user interfaces. Available interfaces include the Jupyter Notebook, JupyterLab, RStudio, Python 3 and dotnet.
- Flexible - The Hub authenticates users with the Industrial App Store so that they can access their live data sources immediately. This prevents the need for large data exports and allows models to be created using the most up to date data. Jupyter Hub uses the same data APIs as other App Store applications. This simplifies the process of developing a prototype into a full application.
- Scalable - The Intelligent Plant Jupyter Hub is hosted in the cloud which allows it to scale to thousands of users and to be accessed from anywhere.

#### App Implementation
Creating a custom application to perform your calculations would ultimately provide total freedom on the calculations you wish to create. This could be pushed to an external host or kept as a local install, depending on what is preferred.
Key features of creating your own application:
- Enhanced IP Protection - Nobody could know how your application works, therefore the security of your results may be higher.

- Specialisation – Creating your own application means total customisation to suit your needs. It can be coded in your preferred coding language, and familiarisation of the application would not be an issue.
Significant resources may be required to produce an in-house application, which may delay completion of the product.

#### Power Automate

Power Automate is an online tool within the Microsoft 365 applications and add-ins, used for the creation of automated workflows between apps and services to synchronise files, get notifications, and collect data.

[Intelligent Plant’s Industrial Automator for Power BI](https://docs.microsoft.com/en-gb/connectors/industrialappstore/) enables interaction with all the different historian data through a unified API.

enables Microsoft’s powerful analytics and visualisations to be applied to real time and historical process data. Thus achieving seamless integration of plant and corporate data that can be shared with any colleague on any device, enabling faster, better, real-time decision making.

Key features of Power Automate:

- Receive alerts - Power Automate can be set up to automatically send out an alert if a calculated value is outside of a desired range, thus keeping you up to speed on any significant deviations in your plant.

- Minimal effort - Power Automate allows rapid creation of workflows that perform the tasks you require. No coding knowledge is needed to use it and there is an abundance of information available on how to use Power Automate.

<strong> For Displays </strong>

<table class="wiki-table">
<tbody>
<tr><th>Method</th><th>Shareable with Users</th><th>Real-time Updates</th><th>Embeddable</th><th>User Configurable</th></tr>
<tr><td><strong>PnID</strong></td><td>Yes</td><td>Yes</td><td>Yes</td><td>Yes</td></tr>
<tr><td><strong>Power BI</strong></td><td>Yes</td><td>No</td><td>No</td><td>Yes</td></tr>
<tr><td><strong>Trend</strong></td><td>Yes</td><td>Yes</td><td>Yes</td><td>Yes</td></tr>
<tr><td><strong>Jupyter Hub</strong></td><td>No, this must be run by the developer, but when it works then it could be used as start of app</td><td>No</td><td>No(Developer Only)</td><td>No</td></tr>
<tr><td><strong>New App</strong></td><td>Developer Responsible</td><td>Developer Responsible</td><td>Developer Responsible</td><td>Developer Responsible</td></tr>
</tbody>
</table>

<strong> For Storage </strong>

<table class="wiki-table">
<tbody>
<tr><th>Storage of Data</th><th>Write-ability</th></tr>
<tr><td><strong>Client Historian</strong></td><td>Unlikely</td></tr>
<tr><td><strong>IP Hist</strong></td><td>Yes</td></tr>
<tr><td><strong>Alarm Analysis</strong></td><td>Yes</td></tr>
</tbody>
</table>
