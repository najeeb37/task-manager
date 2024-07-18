const express = require("express")
const cors = require("cors")
const userRoutes = require('./src/users/routes')
const pool = require('./db')
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');

const app= express()
app.use(bodyParser.json());

app.use(express.json())
app.use(cors())

app.get("/",(req,res)=>{
  res.send("Root page")
})

app.get('/api/data/users', async (req, res) => {
    try {
      const result = await pool.query('SELECT * FROM users');
      res.json(result.rows);
    } catch (err) {
      console.error(err);
      res.status(500).send('Server error');
    }
  });

app.use("/api/v1/", userRoutes)

app.listen(5000, () => console.log("Server on localhost:5000"));