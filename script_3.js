// valeur rentré par l'utilisateur
let rentré  = prompt ('Salut, bienvenue dans ma super pyramide ! Combien d étages veux-tu ?')

// création de la décroissance du vide avant le #
let vide = rentré-1

// incrémentation de nombre allant jusqu'a "rentré" et commencant de 1
for (let number = 1; number <= rentré;  number ++)

// aficher le tout, repeat permet de appliquer ce qu'on à définie à # ou à l'espace vide  
console.log(" ".repeat(vide) + "#".repeat(number)) 



