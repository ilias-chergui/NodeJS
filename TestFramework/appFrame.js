// Gestion des routes simple (via -> url)

var express = require('express'); // On fait appel au framework Express

var app = express(); // On place la fonction dans une variable

// Fonction qui affiche un message lorsqu'on se trouve à la racine du site
app.get('/', function(request, response) {
  response.setHeader('Content-Type', 'text/plain');
  response.end('Vous etes au rdc.');
});

// Fonction qui affiche un message lorsqu'on se trouve à "la cave" (page du site)
app.get('/cave', function(request, response) {
  response.setHeader('Content-Type', 'text/plain');
  response.end('Vous etes a la cave.');
});

// Fonction qui affiche un message lorsqu'on se trouve au "grenier" (page du site)
app.get('/grenier', function(request, response) {
  response.setHeader('Content-Type', 'text/plain');
  response.end('Vous etes au grenier.');
});

//
app.get('/etage/:etagenum/chambre', function(request, response) {
  response.setHeader('Content-Type', 'text/plain');
  response.end('C\'est ma chambre, degage !');
});

// Pour gérer la page 404 -> toujours mettre le code à la fin, juste avant le .listen(xx)
app.use(function(request, response, next) {
  response.setHeader('Content-Type', 'text/plain');
  response.send(404, 'La page que vous cherchez n\'existe pas!');
});

app.listen(8080);

//////////// ///// 2e façon de faire /////
////////////
//////////// app.get('/', function(request, response) {
////////////   response.setHeader('Content-Type', 'text/plain');
////////////   response.end('Vous etes au rdc.');
//////////// })
//////////// .get('/cave', function(request, response) {
////////////   response.setHeader('Content-Type', 'text/plain');
////////////   response.end('Vous etes a la cave.');
//////////// })
//////////// .get('/grenier', function(request, response) {
////////////   response.setHeader('Content-Type', 'text/plain');
////////////   response.end('Vous etes au grenier.');
//////////// })
//////////// .use(function(request, response, next) {
////////////   response.setHeader('Content-Type', 'text/plain');
////////////   response.send(404, 'La page que vous cherchez n\'existe pas!');
//////////// })
//////////// .listen(8080);
