import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Import the refactored startServer function from the compiled output.
import { startServer } from './dist/esm/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const configPath = path.join(__dirname, 'mongo.config.json');

try {
  if (!fs.existsSync(configPath)) {
    console.error('ERROR: Configuration file not found!');
    console.error(`Please create 'mongo.config.json' in the extension directory: ${__dirname}`);
    console.error('You can copy the template from \'mongo.config.json.example\'.');
    process.exit(1);
  }

  const configRaw = fs.readFileSync(configPath, 'utf8');
  const config = JSON.parse(configRaw);

  if (!config.MONGODB_URI) {
    throw new Error('MONGODB_URI not found in mongo.config.json');
  }

  // Inject the connection string into the process environment.
  process.env.MONGODB_URI = config.MONGODB_URI;

  console.log('MongoDB MCP Server starting with configuration from extension...');
  
  // Call the exported function to start the server.
  startServer();

} catch (error) {
  console.error('Failed to start MongoDB MCP Server:');
  console.error(error.message);
  process.exit(1);
}
