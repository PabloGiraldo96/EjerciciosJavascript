//Diseñar algoritmo que reciba 10 números y muestre cuál es el más cercano a 0, si es un número negativo debe mostrar su valor absoluto.

//Ciclo for que va ir hasta 10 y va a llevar la operación por dentro.

//Se utiliza el término null para inicializar la variable numeroMasCercano ya que cuando entra a iterar no tiene ningún valor y no se puede comparar a otro número, con el término null podemos revisar si el usuario ha ingresado algún número antes de entrarlo a comparar. 

//La varible valorAbsoluto se iguala a la variable numero que es un prompt ingresado por el usuario, aquí se utiliza el método .abs() para tomar el valor absoluto de un número.

//Con el condicional if vamos a revisar si numeroMasCercano sigue estando vacío, si es así le vamos a llevar valorAbsoluto (Que es el número que ha ingresado el usuario) sino, vamos a revisar si valorAbsoluto es menor a numeroMasCercano entonces declaramos que numeroMasCercano es igual a valorAbsoluto, reteniendo el número menor en cada iteración y guardándolo en numeroMasCercano


function mostrarNumeroMasCercano(){
let numeroMasCercano = null;
	for(i=0; i < 10; i++){
		let numero = prompt("Ingrese número")
		let valorAbsoluto = Math.abs(numero);
		if(numeroMasCercano === null){
			numeroMasCercano = valorAbsoluto;
		}
		else{
			if(valorAbsoluto < numeroMasCercano){
			numeroMasCercano = valorAbsoluto;
			}
		}
	}
	return console.log(`El número más cercano a 0 es: ${numeroMasCercano}`)
}

mostrarNumeroMasCercano()


//Función Flecha

//const mostrarNumeroMasCercano = () => {
//let numeroMasCercano = null;
//	for(i=0; i < 10; i++){
//		let numero = prompt("Ingrese número")
//		let valorAbsoluto = Math.abs(numero);
//		if(numeroMasCercano === null){
//			numeroMasCercano = valorAbsoluto;
//		}
//		else{
//			if(valorAbsoluto < numeroMasCercano){
//			numeroMasCercano = valorAbsoluto;
//			}
//		}
//	}
//	return console.log(`El número más cercano a 0 es: ${numeroMasCercano}`)
//}
//
//mostrarNumeroMasCercano()
