// ==================================
// FONCTIONS
// ==================================
function generateRandomNumber(min, max) {
    const newRandomNumber = Math.round(Math.random() * (max - min));
    return newRandomNumber;
}

function generateOpponentChoice() {
    const chiffreAdversaire = generateRandomNumber(1,3);
    const choixAdversaire = choixPossibles[chiffreAdversaire];

    const imgResultAdversaire = document.getElementById('resultat-adversaire');
    imgResultAdversaire.src = images[chiffreAdversaire];

    histoAdversaire.push(chiffreAdversaire);

    return(choixAdversaire);
}

function game() {
    const choixJoueur = document.querySelector('.game');
    choixJoueur.addEventListener('click', clickChoixJoueur);
    
    let scoreJoueur = 0;
    let scoreAdversaire = 0;
    let idResultat = 0;
    
    function clickChoixJoueur(event) {
        event.preventDefault();
        const idChoixJoueur = event.target.id;
        const resultChoixJoueur = choixPossibles[choixJoueurPossibles.indexOf(idChoixJoueur)];
        const resultChoixAdversaire = generateOpponentChoice();
        histoJoueur.push(choixJoueurPossibles.indexOf(idChoixJoueur));

        if (resultChoixJoueur === 'Pierre' && resultChoixAdversaire === 'Ciseaux') {
            scoreJoueur++;
            idResultat = 3;
        } else if (resultChoixJoueur === 'Feuille' && resultChoixAdversaire === 'Pierre') {
            scoreJoueur++;
            idResultat = 3;
        } else if (resultChoixJoueur === 'Ciseaux' && resultChoixAdversaire === 'Feuille') {
            scoreJoueur++;
            idResultat = 3;
        } else if (resultChoixJoueur === resultChoixAdversaire) {
            idResultat = 5;
        } else {
            scoreAdversaire++;
            idResultat = 4;
        };
        affichageResultat(idChoixJoueur, idResultat);
        scoreUpdate(scoreJoueur, scoreAdversaire);
        afficherHistorique();
    }
}

function scoreUpdate(scoreJoueur, scoreAdversaire) {
    const scoreJoueurUpdate = document.getElementById('score-joueur');
    scoreJoueurUpdate.textContent = scoreJoueur;
    const scoreAdversaireUpdate = document.getElementById('score-adversaire');
    scoreAdversaireUpdate.textContent = scoreAdversaire;
}

function affichageResultat(idChoixJoueur, idResultat) {
    const imgResultJoueur = document.getElementById('resultat-joueur');
    imgResultJoueur.src = images[choixJoueurPossibles.indexOf(idChoixJoueur)];

    const imgResultMatch = document.getElementById('resultat-match');
    imgResultMatch.src = images[idResultat];
}
// ==================================
// TABLES
// ==================================
const choixPossibles = ['Pierre', 'Feuille', 'Ciseaux']; //0 = Pierre / 1 = Feuille / 2 = Ciseaux
const choixJoueurPossibles = ['pierre', 'feuille', 'ciseaux']; //0 = Pierre / 1 = Feuille / 2 = Ciseaux
const images = ['./img/pierre.png', './img/feuille.png', './img/ciseaux.png', './img/youwin.webp', './img/defeat.jpg', './img/draw.webp',];
const histoJoueur = [];
const histoAdversaire = [];

// ==================================
// APPLICATION
// ==================================

game();


function afficherHistorique() {
    const listeHistoJoueur = document.getElementById('historique-joueur');
    const listeHistoAdversaire = document.getElementById('historique-adversaire');

    const createHistoJoueur = document.createElement('img');
    createHistoJoueur.src = images[histoJoueur[histoJoueur.length - 1]];
    listeHistoJoueur.append(createHistoJoueur);

    const createHistoAdversaire = document.createElement('img');
    createHistoAdversaire.src = images[histoAdversaire[histoAdversaire.length - 1]];
    listeHistoAdversaire.append(createHistoAdversaire);
       
}


