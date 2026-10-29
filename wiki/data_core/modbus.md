---
layout: wiki
title: "Modbus"
permalink: /data_core/modbus.html
---
Modbus is a communication protocol widely used in industrial automation systems to establish communication between devices such as programmable logic controllers (PLCs), sensors, and other control devices.

Modbus allows for the exchange of data between a client device (typically a supervisory computer or a central controller) and one or more server devices (such as sensors, actuators, or other peripheral devices) over a serial or Ethernet connection.

The Modbus driver for Data Core supports TCP and Serial settings, and can be configured to act as a client for data-aquistion, or as a server for data-distribution.

For a good introduction to Modbus, refer to https://simplymodbus.ca/FAQ.htm

### Key Settings {: .title}

#### Connection Type

Define the operating mode by selecting the Connection Type.

Options include:

- SerialRtuMaster
- SerialAsciiMaster
- TCPMasterWithSlaveID
- TCPMaster
- TCPSlave
- TCPRTUMaster
- TCPASCIIMaster
- UDPRTUMaster
- UDPMaster

<em>Dedicated config sections relate to specific connection types.</em>

#### Device Map File

Device mappings are configured in a csv file that must be stored in

  %ProgramData%\Intelligent Plant\Data Core Application Host\Service\Applications\App Store Connect\Modbus

<em>Create this folder if it does not already exist.</em>

<strong>File Format</strong>

<img src="/wiki/assets/media/data_core/modbusfilemap.png" alt="modbusfilemap" style="max-width:800px" loading="lazy" />

The first row contains headers that define tag and timestamp columns.
