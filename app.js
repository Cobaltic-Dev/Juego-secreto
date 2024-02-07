
//en esta variable se asigna el valor desde la función
let numeroSecreto = 0;
let intentos = 0;
let listyaNumerosSorteados = [];
let numeroMaximo = 10;

//se crea funcion para asignar texto a los elemnto s de manera dinamica y reduciendo codigo
function asignarTextoElemento(elemento,texto){
    //define variable para indicar el paremtro 'elemento' enla funcion
    let elementoHTML = document.querySelector(elemento);//la variable se asigna al parametro 'elemento'
    elementoHTML.innerHTML = texto //lo que obtenga el parametro 'texto' se asigna al segundo parametro de la funcion
    return;
}

// se crea una funcion para despues ser llamada por el HTML
function verificarIntento(){
   let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
   if(numeroDeUsuario === numeroSecreto){
    
    asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos===1)?'vez':'veces'}`);
    document.getElementById('reiniciar').removeAttribute('disabled');

   }else{
    if (numeroDeUsuario>numeroSecreto){
        asignarTextoElemento('p','El número secreto es menor');
    }else{
        asignarTextoElemento('p','El número secreto es mayor');
    }
    intentos++;
    limpiarCaja();
   }
   return; 
}


function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    //si ya sorteamos todos los numeros
    if (listyaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','Ya se sortearon todos los numeros posibles');
        
    }else{    

        //si el numero generado esta en la lista
        if (listyaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
            
        }else{
            listyaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}
function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del nímero secreto!');
    asignarTextoElemento('p',`Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}
//funcion para reiniciar el juego   
function reiniciarJuego(){
    //limpiar caja
    limpiarCaja();
    //se generan todas la condiciones iniciales del juego
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    
}

condicionesIniciales();