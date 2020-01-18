const express = require('express')
const bodyParser = require('body-parser')
// let's us add body rather than parsms so we can add extra info
const cors = require('cors')
// cross origin resource sharing. one server or client can request info on your server and cross origin
const sendGrid = require('@sendGrid/mail')


const app = express()

// Need to build out server
app.use( bodyParser.json() )
app.use( cors() )
app.use( (req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
  next()
})
// Defining the routes
app.get( '/api', ( req, res )=> {
  // send is a way to send texts
  res.send('API Status: Running')
})
// app.post()
app.listen(3030, '0.0.0.0')
