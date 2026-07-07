// CONFIGURACIÓN DE LAS PÁGINAS DEL CUENTO (15 Páginas)
const paginasCuento = [
  {
    imagen: "imagenes/escena1.webp",
    audio: "audios/lectura1.mp3",
    objeto1: {                
      src: "imagenes/laris1.png",
      postura: "postura-mareado",
      coordenadas: { top: "42%", left: "35%" }
    },
    objeto2: {
      src: "imagenes/michi1.png", 
      postura: "postura-asustado",
      coordenadas: { top: "44%", left: "17%" }
    },
    objeto3: { 
      src: "imagenes/bola.webp", 
      postura: "postura-rodar",
      coordenadas: { top: "32%", left: "27%" }
    }
  },// LECTURA 2
  {
    imagen: "imagenes/escena1.webp",
    audio: "audios/lectura2.mp3",
    objeto1: {
      src: "imagenes/michi2.webp",
      postura: "postura-desplazar",
      coordenadas: { top: "45%", left: "9%" } 
    },
    objeto2: {
      src: "imagenes/laris2.webp",
      postura: "postura-brinco",
      coordenadas: { top: "48%", left: "19%" }
    },
    objeto3: { 
      src: "imagenes/bola.webp",
      postura: "rodar-zigzag",
      coordenadas: { top: "49%", left: "10%" }
    }
  },   // LECTURA 3
  {
    imagen: "imagenes/escena3.webp",
    audio: "audios/lectura3.mp3",
    objeto1: {
      src: "imagenes/michi3.webp",
      postura: "postura-flotar",
      coordenadas: { top: "45%", left: "36%" }
    },
    objeto2: {
      src: "imagenes/bola.webp",
      postura: "postura-elastico",
      coordenadas: { top: "50%", left: "26%" }
    },
    objeto3: { 
      src: "imagenes/laris3.webp",
      postura: "postura-latido",
      coordenadas: { top: "41%", left: "22%" }
    }
  },   // escena4 //
  {
    imagen: "imagenes/escena3.webp",
    audio: "audios/lectura4.mp3",
    objeto1: {
      src: "imagenes/michi3.webp",
      postura: "postura-flotar",
      coordenadas: { top: "45%", left: "36%" }
    },
    objeto2: {
      src: "imagenes/laris4.webp",
      postura: "postura-asustado",
      coordenadas: { top: "41%", left: "22%" }
    },
    objeto3: { 
      src: "imagenes/bola.webp",
      postura: "",
      coordenadas: { top: "50%", left: "26%" }
    }
  }, // escena5 //
  {
    imagen: "imagenes/escena3.webp",
    audio: "audios/lectura5.mp3",
    objeto1: {
      src: "imagenes/laris5.webp",
      postura: "postura-asustado",
      coordenadas: { top: "43%", left: "26%" }
    },
    objeto2: {
      src: "imagenes/bola.webp",
      postura: "postura-mareado",
      coordenadas: { top: "50%", left: "36%" }
    }
  }, // escena6 //
  {
    imagen: "imagenes/escena2.webp",
    audio: "audios/lectura6.mp3",
    objeto1: {
      src: "imagenes/tina.webp",
      postura: "desplazar",
      coordenadas: { top: "3%", left: "48%" }
    },
    objeto2: {
      src: "imagenes/laris5.webp",
      postura: "postura-asustado",
      coordenadas: { top: "43%", left: "26%" }
    },
    objeto3: { 
      src: "imagenes/bola.webp",
      postura: "",
      coordenadas: { top: "50%", left: "36%" }
    }
  },// escena7 //
  {
    imagen: "imagenes/escena2.webp",
    audio: "audios/lectura7.mp3",
    objeto1: {
      src: "imagenes/tina.webp",
      postura: "postura-flotar",
      coordenadas: { top: "3%", left: "33%" }
    },
    objeto2: {
      src: "imagenes/laris5.webp",
      postura: "postura-asustado",
      coordenadas: { top: "43%", left: "26%" }
    }
  },// escena8 //
  {
    imagen: "imagenes/escena2.webp",
    audio: "audios/lectura8.mp3",
    objeto1: {
      src: "imagenes/tina.webp",
      postura: "",
      coordenadas: { top: "3%", left: "33%" }
    },
    objeto2: {
      src: "imagenes/laris6.webp",
      postura: "postura-latido",
      coordenadas: { top: "40%", left: "29%" }
    },
    objeto3: { 
      src: "imagenes/llorar.webp",
      postura: "postura-caida",
      coordenadas: { top: "40%", left: "28%" }
    }
  },   // escena9 //
  {
    imagen: "imagenes/escena2.webp",
    audio: "audios/lectura9.mp3",
    objeto1: {
      src: "imagenes/llorar.webp",
      postura: "postura-caida",
      coordenadas: { top: "40%", left: "28%" }
    },
    objeto2: {
      src: "imagenes/tina.webp",
      postura: "",
      coordenadas: { top: "3%", left: "33%" }
    },
    objeto3: {  
      src: "imagenes/laris6.webp",
      postura: "postura-latido",
      coordenadas: { top: "40%", left: "29%" }
    }
  },  // escena10 //
  {
    imagen: "imagenes/escena2.webp",
    audio: "audios/lectura10.mp3",
    objeto1: {
      src: "imagenes/laris5.webp",
      postura: "postura-flotar",
      coordenadas: { top: "40%", left: "15%" }
    },
    objeto2: {
      src: "imagenes/michi4.webp",
      postura: "desplazar",
      coordenadas: { top: "40%", left: "52%" }
    },
    objeto3: {  
      src: "imagenes/mariposa.webp",
      postura: "postura-desplazar",
      coordenadas: { top: "26%", left: "12%" }
    }
  },   // escena11 //
  {
    imagen: "imagenes/escena2.webp",
    audio: "audios/lectura11.mp3",
    objeto1: {
      src: "imagenes/laris7.webp",
      postura: "postura-flotar",
      coordenadas: { top: "40%", left: "25%" }
    },
    objeto2: {
      src: "imagenes/mariposa2.webp",
      postura: "postura-flotar",
      coordenadas: { top: "10%", left: "26%" }
    },
    objeto3: {  
      src: "imagenes/michi3.webp",
      postura: "",
      coordenadas: { top: "40%", left: "36%" }
    }
  },   // escena12 //
  {
    imagen: "imagenes/escena2.webp",
    audio: "audios/lectura12.mp3",
    objeto1: {
      src: "imagenes/michi3.webp",
      postura: "",
      coordenadas: { top: "40%", left: "39%" }
    },
    objeto2: {
      src: "imagenes/laris8.webp",
      postura: "postura-flotar",
      coordenadas: { top: "40%", left: "19%" }
    },
    objeto3: {  

      src: "imagenes/manzana.webp",
      postura: "desplazar",
      coordenadas: { top: "46%", left: "49%" }
    }
  },  // escena13 //
  { 
    imagen: "imagenes/escena3.webp",
    audio: "audios/lectura13.mp3",
    objeto1: {
      src: "imagenes/michi5.webp",
      postura: "postura-flotar",
      coordenadas: { top: "44%", left: "38%" } 
    },
    objeto2: {
      src: "imagenes/mariposa1.webp",
      postura: "postura-latido",
      coordenadas: { top: "38%", left: "48%" }
    },
    objeto3: {  
      src: "imagenes/laris9.webp",
      postura: "postura-flotar",
      coordenadas: { top: "43%", left: "21%" }
    }
  },    // escena14 //
  {
    imagen: "imagenes/escena3.webp",
    audio: "audios/lectura14.mp3",
    objeto1: {
      src: "imagenes/laris2.webp",
      postura: "rodar-zigzag",
      coordenadas: { top: "42%", left: "18%" }
    },
    objeto2: {
      src: "imagenes/raton.webp",
      postura: "postura-desplazar",
      coordenadas: { top: "46%", left: "20%" }
    },
    objeto3: {  
      src: "imagenes/michi2.webp",
      postura: "postura-brinco",
      coordenadas: { top: "42%", left: "25%" }
    }
  },   // escena15 //
  {
    imagen: "imagenes/escena15.webp",
    audio: "audios/lectura15.mp3",
    objeto1: {
      src: "imagenes/raton.webp",
      postura: "postura-flotar",
      coordenadas: { top: "5%", left: "45%" }
    },
    objeto2: {
      src: "imagenes/mariposa1.webp",
      postura: "postura-pendulo",
      coordenadas: { top: "15%", left: "30%" }
    },
    objeto3: {  
      src: "imagenes/bola.webp",
      postura: "postura-caida",
      coordenadas: { top: "13%", left: "35%" }
    }
  }
];

let paginaActual = 0;
const audioCuento = document.getElementById('audio-cuento');
const audioEfecto = document.getElementById('audio-efecto');
const imgPagina = document.getElementById('imagen-pagina');

// Instancias del DOM (¡Aquí sumamos la tercera!)
const elObjeto1 = document.getElementById('objeto1-interactivo');
const elObjeto2 = document.getElementById('objeto2-interactivo');
const elObjeto3 = document.getElementById('objeto3-interactivo'); // <-- CORRECCIÓN 1

const progresoFill = document.getElementById('progreso-fill');
const contador = document.getElementById('contador-pagina');

function comenzar() {
  document.getElementById('pantalla-inicio').classList.add('oculto');
  document.getElementById('visor').classList.remove('oculto');
  paginaActual = 0;
  cargarPagina();
}

function cargarPagina() {
  const datos = paginasCuento[paginaActual];
  if (!datos) return; 
  
  imgPagina.src = datos.imagen;
  contador.textContent = `${paginaActual + 1} / ${paginasCuento.length}`;
  
  const porcentaje = ((paginaActual + 1) / paginasCuento.length) * 100;
  progresoFill.style.width = `${porcentaje}%`;

  // --- RENDERIZADO OBJETO 1 ---
  if (elObjeto1) {
    if (datos.objeto1 && datos.objeto1.src) {
      elObjeto1.src = datos.objeto1.src;
      elObjeto1.className = datos.objeto1.postura || ''; 
      elObjeto1.style.top = datos.objeto1.coordenadas.top;
      elObjeto1.style.left = datos.objeto1.coordenadas.left;
      elObjeto1.classList.remove('oculto');
    } else {
      elObjeto1.classList.add('oculto');
    }
  }

  // --- RENDERIZADO OBJETO 2 ---
  if (elObjeto2) {
    if (datos.objeto2 && datos.objeto2.src) {
      elObjeto2.src = datos.objeto2.src;
      elObjeto2.className = datos.objeto2.postura || ''; 
      elObjeto2.style.top = datos.objeto2.coordenadas.top;
      elObjeto2.style.left = datos.objeto2.coordenadas.left;
      elObjeto2.classList.remove('oculto');
    } else {
      elObjeto2.classList.add('oculto');
    }
  }

  // --- RENDERIZADO OBJETO 3 (¡Súper Importante!) ---
  if (elObjeto3) { // <-- CORRECCIÓN 2: Lógica para renderizar o esconder el 3er elemento
    if (datos.objeto3 && datos.objeto3.src) {
      elObjeto3.src = datos.objeto3.src;
      elObjeto3.className = datos.objeto3.postura || ''; 
      elObjeto3.style.top = datos.objeto3.coordenadas.top;
      elObjeto3.style.left = datos.objeto3.coordenadas.left;
      elObjeto3.classList.remove('oculto');
    } else {
      elObjeto3.classList.add('oculto'); // Se oculta automáticamente si la escena no lo lleva
    }
  }

  const btnJugar = document.getElementById('btn-jugar');

  if (audioCuento) {
    audioCuento.onplaying = null;
    audioCuento.onpause = null;
    audioCuento.onended = null;

    audioCuento.onplaying = function() {
      if(btnJugar) btnJugar.classList.add('play-bailando');
    };
    audioCuento.onpause = function() {
      if(btnJugar) btnJugar.classList.remove('play-bailando');
    };
    audioCuento.onended = function() {
      if(btnJugar) btnJugar.classList.remove('play-bailando');
    };

    audioCuento.src = datos.audio;
    audioCuento.load();
    audioCuento.play()
      .catch(e => {
        if(btnJugar) btnJugar.classList.remove('play-bailando');
        console.log("Audio en espera debido a restricciones.");
      });
  }

  const botonRegresar = document.getElementById('btn-regresar');
  const botonAvanzar = document.getElementById('btn-avanzar');

  if(botonRegresar) botonRegresar.disabled = (paginaActual === 0);
  if(botonAvanzar) botonAvanzar.disabled = (paginaActual === paginasCuento.length - 1);
}

function paginaSiguiente() {
  if (paginaActual < paginasCuento.length - 1) {
    if (audioEfecto) audioEfecto.play().catch(e => {}); 
    paginaActual++;
    cargarPagina();
  }
}

function paginaAnterior() {
  if (paginaActual > 0) {
    if (audioEfecto) audioEfecto.play().catch(e => {}); 
    paginaActual--;
    cargarPagina();
  }
}

function toggleAudio() {
  if (audioCuento.paused) {
    audioCuento.play().catch(e => {});
  } else {
    audioCuento.pause();
  }
}

function regresarAlMenu() {
  if (audioCuento) audioCuento.pause();
  window.location.href = "../index.html"; 
}

document.addEventListener("DOMContentLoaded", () => {
  const parametros = new URLSearchParams(window.location.search);
  const vieneDeEncadenadorURL = parametros.get('saltarPortada') === 'true';
  const vieneDeEncadenadorSesion = sessionStorage.getItem('sesionIniciada') === 'true';
  
  if (vieneDeEncadenadorURL || vieneDeEncadenadorSesion) {
    document.getElementById('pantalla-inicio').classList.add('oculto');
    document.getElementById('visor').classList.remove('oculto');
    paginaActual = 0; 
    cargarPagina();
  }
});