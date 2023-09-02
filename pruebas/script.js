const imagen = document.getElementById('imagen');
const audio = document.getElementById('audio');

let clicActual = 0;
const imagenes = ['cdsdc-removebg-preview.png', 'sfk_ovok-removebg-preview.png'];

imagen.addEventListener('click', () => {
    clicActual = (clicActual + 1) % imagenes.length;
    imagen.src = imagenes[clicActual];

    if (clicActual === 1) {
        audio.play();
    } else {
        audio.pause();
        audio.currentTime = 0;
    }
});
