const needle = require("needle")
const { setAsync, getAsync } = require('../client')

const API_KEY = process.env.API_KEY
const API_BASE_URL = process.env.API_BASE_URL

const now = new Date()
const _date = now.setDate(now.getDate() - 3)

// client.setAsync = promisify(client.set)
// client.getAsync = promisify(client.get)

module.exports.getNewsData = async function (coin = 'bitcoin', date = _date) {
  try {
    const url = `${API_BASE_URL}/everything?qInTitle=${coin}&from=${date}&sortBy=publishedAt&language=en`
    const response = needle('get', url, {
      headers: {
        "x-api-key": API_KEY
      }
    })

    // set data to redis
    await setAsync('redis-cache-news-data', JSON.stringify(response))
    return response
  } catch (e) {
    console.log(e)
  }
}
