const http = require('http');

let server = http.createServer(handleRequest);

function handleRequest(req, res) {
  console.log(req.headers);
  console.log(req.method);
  console.log(req.url);
  res.end('Server up and running 🚀')
}

server.listen(3000, () => {
  console.log('=> server listening on port 3000');
});