---
layout: wiki
title: "Big Data Service: Technical Advisories"
permalink: /big_data_service/technical-advisories.html
---
The Big Data Service is part of the App Store Connect software package installed on-premises. It provides a facility for recording Alarm & Event and process data. Keeping it on-premises guarantees data sovereignty, but introduces certain maintenance overheads.

Like any database installation, managing upgrades is a non-trivial task requiring planning for downtime, data migration, software upgrades and rollback. As a consequence, Elasticsearch upgrades are infrequent, meaning a dependency on legacy software is inevitable.

### Architecture Mitigation

The Big Data Service runs on an isolated Elasticsearch instance accessible only to local processes. This significantly reduces the potential attack surface. Whilst running end-of-life components is not ideal, practical risk is considerably lower in this architecture than in an regular internet-facing database deployment.

### Upcoming Release

Preparation for a new major release is underway. Customers will be given an opportunity to phase in the new database and will be provided with tools to aid data migration. Intelligent Plant are also available to assist with migration.

No firm release date is set; we are aiming for 2027 Q1.

### Advisories

The following technical advisories cover vulnerability findings that apply to the incumbent Big Data Service and the mitigations available.

<table class="wiki-table">
<tbody>
<tr><th>Component</th><th>Advisory</th><th>Description</th></tr>
<tr><td>Java Runtime Engine</td><td><a href="/wiki/big_data_service/upgrade_java.html">Outdated JRE</a></td><td>The installer bundles a cut-down JRE that is not updated with product releases. Upgrade the JRE to address outdated scanner findings.</td></tr>
<tr><td>Log4j 1.2.17</td><td><a href="/wiki/big_data_service/ta-002.html">TA-002: Log4j 1.2.17 in Elasticsearch 2.4</a></td><td>Remediation of Log4j 1.x vulnerability findings using the Reload4j drop-in replacement. Covers CVE-2022-23302, CVE-2022-23305, and CVE-2022-23307.</td></tr>
</tbody>
</table>
