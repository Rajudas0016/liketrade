const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

// Test route
app.get('/', (req, res) => {
  res.send('Paper Trading API');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
