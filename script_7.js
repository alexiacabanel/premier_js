// Fonction pour vérifier si une phrase est une question
function isQuestion(phrase) {
    return phrase.endsWith("?");
}

// Fonction pour vérifier si une phrase est entièrement en majuscules
function isShouting(phrase) {
    return phrase === phrase.toUpperCase() && phrase.trim() !== "";
}

// Fonction pour vérifier si une phrase contient le mot "Fortnite"
function isTalkingAboutFortnite(phrase) {
    return phrase.toLowerCase().includes("fortnite");
}

// Fonction pour répondre au bot
function chatBot(phrase) {
    if (isQuestion(phrase)) {
        return "Ouais Ouais...";
    } else if (isShouting(phrase)) {
        return "Pwa, calme-toi...";
    } else if (isTalkingAboutFortnite(phrase)) {
        return "on s' fait une partie soum-soum ?";
    } else if (phrase.trim() === "") {
        return "t'es en PLS ?";
    } else {
        return "balek.";
    }
}

// Demande à l'utilisateur une phrase pour le bot
const userInput = prompt("Tu veux parler à ton bot ado préféré ?");

// Affiche la réponse du bot dans la console
console.log(chatBot(userInput));


