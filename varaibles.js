
// variables de escritura

let cajadeTexto  = document.getElementById ( "cajadeTexto")
let  sedR = document.getElementById ( "sedR")
let  hambreR = document.getElementById ( "hambreR")
let  felicidadR = document.getElementById ( "felicidadR")
let estadisticasDia = document.getElementById ("hoy")
let puntodeAcion = document.getElementById ("puntos")

// variables del juego en general 
    
function stats (_emociones) {
   let emocionesReal = (Math.round(Math.random()*9)) +1 ;
   return emocionesReal
}

let hambre = (stats("hambre"));
hambreR.textContent = hambre + " / 10";
let sed = (stats("sed")) ;
sedR.textContent = sed + " / 10";
let felicidad = (stats("felicidad"));
felicidadR.textContent = felicidad + " / 10";
let boton = 0;
let textoCharla = " holas "
let puntosAC = 0
puntodeAcion.textContent = puntosAC
let hoy = 0 
estadisticasDia.textContent = hoy

function dia (diahoy){
   diahoy = diahoy + 1 ;
   return diahoy ; 
} 



// variables del hud

let pet = 0

let codigodeChat = 0
 
let bloqueo = false 
if (codigodeChat < -1){
    
} 
function continu (){
   $("#cajadeTexto").on ("click" , function(){
          $ ("#cajadeTexto").slideUp ("fast" , function() { 
        codigodeChat ++
        
         $ ("#cajadeTexto").slideDown ("fast")
          game ()
     } )
      }
   )}
continu()

// variables de inicio de juego

function gamz  (_juego ) {
   //el juego puede estar trucado por que nuynca tengo suerte y siempre pierdo :( asi que si esta en 0 no es mal codigo es que no tengo suerte 
   let puzle = (Math.round(Math.random()*3)) ;
   return puzle;
}

function PrimerDia (valor){
   cajadeTexto.textContent =  " buenos dias!! ✍(◔◡◔), este es el dia " + hoy + "  mis estadisticas base son:" + "(hambre:" +  hambre + ")"+ "(felicidad:" + felicidad + ")" + "(sed:" + sed + ")" + " en que quieres gastar sus puntos?"
   if (valor){
      console.log (true)
      puntosAC = 1
      hoy ++
      puntodeAcion.textContent = puntosAC
      document.getElementById("cajadeTexto").onclick = () =>{
      }
     $ ("#cajadeTexto").text  (" tienes " + puntosAC + " de puntos elije un de mis emociones para subirle un punto  (1) felicidad  (2) comida  (3) sed ") ;
         comer()
         beber ()
         hablar () 
         emocion ()
   }
}
function noche (){
   $ ("#cajadeTexto").unbind ("click")
   console.log (codigodeChat)
   felicidad --
   hambre--
   sed --
   puntosAC = 1
   codigodeChat = 10
   emocion()
   $("#cajadeTexto").text  (" ya es de noche perdi un punto de cada cosa")
   document.getElementById("cajadeTexto").onclick = () =>{
      codigodeChat ++;
      if((codigodeChat >= 10) && (codigodeChat < 999)){
         codigodeChat = 8;
         continu()
      }
      else{
      }
      game ()
   }
}

//actualizar hud
 function emocion (){
   $("#felicidadR").text (felicidad + " / 10")
   $("#sedR").text (sed+ " / 10" )
   $("#hambreR").text ( hambre + " / 10")
   $("#puntos").text (puntosAC)
   $("#hoy").text (hoy)
 }


 // modo nocturno 

 let modoOscuro = document.getElementById("modo");
chequearModoOscuro(localStorage.getItem("oscuro"))
console.log(localStorage.getItem("oscuro"))
function chequearModoOscuro(modo){
    if (modo == "true"){
        console.log("true")
        document.body.id = ""
    }
    else{
        console.log("false")
        document.body.id = "modoNoche"
    }
}

modoOscuro.onclick = () =>{
    if (localStorage.getItem("oscuro") == "true"){
        localStorage.setItem("oscuro", "false")
        chequearModoOscuro(localStorage.getItem("oscuro"))
    }
    else{
        localStorage.setItem("oscuro", "true")
        chequearModoOscuro(localStorage.getItem("oscuro"))
    }
}


   // final
let puntaje = 0
let puntos = 0
function mathF () {
   puntaje =  sed + hambre + felicidad + hoy
}
function puntajeF (){
   mathF ()
   puntos = getElementById ("puntuacion")
   puntos.textContent = " tu puntuacion es: " + mathF
}


