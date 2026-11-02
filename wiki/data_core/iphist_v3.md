---
layout: wiki
title: "IP Historian v3"
permalink: /data_core/iphist_v3.html
---
IP Historian v3 (IP Hist v3) is a new version of the Intelligent Plant Historian which has been updated to use Elastic Search 7.

IP Hist v3 is currently in feature preview which means that it requires manual steps to be installed on your App Store Connect.

#### Installing the Feature Preview App Store Connect Package

Download and install App Store Connect as normal. Then shutdown the "Intelligent Plant Data Core Service" while we modify the configurations.

You will need to contact <support@intelligentplant.com> to be sent the package file needed in step 4.

1. Create a folder to act as a local package feed e.g. <code>C:\IPHist3Feed</code>.

2. Modify the <code>C:\Program Files\Intelligent Plant\Data Core\DataCore.ApplicationHost.exe.config</code> file and set the <code>applicationHostEngine.appStoreRepositoryPath</code> setting to the local package feed e.g. <code>C:\IPHist3Feed</code>.

3. Modify the <code>C:\ProgramData\Intelligent Plant\Data Core Application Host\Service\Data\Data Core Application Host.DataStoreApplicationManager.Applications.data</code> file and set the <code>AllowPreReleasePackages</code> setting to true.

4. Copy the package file into the local package feed.

5. Modify the <code>C:\ProgramData\Intelligent Plant\Data Core Application Host\Service\Applications\App Store Connect\DataCore.config</code> file to add a new data source type definition. Add this definition to the <code>dataSourceTypes</code> block after the IP Hist definition:

<code><dataSourceType name="IP Historian v3" description="Intelligent Plant Historian v3" type="DataCore.IPHist3.IPHistDriver, DataCore.IPHist3" /></code>

6. Restart the data core service to prompt an update which should pick up the new package.

#### Installing and Configuring Elastic Search 7

1. Download the latest version of Elastic Search 7 from the Elastic website.Development and testing was primarily done with verison 7.17.3 but any 7.x version should work. https://www.elastic.co/downloads/past-releases#elastic-search

2. Extract the zip file to where-ever you would like. Open the elastic search config file ("<elastic directory>\config\elasticsearch.yml") and modify the following settings:
- <code>http.max_content_length: 500mb</code>
- <code>http.port: 9203</code> (Optional) This is to prevent a port binding conflict with the Big Data Service used by Alarm Analysis and IP Hist v2.

3. Open an adminsitrator terminal and navigate to the "<elastic directory>\bin" folder. The run `elasticsearch-service.bat install`

4. You will now be able to find the Elasticsearch service in the windows service manager. Change the service start setting to 'Automatic' rather than 'Manual'.

When configuring an IP Hist v3 data source make sure to change the elastic URL setting to match the port number you specified in step 2.

#### IP Hist Migration Tool

The IP Hist migration tool allows you to migrate IP Hist data from an existing IP Hist v2 instance (Elastic 2.x) to an IP Hist v3 instance (Elastic 7.x).

##### Setup

You can download the migration tool here: [http://downloads.intelligentplant.com/downloads/ip_hist_tool/ip_hist_tool_v0.1.3.zip](http://downloads.intelligentplant.com/downloads/ip_hist_tool/ip_hist_tool_v0.1.3.zip)

1. Extract the zip file
1. Add the path to the <code>%%ip_hist_tool%%</code> folder to your PATH environment variable
1. Open a terminal and type <code>%%ip_hist_tool --help%%</code> to verify that the tool is working

On windows:
1. Extract the contents of <code>%%ip_hist_tool.zip%%</code> to <code>%%C:\%%</code>
1. Search for "environment variable" in the start menu search bar and click the "Edit the system enivironment variables" option
1. Click the button labeled "Environment Variables..."
1. In the dialogue that opens under "User variables for <username>" double click "Path"
1. The click "New"
1. Add a new entry <code>%%C:\ip_hist_tool%%</code> (the path to the folder containing ip_hist_tool.exe)

##### Usage

You can get help using the tool using the command:

<code>%%ip_hist_tool --help%%</code> or <code>%%ip_hist_tool -h%%</code>

The tool has several sub-commands. You can get additional help for a specific sub-command using:

<code>%%ip_hist_tool <sub-command> -h%%</code>

For example:

<code>%%ip_hist_tool migrate -h%%</code>

###### List (ls)

You can use the <code>%%list%%</code> or <code>%%ls%%</code> sub-command to list indices on an Elastic instance.

For example:

<code>%%ip_hist_tool ls localhost:9203%%</code>

This command lists the indices on the local Elastic search 7.x (IP Hist v3/Elastic 7.x is assumed when no version is specified) instance running on port 9203. This is equivalent to:

<code>%%ip_hist_tool ls localhost:9203 -v 3%%</code>

To list the inidces on an Elastic 2 instance use:

<code>%%ip_hist_tool ls localhost:9200 -v 2%%</code>

You can spefify a name filter using <code>%%-f%%</code>

<code>%%ip_hist_tool ls localhost:9200 -v 2 -f "*edge.iphistorian*"%%</code>

###### Delete (rm)

You can delete indices using the <code>%%delete%%</code> or <code>%%rm%%</code> sub-commands.

For example to delete all indices:

<code>%%ip_hist_tool rm localhost:9203 *%%</code>

For the delete sub-command a filter is always required. The command will print which indices and ask you to confirm before deleting since this operation is not reversible.

###### Migrate

The <code>%%migrate%%</code> sub-command is used to migrate tag and data indices from an IP Hist v2 instance to v3. The source Elastic version must be 2.x and the destination 7.x.

By default the migrate command will move the indices that match the naming convention of the default "Edge Historian" data source.

For example the following command would migrate the "Edge Historian" data soruce from IP Hist v2 to v3:

<code>%%ip_hist_tool migrate localhost:9200 localhost:9203%%</code>

During migration a record of each data index that is succesfully migrated is recorded to a text file in the working directory. This allows the operation to be resumed if it is cancelled or fails during operation.

To resume migration run the same command again, but add the <code>%%--skip_tags%%</code> parameter (otherwise the tag definitions index will be deleted and re-migrated).

e.g. <code>%%ip_hist_tool migrate localhost:9200 localhost:9203 --skip_tags%%</code>

You will be prompted to delete any indices that exist in the target elastic index but were not completed before the operation was stopped (as the migration staus of these indices is unknown). If you agree migration will then resume.

To migrate a data source other than the default Edge Historian you can specify the index names using the <code>%%-t%%</code> (tag index name), <code>%%-d%%</code> (data index name) and <code>%%-a%%</code> (annotation index name) parameters.

The value of <code>%%-t%%</code> should be the value of the "Tag Definitions Index Name" setting in the data source settings.
The value of <code>%%-d%%</code> should be the value of the "Data Index Name Prefix" setting in the data source settings.
The value of <code>%%-a%%</code> should be the value of the "Data Index Name Prefix" setting plus an <code>%%annotations%%</code> suffix. e.g. "edge.iphistorianannotations"

For example if you were migrating a data source called "Example" the command would look something like this:

<code>%%ip_hist_tool migrate localhost:9200 localhost:9203 -t exampletags -d example -a exampleannotations%%</code>
