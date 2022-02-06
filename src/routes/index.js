const { Router } = require("express")
const { getWeather } = require("../controller")
const { limiter } = require('../middleware')

const routes = Router()

routes.get('/', limiter, getWeather)

module.exports = routes
