const { getNewsData } = require("../repository")

module.exports.getWeather = async function(request, response, next) {
  const data = await getNewsData()
  return response.status(200).json({
    ...data.body
  })
}
