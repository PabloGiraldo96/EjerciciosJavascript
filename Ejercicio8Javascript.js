//Hacer listado de 15 mapas que tengan como atributos; nomrePlaneta, latitud, longitud, nivelOxigeno, volumenAgua.
// Con dicha información muestre; 1. Cantidad de agua de los planetas | 2. totalOxigeno de los planetas * 100 | 3. encontrar planeta con nivel de oxigeno negativo y mostrarlo | 4. encontrar si algún planeta no tiene agua y mostrar su información.  

//Creamos una función que nos devuelve una palabra aleatoria, toma como parametro el número de caracteres que queramos poner; toma las variables de letra (Casi todo el abecedario) y la variable resultado que se mantendrá vacía; luego con un ciclo for los llenamos aleatoriamente con los métodos Math.floor() y Math.random(), guardamos este resultado en la variable randomIndex, y luego la llevamos como valor de la variable resultado.

function generarPalabraAleatoria(length){
	const letra = 'abcdefghijklmnopqrstuvwxyz';
	let resultado ='';
  	for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * letra.length);
    resultado += letra[randomIndex];
  }
  return resultado;
}

// Declaramos el arreglo de objetos mapas (Vacío)

let mapas = [];

//Declaramos el objeto mapa y sus atributos, para los atributos integer, los podemos generar como un número aleatorio de 1 a 100 con los métodos Math.floor() y Math.random() // Para el nombre del planeta usamos la función de arriba generarPalabraAleatoria
//Los metemos dentro de un ciclo for que va a ir de 1 a 16 (contando así los 15 mapas que se solicitan) y llenando sus atributos de manera aleatoria. 

for(i=1; i<16;i++){
  mapa = {}
  mapa["nombrePlaneta"] =  generarPalabraAleatoria(8)
  mapa["latitud"] = Math.floor(Math.random() * 100)
  mapa["longitud"]= Math.floor(Math.random() * 100)
  mapa["nivelOxigeno"]= Math.floor(Math.random() * 100)
  mapa["volumenAgua"]= Math.floor(Math.random() * 100)

  mapas.push(mapa);
}

console.log(mapas)
// La función sumarAgua toma como parámetro el arreglo mapas, inicia una variable de totalAgua en 0, e itera el número de valores del arreglo, la variable totaAgua es igual a el arreglo en su posición i.volumen de agua; se devuelve la variable totalAgua.
function sumarAgua(mapas) {
  let totalAgua = 0;
  for (let i = 0; i < mapas.length; i++) {
    totalAgua += mapas[i].volumenAgua;
  }
  return totalAgua;
}

// La variable totalAgua va a guardar el resultado de la función sumarAgua() y luego se imprime con un console.log
let totalAgua = sumarAgua(mapas);
console.log(`La cantidad total de agua de los 15 planetas es: ${totalAgua} `);


// La función de multiplicar oxígeno es igual, solo que se devuelve el valor de la variable totalOxigeno * 100, como es requerido. 
function MultiplicarOxigeno(mapas) {
  let totalOxigeno = 0;
  for (let i = 0; i < mapas.length; i++) {
    totalOxigeno += mapas[i].nivelOxigeno;
  }
  return totalOxigeno * 100;
}

let totalOxigeno = MultiplicarOxigeno(mapas);
console.log(`La cantidad total de oxígeno de los 15 planetas multiplicado por 100 es: ${totalOxigeno} `);

// Para la función de encontrar oxígeno negativo, entramos a iterar el arreglo mapas y adentro creamos una condición que revise si mapas.nivelOxigeno es menor a 0 (Es decir negativo), y sí es así imprimir la información del mapa(true) sino, no devuelva nada(false)

function encontrarOxigenoNegativo(mapas) {
  for (let i = 0; i < mapas.length; i++) {
    if (mapas[i].nivelOxigeno < 0) {
      console.log("El planeta: " + mapas[i].nombrePlaneta + " tiene un nivel de oxígeno negativo.");
      console.log("Información general:");
      console.log(mapas[i]);
      return true;
    }
  }
  return false;
}


encontrarOxigenoNegativo(mapas)

// La función encontrarSinAgua recorre el arreglo y adentro se crea una condición que revisa si mapas.volumenAgua es estrictamente igual a 0, sí es así muestra la información del mapa, sino, no devuelve nada. 

function encontrarSinAgua(mapas) {
  for (let i = 0; i < mapas.length; i++) {
    if (mapas[i].volumenAgua === 0) {
      console.log("El planeta:  " + mapas[i].nombrePlaneta + " no tiene agua.");
      console.log(`La información que busca del mapa es: `);
      console.log(mapas[i]);
      return true;
    }
  }
  return false;
}


// Bloque de funciones flecha

//const sumarAgua = (mapas) => {
//  let totalAgua = 0;
//  for (let i = 0; i < mapas.length; i++) {
//    totalAgua += mapas[i].volumenAgua;
//  }
//  return totalAgua;
//}

//const MultiplicarOxigeno = (mapas) => {
//  let totalOxigeno = 0;
//  for (let i = 0; i < mapas.length; i++) {
//    totalOxigeno += mapas[i].nivelOxigeno;
//  }
//  return totalOxigeno * 100;
//}

//const encontrarOxigenoNegativo = (mapas) => {
//  for (let i = 0; i < mapas.length; i++) {
//    if (mapas[i].nivelOxigeno < 0) {
//      console.log("El planeta: " + mapas[i].nombrePlaneta + " tiene un nivel de oxígeno negativo.");
//      console.log("Información general:");
//      console.log(mapas[i]);
//      return true;
//    }
//  }
//  return false;
//}

//const encontrarSinAgua = (mapas) => {
//  for (let i = 0; i < mapas.length; i++) {
//    if (mapas[i].volumenAgua === 0) {
//      console.log("El planeta:  " + mapas[i].nombrePlaneta + " no tiene agua.");
//      console.log(`La información que busca del mapa es: `);
//      console.log(mapas[i]);
//      return true;
//    }
//  }
//  return false;
//}












