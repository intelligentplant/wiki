---
layout: wiki
title: "Industrial App Store Data API Release Notes"
permalink: /general/apps/dataapi/releasenotes.html
---
This page describes the release notes for the Industrial App Store Data API.

### 2025-10 {: .title}

Release date: 2025-10-31

This release brings the following changes:

- Improvements to prevent "stale" initial tag values from being sent when real-time subscribers such as PnID dashboards connect to the API.

### 2025-08 {: .title}

Release date: 2025-08-29

This release brings the following changes:

- Under-the-hood changes to support our new Model Context Protocol (MCP) server, for connecting generative AI applications to your Industrial App Store data.

### 2025-06 {: .title}

Release date: 2025-06-27

This release brings the following changes:

- Changes to support [pre-assigning data sources to apps](/wiki/general/apps/appstore/releasenotes.html#section202506) in the Industrial App Store portal.

### 2025-05 {: .title}

Release Date: 2025-05-30

This release brings the following changes:

- Under-the-hood changes in preparation for future enhancements.
- Metadata about remote App Store Connect drivers now includes the version of the remote driver when the 2025-05 or later version of the App Store Connect runtime is installed.

### 2025-03 {: .title}

Release Date: 2025-03-28

This release brings the following changes:

- Under-the-hood improvements.

### 2025-02 {: .title}

Release Date: 2025-02-28

This release brings the following changes:

- API calls to retrieve available data sources can now optionally filter the results based on driver capabilities and the permissions that the calling user has on the data source.
- Miscellaneous under-the-hood housekeeping.

### 2025-01 {: .title}

Release Date: 2025-01-31

This release brings the following changes:

- Tag searches can now specify a label filter, for driver types that support tag labels.
- All relative timestamps and sample intervals in API calls can now be specified using composite offsets/durations (e.g. <code>3H 15M 47S</code>).
- Fixes an issue that could cause significant delays and timeouts when registering App Store Connect connections.

### 2024-11 {: .title}

Release Date: 2024-11-29

This release brings the following changes:

- Fixes an issue where the API did not honour custom display names defined on App Store Connect data sources
- Under-the-hood improvements

### 2024-10 {: .title}

Release Date: 2024-10-25

This release brings the following changes:

- Fixes an issue that could cause an App Store Connect to re-register if one of its drivers started or restarted after the App Store Connect had performed its initial handshake with the Data API.
- Performance improvements and optimisations when constructing App Store Connect request messages.
- Miscellaneous other small performance improvements.
- Mitigations for security issues in 3rd party libraries.

### 2024-09 {: .title}

Release Date: 2024-09-27

This release brings the following changes:

- The user account used to connect an App Store Connect to the Data API is no longer automatically granted administrator permissions on the data sources, event sources and event sinks that the App Store Connect exposes to the Industrial App Store. Instead, permissions must be granted on a case-by-case basis via the App Store Connect administrator interface.
- Modifying group memberships and data source authorisations for apps in the Industrial App Store portal now take effect immediately in the Data API. Previously, it could take up to 5 minutes for these changes to propagate.
- Performance improvements when applying data source, event source and event sink authorisation rules.
