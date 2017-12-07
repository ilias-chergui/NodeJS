var http = require('http');
var url = require('url');
var querystring = require('querystring');

var server = http.createServer(function(request, response) {

  var page = url.parse(request.url).pathname;
  var params = querystring.parse(url.parse(request.url).query);

  response.writeHead(200, {'Content-Type': 'text/plain'});

  if (page == '/') {
    response.write('Vous etes au RDC. ');
  } else if (page == '/cave') {
    response.write('Vous etes a la cave. ');
  } else if (page == '/grenier') {
    response.write('Vous etes au grenier. ');
  } else {
    response.write('La page que vous cherchez n\'existe pas. ')
  }

  if ('prenom' in params && 'nom' in params) {
    response.write('Vous vous appelez ' + params['prenom'] + ' ' + params['nom'] +'. ');
  } else {
    response.write('Indiquez d\'abord votre prenom et votre nom. ');
  }

  response.end();

});

server.listen(8080);

[[[[[  à suivre :>> https://openclassrooms.com/courses/des-applications-ultra-rapides-avec-node-js/les-evenements-18 ]]]]]

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
