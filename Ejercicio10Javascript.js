// Elaborar programa que permita recibir 300 alimentos y en una función primaria mostrar los alimentos tipo vegetal mayores a 200 unidades de energía, se debe demorar 5 segundos y debe llamar una función callback que muestre la sumatoria de los niveles de energía entregados. 

// Función que permite crear una palabra aleatoria.
function generarPalabraAleatoria(length){
    const letra = 'abcdefghijklmnopqrstuvwxyz';
    let resultado ='';
    for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * letra.length);
    resultado += letra[randomIndex];
  }
  return resultado;
}

//Función que permite iterar entre Animal, Vegetal e Insecto y elegir uno de forma aleatoria. 
function generarTipo(){
    let tipos = ["Animal", "Vegetal", "Insecto"]
    const tipoRandom = Math.floor(Math.random() * tipos.length)
    return tipos[tipoRandom]
}

//Arreglo vacío de alimentosGrogu, luego se llenará con el objeto alimento grogu. 
let alimentosGrogu=[];

// Creamos el ciclo que nos creará los 300 objetos alimentoGrogu; a su vez las propiedades del objeto alimentoGrogu que son nombre, tipo y nivel de energía, se llenarán con las funciones hechas arriba para generar esos valores de manera aleatoria. 
for(i=0; i<300; i++){
alimentoGrogu ={}
alimentoGrogu["nombre"] = generarPalabraAleatoria(5)
alimentoGrogu["tipo"] = generarTipo()
alimentoGrogu["nivelEnergia"] = Math.floor(Math.random() * 500)
alimentosGrogu.push(alimentoGrogu);
}

//Mostramos el arreglo ahora lleno con los 300 objetos
console.log(alimentosGrogu)

//Falta función principal
