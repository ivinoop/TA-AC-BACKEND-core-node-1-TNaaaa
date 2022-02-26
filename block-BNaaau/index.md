writeCode

Q. Create a basic server using http's createServer
  - listen for request on port 5000
  - console request and response object
  - do a request using browser on `localhost:5000`
  - check out console for request and response object

Q. create a node server 
  - add listener on port 5100
  - respond with 'My first server in NodeJS' using response object

Q. write code to create a node server 
  - add listener on port 5555
  - console request headers
  - respond with content of user-agent from request headers.

Q. write code to create a node server 
  - add listener on port 5566
  - console request url and request method
  - return a text response with requested url and method

Q. write code to create a node server 
  - add listener on port 7000
  - also add a callback function to listener with a console `server listening on port 7000`
  - return entire request headers in response.

Q. create a server
  - add a listener on port 3333
  - set status code 202 in response using `res.statusCode`.

Q. create a server 
  - add a listener on port 8000
  - set appropriate header for html response using `res.setHeader`
  - return an HTML response(`<h3>Welcome to altcampus</h3>`) 

Q. Repeat above question using `res.writeHead` to set status code and Content-Type at the same time.

Q. create a basic node server
  - add a listener at port 8888
  - add appropriate header for json response
  - send json response({success: true, message: 'Welcome to Nodejs'})

Q. create a server
  - add listener on port 5050
  - use postman to do a POST request on index route
  - console to check request method
  - send HTML response i.e. `<h2>posted for first time</h2>`

Q. create a server and handle 2 different requests
  - add a listener on port 2345
  - handle GET request on '/' route where return your name in plain text in response
  - handle GET request on '/about' route and return your name in h2 as HTML page.
  - add a error handler at last to handle request made on other than above routes with a status code of 404.
    
Q. Handle 2 requests on same route with different method
    1. GET on '/users' route where return a simple HTML form with name and email field
    2. POST on '/users' route with a message 'Posted for the second time'.

Q. create a server and handle query params from the request on following url i.e. `/users?email=nodeserver@gmail.com` from browser

  - parse the  request url using parse method from url module
  - console pathname from parsed url in above step
  - grab url using `req.url`
  - differentiate between `req.url` and `parsedUrl.pathname`
  - grab the email from query params
  - return json response with email from query params