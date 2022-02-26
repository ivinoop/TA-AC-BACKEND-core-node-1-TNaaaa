const http = require('http');
const fs = require('fs');
const url = require('url');

// 5000

let server1 = http.createServer(handleRequest1);

function handleRequest1(req, res) {
  console.log(req, res);
}

server1.listen(5000, () => {
  console.log('=> Server listening on port 5000');
});

// 5100

let server2 = http.createServer(handleRequest2);

function handleRequest2(req, res) {
  res.end('My first server in NodeJS');
}

server2.listen(5100, () => {
  console.log('=> Server listening on port 5100');
});

// 5555

let server3 = http.createServer(handleRequest3);

function handleRequest3(req, res) {
  console.log(req.headers);
  res.end(req.headers['user-agent']);
}

server3.listen(5555, () => {
  console.log('=> Server listening on port 5555');
})

// 5566

let server4 = http.createServer(handleRequest4)

function handleRequest4(req, res) {
  console.log(req.url);
  console.log(req.method);
  res.setHeader('content-type', 'text/plain');
  res.end(req.url + ' ' + req.method);
}

server4.listen(5566, () => {
  console.log('=> Server listening on port 5566');
})

// 7000

let server5 = http.createServer(handleRequest5);

function handleRequest5(req, res) {
  res.setHeader('content-type', 'text/plain')
  res.end(JSON.stringify(req.headers))
}

server5.listen(7000, () => {
  console.log('=> Server listening on port 7000');
})

// 3333

let server6 = http.createServer(handleRequest6)

function handleRequest6(req, res) {
  res.statusCode = 202;
  res.setHeader('content-type', 'text/plain')
  res.end('Ok')
}

server6.listen(3333, () => {
  console.log('=> Server listening on port 3333');
})

// 8000

let server7 = http.createServer(handleRequest7)

function handleRequest7(req, res) {
  res.setHeader('content-type', 'text/html')
  res.end('<h1>Welcome to AltCampus</h1>')
}

server7.listen(8000, () => {
  console.log('=> Server listening on port 8000');
})

// 8001 - repeat above

let server8 = http.createServer(handleRequest8)

function handleRequest8(req, res) {
  res.writeHead(200, {'content-type':'text/html'})
  res.end('<h1>Welcome to AltCampus</h1>')
}

server8.listen(8001, () => {
  console.log('=> Server listening on port 8001');
})

// 8888

let server9 = http.createServer(handleRequest9)

function handleRequest9(req, res) {
  res.writeHead(200, 'content-type', 'application/json')
  res.end(`{success: true, message: Welcome to Nodejs}`)
}

server9.listen(8888, () => {
  console.log('=> Server listening on port 8888');
})

// 5050

let server10 = http.createServer(handleRequest10)

function handleRequest10(req, res) {
  console.log(req.method)
  if(req.method === 'POST' && req.url === '/') {
    res.end('<h2>posted for first time</h2>')
  }
}

server10.listen(5050, () => {
  console.log('=> Server listening on port 5050');
})

// 2345

let server11 = http.createServer(handleRequest11)

function handleRequest11(req, res) {
  if(req.method === 'GET' && req.url === '/') {
    res.writeHead(200, {'content-type': 'text/plain'})
    res.end(`call me rootzer0`)
  }
  else if(req.method === 'GET' && req.url === '/about') {
    res.writeHead(200, {'content-type': 'text/html'})
    res.end(`<h1>call me rootzer0</h1>`)
  }
  else {
    res.writeHead(404, {'content-type': 'text/html'})
    res.end('<h3>Page not found</h3>')
  }
}

server11.listen(2345, () => {
  console.log('=> Server listening on port 2345');
})


// 2346 -repeat above with same route and different methods

let server12 = http.createServer(handleRequest12)

function handleRequest12(req, res) {
  if(req.method === 'GET' && req.url === '/users') {
    res.writeHead(200, {'content-type': 'text/html'})
    fs.createReadStream('./form.html').pipe(res)
  }
  else if(req.method === 'POST' && req.url === '/users') {
    res.writeHead(200, {'content-type': 'text/plain'})
    res.end(`<h1>Posted for the second time</h1>`)
  }
  else {
    res.writeHead(404, {'content-type': 'text/html'})
    res.end('<h3>Page not found</h3>')
  }
}

server12.listen(2346, () => {
  console.log('=> Server listening on port 2346');
})

// 2213

let server13 = http.createServer(handleRequest13)

function handleRequest13(req, res) {
  let parsedUrl = url.parse(req.url, true)
  console.log(parsedUrl.pathname, req.url)
  res.setHeader('content-type', 'application/json')
  res.end(JSON.stringify(parsedUrl.query))
}

server13.listen(2213, () => {
  console.log('=> Server listening on port 2213')
})