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

function mapToucheToNote(key) {
    let note = 0;
    switch (key) {
        case 1: note = 261.6; break;
        case 2: note = 311.1; break;
        case 3: note = 370; break;
        case 4: note = 329.6; break;
        case 5: note = 349.2; break;
        case 6: note = 370; break;
        case 7: note = 392; break;
        case 8: note = 440; break;
        case 9: note = 493.9; break;
        default: return; // Si la touche n'est pas reconnue, ne rien faire
    }
    return note;
}

let oscillator = new Array(9);
let context = null;

document.getElementById('danceButton').addEventListener('click', function () {
    context = new (window.AudioContext || window.webkitAudioContext)();
    document.getElementById('traffic').style.display = 'flex';
});


function startNote(lumiere) {
    let freq = mapToucheToNote(lumiere);
    oscillator[lumiere] = context.createOscillator();
    oscillator[lumiere].type = 'sine'; // Type de l'onde sonore (sinusoïdale)
    oscillator[lumiere].connect(context.destination);
    oscillator[lumiere].frequency.setValueAtTime(freq, context.currentTime); // Fréquence de la note (440 Hz = La 4)
    oscillator[lumiere].start();
}

function stopNote(lumiere) {
    oscillator[lumiere].stop();
}


