---
layout: wiki
title: "TCP Printer"
permalink: /data_core/tcpprinter.html
---
Data Core can be configured to receive events via a printer flow (TCP or COM).

Older assets may have once reported Alarms & Events directly to a printer in the control room. This provided a visual and historical record for the operator. Impersonating a printer allows us to integrate with such legacy systems, but the protocol also remains popular for the security benefits of one-way communication.

### Getting Started {: .title}

#### 1. Data Core Configuration

Configure the Data Core TCP Printer driver to act as an Alarm & Event listener.

1. Open Data Core and navigate to: Alarms & Events > Event Sources

2. Create Event Source > Printer (TCP)

3. Provide a meaningful name and description, then configure the following key settings:

3.1 TCP Settings > TCP Port: (e.g. "9000")

3.2 Printer Settings > Message Delimiter: (e.g. "<13><10" for carriage-return line-feed)

3.3. Printer Settings > Trim Messages: (e.g. "False" if you wish to maintain line width and character positioning)

4. Enable the printer by switching the Disabled status to "False".

#### 2. Add a TCP Printer

Configure a "Generic/Text Only" printer to output to the TCP Port defined above. This can be done manually via Windows Control Panel, or using the Powershell script below (amend as required).

```

# Register a Generic/TextOnly TCP printer

# Define printer parameters
$printerName = "Data Core TCP Printer"
$printerPort = 9000
$printerIPAddress = "127.0.0.1"
$driverName = "Generic / Text Only"

# Check if the printer already exists
$existingPrinter = Get-Printer -Name $printerName -ErrorAction SilentlyContinue

if ($existingPrinter -eq $null) {
    # Create a new TCP/IP printer port
    $tcpPort = "IP_$printerIPAddress"
    Add-PrinterPort -Name $tcpPort -PrinterHostAddress $printerIPAddress -PortNumber $printerPort

    # Add the printer using the TCP/IP port
    Add-Printer -Name $printerName -PortName $tcpPort -DriverName: $driverName

    Write-Host "Printer '$printerName' registered on IP $printerIPAddress and port $printerPort."
} else {
    Write-Host "Printer '$printerName' already exists."
}
```

### Testing {: .title}

The ultimate aim may be to relay or import the data to Alarm Analysis, however preparing a [File System Event Sink](/wiki/data_core/filesystemeventsink.html) will be a quicker way to test events are being captured.

### Troubleshooting {: .title}

#### Data Core Logs

Check for issues in the data core logs:

- %ProgramData%\Intelligent Plant\Data Core Application Host\Service\Applications\App Store Connect\Logs\App Store ConnectRuntime.log

<strong>Printer Logs</strong>

  1. Open Event Viewer
  2. Navigate to Applications and Services Logs > Microsoft > Windows > PrinterService
  3. Check both Admin and Operational Log

#### Verify TCP Port is in a listening state

Use <strong>NetStat</strong> to confirm the port is in a listening state.

  1. Open cmd window
  2. Enter: netstat -a
  3. Search content for configured port and check state

<strong>Send a message directly to the TCP Port</strong>

Try sending messages directly to the TCP port. If this works, the issue may be the printer configuration rather than the file content and/or the Data Core TCP listener.

Use a tool such as Putty, or the Powershell script below (amend as necessary).

```

Function Send-TCPMessage {
    Param (
            [Parameter(Mandatory=$true, Position=0)]
            [ValidateNotNullOrEmpty()]
            [string]
            $EndPoint
        ,
            [Parameter(Mandatory=$true, Position=1)]
            [int]
            $Port
        ,
            [Parameter(Mandatory=$true, Position=2)]
            [string]
            $Message
    )
    Process {
        # Setup connection
        $IP = [System.Net.Dns]::GetHostAddresses($EndPoint)
        $Address = [System.Net.IPAddress]::Parse($IP)
        $Socket = New-Object System.Net.Sockets.TCPClient($Address,$Port)

        # Setup stream writer
        $Stream = $Socket.GetStream()
        $Writer = New-Object System.IO.StreamWriter($Stream)

        # Write message to stream
        $Message | % {
            $Writer.WriteLine($_)
            $Writer.Flush()
        }

        # Close connection and stream
        $Stream.Close()
        $Socket.Close()
    }
}

# Get all files in dirctory
$dirPath = "C:\Temp\PrintTest"
$files = Get-ChildItem $dirPath | Where-Object { $_.PSIsContainer -eq $false }

foreach ($file in $files) {
     Write-Host "Printing: $($file.FullName)"
     $fileContent = Get-Content -Raw $file.FullName
     Send-TCPMessage -Port 9000 -Endpoint "127.0.0.1" -Message $fileContent.ToString()
}
```

#### Unable to view/edit/delete Printer Port Configuration (not authorized)

First of all, make sure you have full administrator rights.

Also note printer ports are "owned" by the printer server rather than the printer. Open the port configuration tool via Printer Server.

<img src="/wiki/assets/media/data_core/tcpprinter002.png" alt="tcpprinter002" style="max-width:400px" loading="lazy" />

If issues persist, try restarting the <strong>Print Spooler</strong> service.
