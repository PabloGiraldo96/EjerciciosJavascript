// Ejercicio 3, temperatura media de la luna de Endor.

let temperaturaMaxima, temperaturaMinima, media, temperaturaMedia;

function calcularTemperatura(){
	media = temperaturaMaxima + temperaturaMinima;
	temperaturaMedia = media / 2;
	return "Si la temperatura máxima es: " + temperaturaMaxima + " grados y la temperatura mínima es: " + temperaturaMinima + " grados, la temperatura media de la luna de Endor es: " + temperaturaMedia + " grados.";
}

temperaturaMaxima = 85;
temperaturaMinima = 21;

console.log(calcularTemperatura())

// En funcion flecha. 

const calcularTemperaturaFlecha = () => {
	media = temperaturaMaxima + temperaturaMinima;
	temperaturaMedia = media / 2;
	return "Si la temperatura máxima es: " + temperaturaMaxima + " grados y la temperatura mínima es: " + temperaturaMinima + " grados, la temperatura media de la luna de Endor es: " + temperaturaMedia + " grados.";
}

temperaturaMaxima = 85;
temperaturaMinima = 21;

console.log(calcularTemperaturaFlecha())
