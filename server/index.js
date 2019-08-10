const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')
const { getAllLeads } = require('../db/controllers')
const express = require('express')
const app = express()


app.use(cors())
app.use(morgan('dev'))
app.use(bodyParser.json({ type: 'application/*+json' }))

const Port = 3001

app.get('/leads', (req, res) => {
  getAllLeads((err, response) => {
    if (err) return res.status(500).send()
    res.status(200).send(response)
  })
})

app.listen(Port, console.log(` ...listening on port:${Port}`))