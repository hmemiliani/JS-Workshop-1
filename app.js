//Que se espera de los siguientes ejercicios, como lo solicita el Ejercicio 4


/* - Ejercicio 5: Declara una variable llamada miNumero y asígnale el valor 10. Usa console.log para imprimir tu variable en la consola.
 */
let miNumero = 10;

console.log(miNumero);

/* - Ejercicio 6: Crea una variable llamada miBooleano con el valor true. Imprime el tipo de dato usando typeof en un console.log. */

let miBooleano = true;

console.log(typeof miBooleano);

/* - Ejercicio 7: Crea una variable llamada miCadena y asígnale un valor de tu elección. Imprime la longitud de la cadena en la consola. */

let miCadena = "Esto es un string";

console.log(miCadena.length);

/* - Ejercicio 8: Crea una variable llamada miArray y asígnale un array con 3 elementos de tu elección, estos elementos deben ser string, number y array. Imprime el array en la consola. */

let miArray = ["cosa 1", 76, [1, 2, 4]];

console.log("El array es:", miArray);

/* - Ejercicio 9: Crea una variable llamada miObjeto y asígnale un objeto con 3 propiedades de tu elección. Imprime el objeto en la consola. */

miObjeto = {
    nombre: "Juan",
    edad: 30,
    ciudad: "Madrid"
  };
  

  console.log(miObjeto);


  /* 
  - Ejercicio 10: Utiliza prompt para pedirle al usuario su nombre y almacénalo en una variable llamada nombreUsuario. Usa alert para mostrar un saludo que incluya el nombre del usuario.
 */

let nombreUsuario = prompt("Digite su nombre de usuario:");

alert(nombreUsuario);

/* 
- Ejercicio 11: Crea una confirmación con confirm que pregunte al usuario si le gusta JavaScript. Guarda la respuesta en una variable y muestra en consola un mensaje acorde a la respuesta.
 */

let respuesta = confirm("Hey usuario, te gusta javascript?");

if (respuesta) {
  console.log("Genial! si te gusta podras mejorar muy rapido! sigue asi");
}else{
  console.log("oh... que mal... pero bueno, no te desanimes, quizas te pueda gustar en el futuro");
};

/*  Sección 4: Uso de console para Depuración */

/* - Ejercicio 9: Escribe un mensaje de advertencia usando console.warn con el texto "Esto es solo una práctica". */

console.warn("Esto es solo una practica");


/* - Ejercicio 10: Genera un mensaje de error utilizando console.error para simular un fallo al intentar ejecutar una operación.
 */


console.error("fallo al intentar ejecutar ");


/* - Ejercicio 11: Crea una tabla en la consola a partir de un array con los números del 1 al 5 utilizando console.table. */

const numeros = [1, 2, 3, 4, 5];
const tabla = [];

numeros.forEach(numero => {
    tabla.push({ Numero: numero });
});

console.table(tabla);


/* - Ejercicio 12: Crea un nuevo archivo llamado app.js. Mueve todas las etiquetas script que has escrito hasta ahora a este nuevo archivo. */

//Done

/* - Ejercicio 13: Enlaza el archivo app.js a tu index.html utilizando la etiqueta script al final del <body> */

//Done



