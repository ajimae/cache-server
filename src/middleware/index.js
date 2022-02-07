const rateLimit = require('express-rate-limit')
const { getAsync } = require('../client')

module.exports.limiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 mins
  max: 15 // 10 requests
})

module.exports.cache = function(request, response, next) {

}