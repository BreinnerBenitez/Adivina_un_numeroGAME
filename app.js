

//JUEGO DE LA CLASE
alert("hola Mundo, Juega!!"); // Breinner
let numeroMaximo=100;
let  numero_Secreto = 5//parseInt(Math.floor(Math.random()*numeroMaximo+1)); //  numero randon
var numero_Usuario= prompt(`ingresa un numero del 1-${numeroMaximo}`);
var contador=0;
let maximoIntentos= 6;

console.log(typeof(numero_Secreto)); // me muestra el tipo de dato

if(numero_Secreto==numero_Usuario){ //comparacion de condicional
alert("acertastes, el numero es: "+numero_Usuario)
console.log(numero_Usuario)
contador=contador+1; // el contador es por si acerta a la primera 
alert(`acerto el numero en ${contador} intento ${contador == 1  ? 'eres el mejor':'siempre lo seras' }`);
}else{
     
  while (numero_Secreto!=numero_Usuario){ //bucle para repetir  la pregunta
    contador++;
     //para que me cuente los intentos 
    if(contador==maximoIntentos){
      alert( "numero ingresado fue "+numero_Usuario);
      break; 
   }
  
    alert("numero ingresado fue "+numero_Usuario+", sigue intentando")
     if(numero_Usuario>numero_Secreto){
        alert("el numero se encuentra en una posicion mas abajo")
     }else if(numero_Usuario<numero_Secreto){
        alert("el numero se encuentra en una posicion mas arriba")
     }else{}
     console.log(numero_Usuario);
     

    
     numero_Usuario= prompt(`ingresa un numero del 1-${numeroMaximo}`);
     
  }

    if(numero_Secreto==numero_Usuario){ // compruebo nuevamente para sacar el mensaje antes de los tres intentos
      alert(`acerto el numero en ${contador} intentos,el numero es: ${numero_Secreto}`)
       console.log(numero_Usuario);
     }else{

         alert(`supero el numero de intentos ${maximoIntentos}`)
             console.log(numero_Usuario);
             document.getElementById('probando').innerHTML=`
             <h1><span  class="container__texto-azul">Incorrecto!</span></h1>
             <h2>No Descubriste el número secreto!</h2>`
     }

} 

// Preguntas y practicas Desafio hora de practicar
//1 Muestra una alerta con el mensaje "¡Bienvenida y bienvenido a nuestro sitio web!".

//alert("¡Bienvenida y bienvenido a nuestro sitio web")
//2 Declara una variable llamada nombre y asígnale el valor "Luna".
//let nombre="Luna"
//3Crea una variable llamada edad asígnale el valor 25.
//let edad=25
//4) Establece una variable numeroDeVentas y asígnale el valor 50.
//let numeroDeVentas=50;
// 5) Establece una variable saldoDisponible y asígnale el valor 1000.
//let saldoDisponible =1000;
// 6) Muestra una alerta con el texto "¡Error! Completa todos los campos".
//alert("¡Error! Completa todos los campos");
// 7)Declara una variable llamada mensajeDeError y asígnale el valor "¡Error! Completa todos los campos". Ahora muestra una alerta con el valor de la variable mensajeDeError .
//let mesajeDeError = " ¡Error! Completa todos los campos ";
//alert("MensajeDeError")
// 8)Utiliza un prompt para preguntar el nombre del usuario y almacénalo en la variable nombre .
//let nombre=prompt("ingresa tu nombre ");
//alert (nombre);
//9) Pide al usuario que ingrese su edad usando un prompt y almacénala en la variable edad.
//let edad= prompt("cual es tu edad");
//10)Ahora, si la edad es mayor o igual a 18, muestra una alerta con el mensaje "¡Puedes obtener tu licencia de conducir!".
/*if(edad>=18){

alert("Puedes Obtener una licencia de Conducir")

}else{

    alert("no puedes tener licencia de conducir")
}
*/

// CONDICIONES Y CONCATENACION

//1) Pregunta al usuario qué día de la semana es. Si la respuesta es "Sábado" o "Domingo", muestra "¡Buen fin de semana!". De lo contrario, muestra "¡Buena semana!".

/*let dia = prompt("ingresa dia de la semana en numueros del 1-7, donde 1 es lunes y 7 domingo");

if(dia==6 || dia==7){
alert ("Buen fin de semana!!")
}else{
   alert("Buena semana!!")
} */
//2) Verifica si un número ingresado por el usuario es positivo o negativo. Muestra una alerta informativa.
 
// BREINNER
/*
let numero= prompt("ingresa un numero, gracias");
if (numero> 0){

   alert("el numero es postivo")
}else if(numero<0){

 alert("el numero es negativo")

}else{

   alert("el numero es 0 ")
}
*/
//3 Crea un sistema de puntuación para un juego. Si la puntuación es mayor o igual a 100, muestra "¡Felicidades, has ganado!". En caso contrario, muestra "Intentalo nuevamente para ganar.".

/*let puntuacion= prompt("ingresa tu puntuacion, porfavor.");

if(puntuacion>=100){
alert("Felicidades!!, Has ganado")
}else {
   alert("Intentalo nuevamente para Ganar")
} */

//4 Crea un mensaje que informe al usuario sobre el saldo de su cuenta, utilizando un template string para incluir el valor del saldo.
/*
let saldoCuenta=prompt("cual es tu saldo de cuenta");

if(saldoCuenta<0 || saldoCuenta>0){
alert(`si es correcto tu saldo es: ${saldoCuenta}`); 
}else{

   alert("escriba numeros")
}*/

//5) Pide al usuario que ingrese su nombre mediante un prompt. Luego, muestra una alerta de bienvenida usando ese nombre.
 
//let nombre = prompt("ingresa nombre ");

//alert(`Bienvenido ${nombre} Gracias por estar aqui`)


