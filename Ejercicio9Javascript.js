// Ejercicio 9, asignar actividades al Pandawan mayor a 15 años (Manejo del sable de luz) y si es menor de 15 años manejo de la fuerza. 
//Programar función que asocie los datos de {nombre, planeta, edad, estatura} y luego llamar una función secundaria que confirme la edad y el manejo que va a tener

// Trabajándolo con objetos, la clase Padawan tiene un constructor que toma los datos del Padawan (nombre, planeta, edad y estatura) para después declaralo y mostrarlo en consola.

class Padawan { constructor(nombre, planeta, edad, estatura){ 
	this.nombre = nombre; 
	this.planeta = planeta; 
	this.edad = edad; 
	this.estatura = estatura; 
	}
// El método actividadPadawan() clasifica y muestra en consola la actividad asignada al Padawan según su edad, sí es mayor a 15, manejo de sable, si es menor manejo de fuerza; 

    actividadPadawan(){ 
        this.edad < 15 ? 
        console.log(`${this.nombre} debe aprender manejo de la fuerza.`) : 
         console.log(`${this.nombre} debe aprender manejo del sable de luz.`);
        }   
} 

//Declaramos los objetos

const padawan1 = new Padawan("Pawadanita", "namekusei", 24, 1.50)
const padawan2 = new Padawan("Padawano", "Jupiter", 27, 1.77)
const padawan3 = new Padawan("Padawnsu", "Marte", 12, 1.57)


padawan1.actividadPadawan();
