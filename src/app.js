const express = require("express")
const cors = require("cors")
const routes = require('./routes')
const connection = require('./client/RedisClient')
// const { limiter } = require("./middleware")
// 
const PORT = process.env.PORT || 8085
const REDIS_PORT = process.env.REDIS_PORT || 6379
const REDIS_HOST = process.env.REDIS_PORT || '127.0.0.1'

const app = express()

  // connect redis
async function init() {
  await connection.connect({
    host: REDIS_HOST,
    port: REDIS_PORT
  })
}


// rate limit all requests
// app.use(limiter)

// log requests
if (process.env.NODE_ENV != "production")
app.use(function (request, _, next) {
  console.log(`${request.method}: ${request.headers.host} - ${new Date().toISOString()}`)
  next()
})

app.use(cors())
app.set('port', PORT)
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(routes)


init().catch(console.log)
module.exports = app
