//Problema 1
/*Desarrollar un programa que simule una carrera entre dos dígitos adyacentes de 
un número ingresado por el usuario. La mecánica de la carrera dependerá de ciertas 
condiciones.*/

const numeroIntroducido = 2342554354; //numero introducido por el usuario //10 caracteres
const carroX = 0;
const carroY = 0;
const numeroIntroducidoString = numeroIntroducido.toString();
let contador = -1;
let letras = 0;
let valorUno = 0;
let valorDos = 0;
let segundoValorUno = 0;
let segundoValorDos = 0;

let sumaSegundoPar = 0;
let numeroUno = 0;
if (numeroIntroducido < 0) {
  console.log("No introduzcas numeros negativos");
} else {
  console.log("Numero entero positivo detectado. Proceder");
  for (let i = 0; i < numeroIntroducidoString.length; i++) {
    //ITERAR POR LA CANTIDAD DE DIGITOS
    contador++; //0
    if (contador > 1) {
      //este condicional se cumple cuando ya se incrementó dos veces contador
      segundoValorUno = numeroIntroducidoString[contador];
      contador++;
      segundoValorDos = numeroIntroducidoString[contador];
      let sumaSegundoPar = new String(segundoValorUno + "+" + segundoValorDos);
      console.log(
        "imprimiendo suma del segundo par:" + eval(sumaSegundoPar.valueOf())
      );

      //cuando contador vale 1, es porque ya se iteró dos veces
    } else {
      valorUno = numeroIntroducidoString[contador]; //tomaar el primer numero
      contador++; //aqui contador vale 1
      valorDos = numeroIntroducidoString[contador];
      let sumaPrimerPar = new String(valorUno + "+" + valorDos);
      console.log(
        "imprimiendo suma del primer par:" + eval(sumaPrimerPar.valueOf())
      );
      //con valueOf podemos convertir un objeto string a su
      //contraparte definitiva. es lo que queremos, queremos convertir un string a numero
      //(debido a que no existe algo como to.Number() al igual que toString())
    }
  }
}
