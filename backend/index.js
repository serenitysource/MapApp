const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('MapApp backend is running!');
});

app.listen(PORT, () => {
  console.log(`Backend listening on port ${PORT}`);
});
