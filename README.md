# MongoDB Gemini CLI Extension

A Gemini CLI extension for the MongoDB MCP Server, enabling MongoDB database and Atlas operations directly through the Gemini CLI.

## 📚 Table of Contents
- [🚀 Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Configuration](#configuration)
- [🛠️ Supported Tools](#supported-tools)
- [📄 Supported Resources](#supported-resources)
- [⚙️ Advanced Configuration](#advanced-configuration)
- [🔧 Development](#development)
- [🤝 Contributing](#contributing)

## 🚀 Getting Started

### Prerequisites

- **Node.js** - Version requirements:
  - At least 20.19.0
  - When using v22 then at least v22.12.0
  - Otherwise any version 23+
  
  ```shell
  node -v
  ```

- **Gemini CLI** - Ensure you have the Gemini CLI installed and configured
- **MongoDB Connection String** or **Atlas API Credentials** - Required for the extension to connect to your MongoDB instance

### Installation

#### Option 1: Install from GitHub (Recommended)

```bash
gemini extensions install https://github.com/mongodb-partners/mdb-gemini-cli-ext.git
```

#### Option 2: Manual Local Installation

1. Clone the repository:
```bash
git clone https://github.com/mongodb-partners/mdb-gemini-cli-ext.git
cd mdb-gemini-cli-ext
```

2. Build the extension:
```bash
npm install
npm run build
```

3. Copy to Gemini extensions directory:
```bash
mkdir -p ~/.gemini/extensions
cp -R . ~/.gemini/extensions/mongodb-gemini-extension
```

### Configuration

After installation, you need to configure your MongoDB connection:

1. Navigate to the extension directory:
```bash
cd ~/.gemini/extensions/mongodb-gemini-extension
```

2. Create the configuration file from the template:
```bash
cp mongo.config.json.example mongo.config.json
```

3. Edit `mongo.config.json` with your MongoDB connection string:
```json
{
  "MONGODB_URI": "mongodb+srv://username:password@cluster.mongodb.net/myDatabase?retryWrites=true&w=majority"
}
```

> **🔒 Security Note:** The `mongo.config.json` file contains sensitive credentials. It is automatically excluded from version control via `.gitignore`.

4. Restart the Gemini CLI to load the extension

5. Verify the installation:
```
/mcp
/tools
```

You should see the mongodb server listed as active and its tools available.

## 🛠️ Supported Tools

### MongoDB Database Tools
- `find` - Run a find query against a MongoDB collection
- `aggregate` - Run an aggregation against a MongoDB collection
- `count` - Get the number of documents in a MongoDB collection
- `insert-one` - Insert a single document into a MongoDB collection
- `insert-many` - Insert multiple documents into a MongoDB collection
- `create-index` - Create an index for a MongoDB collection
- `update-one` - Update a single document in a MongoDB collection
- `update-many` - Update multiple documents in a MongoDB collection
- `rename-collection` - Rename a MongoDB collection
- `delete-one` - Delete a single document from a MongoDB collection
- `delete-many` - Delete multiple documents from a MongoDB collection
- `drop-collection` - Remove a collection from a MongoDB database
- `drop-database` - Remove a MongoDB database
- `list-databases` - List all databases for a MongoDB connection
- `list-collections` - List all collections for a given database
- `collection-indexes` - Describe the indexes for a collection
- `collection-schema` - Describe the schema for a collection
- `collection-storage-size` - Get the size of a collection in MB
- `db-stats` - Return statistics about a MongoDB database
- `export` - Export query or aggregation results to EJSON format

### MongoDB Atlas Tools (when configured with Atlas API credentials)
- `atlas-list-orgs` - Lists MongoDB Atlas organizations
- `atlas-list-projects` - Lists MongoDB Atlas projects
- `atlas-create-project` - Creates a new MongoDB Atlas project
- `atlas-list-clusters` - Lists MongoDB Atlas clusters
- `atlas-inspect-cluster` - Inspect a specific MongoDB Atlas cluster
- `atlas-create-free-cluster` - Create a free MongoDB Atlas cluster
- `atlas-connect-cluster` - Connects to MongoDB Atlas cluster
- `atlas-inspect-access-list` - Inspect IP/CIDR ranges with access
- `atlas-create-access-list` - Configure IP/CIDR access list
- `atlas-list-db-users` - List MongoDB Atlas database users
- `atlas-create-db-user` - Creates a MongoDB Atlas database user
- `atlas-list-alerts` - List MongoDB Atlas Alerts for a Project

## 📄 Supported Resources

- `config` - Server configuration with sensitive parameters redacted
- `debug` - Debugging information for MongoDB connectivity issues
- `exported-data` - Access to data exported using the export tool

## ⚙️ Advanced Configuration

The extension supports additional configuration options through the `mongo.config.json` file:

```json
{
  "MONGODB_URI": "mongodb+srv://...",
  "MDB_MCP_READ_ONLY": "true",
  "MDB_MCP_INDEX_CHECK": "true",
  "MDB_MCP_MAX_DOCUMENTS_PER_QUERY": "100",
  "MDB_MCP_MAX_BYTES_PER_QUERY": "16777216",
  "MDB_MCP_DISABLED_TOOLS": "drop-database,drop-collection",
  "MDB_MCP_API_CLIENT_ID": "your-atlas-client-id",
  "MDB_MCP_API_CLIENT_SECRET": "your-atlas-client-secret"
}
```

### Configuration Options

- **MONGODB_URI** - MongoDB connection string (required)
- **MDB_MCP_READ_ONLY** - Enable read-only mode (prevents write operations)
- **MDB_MCP_INDEX_CHECK** - Enforce that queries must use an index
- **MDB_MCP_MAX_DOCUMENTS_PER_QUERY** - Maximum documents returned per query
- **MDB_MCP_MAX_BYTES_PER_QUERY** - Maximum size in bytes for query results
- **MDB_MCP_DISABLED_TOOLS** - Comma-separated list of tools to disable
- **MDB_MCP_API_CLIENT_ID** - Atlas API client ID (for Atlas tools)
- **MDB_MCP_API_CLIENT_SECRET** - Atlas API client secret (for Atlas tools)

## 🔧 Development

### Building from Source

1. Clone and set up the development environment:
```bash
git clone https://github.com/mongodb-partners/mdb-gemini-cli-ext.git
cd mdb-gemini-cli-ext
npm install
```

2. Build the extension:
```bash
npm run build
```

3. Test locally:
```bash
npm start
```

### Project Structure

```
mdb-gemini-cli-ext/
├── dist/               # Compiled JavaScript output
├── src/                # Original TypeScript source
├── gemini-extension.json # Gemini extension manifest
├── run.js              # Extension entry point
├── mongo.config.json.example # Configuration template
└── package.json        # Node.js package configuration
```

## 🤝 Contributing

This extension is based on the original [MongoDB MCP Server](https://github.com/mongodb-js/mongodb-mcp-server). Contributions are welcome! Please:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

For major changes, please open an issue first to discuss what you would like to change.

## 📝 License

Apache-2.0 License - See the original [MongoDB MCP Server](https://github.com/mongodb-js/mongodb-mcp-server) for licensing details.

## 🔗 Links

- [GitHub Repository](https://github.com/mongodb-partners/mdb-gemini-cli-ext)
- [Original MongoDB MCP Server](https://github.com/mongodb-js/mongodb-mcp-server)
- [Gemini CLI Documentation](https://github.com/google-gemini/gemini-cli)
- [MongoDB Documentation](https://docs.mongodb.com/)
- [MongoDB Atlas](https://www.mongodb.com/atlas)