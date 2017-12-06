var http = require('http');

var server = http.createServer(function(request, response) {

  response.writeHead(200, {'Content-Type': 'text/html'});

  response.write(`
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Hello NodeJs</title>
  </head>
  <body>
    <p>Hello you!</p>
  </body>
  </html>
  `);

  response.end();

});

server.listen(8080);


var events = require('events');
var eventEmitter = new events.EventEmitter();

var myEvent = function() {
  console.log('Vive le terminal !!! ou pas..');
}

eventEmitter.on('terminal', myEvent);

eventEmitter.emit('terminal');


<Scripts
