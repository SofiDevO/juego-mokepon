
let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

class Mokepon {
    constructor(nombre, foto, vida){
        this.nombre = nombre;
        this.foto = foto;
        this.vida = vida;
    }
}

let hipodoge = new Mokepon('Hipodoge', './mokepones/Hipodogue.pxo (1).png', 5);
let capipepo = new Mokepon('Capipepo', './mokepones/Capipepo.png', 5);
let ratigueya = new Mokepon('Ratigueya', './mokepones/Ratiguey02a.png', 5);
let langostelvis = new Mokepon('Langostelvis', './mokepones/Langostelvis.png', 5);
let tucapalma = new Mokepon('Tucapalma', './mokepones/Tucapalma.png', 5);
let pydos = new Mokepon('Pydos', './mokepones/Pydos.png', 5);




function iniciarJuego(){
   
   
    let botonReInicio = document.getElementById('logo-boton')
    botonReInicio.addEventListener('click', reinicioLogo)
     
    let sectionHero = document.getElementById('hero');
    sectionHero.style.display = 'block'

    let sectionSeleccionarMascota = document.getElementById('select-monster');
    sectionSeleccionarMascota.style.display = 'none'

    let sectionReinicio = document.getElementById('reinicio');
    sectionReinicio.style.display = 'none'

    let sectionSeleccionarAtaque = document.getElementById('select-atack');
    sectionSeleccionarAtaque.style.display = 'none'
   

    let buttonInicio = document.getElementById('jugar');
    buttonInicio.addEventListener('click', inicioJuegoo);

   
    
    let buttonMascotaJugador = document.getElementById('button-mascota');
    buttonMascotaJugador.addEventListener('click', seleccionarMascotaJugador);

    

    let botonFuego = document.getElementById('button-fuego')
    botonFuego.addEventListener('click', ataqueFuego);
    let botonAgua = document.getElementById('button-agua')
    botonAgua.addEventListener('click', ataqueAgua);
    let botonTierra = document.getElementById('button-tierra')
    botonTierra.addEventListener('click', ataqueTierra);

    let botonReiniciar = document.getElementById("reinicio");
    botonReiniciar.addEventListener('click', reiniciarJuego);

    
        
     
}



function inicioJuegoo(){
    let sectionHero = document.getElementById('hero');
    sectionHero.style.display = 'none'
   
    let sectionSeleccionarMascota = document.getElementById('select-monster');
    sectionSeleccionarMascota.style.display = 'block'
}    
     

function seleccionarMascotaJugador(){
   
    
    let sectionSeleccionarAtaque = document.getElementById('select-atack');
    sectionSeleccionarAtaque.style.display = 'flex'    
    let sectionSeleccionarMascota = document.getElementById('select-monster');
    sectionSeleccionarMascota.style.display = 'none'


    let inputHipodoge = document.getElementById('hipodoge');
    let inputCapipepo =  document.getElementById('capipepo');
    let inputRatigueya = document.getElementById('ratigueya');
    let inputLangostelvis = document.getElementById('langostelvis');
    let inputTucapalma = document.getElementById('tucapalma');
    let inputPydos = document.getElementById('pydos');
    let spanMascotaJugador = document.getElementById('mascota-jugador')
    
    
   

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
    let spanMascotaEnemigo = document.getElementById('mascota-enemigo')

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
    
    let spanVidasJugador = document.getElementById('vidas-jugador');
    let spanVidasEnemigo = document.getElementById('vidas-enemigo');


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
    let sectionMensajes = document.getElementById('resultado')
    let sectionAtaquesJugador = document.getElementById('ataques-jugador')
    let sectionAtaquesEnemigo = document.getElementById('ataques-enemigo')

    
    let nuevoAtaqueJugador = document.createElement('p'); 
    let nuevoAtaqueEnemigo = document.createElement('p'); 

    sectionMensajes.innerHTML= resultado;
    nuevoAtaqueJugador.innerHTML = ataqueJugador;
    nuevoAtaqueEnemigo.innerHTML = ataqueEnemigo;

    
    
    sectionAtaquesJugador.appendChild(nuevoAtaqueJugador);
    sectionAtaquesEnemigo.appendChild(nuevoAtaqueEnemigo);

}

function crearMensajeFinal(resultadoFinal){
    let sectionMensajes = document.getElementById('resultado')
    
    sectionMensajes.innerHTML = resultadoFinal
    
    

    let botonFuego = document.getElementById('button-fuego')
    botonFuego.disabled = true;
    
    let botonAgua = document.getElementById('button-agua')
    botonAgua.disabled = true;
    
    let botonTierra = document.getElementById('button-tierra')
    botonTierra.disabled = true;

    
    let sectionReinicio = document.getElementById('reinicio');
    sectionReinicio.style.display = 'block'

   
    

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