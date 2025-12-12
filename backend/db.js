
// Import sqlite3 for SQLite database operations
const sqlite3 = require('sqlite3').verbose();
// Import path for handling file paths
const path = require('path');

// Define the path to the SQLite database file (backend/data/locations.db)
const dbPath = path.join(__dirname, 'data', 'locations.db');

// Open a connection to the SQLite database
const db = new sqlite3.Database(dbPath);

// Create the 'locations' table if it doesn't exist
db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS locations (
    id INTEGER PRIMARY KEY AUTOINCREMENT,      -- Unique ID for each location
    address TEXT NOT NULL,                     -- Human-readable address
    lat REAL NOT NULL,                         -- Latitude coordinate
    lng REAL NOT NULL,                         -- Longitude coordinate
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP -- Timestamp of entry
  )`);
});

// Export the database connection for use in other modules
module.exports = db;
