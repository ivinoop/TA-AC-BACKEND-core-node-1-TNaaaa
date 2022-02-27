const http = require('http');
const fs = require('fs');

function handleRequest(req, res) {
  if(req.url === '/') {
    res.setHeader('content-type', 'text/html');
    fs.createReadStream('./index.html').pipe(res);
  }
  else if(req.url === '/about') {
    res.setHeader('content-type', 'text/html');
    fs.createReadStream('./about.html').pipe(res);
  }
  else if(req.url === '/blog') {
    res.setHeader('content-type', 'text/html');
    fs.createReadStream('./blog.html').pipe(res);
  }
  else if(req.url === '/projects') {
    res.setHeader('content-type', 'text/html');
    fs.createReadStream('./projects.html').pipe(res);
  }
  else if(req.url === '/contact') {
    res.setHeader('content-type', 'text/html');
    fs.createReadStream('./contact.html').pipe(res);
  }
  else if(req.url.split('.').pop() === 'css') {
    res.setHeader('content-type', 'text/css');
    fs.createReadStream(`./assets/stylesheets${req.url}`).pipe(res);
  }
  else {
    res.statusCode = 404;
    res.end('Page not found');
  }
}

let server = http.createServer(handleRequest);

server.listen(3000, () => {
  console.log('=> Server listening on port 3000');
});