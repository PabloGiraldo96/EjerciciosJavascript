// Punto 4, calcular salario de los empleados de Watto

let salarioMensual, salarioBruto, salarioNeto, comisiones, deducciones;

function calcularSalario(){
	salarioBruto = salarioMensual + comisiones;
	deducciones = salarioBruto * 0.05;
	salarioNeto = salarioBruto - deducciones;
	return "Si el salario Mensual tiene un valor de: " + salarioMensual + " las comisiones un valor de: " + comisiones + " y las deducciones un 5%, entonces el valor del salario neto del trabajador es: " + salarioNeto;
};

salarioMensual = 3500000;
comisiones = 1500000;

console.log(calcularSalario());



// En funcion flecha.

const calcularSalarioFlecha = () => {

	salarioBruto = salarioMensual + comisiones;
	deducciones = salarioBruto * 0.05;
	salarioNeto = salarioBruto - deducciones;
	return "Si el salario Mensual tiene un valor de: " + salarioMensual + " las comisiones un valor de: " + comisiones + " y las deducciones un 5%, entonces el valor del salario neto del trabajador es: " + salarioNeto;

}

salarioMensual = 3500000;
comisiones = 1500000;

console.log(calcularSalarioFlecha());