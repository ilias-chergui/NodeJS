var http = require('http');
var url = require('url');
var querystring = require('querystring');
var EventEmitter = require('events').EventEmitter;
var jeu = new EventEmitter();

jeu.on('GameOver', function(message) {

  if ( message[1] < 25) {
    var bouloulou = message[0] + ' a perdu avec ' + message[1] + ' points.';
  } else if ( message[1] >= 25) {
    var bouloulou = message[0] + ' a gagne avec ' + message[1] + ' points.';
  }
  var server = http.createServer(function(req, res){
    res.write(bouloulou);
    res.end();
  });
  server.listen(8080);
});

jeu.emit('GameOver', ['Mario', 10]);


// server.on('req&uest', function(request, response) {
//
//   var urls = url.parse(request.url);
//   var page = urls.pathname;
//   var query = urls.query;
//   var params = querystring.parse(query);
//   console.log(params);
//
//   response.writeHead(200, {'Content-Type': 'text/html'});
//
//   if (page == '/') {
//     response.write(query + '<br/>' + params['enfants']);
//   } else if (page == '/cave') {
//     response.write('Vous etes a la cave. ');
//   } else if (page == '/grenier') {
//     response.write('Vous etes au grenier. ');
//   } else {
//     response.write('La page que vous cherchez n\'existe pas. ')
//   }
//   response.end();
//
// });

// // Tester les events
//
// var jeu = new EventEmitter();
//
// jeu.on('Game Over', function(message) {
//   console.log(message);
// });
//
// jeu.emit('Game Over', 'Pouloulou est un chat.');


// var events = require('events');
// var eventEmitter = new events.EventEmitter();
//
// var myEvent = function() {
//   console.log('Vive le terminal !!! ou pas..');
// }
//
// eventEmitter.on('terminal', myEvent);
//
// eventEmitter.emit('terminal');
