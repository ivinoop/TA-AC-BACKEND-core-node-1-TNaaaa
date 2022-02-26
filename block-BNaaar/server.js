const http = require('http');
const url = require('url');

let server = http.createServer(handleRequest);

function handleRequest(req, res) {
  let parsedUrl = url.parse(req.url);
  let pathname = parsedUrl.pathname;

  if(req.method === 'GET' && pathname === '/') {
    res.setHeader('content-type', 'text/html');
    res.write('<h1> Welcome to index page</h1>');
    res.end();
  } 
  else if(req.method === 'GET' && pathname ==='/about') {
    res.setHeader('content-type', 'text/html');
    res.write('<h2> This is all about NodeJS</h2>');
    res.end();
  }
  else if(req.method ==='POST' && pathname === '/about') {
    res.writeHead(200, {'content-type':'application/json'});
    res.end('{message: this is a POST request}');
  }
  else {
    res.writeHead(404, {'content-type':'text/html'});
    res.end('<h2> Page not found!  </h2>');
  }
}

server.listen(5000, () => {
  console.log('=> server listening on port 5000');
});