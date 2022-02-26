const http = require('http');
const fs = require('fs');

let server = http.createServer(handleRequest);

function handleRequest(req, res) {
  if(req.method === 'GET' && req.url === '/file') {
    res.setHeader('content-type', 'text/html');
    fs.createReadStream('./node.html').pipe(res);
  }
  else if(req.method === 'GET' && req.url === '/stream') {
    res.setHeader('content-type', 'text/html');
    fs.readFile('./node.html', (err, content) => {
      if(err) console.log(err);
      console.log(content);
      res.end(content);
    });
  }
}

server.listen(5555, () => {
  console.log(('=> server listening on port 5555'));
})