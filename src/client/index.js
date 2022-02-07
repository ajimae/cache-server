const { createClient } = require('redis')

const REDIS_PORT = process.env.REDIS_PORT || 6379
const REDIS_HOST = process.env.REDIS_PORT || '127.0.0.1'

const client = createClient({
  host: REDIS_HOST,
  port: REDIS_PORT
})

client.connect().catch(e => null)

// client.on('error', function(error) {
//   console.error(error)
//   throw Error(error)
// })

module.exports.setAsync = async function (key, value) {
  await client.set(key, value)
}

module.exports.getAsync = async function (key) {
  await client.get(key)
}
