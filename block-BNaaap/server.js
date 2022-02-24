const http = require('http');

let server = http.createServer(handleRequest);

function handleRequest(req, res) {
  console.log(req.method, req.url);
  res.writeHead(201, {'Content-Type':'text/html'});
  res.write('<h1> Welcome to the machine</h1>');
  res.end();
}

server.listen(4444, () => {
  console.log('=> server listening on port 4444');
})