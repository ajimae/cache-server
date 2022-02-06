const rateLimit = require('express-rate-limit')

module.exports.limiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 mins
  max: 15 // 10 requests
})
