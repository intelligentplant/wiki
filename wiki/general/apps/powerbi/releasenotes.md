---
layout: wiki
title: "Industrial Connector for Power BI - Release Notes"
permalink: /general/apps/powerbi/releasenotes.html
---
This page contains the release notes for the [Industrial Connector](https://appstore.intelligentplant.com/Home/AppProfile?appId=064fa04abe624c70a982e377a6c72850). Power BI automatically picks up the latest version of the connector whenever Microsoft publishes a new Power BI Desktop release.

#### v3.0.1 (included in Microsoft August 2026 Power BI Update)
- Bug fix: RAW, PLOT, MAX and MIN response timestamps are now correctly preserved when querying multiple tags in batches, preventing unintended timestamp alignment when datasets are merged.

#### v3.0.0 (included in Microsoft April 2025 Power BI Update)
- Introduced the [Industrial Connector](https://industrialconnector.intelligentplant.com) website, making it easier to search for and copy tag names into report queries.
- Fixed an issue where data source authorisation was reset upon logging in.
- Improved the licensing mechanism so that all valid licences are applied to a data request.
- Fixed the length limit on query tag names.
- Made the connector's error messages more detailed.

#### v2.2.0 (included in Microsoft July 2020 Power BI Update)

- Integrated the PKCE authentication flow into the connector.

#### v2.1.0 (included in Microsoft June 2020 Power BI Update)

This release contains the following changes:

- Introduced a new <strong>Get Snapshot</strong> data function to retrieve the current value of one or more tags.
- Added a new <strong>Get Plot</strong> data function to perform a processed data request using the PLOT function.
- Added a new <strong>Get Processed</strong> data function to perform a processed or aggregated data query.
- Added a new <strong>Get Raw</strong> data function to perform a raw data query.
- Every function has an optional parameter specifying which data type to use when displaying results. For example, some digital tags or A&E data tags may have a text value as well as a numerical value. The numerical value is used by default; if it is unavailable, the text value is used instead.
- Introduced a new Power Platform API that transfers data faster and more efficiently while maintaining the same high security standards.
- Various under-the-hood fixes and improvements.
