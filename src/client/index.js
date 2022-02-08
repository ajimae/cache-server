const connection = require('./RedisClient')

module.exports.setAsync = async function (key, value) {
  await connection.Client.set(key, value)
}

module.exports.getAsync = async function (key) {
  return connection.Client.get(key)
}
