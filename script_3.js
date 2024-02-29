// Demander à l'utilisateur le nombre d'étages
const nombreEtages = parseInt(prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?"));

// Vérifier si l'entrée est un nombre valide
if (isNaN(nombreEtages) || nombreEtages <= 0) {
    console.log("Veuillez entrer un nombre valide et positif.");
} else {
    // Créer la pyramide
    for (let i = 1; i <= nombreEtages; i++) {
        let ligne = '';
        // Ajouter les espaces à gauche
        for (let j = nombreEtages - i; j > 0; j--) {
            ligne += ' ';
        }
        // Ajouter les dièses
        for (let k = 0; k < i; k++) {
            ligne += '#';
        }
        console.log(ligne);
    }
}