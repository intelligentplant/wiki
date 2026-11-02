---
layout: wiki
title: "Big Data Service Advanced Configuration"
permalink: /big_data_service/big_data_service_advanced_configuration.html
---
The Big Data Service ships with App Store Connect. It is composed of a stand-alone [Elasticsearch](https://www.elastic.co/products/elasticsearch) node configured for local data storage. Keeping it on-premises guarantees data sovereignty, but introduces certain maintenance overheads.

Like any database installation, managing upgrades requires planning for downtime, data migration, software upgrades and rollback. As a consequence, Big Data Service upgrades are infrequent, meaning a dependency on legacy software is inevitable. The Big Data Service mitigates this by running on an isolated Elasticsearch instance accessible only to local processes, significantly reducing the potential attack surface.

### Configuration

- [Elasticsearch Best Practice](/wiki/big_data_service/best_practice.html)
- [Modify Big Data Storage Location](/wiki/big_data_service/modify_data_storage_location.html)
- [Big Data Service: Use Alternative Instance](/wiki/big_data_service/use_an_alternative_instance.html)
- [App Store Connect: Back Up and Restore](/wiki/app_store_connect/back_up_and_restore.html)
- [Increase Big Data Service RAM](/wiki/big_data_service/increase_big_data_service_ram.html)
- [Antivirus Exclusion](/wiki/big_data_service/antivirus_exclusion.html)
- [Logging](/wiki/big_data_service/logging.html)
- [Upgrade Java](/wiki/big_data_service/upgrade_java.html)

### Technical Advisories

The following technical advisories cover vulnerability findings that apply to the incumbent Big Data Service and the mitigations available. Whilst running end-of-life components is not ideal, practical risk is considerably lower in this architecture than in a regular internet-facing database deployment.

<table class="wiki-table">
<tbody>
<tr><th>Component</th><th>Advisory</th><th>Description</th></tr>
<tr><td>Java Runtime Engine</td><td><a href="/wiki/big_data_service/ta-001.html">TA-001: Outdated JRE</a></td><td>The installer bundles a cut-down JRE that is not updated with product releases. Upgrade the JRE to address outdated scanner findings.</td></tr>
<tr><td>Log4j 1.2.17</td><td><a href="/wiki/big_data_service/ta-002.html">TA-002: Log4j 1.2.17 in Elasticsearch 2.4</a></td><td>Remediation of Log4j 1.x vulnerability findings using the Reload4j drop-in replacement. Covers CVE-2022-23302, CVE-2022-23305, and CVE-2022-23307.</td></tr>
</tbody>
</table>

#### Upcoming Release

Preparation for a new major release is underway. Customers will be given an opportunity to phase in the new database and will be provided with tools to aid data migration. Intelligent Plant are also available to assist with migration.

No firm release date is set, but we are aiming for 2027 Q1.
