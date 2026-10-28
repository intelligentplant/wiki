---
layout: wiki
title: "Modify Big Data Storage Location"
permalink: /big_data_service/modify_data_storage_location.html
---
By default, the Big Data Service creates a data file repository under the install location:

- C:\Program Files\Intelligent Plant\Big Data\es\data

To set this to an alternative location (e.g. a dedicated data volume) do the following:

<strong>1. Stop the Big Data Service</strong>

Open Windows Services. <br />
Find “Intelligent Plant Big Data Service”. <br />
Right click, then select “Stop”.

<img src="/assets/media/big_data_service/bdcustom_02.png" alt="bdcustom_02" style="max-width:400px" loading="lazy" />

<strong>2. Move data folder</strong>

Move data folder "C:\Program Files\Intelligent Plant\Big Data\es\data" to preferred location (e.g. D drive)

<img src="/assets/media/big_data_service/bdcustom_03.png" alt="bdcustom_03" style="max-width:400px" loading="lazy" />

<strong>3. Edit Elasticsearch configuration file</strong>

Open "C:\Program Files\Intelligent Plant\Big Data\es\config\elasticsearch.yml" <br />
This is a text file using YAML format that can be edited in most text editors. <br />
Uncomment line containing the “path.data” key and set to the new data folder location.

<img src="/assets/media/big_data_service/bdcustom_04.png" alt="bdcustom_04" style="max-width:400px" loading="lazy" />

To change back up folder (from default "C:\Program Files\Intelligent Plant\Big Data\es\backup" location, specify alternative on "path.repo" key. (NB. Backslashes must be escaped.)

<img src="/assets/media/big_data_service/bd_custom_b.png" alt="bd_custom_b" style="max-width:400px" loading="lazy" />

<strong>4. Restart the Big Data Service</strong>

Open Windows Services. <br />
Find “Intelligent Plant Big Data Service”. <br />
Right click, then select “Start”.

<img src="/assets/media/big_data_service/bdcustom_05.png" alt="bdcustom_05" style="max-width:400px" loading="lazy" />
