var nbrSlider = 8;
var nbrTraficLightPerRow = 13;
const container = document.querySelector('.container');

for (let i = 1; i <= nbrSlider; i++) {
    const fires = document.createElement('div');
    fires.classList.add('fires');
    fires.id = `f${i}`;

    const slider = document.createElement('div');
    slider.classList.add('slider');
    slider.id = `s${i}`;

    for (let j = 0; j < nbrTraficLightPerRow; j++) {
        const img = document.createElement('img');
        img.src = 'icons8-traffic-light-100-3.png';
        slider.appendChild(img);
    }

    if (i % 2 === 0) {
        slider.style.animationDirection = 'reverse';
    }

    fires.appendChild(slider);
    container.appendChild(fires);

    var copy = document.querySelector(`#s${i}`).cloneNode(true);
    document.querySelector(`#f${i}`).appendChild(copy);
}

