let audioVentana1 = [
    new Audio("assets/Maquina.mp3"),  // Índice 0
    new Audio("assets/Cocina.mp3"),   // Índice 1
    new Audio("assets/Comida.mp3"),   // Índice 2
    new Audio("assets/Dormido.mp3")   // Índice 3
];

let audioActualVentana1 = null;
let indiceAudioVentana1 = -1;

let ventana1 = document.getElementById("Ventana1");
let informacionVentana1 = document.getElementById("informacion-ventana1");
let textoVentana1 = document.getElementById("texto-ventana1");
let visible = false;

ventana1.onclick = function () {
    if (visible) {
        visible = false;
        informacionVentana1.style.opacity = "0";

        if (audioActualVentana1 !== null) {
            audioActualVentana1.pause();
            audioActualVentana1.currentTime = 0;
            audioActualVentana1 = null;
        }
    } else {
        visible = true;
        informacionVentana1.style.opacity = "1";

        if (indiceAudioVentana1 !== -1) {
            audioActualVentana1 = audioVentana1[indiceAudioVentana1];
            audioActualVentana1.currentTime = 0;
            audioActualVentana1.play();
        }
    }
};

let ventana2 = document.getElementById("Ventana2");
let informacionVentana2 = document.getElementById("informacion-ventana2");
let textoVentana2 = document.getElementById("texto-ventana2");
let visible2 = false;

ventana2.onclick = function () {
    if (visible2) {
        visible2 = false;
        informacionVentana2.style.opacity = "0";
    } else {
        visible2 = true;
        informacionVentana2.style.opacity = "1";
    }
};

let ventana3 = document.getElementById("Ventana3");
let informacionVentana3 = document.getElementById("informacion-ventana3");
let textoVentana3 = document.getElementById("texto-ventana3");
let visible3 = false;

ventana3.onclick = function () {
    visible3 = !visible3;
    informacionVentana3.style.opacity = visible3 ? "1" : "0";
};

let ventana4 = document.getElementById("Ventana4");
let informacionVentana4 = document.getElementById("informacion-ventana4");
let textoVentana4 = document.getElementById("texto-ventana4");
let visible4 = false;

ventana4.onclick = function () {
    visible4 = !visible4;
    informacionVentana4.style.opacity = visible4 ? "1" : "0";
};

let elementoHora = document.getElementById("hora");

function actualizarReloj() {
    let ahora = new Date();

    let horas = String(ahora.getHours()).padStart(2, "0");
    let minutos = String(ahora.getMinutes()).padStart(2, "0");
    let segundos = String(ahora.getSeconds()).padStart(2, "0");

    elementoHora.textContent = horas + ":" + minutos + ":" + segundos;
}

function actualizarContenido() {
    let horas = new Date().getHours();

    if (horas >= 5 && horas < 8) {
        textoVentana1.innerHTML =
            "<b>Mirabel Madrigal</b>, se despierta y ayuda a preparar el desayuno.";
        indiceAudioVentana1 = 1;

    } else if (horas >= 8 && horas < 12) {
        textoVentana1.innerHTML =
            "<b>Mirabel Madrigal</b>, está bordando en su nueva falda.";
        indiceAudioVentana1 = 0;

    } else if (horas >= 12 && horas < 14) {
        textoVentana1.innerHTML =
            "<b>Mirabel Madrigal</b>, está comiendo con su familia.";
        indiceAudioVentana1 = 2;

    } else if (horas >= 14 && horas < 17) {
        textoVentana1.innerHTML =
            "<b>Mirabel Madrigal</b>, está explorando la casita y ayudando a quien lo necesite.";
        indiceAudioVentana1 = -1;

    } else if (horas >= 17 && horas < 19) {
        textoVentana1.innerHTML =
            "<b>Mirabel Madrigal</b>, está pasando tiempo con Antonio y hacen manualidades.";
        indiceAudioVentana1 = -1;

    } else if (horas >= 19 && horas < 21) {
        textoVentana1.innerHTML =
            "<b>Mirabel Madrigal</b>, está cenando con su familia.";
        indiceAudioVentana1 = 2;

    } else {
        textoVentana1.innerHTML =
            "<b>Mirabel Madrigal</b>, está durmiendo.";
        indiceAudioVentana1 = 3;
    }
    if (
        audioActualVentana1 !== null &&
        (indiceAudioVentana1 === -1 ||
        audioActualVentana1 !== audioVentana1[indiceAudioVentana1])
    ) {
        audioActualVentana1.pause();
        audioActualVentana1.currentTime = 0;
        audioActualVentana1 = null;
    }
}

function actualizarContenidoVentana2() {
    let horas = new Date().getHours();

    if (horas >= 5 && horas < 8) {
        textoVentana2.innerHTML =
            "<b>Luisa Madrigal</b> se despierta y ayuda con las tareas pesadas de la casa.";

    } else if (horas >= 8 && horas < 12) {
        textoVentana2.innerHTML =
            "<b>Luisa Madrigal</b> está en el pueblo ayudando a cargar objetos pesados.";

    } else if (horas >= 12 && horas < 14) {
        textoVentana2.innerHTML =
            "<b>Luisa Madrigal</b> está comiendo con su familia y descansando.";

    } else if (horas >= 14 && horas < 17) {
        textoVentana2.innerHTML =
            "<b>Luisa Madrigal</b> está nuevamente en el pueblo ayudando a construir casas y a transportar cosas.";

    } else if (horas >= 17 && horas < 19) {
        textoVentana2.innerHTML =
            "<b>Luisa Madrigal</b> está terminando sus últimas tareas para volver a casa.";

    } else if (horas >= 19 && horas < 21) {
        textoVentana2.innerHTML =
            "<b>Luisa Madrigal</b> está cenando con su familia.";

    } else {
        textoVentana2.innerHTML =
            "<b>Luisa Madrigal</b> está durmiendo.";
    }
}

function actualizarContenidoVentana3() {
    let horas = new Date().getHours();

    if (horas >= 5 && horas < 8) {
        textoVentana3.innerHTML =
            "<b>Camilo Madrigal</b> se despierta y se entretiene haciendo reír a su familia.";

    } else if (horas >= 8 && horas < 12) {
        textoVentana3.innerHTML =
            "<b>Camilo Madrigal</b> está en el pueblo haciendo reír a las personas para animarlas.";

    } else if (horas >= 12 && horas < 14) {
        textoVentana3.innerHTML =
            "<b>Camilo Madrigal</b> está comiendo con su familia.";

    } else if (horas >= 14 && horas < 17) {
        textoVentana3.innerHTML =
            "<b>Camilo Madrigal</b> está ayudando a su abuela a alcanzar lugares altos con su don de cambiar de forma.";

    } else if (horas >= 17 && horas < 19) {
        textoVentana3.innerHTML =
            "<b>Camilo Madrigal</b> está en el pueblo jugando con los niños.";

    } else if (horas >= 19 && horas < 21) {
        textoVentana3.innerHTML =
            "<b>Camilo Madrigal</b> está cenando con su familia.";

    } else {
        textoVentana3.innerHTML =
            "<b>Camilo Madrigal</b> está durmiendo.";
    }
}

function actualizarContenidoVentana4() {
    let horas = new Date().getHours();

    if (horas >= 5 && horas < 8) {
        textoVentana4.innerHTML =
            "<b>Antonio Madrigal</b> se despierta y pasa un rato con sus amigos animales.";

    } else if (horas >= 8 && horas < 12) {
        textoVentana4.innerHTML =
            "<b>Antonio Madrigal</b> sigue en su habitación jugando con sus amigos.";

    } else if (horas >= 12 && horas < 14) {
        textoVentana4.innerHTML =
            "<b>Antonio Madrigal</b> está comiendo con su familia.";

    } else if (horas >= 14 && horas < 17) {
        textoVentana4.innerHTML =
            "<b>Antonio Madrigal</b> está afuera explorando con sus animales.";

    } else if (horas >= 17 && horas < 19) {
        textoVentana4.innerHTML =
            "<b>Antonio Madrigal</b> está pasando tiempo con Mirabel y hacen manualidades.";

    } else if (horas >= 19 && horas < 21) {
        textoVentana4.innerHTML =
            "<b>Antonio Madrigal</b> está cenando con su familia.";

    } else {
        textoVentana4.innerHTML =
            "<b>Antonio Madrigal</b> está durmiendo.";
    }
}

actualizarReloj();
actualizarContenido();
actualizarContenidoVentana2();
actualizarContenidoVentana3();
actualizarContenidoVentana4();

setInterval(actualizarReloj, 1000);
setInterval(actualizarContenido, 60000);
setInterval(actualizarContenidoVentana2, 60000);
setInterval(actualizarContenidoVentana3, 60000);
setInterval(actualizarContenidoVentana4, 60000);
