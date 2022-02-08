const { Router } = require("express")
const { getNewsData } = require("../controller")
const { limiter } = require('../middleware')

const routes = Router()

routes.get('/', limiter, getNewsData)

module.exports = routes
