const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const authRoutes = require('./routes/auth');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Welcome to the Authentication Server');
});

app.use('/login', authRoutes);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
