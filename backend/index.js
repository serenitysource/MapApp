const express = require('express');
const cors = require('cors');
const db = require('./db');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('MapApp backend is running!');
});

// Get all saved locations
app.get('/locations', (req, res) => {
  db.all('SELECT * FROM locations ORDER BY created_at DESC', [], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(rows);
  });
});

// Save a new location
app.post('/locations', (req, res) => {
  const { address, lat, lng } = req.body;
  if (!address || lat == null || lng == null) {
    return res.status(400).json({ error: 'Missing address, lat, or lng' });
  }
  const stmt = db.prepare('INSERT INTO locations (address, lat, lng) VALUES (?, ?, ?)');
  stmt.run(address, lat, lng, function (err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({ id: this.lastID, address, lat, lng });
  });
  stmt.finalize();
});

app.listen(PORT, () => {
  console.log(`Backend listening on port ${PORT}`);
});
