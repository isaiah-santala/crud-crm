const morgan = require('morgan')
const bodyParser = require('body-parser')
const express = require('express')
const app = express()

app.use(morgan('dev'))
app.use(bodyParser())

app.get('/leads', (req, res) => {
  
})