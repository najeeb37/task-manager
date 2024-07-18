const express = require('express');
const cors = require('cors');
const userRoutes = require('./src/users/routes');
const pool = require('./db');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Root page');
});

app.use('/api/v1/', userRoutes);

app.listen(5000, () => console.log('Server on localhost:5000'));