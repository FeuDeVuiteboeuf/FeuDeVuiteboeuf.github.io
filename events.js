

let ids = [];
let keys = ['q', 'a', 'y', 'w', 's', 'x', 'e', 'd', 'c'];
for (let i = 1; i < 10; i++) {
    ids.push(`l${i}`);
}

for (let i = 0; i < 9; i++) {
    addEventListeners(ids[i], keys[i]);
}


document.getElementById('ouvrirModal').addEventListener('click', function () {
    document.getElementById('modal').style.display = 'block';
});

document.querySelector('.close').addEventListener('click', function () {
    document.getElementById('modal').style.display = 'none';
});

function addEventListeners(elementID, key) {
    var element = document.getElementById(elementID);

    element.addEventListener('touchstart', function () {
        simulateKeyDown(key);
    });

    element.addEventListener('touchend', function () {
        simulateKeyUp(key);
    });
}

function simulateKeyDown(key) {
    var event = new Event('keydown');
    event.key = key;
    document.dispatchEvent(event);
}

function simulateKeyUp(key) {
    var event = new Event('keyup');
    event.key = key;
    document.dispatchEvent(event);
}
