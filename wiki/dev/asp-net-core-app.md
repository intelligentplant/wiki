---
layout: wiki
title: "Creating an ASP.NET Core App"
permalink: /dev/asp-net-core-app.html
---
You can install project templates for Visual Studio 2022, Visual Studio 2019 and the .NET SDK's <code>dotnet new</code> tool by following the instructions on [NuGet.org](https://www.nuget.org/packages/IntelligentPlant.IndustrialAppStore.Templates). You can also visit the GitHub page for the template pack [here](https://github.com/intelligentplant/IndustrialAppStore.ClientTools.DotNet) to view the documentation.

Once installed, you can create an app in Visual Studio by selecting "Industrial App Store" from the "Project Type" filter in the new project window:

<img src="/assets/media/dev/vs_new_project_window.png" alt="vs_new_project_window" style="max-width:400px" loading="lazy" />

You can also create an app from the command line using the .NET SDK:

```
mkdir MyNewApp.Web
cd MyNewApp.Web
dotnet new iasmvc
```

After creating your app, please ensure that you read the README file in your new project to perform any additional required steps!
