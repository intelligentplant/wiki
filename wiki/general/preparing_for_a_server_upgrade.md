---
layout: wiki
title: "Preparing for a Server Upgrade"
permalink: /general/preparing_for_a_server_upgrade.html
---
A server upgrade may include:

- Roll out of security patches
- Upgrading to a new operating system
- Modification of a physical server (e.g. installation of additional RAM or storage)
- Modification of a virtual server (e.g. allocating more RAM to a VM image)

Any change to the host environment may have an unexpected impact on the software running in that environment, <em>including Intelligent Plant software</em>.

### What Intelligent Plant Software is Hosted On-premises?

The majority of Intelligent Plant software is accessed via the Industrial App Store cloud service and is therefore not in scope. However, an organization may have some on-premises Intelligent Plant software installed, for example:

- App Store Connect - A data connectivity service that links organization data sources to apps on the Industrial App Store cloud service.
- Data Core Node - A data connectivity service that can be used to route and/or store data on isolated networks.
- On-premises editions of apps - A number of Intelligent Plant apps are available for stand-alone/offline installation.

### Preparing for a Server Upgrade

<strong>1. Is Intelligent Plant software compliant with the target OS?</strong>

- Most Intelligent Plant software is designed to run on modern versions of Windows Server x64. Please contact the Intelligent Plant team to confirm if your target OS is compatible with the specific apps and services that you use.

- Depending on the existing version of Intelligent Plant software you have installed, you may need to install a newer version to ensure compatibility with your target OS.

- OS upgrades may include elements bespoke to your organization's IT department. In such cases, we can't guarantee compatibility without conducting Factory Acceptance Tests in conjunction with your IT team.

<strong>2. Is relicensing of Intelligent Plant software required?</strong>

- Licence keys are generated based on a unique fingerprint for the server that the software is installed on. Changes in hardware or operating system versions may change this fingerprint and thus invalidate the issued licence keys.

- When you are preparing to upgrade, arrange to have new licences issued once the upgrade has been completed. Please contact Intelligent Plant and let us know what software may be impacted and when you plan to undertake the upgrade.

- Note that licenses cannot be issued in advance since they rely on a fingerprint for the target server(s) that cannot be known until after the upgrades have been completed.

<strong>3. How might Security Updates impact software function?</strong>

- Intelligent Plant software may be indirectly impacted by security changes. For example, firewall rules,  security protocols, file-access permissions, IIS behaviour, machine registered service accounts, etc, could be modified by a security update and have an knock-on effect on software function. In these cases, it may be possible to restore functionality by correcting system configuration.

<strong>4. Is a roll-back strategy required?</strong>

- A roll-back strategy is always a good idea. Ask your IT department about the back-up and recovery options that they provide.

- Reverting a server may incur data-loss if your system actively collects and stores data.

<strong>5. Do I need to test?</strong>

- Testing is always a good idea, especially for mission-critical software. Intelligent Plant are available for specialist consultation, if required.
