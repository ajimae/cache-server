const express = require("express")
const cors = require("cors")
const routes = require('./routes')
// const { limiter } = require("./middleware")
// 
const PORT = process.env.PORT || 8085

const app = express()

// rate limit all requests
// app.use(limiter)

// log requests
if (process.env.NODE_ENV != "production")
  app.use(function (request, _, next) {
    console.log(`${request.method}: ${request.headers.host}`)
    next()
  })

app.use(cors())
app.set('port', PORT)
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(routes)


module.exports = app
