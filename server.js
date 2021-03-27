require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const knex = require('./db/knex');

const app = express();

//middleware
app.use(cors());
app.use(express.json());

// app.use(express.static(__dirname + '/build'));

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server has connected to port ${port}✨`);
});

//Always return the main index.html, since we are developing a single page application
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "/build/index.html"));
  });