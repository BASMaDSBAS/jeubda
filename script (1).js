// Données du jeu
// Données du jeu
const allGameData = [
    { word: 'un', image: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu-bda/main/1.JPG' },
    { word: 'deux', image: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu-bda/main/2.JPG' },
    { word: 'deux', image: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu-bda/main/3.JPG' },
    { word: 'deux', image: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu-bda/main/4.JPG' },
    { word: 'deux', image: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu-bda/main/5.JPG' },
    { word: 'deux', image: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu-bda/main/6.JPG' },
    { word: 'deux', image: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu-bda/main/7.JPG' },
    { word: 'deux', image: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu-bda/main/8.JPG' },
    { word: 'deux', image: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu-bda/main/9.JPG' },
    { word: 'deux', image: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu-bda/main/10.JPG' },
    { word: 'deux', image: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu-bda/main/11.jpg' }, 
    // Ajoutez d'autres données selon vos besoins
];

let gameData = []; // Utilisé pour stocker les données de la manche en cours
let currentRound = 0;
let score = 0;

// Fonction pour commencer une nouvelle manche
function startRound() {
    if (currentRound < 10) {
        // Sélectionner 10 éléments de manière aléatoire
        gameData = getRandomItems(allGameData, 10);
        
        const currentQuestion = gameData[currentRound];
        displayQuestion(currentQuestion);
    } else {
        // Fin du jeu
        endGame();
    }
}

// Fonction pour obtenir des éléments aléatoires d'un tableau
function getRandomItems(array, count) {
    const shuffledArray = array.slice(); // Copier le tableau pour ne pas le modifier directement
    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray.slice(0, count);
}

// Fonction pour vérifier la réponse
function checkAnswer() {
    const userInput = document.getElementById('word-input').value.toLowerCase();
    const correctAnswer = gameData[currentRound].word.toLowerCase();
    const resultElement = document.getElementById('result');

    if (userInput === correctAnswer) {
        resultElement.textContent = 'Correct !';
        score++;
    } else {
        resultElement.textContent = 'Incorrect. La réponse était ' + correctAnswer;
    }
}

// Fonction pour passer à la question suivante
function nextRound() {
    const wordInput = document.getElementById('word-input');
    const resultElement = document.getElementById('result');

    // Réinitialiser le champ de saisie et le résultat
    wordInput.value = '';
    resultElement.textContent = '';

    // Passer à la question suivante
    currentRound++;

    // Vérifier si toutes les questions ont été posées
    if (currentRound < gameData.length) {
        // Mettre à jour l'image
        const imageContainer = document.getElementById('image-container');
        const currentImage = gameData[currentRound].image;
        imageContainer.innerHTML = `<img src="${currentImage}" alt="Image">`;
    } else {
        // Fin du jeu
        endGame();
    }
}

// Fonction pour terminer le jeu
function endGame() {
    alert(`Fin du jeu ! Votre score est de ${score} sur 10.`);
    // Vous pouvez ajouter d'autres actions ici, comme réinitialiser le jeu.
}
