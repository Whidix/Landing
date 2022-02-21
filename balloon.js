const balloon = document.querySelector('#balloon');

window.addEventListener('keydown', inflateBalloon);

function inflateBalloon(event) {
    if (event.key === 'ArrowUp') {
        balloon.style.fontSize = `${1.1*parseInt(balloon.style.fontSize)}px`;
    } else if (event.key ==='ArrowDown') {
        balloon.style.fontSize = `${0.9*parseInt(balloon.style.fontSize)}px`;
    }
    if (parseInt(balloon.style.fontSize) >= 100) {
        balloon.innerText = '🎆';
        window.removeEventListener('keydown', inflateBalloon);
    }
}