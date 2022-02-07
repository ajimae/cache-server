const needle = require("needle")
const { client } = require('../client')

const API_KEY = process.env.API_KEY
const API_BASE_URL = process.env.API_BASE_URL
const API_KEY_NAME = process.env.API_KEY_NAME

// const _date = moment().subtract(3, 'days').format('YYYY-MM-DD')
const now = new Date()
const _date = now.setDate(now.getDate() - 3)

module.exports.getNewsData = async function (coin = 'bitcoin', date = _date) {
  try {
    const url = `${API_BASE_URL}/everything?qInTitle=${coin}&from=${date}&sortBy=publishedAt&language=en`
    return needle('get', url, {
      headers: {
        "x-api-key": API_KEY
      }
    })
  } catch (e) {
    console.log(e)
  }
}
