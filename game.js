let activeLights = new Array(9).fill(false);

document.addEventListener('keydown', function (event) {

    // Déterminez quelle lumière doit être modifiée en fonction de la touche pressée
    let lumiere = mapToucheToLumiere(event.key.toUpperCase());


    // Ajoutez ou retirez la classe "red" en fonction de la touche pressée
    const traffic = document.getElementById(`traffic`);
    const lumiereActuelle = traffic.querySelector(`#l${lumiere}`);
    if (lumiere === 1 && !activeLights[0]) {
        lumiereActuelle.classList.toggle('red');
        activeLights[0] = true;
        startNote(lumiere);
    }
    else if (lumiere === 4 && !activeLights[3]) {
        lumiereActuelle.classList.toggle('red');
        activeLights[3] = true;
        startNote(lumiere);
    }
    else if (lumiere === 7 && !activeLights[6]) {
        lumiereActuelle.classList.toggle('red');
        activeLights[6] = true;
        startNote(lumiere);
    }


    else if (lumiere === 2 && !activeLights[1]) {
        lumiereActuelle.classList.toggle('orange');
        activeLights[1] = true;
        startNote(lumiere);
    }
    else if (lumiere === 5 && !activeLights[4]) {
        lumiereActuelle.classList.toggle('orange');
        activeLights[4] = true;
        startNote(lumiere);
    }
    else if (lumiere === 8 && !activeLights[7]) {
        lumiereActuelle.classList.toggle('orange');
        activeLights[7] = true;
        startNote(lumiere);
    }


    else if (lumiere === 3 && !activeLights[2]) {
        lumiereActuelle.classList.toggle('green');
        activeLights[2] = true;
        startNote(lumiere);
    }
    else if (lumiere === 6 && !activeLights[5]) {
        lumiereActuelle.classList.toggle('green');
        activeLights[5] = true;
        startNote(lumiere);
    }
    else if (lumiere === 9 && !activeLights[8]) {
        lumiereActuelle.classList.toggle('green');
        activeLights[8] = true;
        startNote(lumiere);
    }

});

document.addEventListener('keyup', function (event) {
    const lumiere = mapToucheToLumiere(event.key.toUpperCase());
    
    urHistory.push(event.key.toLowerCase());

    if (lumiere !== 0) {
        const traffic = document.getElementById(`traffic`);
        const lumiereActuelle = traffic.querySelector(`#l${lumiere}`);

        if (lumiere === 1 && activeLights[0]) {
            lumiereActuelle.classList.toggle('red');
            activeLights[0] = false;
            stopNote(lumiere);
        }
        else if (lumiere === 4 && activeLights[3]) {
            lumiereActuelle.classList.toggle('red');
            activeLights[3] = false;
            stopNote(lumiere);
        }
        else if (lumiere === 7 && activeLights[6]) {
            lumiereActuelle.classList.toggle('red');
            activeLights[6] = false;
            stopNote(lumiere);
        }


        else if (lumiere === 2 && activeLights[1]) {
            lumiereActuelle.classList.toggle('orange');
            activeLights[1] = false;
            stopNote(lumiere);
        }
        else if (lumiere === 5 && activeLights[4]) {
            lumiereActuelle.classList.toggle('orange');
            activeLights[4] = false;
            stopNote(lumiere);
        }
        else if (lumiere === 8 && activeLights[7]) {
            lumiereActuelle.classList.toggle('orange');
            activeLights[7] = false;
            stopNote(lumiere);
        }


        else if (lumiere === 3 && activeLights[2]) {
            lumiereActuelle.classList.toggle('green');
            activeLights[2] = false;
            stopNote(lumiere);
        }
        else if (lumiere === 6 && activeLights[5]) {
            lumiereActuelle.classList.toggle('green');
            activeLights[5] = false;
            stopNote(lumiere);
        }
        else if (lumiere === 9 && activeLights[8]) {
            lumiereActuelle.classList.toggle('green');
            activeLights[8] = false;
            stopNote(lumiere);
        }
    }
});

function toggleLight(lumiere, color) {
    setTimeout(() => {
        lumiere.classList.toggle(color);
    }, 200);
}

function mapToucheToLumiere(key) {
    let lumiere = 0;
    switch (key) {
        case 'Q': lumiere = 1; break;
        case 'A': lumiere = 2; break;
        case 'Y': lumiere = 3; break;
        case 'W': lumiere = 4; break;
        case 'S': lumiere = 5; break;
        case 'X': lumiere = 6; break;
        case 'E': lumiere = 7; break;
        case 'D': lumiere = 8; break;
        case 'C': lumiere = 9; break;
        default: return; // Si la touche n'est pas reconnue, ne rien faire
    }
    return lumiere;
}

function mapToucheToNote2(key) {
    let note = 0;
    switch (key) {
        case 1: note = 261.6; break;
        case 2: note = 311.1; break;
        case 3: note = 370; break;
        case 4: note = 329.6; break;
        case 5: note = 349.2; break;
        case 6: note = 523.25; break;
        case 7: note = 392; break;
        case 8: note = 440; break;
        case 9: note = 466.16; break;
        default: return; // Si la touche n'est pas reconnue, ne rien faire
    }
    return note;
}

function mapToucheToNote(key) {
    let note = 0;
    switch (key) {
        case 1: note = 293.66; break;
        case 2: note = 311.1; break;
        case 3: note = 329.63; break;
        case 4: note = 370; break;
        case 5: note = 392; break;
        case 6: note = 440; break;
        case 7: note = 493.9; break;
        case 8: note = 523.2; break;
        case 9: note = 587.3; break;
        default: return; // Si la touche n'est pas reconnue, ne rien faire
    }
    return note;
}
let oscillator = new Array(9);
let context = null;
let audioBufferSource = null;
let isMuted = false;
const whyDoYouCheat2 = ['q', 's', 's', 'd', 's', 'q', 's', 's',
    's', 's', 'e', 'd', 'c', 'd', 'e', 'x', 'q', 'e',
    'q', 's', 's', 'd', 's', 'q', 's', 's', 's', 's',
    'e', 'd', 'c', 'd', 'e', 'x', 's'];

const whyDoYouCheat = ['q', 'y', 's', 'y', 's', 'q', 'y', 's',
 'x', 's', 'w', 'y', 's', 'y', 's', 'y','s','y', 'c', 'd', 'e','x',
 'q', 'y', 's', 'y', 's', 'q', 'y', 's',
 'x', 's', 'w', 'y', 's', 'y', 's', 'y','s','y',
 'c', 'd', 'e', 'e', 'x'];

let urHistory = [];
let gameStarted = false;
let finalScore = 0;
const volumeBackground = 0.4;

document.getElementById('danceButton').addEventListener('click', function () {
    if (gameStarted) {
        submitSong();
        displayScore(finalScore);
        document.getElementById('reset-button').style.display = 'inline-block';
    }
    else {
        context = new (window.AudioContext || window.webkitAudioContext)();
        document.getElementById('traffic').style.display = 'flex';
        document.getElementById('danceButton').innerText = 'Show my score';
        gameStarted = true;
        startBackgroundSong();
    }
});

document.getElementById('reset-button').addEventListener('click', function () {
    resetGame();
});

document.getElementById('nosound-button').addEventListener('click', function () {
    toggleSound();
});


function startNote(lumiere) {
    let freq = mapToucheToNote(lumiere);
    oscillator[lumiere] = new Tone.Synth().toDestination();
    oscillator[lumiere].triggerAttack(freq);
}

function stopNote(lumiere) {
    oscillator[lumiere].triggerRelease();
}

function submitSong() {
    finalScore = coefficientDice(whyDoYouCheat, urHistory);
}

function coefficientDice(reponse, proposition) {
    const compteurReponse = new Map();

    reponse.forEach(lettre => {
        compteurReponse.set(lettre, (compteurReponse.get(lettre) || 0) + 1);
    });

    let correspondances = 0;

    proposition.slice(0, whyDoYouCheat.length).forEach(lettre => {
        if (compteurReponse.has(lettre) && compteurReponse.get(lettre) > 0) {
            correspondances++;
            compteurReponse.set(lettre, compteurReponse.get(lettre) - 1);
        }
    });

    const score = (correspondances / reponse.length) * 100;

    return Math.min(score, 100);
}


function displayScore(scoreFinal) {
    const audioElement = document.getElementById('numberAudio');
    audioElement.play(); 
    const elementScore = document.getElementById('score'); // Assurez-vous d'avoir un élément avec l'ID 'score' dans votre HTML
    const dureeAnimation = 3000; // Durée totale de l'animation en millisecondes (3 secondes dans cet exemple)
    const intervalleChangement = 50; // Intervalle de changement en millisecondes (50 ms dans cet exemple)
    let timer;

    function changerNombreAleatoire() {
        const nombreAleatoire = Math.random() * 100; // Génère un nombre aléatoire entre 0 et 100
        elementScore.textContent = Math.round(nombreAleatoire);
        timer = setTimeout(changerNombreAleatoire, intervalleChangement);
    }

    setTimeout(function () {
        clearTimeout(timer);
        elementScore.textContent = Math.round(scoreFinal);
        audioElement.pause(); 
    }, dureeAnimation);

    changerNombreAleatoire();
}

function resetGame() {
    urHistory = [];
    gameStarted = false;
    finalScore = 0;

    document.getElementById('traffic').style.display = 'none';
    document.getElementById('danceButton').textContent = 'Make me dance';
    gameStarted = false;

    const elementScore = document.getElementById('score'); // Assurez-vous d'avoir un élément avec l'ID 'score' dans votre HTML
    elementScore.textContent = finalScore;

    document.getElementById('reset-button').style.display = 'none';
}

function startBackgroundSong() {
    const audioElement = document.getElementById('backgroundAudio');
    audioElement.volume = volumeBackground;
    audioElement.play(); 
}

function toggleSound(){
    const toggleImage = document.getElementById('iconSound');
    const audioElement = document.getElementById('backgroundAudio');
    const audioNumberElement = document.getElementById('numberAudio');
    audioNumberElement.pause(); // Reprend la lecture audio
    if (isMuted) {
        audioElement.volume = volumeBackground;
        audioElement.play(); // 
        toggleImage.src = 'sound-volume-2-svgrepo-com.svg'; // Change la source de l'image
    } else {
        audioElement.pause(); // 
        toggleImage.src = 'sound-off-svgrepo-com.svg'; // Change la source de l'image
    }
    isMuted = !isMuted; // Inverse l'état isPlaying
}


