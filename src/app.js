require('dotenv').config()

const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.send('\n\nHello World')
});

module.exports = app
