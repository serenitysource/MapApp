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
  // Check for duplicate (same address, lat, lng)
  db.get('SELECT id FROM locations WHERE address = ? AND lat = ? AND lng = ?', [address, lat, lng], (err, row) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (row) {
      return res.status(409).json({ error: 'Location already saved' });
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
});

app.listen(PORT, () => {
  console.log(`Backend listening on port ${PORT}`);
});
