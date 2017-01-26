require('dotenv').config()

const express = require('express')


const app = express()
const port = process.env.PORT || 3002

app.get('/', (req, res) => {
  res.send('\n\nHello World')
});

module.exports = app
