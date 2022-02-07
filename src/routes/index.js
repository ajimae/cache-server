const { Router } = require("express")
const { getWeather } = require("../controller")
const { limiter, cache } = require('../middleware')

const routes = Router()

routes.get('/', limiter, cache, getWeather)

module.exports = routes
