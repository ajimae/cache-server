const rateLimit = require('express-rate-limit')
const { getAsync } = require('../client')

module.exports.limiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 mins
  max: 15 // 10 requests
})

module.exports.cache = async function(request, response, next) {
  const cache = await getAsync('redis-cache-news-data')
  console.log(cache)
  if (cache) {
    return response.status(200).json({
      ...JSON.parse(cache.body)
    })
  }
  next()
}
