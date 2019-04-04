const server = require('./server')
const http = require('http')
const reload = require('reload')

var reloadServer = http.createServer(server)

reload(server);

const port = process.env.PORT || 3000



server.listen(port, function () {
  // eslint-disable-next-line no-console
  console.log('Listening on port', port)
})
