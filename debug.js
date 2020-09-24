/* POSSIBILITE DE STOCKER DANS .JSON
const COLORS_CLASS = {
	0: "blue",
	1: "red",
	2: "yellow",
------- etc...
};
*/
const COLORS_CLASS =['blue','red','yellow'];

// Log ethétique
console.log("Catching elements...");

// Déclaration d'un tableau vide
var ID_ARR = [];

// Récupère tout les élements avec un ID dans le document actuel.
// Les ajoute ensuite un par un à ID_ARR
let getAllIds = () => {
	$("*").each(function () {
		if (this.id) {
			ID_ARR.push(this.id); 
		}
	});
	console.log("List des IDs : ", ID_ARR);
};

// Execution de la fonction d'itération et récuperation d'Ids
getAllIds();

// Ajoute une class, dans l'ordre d'itération du tableau (ou objet/json) COLORS_CLASS
// Possibilité d'intégrer une fonction shuffle
let addClassToElementsByIds = (arr) => {
	for (let i = 0; i < arr.length; i++) {
		console.log("Adding class " + COLORS_CLASS[i] + " to element : " + arr[i]);
		document.getElementById(arr[i]).className += COLORS_CLASS[i];
	}
};

// Execution de la fonction d'ajout de classe
addClassToElementsByIds(ID_ARR);
