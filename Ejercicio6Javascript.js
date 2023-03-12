// Elaborar un programa que permita recibir 20 edades y 20 códigos diferentes generados aleatoriamente, determine cuál edad es mayor y si hay edades repetidas, dicho número de repeticiones. 

// Recibir 20 números(edades) y 20 códigos diferentes aleatorios 

// Creamos dos arreglos vacíos que vamos a llenar con un ciclo for y en su sentencia el método .push para llenarlo con números aleatorios (Math.random, Math.floor)

let edades = [];
let codigos = [];

// Función para generar un código aleatoriamente con el método Math.floor, Math.random() dentro de un array vacío que va a tener su tamaño definido en el parámetro 

function generarPalabraAleatoria(length){
	const letra = 'abcdefghijklmnopqrstuvwxyz123456789';
	let resultado ='';
  	for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * letra.length);
    resultado += letra[randomIndex];
  }
  return resultado;
}

// Creamos el ciclo for que irá iterando y empujando con el método .push un nuevo valor aleatorio a los arreglos edades y codigos, y lo ordenamos hasta 20 vueltas como es requerido 

// Con los métodos de arreglos Math.random para generar un aleatorio y Math.floor para redondearlo al número menor vamos a generar las edades aleatorias y códigos aleatorios

for (let i = 0; i < 20; i++) {
  edades.push(Math.floor(Math.random() * 100)); // Generamos un número entero aleatorio entre 0 y 99 y con .push lo empujamos al arreglo vacío edades
  codigos.push(generarPalabraAleatoria(3)); // Utilizamos la función hecha anteriormente para generar un código aleatorio de 3 letras o números y con .push lo empujamos al arreglo vacío codigo. 
}

// Buscamos la edad mayor ingresando al arreglo edades y con un ciclo for y un condicional confirmaremos si edades en su posición i es mayor a la variable creada edadMayor y si es así, le llevamos el valor a la variable edad Mayor y creamos una variable numero de repeticiones que estará en 1.

// Por el else if se revisará si dentro del arreglo edades hay una edad que sea estrictamente igual a edad mayor, sí es así incrementa la variable numero de repeticiones con un ++ o +1

let edadMayor = edades[0];
let numRepeticiones = 1;
for (let i = 1; i < edades.length; i++) {
  if (edades[i] > edadMayor) {
    edadMayor = edades[i];
    numRepeticiones = 1;
  } else if (edades[i] === edadMayor) {
    numRepeticiones++;
  }
}

console.log("Las edades aleatorias son: " + edades);
console.log("Los códigos aleatorios: " + codigos);
console.log("La edad mayor es " + edadMayor + " y se repite " + numRepeticiones + " veces.");




//funcion flecha de la función usada para generar el código aleatorio, el resto de requisitos se hacen con ciclos for.

/*const generarPalabraAleatoria = (length) =>{
	const letra = 'abcdefghijklmnopqrstuvwxyz123456789';
	let resultado ='';
  	for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * letra.length);
    resultado += letra[randomIndex];
  }
  return resultado;
}*/ 
