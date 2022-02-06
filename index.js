require('dotenv').config()
const server = require("./src/app")

server.listen(server.get('port'), function() {
  console.log('running on port ' + server.get('port'))
})
