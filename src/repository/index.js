const needle = require("needle")
const { setAsync, getAsync } = require('../client')

const API_KEY = process.env.API_KEY
const API_BASE_URL = process.env.API_BASE_URL

const now = new Date()
const _date = now.setDate(now.getDate() - 3)

module.exports.getNewsData = async function (coin = 'bitcoin', date = _date) {
  try {
    // try getting data from cache
    let response = await getAsync('redis-cache-news-data')
    if (response) return JSON.parse(response) 

    console.log('don\'nt get here ---------->', response)
    const url = `${API_BASE_URL}/everything?qInTitle=${coin}&from=${date}&sortBy=publishedAt&language=en`
    response = await needle('get', url, {
      headers: {
        "x-api-key": API_KEY
      }
    })

    // set data to redis
    await setAsync('redis-cache-news-data', JSON.stringify(response.body))
    return response.body
  } catch (e) {
    console.log(e)
  }
}
