require('dotenv').config()

const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.send('\n\nThis is my very first web server!')
});

module.exports = app
