// Demander à l'utilisateur le nombre dont il veut calculer la factorielle
const nombre = parseInt(prompt("De quel nombre veux-tu calculer la factorielle ?"));

// Fonction pour calculer la factorielle
function factorielle(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorielle(n - 1);
    }
}

// Vérifier si l'entrée est un nombre valide
if (isNaN(nombre) || nombre < 0) {
    console.log("Veuillez entrer un nombre valide et positif.");
} else {
    // Calculer et afficher la factorielle
    console.log("Le résultat est :", factorielle(nombre));
}