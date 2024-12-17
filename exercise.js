
//effectuer une opération
var operation = prompt ("Sectionnez une operation :\n 1 Addition :\n 2 Soustraction :\n 3 Multiplication :\n 4 Division ")
//demander deux nombres
let num1 = parseFloat(prompt("Entrez la première valeur :"));
let num2 = parseFloat(prompt("Entrez la seconde valeur :"));
    
// vérifier si l'entrée est valide
if(isNaN(num1) || isNaN (num2))
{alert ("Erreur: Veuillez entrer des nombres valides.")}



//Effectuer l'opération sélectionnée
let resultat;
switch (operation){
    case '1': resultat = num1 + num2
    alert( "le resultat de l'addition est: "+ resultat)

}


switch (operation){
    case '2': resultat = num1 - num2
    alert("le resultat de soustraction est : " + resultat)

}

switch (operation){
    case '3': resultat = num1 * num2
    alert("le resultat de multiplication est : " + resultat)

}

switch (operation){
    case '4': resultat = num1 / num2
    alert("le resultat de division est : " + resultat)

}



