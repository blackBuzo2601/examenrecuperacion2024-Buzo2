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
let sumaPrimerPar = 0;
let numeroUno = 0;
if (numeroIntroducido < 0) {
  console.log("No introduzcas numeros negativos");
} else {
  console.log("Numero entero positivo detectado. Proceder");
  for (let i = 0; i < numeroIntroducidoString.length; i++) {
    //iterar por la cantidad de digitos
    contador++; //0

    valorUno = numeroIntroducidoString[contador]; //tomaar el primer numero
    contador++; //1

    valorDos = numeroIntroducidoString[contador];

    let suma = new String(valorUno + "+" + valorDos);
    console.log(eval(suma.valueOf())); //con valueOf podemos convertir un objeto string a su
    //contraparte definitiva. es lo que queremos, queremos convertir un string a numero
    //(debido a que no existe algo como to.Number() al igual que toString())
  }
}
