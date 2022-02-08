const { getNewsData } = require("../repository")

module.exports.getNewsData = async function(request, response) {
  const data = await getNewsData()
  return response.status(200).json({
    ...data
  })
}
