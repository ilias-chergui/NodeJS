// On crée une fonction qu'on place dans une variable
var direBonjour = function() {
  console.log("Coucou toi !");
}

// On exporte la variable pour être utilisable partout
exports.direBonjour = direBonjour;

///// Seconde façon de faire la même chose que plus haut
exports.direByeBye = function () {
  console.log("Tchousss !");
}
