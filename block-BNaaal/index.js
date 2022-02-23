const http = require('http');

let server = http.createServer(handlRequest);

function handlRequest(req, res) {
  res.end('A basic http server is created and running')
}

server.listen(4000, () => {
  console.log('=> server listening on port 4000');
});