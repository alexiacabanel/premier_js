// Fonction pour traduire un codon en acide aminé
function translateCodon(codon) {
    switch(codon) {
        case 'UCU':
        case 'UCC':
        case 'UCA':
        case 'UCG':
        case 'AGU':
        case 'AGC':
            return 'Sérine';
        case 'CCU':
        case 'CCC':
        case 'CCA':
        case 'CCG':
            return 'Proline';
        case 'UUA':
        case 'UUG':
            return 'Leucine';
        case 'UUU':
        case 'UUC':
            return 'Phénylalanine';
        case 'CGU':
        case 'CGC':
        case 'CGA':
        case 'CGG':
        case 'AGA':
        case 'AGG':
            return 'Arginine';
        case 'UAU':
        case 'UAC':
            return 'Tyrosine';
        default:
            return 'Inconnu';
    }
}

// Fonction pour traduire un ARN en une suite d'acides aminés
function translateARN(ARN) {
    const codons = ARN.match(/.{1,3}/g); // Découpe l'ARN en codons de 3 lettres
    const acidesAmines = codons.map(codon => translateCodon(codon)); // Traduit chaque codon en acide aminé
    return acidesAmines.join('-'); // Retourne la suite d'acides aminés séparés par des tirets
}

// ARN à traduire
const arn1 = 'CCGUCGUUGCGCUACAGC';
const arn2 = 'CCUCGCCGGUACUUCUCG';

// Traduction et affichage des acides aminés
console.log("ARN 1 traduit en acides aminés : " + translateARN(arn1));
console.log("ARN 2 traduit en acides aminés : " + translateARN(arn2));
