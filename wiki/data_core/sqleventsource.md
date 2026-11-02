---
layout: wiki
title: "SQL Event Source"
permalink: /data_core/sqleventsource.html
---
### Overview

<strong>SQL Event Source</strong> is a datacore event source for databases. It provides low-level support to define a database connection and query that polls for data. It supports SQL Server, OLE DB, ODBC, Oracle, EntityClient and SQL Server Compact 4.0.

### Event Message Structure

Records from the SQL source are converted to the Data Core Event Message structure, with columns becoming Event Properties.

### Requirements

#### DB Providers
DB Providers must be installed on the server hosting App Store Connect. <br /> (The .Net framework includes most key providers. [More info...](https://msdn.microsoft.com/en-us/library/a6cd7c08(v=vs.110).aspx))

#### Read-Only Data Access
The Event Source can connect to a database using windows impersonation or with credentials explicitly specified in the connection string (encrypted). However, in both cases, you should only provide an account with read-only access to the subset of data you are prepared to share.

### Configuration

- SQL Provider: DB drivers installed on server
- Connection String: The connection string for the remote database.
- SQL Query: The SQL query string to use when requesting events from the database.
- Primary Key: A numeric incrementing PK is required to track data-processing progress. This must be returned by the query.
- Sleep Period: Interval to rest if no data is returned.

#### Example SQL Query

```

SELECT TOP 50
  [MessageDataID],
  *
  FROM [dbo].[Archiver1_MasterEventLog_Col1_Con1]
  WHERE  MessageDataID > {0}
    ORDER BY MessageDataID
```

The SQL Query should look something like the above and include the following parts:

- A Top clause so data is queried and returned in batches.
- The source-data must contain a Primary Key (e.g. "MessageDataID")
- A Where filter on the source-data primary key with placeholder (e.g. WHERE MessageDataID > {0}). This allows us to pick-up and move on to the next batch of data.
