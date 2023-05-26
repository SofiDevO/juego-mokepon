/* function iniciarJuego */
const botonReInicio = document.getElementById('logo-boton') /* Al presionar el logo de mokepon, vuelve a inicio */
const sectionHero = document.getElementById('hero');
const sectionSeleccionarMascota = document.getElementById('select-monster');
const sectionReinicio = document.getElementById('reinicio'); /*boton de reiniciooculto, display =none */
const sectionSeleccionarAtaque = document.getElementById('select-atack');


const buttonInicio = document.getElementById('jugar');
const buttonMascotaJugador = document.getElementById('button-mascota');
/* Botones de ataques */
const botonFuego = document.getElementById('button-fuego')
const botonAgua = document.getElementById('button-agua')
const botonTierra = document.getElementById('button-tierra')
const botonReiniciar = document.getElementById("reinicio");


/* function seleccionarMascotaEnemigo */
const spanMascotaEnemigo = document.getElementById('mascota-enemigo')


/* function combate */
const spanVidasJugador = document.getElementById('vidas-jugador');
const spanVidasEnemigo = document.getElementById('vidas-enemigo');

/* function crearMensaje */
const sectionMensajes = document.getElementById('resultado')
const sectionAtaquesJugador = document.getElementById('ataques-jugador')
const sectionAtaquesEnemigo = document.getElementById('ataques-enemigo')





let inputHipodoge = document.getElementById('hipodoge');
let inputCapipepo =  document.getElementById('capipepo');
let inputRatigueya = document.getElementById('ratigueya');
let inputLangostelvis = document.getElementById('langostelvis');
let inputTucapalma = document.getElementById('tucapalma');
let inputPydos = document.getElementById('pydos');
let spanMascotaJugador = document.getElementById('mascota-jugador')

let mokepones = []

let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3




/* Definir  Personajes por Objeto */
class Mokepon {
    constructor(nombre, foto, vida){
        this.nombre = nombre;
        this.foto = foto;
        this.vida = vida;
        this.ataques = []
    }
}

let hipodoge = new Mokepon('Hipodoge', './mokepones/Hipodogue.pxo (1).png', 5);
let capipepo = new Mokepon('Capipepo', './mokepones/Capipepo.png', 5);
let ratigueya = new Mokepon('Ratigueya', './mokepones/Ratiguey02a.png', 5);
let langostelvis = new Mokepon('Langostelvis', './mokepones/Langostelvis.png', 5);
let tucapalma = new Mokepon('Tucapalma', './mokepones/Tucapalma.png', 5);
let pydos = new Mokepon('Pydos', './mokepones/Pydos.png', 5);


console.log(hipodoge);


function iniciarJuego(){
    /* Pantalla principal Display Block/none */
    sectionHero.style.display = 'block';
    sectionSeleccionarMascota.style.display = 'none';
    /* Pasa a  pantalla de seleccionar mascota */
    sectionReinicio.style.display = 'none';
    sectionSeleccionarAtaque.style.display = 'none';
    
    botonReInicio.addEventListener('click', reinicioLogo);  
    buttonInicio.addEventListener('click', inicioJuegoo);    
    buttonMascotaJugador.addEventListener('click', seleccionarMascotaJugador);

    botonFuego.addEventListener('click', ataqueFuego);
    botonAgua.addEventListener('click', ataqueAgua);
    botonTierra.addEventListener('click', ataqueTierra);


    botonReiniciar.addEventListener('click', reiniciarJuego);     
}



function inicioJuegoo(){
    sectionHero.style.display = 'none'   
    sectionSeleccionarMascota.style.display = 'block'
}    


function seleccionarMascotaJugador(){    
    sectionSeleccionarAtaque.style.display = 'flex'    
    sectionSeleccionarMascota.style.display = 'none'   

    if(inputHipodoge.checked){
        spanMascotaJugador.innerHTML = 'Hipodoge'        
    }else if (inputCapipepo.checked){
        spanMascotaJugador.innerHTML = 'Capipepo'
    }else if(inputRatigueya.checked){
        spanMascotaJugador.innerHTML = 'Ratigueya'
    }else if(inputLangostelvis.checked){
        spanMascotaJugador.innerHTML = 'Langostelvis'
    }else if(inputTucapalma.checked){
        spanMascotaJugador.innerHTML = 'Tucapalma'
    }else if(inputPydos.checked){
        spanMascotaJugador.innerHTML = 'Pydos'
    }else{let sectionSeleccionarAtaque = document.getElementById('select-atack');
    sectionSeleccionarAtaque.style.display = 'none'    
    let sectionSeleccionarMascota = document.getElementById('select-monster');
    sectionSeleccionarMascota.style.display = 'block'
    alert('debes elegir un Mokepon') 
    }     
    
    seleccionarMascotaEnemigo()
}


function seleccionarMascotaEnemigo(){
    let mascotaAleatorio = aleatorio(1, 6)

    if (mascotaAleatorio == 1){
        spanMascotaEnemigo.innerHTML = 'Hipodoge'        
    }else if(mascotaAleatorio == 2){
        spanMascotaEnemigo.innerHTML = 'Capipepo'
    }else if(mascotaAleatorio == 3){
        spanMascotaEnemigo.innerHTML = 'Ratigueya'
    }else if(mascotaAleatorio == 4){
        spanMascotaEnemigo.innerHTML = 'Langostelvis'
    }else if(mascotaAleatorio == 5){
        spanMascotaEnemigo.innerHTML = 'Tucapalma'
    }else{
        spanMascotaEnemigo.innerHTML = 'Pydos'
    }
    

}

function ataqueFuego(){
    ataqueJugador = 'FUEGO'
    ataqueAleatorioEnemigo()
 
}

function ataqueAgua(){
    ataqueJugador = 'AGUA'
    ataqueAleatorioEnemigo()
 
}

function ataqueTierra(){
    ataqueJugador = 'TIERRA'
    ataqueAleatorioEnemigo()
 
}


function ataqueAleatorioEnemigo(){
    let ataqueAleatorio = aleatorio(1,3)
    if(ataqueAleatorio == 1){
        ataqueEnemigo = 'FUEGO';
    }else if(ataqueAleatorio == 2){
        ataqueEnemigo = 'AGUA';
    }else{
        ataqueEnemigo = 'TIERRA'
    }

    combate()

}


function combate(){    


    if(ataqueEnemigo == ataqueJugador){
      crearMensaje("Es un Empate")
    }else if(ataqueJugador == 'FUEGO' && ataqueEnemigo == 'TIERRA'){
        crearMensaje("Ganaste") 
        vidasEnemigo --
        spanVidasEnemigo.innerHTML = vidasEnemigo
     }else if(ataqueJugador == 'AGUA' && ataqueEnemigo == 'FUEGO'){
        crearMensaje("Ganaste")
        vidasEnemigo --
        spanVidasEnemigo.innerHTML = vidasEnemigo
     }else if(ataqueJugador == 'TIERRA' && ataqueEnemigo == 'AGUA'){
        crearMensaje("Ganaste")
        vidasEnemigo  --
        spanVidasEnemigo.innerHTML = vidasEnemigo
     }else{
        crearMensaje("Perdiste")
        vidasJugador --
        spanVidasJugador.innerHTML = vidasJugador
     }

     revisarVidas()
}
 

function revisarVidas(){
    if (vidasEnemigo == 0){
        crearMensajeFinal("Eres el ganador💚💛🖤")        
    }else if(vidasJugador == 0){
        crearMensajeFinal("Haz perdido🤯💀🤡")        

    }
}

function crearMensaje(resultado){    
    let nuevoAtaqueJugador = document.createElement('p'); 
    let nuevoAtaqueEnemigo = document.createElement('p'); 

    sectionMensajes.innerHTML= resultado;
    nuevoAtaqueJugador.innerHTML = ataqueJugador;
    nuevoAtaqueEnemigo.innerHTML = ataqueEnemigo;
    
    
    sectionAtaquesJugador.appendChild(nuevoAtaqueJugador);
    sectionAtaquesEnemigo.appendChild(nuevoAtaqueEnemigo);

}

function crearMensajeFinal(resultadoFinal){
    
    sectionMensajes.innerHTML = resultadoFinal
    
    

    botonFuego.disabled = true;
    
    botonAgua.disabled = true;
    
    botonTierra.disabled = true;

    
    sectionReinicio.style.display = 'block';



}


function reiniciarJuego(){
    location.reload()
    
}

function reinicioLogo(){
    location.reload();
}


function aleatorio(min, max){
    return Math.floor(Math.random() * (max - min +1) + min);
    }


window.addEventListener('load',iniciarJuego); 