const imagen = document.getElementById('imagen');
const audio = document.getElementById('audio');

let clicActual = 0;
const imagenes = ['image/sffvs-removebg-preview (1).png', 'image/efcsdc-removebg-preview (3).png'];

function cambiarImagenYAudio() {
    clicActual = (clicActual + 1) % imagenes.length;
    imagen.src = imagenes[clicActual];

    if (clicActual === 1) {
        audio.play();
    } else {
        audio.pause();
        audio.currentTime = 0;
    }
}

imagen.addEventListener('click', cambiarImagenYAudio);

// Manejar eventos táctiles para dispositivos móviles
imagen.addEventListener('touchstart', cambiarImagenYAudio);
