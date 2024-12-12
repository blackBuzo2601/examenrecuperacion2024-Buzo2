//Problema 1
/*Desarrollar un programa que simule una carrera entre dos dígitos adyacentes de 
un número ingresado por el usuario. La mecánica de la carrera dependerá de ciertas 
condiciones.*/

const numeroIntroducido = 2342554354; //numero introducido por el usuario
const carroX = 0;
const carroY = 0;
const numeroIntroducidoString = numeroIntroducido.toString();
let contador = -1;
let valorUno = 0;
let valorDos = 0;
//const numeroIntroducidoString = numeroIntroducido.toString();
if (numeroIntroducido < 0) {
  console.log("No introduzcas numeros negativos");
} else {
  console.log("Numero entero positivo detectado. Proceder");

  for (let i = 0; i < numeroIntroducidoString.length; i++) {
    contador++;
    console.log("contador vale: " + contador);
    valorUno = valorUno.toString();
    valorUno = numeroIntroducidoString[contador];

    console.log("valor uno: " + valorUno);
    contador++;
    console.log("contador vale: " + contador);
    valorDos = numeroIntroducidoString[contador];
  }
}
