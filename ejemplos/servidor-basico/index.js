// load http library
const http = require('http')
const Chance = require('chance')
const chance = new Chance()

// define server
const server = http.createServer(function(request, response) {
    response.writeHead(200, {'Content-type': 'text/html'})
    response.end(`Wake up, <b>${chance.ccountry()}</b>`)
})

// launch server
server.listen(1337, '127.0.0.1')
console.log('Server launched on htps://127.0.0.1:1337')