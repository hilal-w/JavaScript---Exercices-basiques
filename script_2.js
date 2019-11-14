// demande de rentrer un nombre
let nombre = "";
nombre = prompt ("De quel nombre veux-tu calculer la factorielle ?");


// s'arreter à 1 pour ne pas avoir de multiplication par 0, donc valeur de départ à 0
let résultat = 1


// résultat * count à chaque boucle
// actulisation de la valeur et incrémentation du résulta
// fin de la boucle kan valeur atteint 
for (let count = 1; count <=nombre; count++) {résultat *=count}



// afficher résultat
console.log( `le résultat est ${résultat}`);

