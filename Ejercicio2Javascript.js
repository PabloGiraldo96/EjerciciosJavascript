// Ejercicio 2, separar los valores del array de modo que muestre el nombre del conductor. 

function recibirPalabra(){
	palabraNave = ["AFQ", "2554", "James Smith"];
	separarPalabra = palabraNave.splice(2,3);
	return "El nombre del conductor de la nave es: " + separarPalabra;
}

console.log(recibirPalabra())


// En funcion flecha.

const recibirPalabraFlecha = () => {
	palabraNave = ["AFQ", "2554", "James Smith"];
	separarPalabra = palabraNave.splice(2,3);
	return "El nombre del conductor de la nave es: " + separarPalabra;
}

console.log(recibirPalabraFlecha())