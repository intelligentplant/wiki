---
layout: wiki
title: "Increase Big Data Service RAM"
permalink: /big_data_service/increase_big_data_service_ram.html
---
By default, the big data service assumes a modest RAM allowance. However, this can be increased for better
performance.

Consider increasing memory allocation up to up to 1/3rd of a server’s available RAM (no more than 32GB).<sup class="wiki-footnote" title="If Elasticsearch is installed on a dedicated server, memory allocation can be increased up to 1/2 of the available RAM. However in most cases we assume resources are shared with the Data Core runtime, hence the lower 1/3 recommendation.">[1]</sup>

1. Check available server memory to determine available RAM

<img src="/assets/media/big_data_service/bdcustom_06.png" alt="bdcustom_06" style="max-width:500px" loading="lazy" />

2.  Stop the Big Data Service

- Open Windows Services.
- Find “Intelligent Plant Big Data Service”.
- Right click, and select “Stop”.

<img src="/assets/media/big_data_service/bdcustom_02.png" alt="bdcustom_02" style="max-width:500px" loading="lazy" />

3. Launch the Big Data Service manager

- Open a cmd prompt in administrator mode.
- Navigate to %ProgramFiles%\Intelligent Plant\Big Data\es\bin\
- Enter: service.bat manager

<img src="/assets/media/big_data_service/bdcustom_07.png" alt="bdcustom_07" style="max-width:500px" loading="lazy" />

4. Under Java properties, increase the Initial and Maximum memory pools.

In this example, we’ve increased it from 1024MB to 2048MB.

Click apply and close the properties window.

<img src="/assets/media/big_data_service/bdcustom_08.png" alt="bdcustom_08" style="max-width:500px" loading="lazy" />

5. Restart the Big Data Service

- Open Windows Services.
- Find “Intelligent Plant Big Data Service”. Right click, then select “Start”.

<img src="/assets/media/big_data_service/bdcustom_05.png" alt="bdcustom_05" style="max-width:500px" loading="lazy" />

<strong>Warning.</strong> These custom settings will be reset if software is re-installed/upgraded.
