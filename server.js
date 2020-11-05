const express = require('express')

const server = express()

// http://expressjs.com/en/starter/static-files.html
server.use(express.static('public'))
server.use(express.urlencoded({ extended: false }))




server.get('/', (req,res) => {
  res.sendFile('./index.html',{root: __dirname})
})

server.get('/data', (req,res) => {
  res.sendFile('./public/data.js',{root: __dirname})
})


server.get('/', (req,res) => {
  res.sendFile('./index.html',{root: __dirname})
})


module.exports = server

