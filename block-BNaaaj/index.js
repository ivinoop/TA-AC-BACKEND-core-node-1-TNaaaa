console.log('Welcome to NodeJS');

var os = require('os');
var {readFile, unlink} = require('fs');

console.log(os.cpus());
console.log(os.freemem());
console.log(os.uptime());
console.log(os.release());

// Two methods to create a buffer - Buffer.alloc() and Buffer.allocUnsafe()

let buff1 = Buffer.alloc(12);
console.log(buff1.toString());

let buff2 = Buffer.allocUnsafe(12);
buff2.write('This is a buffer');
console.log(buff2.toString());

// Blocking Code

console.log('This executes first');
console.time('blocking');
for(let i = 0; i < 9425909090; i++) {
  // Some code
}
console.timeEnd('blocking');
console.log('This executes last');

// Non Blocking Code

console.log('This non-blocking code executes first');
setTimeout(() => {
  console.log('This async code executes last');
}, 3000);
console.log('This executes second');

