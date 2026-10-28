---
layout: wiki
title: "Global and Local Scripts"
permalink: /gestaltpnid/gestalt_pnid/event_manager_reference/global_scripts_guide.html
---
### Introduction {: .title}

In Gestalt PnID's Event Manager, we provide you with the ability to define global functions and variables that are limited to a single dashboard (<strong>Local Scripts</strong>) or shared with all users in your organisation (<strong>Global Scripts</strong>). This page outlines what they are, what they do, and information on how they can be used within the event manager.

### Global Scripts {: .title}

Global scripts (or organisation scripts) are functions and variables that are defined and shared across users in your organisation. These functions and variables only have to be defined once and they will be available to access in all dashboards within your organisation.

<strong>Note: All users in your organisation can add, edit, or remove existing global scripts.</strong>

You can access global scripts by opening the Event Manager and clicking on the following icon:
<img src="/assets/media/gestaltpnid/gestalt_pnid/event_manager_reference/global_function_icon.png" alt="global_function_icon" style="max-width:600px" loading="lazy" />

<strong>Global scripts will be saved when you close the popup and choose to save changes when prompted.</strong>

### Local Scripts {: .title}

Local scripts are functions and variables that are only accessible inside of the dashboard that they have been defined in. <strong>When a function or variable has been defined in both global and local scripts with the same name, the local script version will take precedence and the global function/variable will be overridden in that dashboard.</strong>

You can access local scripts by opening the Event Manager and clicking on the following icon:
<img src="/assets/media/gestaltpnid/gestalt_pnid/event_manager_reference/local_function_icon.png" alt="local_function_icon" style="max-width:600px" loading="lazy" />

<strong>Local scripts will only be saved when you save the dashboard that they have been defined in.</strong>

### Defining/Editing a Function {: .title}

To define a function, set the name of the variable on the left panel. When you add a function, a template will appear on the textarea on the right panel. The first and last line are locked. Only the area inside of the brackets can be edited to specify the function parameters, and the area between the curly brackets to specify the function body.

If you would like to modify the name of a function that you have set, please edit the name from the left panel, and the right panel will be updated with the modified function name.

Example <img src="/assets/media/gestaltpnid/gestalt_pnid/event_manager_reference/globalfunction.png" alt="globalfunction" style="max-width:400px" loading="lazy" />

### Defining/Editing a Variable {: .title}

To define a variable, set the name of the variable on the left panel and the variable value on the right panel textarea.
Example
<code>var testString = "This is a string";</code>
<img src="/assets/media/gestaltpnid/gestalt_pnid/event_manager_reference/stringvar.png" alt="stringvar" style="max-width:400px" loading="lazy" />
