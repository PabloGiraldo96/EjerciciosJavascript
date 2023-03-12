// Ejercicio 5, sables de luz negativos y positivos. 

// Aplicando función tradicional con operador ternario.

const sablesdeLuzTotales = [1, -4, 2, -2, 5, -7, 8, -1];

const sablesPositivos = [];
const sablesNegativos = [];

function calcularSables(){
	sablesdeLuzTotales.forEach(num => {
		num >= 0 ? 
		sablesPositivos.push(num) :
		sablesNegativos.push(num); 
})
	return "La cantidad de sables contada fue: " + sablesdeLuzTotales + " Los sables positivos fueron: " + sablesPositivos + " y los sables negativos fueron: " + sablesNegativos;
}

console.log(calcularSables())

// En funcion flecha y operador ternario

// const calcularSables = () => {
// 	sablesdeLuzTotales.forEach(num => {
// 		num >= 0 ? 
// 		sablesPositivos.push(num) :
// 		sablesNegativos.push(num); 
// })
// 	return "La cantidad de sables contada fue: " + sablesdeLuzTotales + " Los sables positivos fueron: " + sablesPositivos + " y los sables negativos fueron: " + sablesNegativos;
// }

// console.log(calcularSables())
