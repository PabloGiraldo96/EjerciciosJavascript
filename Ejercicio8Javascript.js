//Hacer listado de 15 mapas que tengan como atributos; nomrePlaneta, latitud, longitud, nivelOxigeno, volumenAgua.
// Con dicha información muestre; 1. Cantidad de agua de los planetas | 2. totalOxigeno de los planetas * 100 | 3. encontrar planeta con nivel de oxigeno negativo y mostrarlo | 4. encontrar si algún planeta no tiene agua y mostrar su información.  
 
let mapas = [
  {nombrePlaneta: "Planeta 1", latitud: 10, longitud: 20, nivelOxigeno: 50, volumenAgua: 100},
  {nombrePlaneta: "Planeta 2", latitud: 30, longitud: 40, nivelOxigeno: -10, volumenAgua: 0},
  {nombrePlaneta: "Planeta 3", latitud: 50, longitud: 60, nivelOxigeno: 80, volumenAgua: 200},
  {nombrePlaneta: "Planeta 4", latitud: 70, longitud: 20, nivelOxigeno: 50, volumenAgua: 150},
  {nombrePlaneta: "Planeta 5", latitud: 20, longitud: 80, nivelOxigeno: -250, volumenAgua: 450},
  // ...
  {nombrePlaneta: "Planeta 15", latitud: 170, longitud: 180, nivelOxigeno: -40, volumenAgua: 0}
];

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














