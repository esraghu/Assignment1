// App to listen on a port and respond to a request on route /hello

const http = require('http');
const url = require('url');

var listeningPort = 3000;  // This can be added as a config and required from config.js

const httpServer = http.createServer((req, res) => {
    // get the url and parse it and then get the path
    var parsedUrl = url.parse(req.url, true);
    var path = parsedUrl.pathname.replace(/^\/+|\/+$/g, '');

    if (path == 'hello') {
        var payload = JSON.stringify({'Message': 'Hello World!'});
        res.setHeader('Content-Type', 'application/json');
        res.writeHead(200);
        res.end(payload);
    } else {
        res.setHeader('Content-Type', 'text/plain');
        res.writeHead(400);
        res.end();
    }
});

httpServer.listen(listeningPort, () => {
    console.log(`Server now listening on ${listeningPort}...`);
})