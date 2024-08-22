/*
Clase 4 en vídeo | 31/07/2024
Mapas, bucles y funciones
https://www.twitch.tv/videos/2212289583?t=00h17m45s
*/

// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

// 1. Crea una función que reciba dos números y devuelva su suma

function sumaDos(num1, num2) {
	return num1 + num2;
}

// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos

function mayorNumDeArray(array) {
	let numMayor = Number.NEGATIVE_INFINITY;

	array.forEach((element) => {
		if (element > numMayor) {
			numMayor = element;
		}
	});
	return numMayor;
}

// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene

function contarVocales(String) {
	let contVocales = 0;

	String.forEach((caracter) => {
		if (
			caracter == "a" ||
			caracter == "e" ||
			caracter == "i" ||
			caracter == "o" ||
			caracter == "u" ||
			caracter == "A" ||
			caracter == "E" ||
			caracter == "I" ||
			caracter == "O" ||
			caracter == "U"
		) {
			contVocales++;
		}
	});

	return contVocales;
}

// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas

let arrayStrings = ["Samuel", "Es", "Español"];

function stringsArraysAMayus(array) {
	let nuevoArray = [];

	for (let i = 0; i < array.length; i++) {
		nuevoArray.push(array[i].toUpperCase());
	}

	return nuevoArray;
}

// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario

function numPrimo(num){

	if (num < 2){
		return false
	}

	let raizCuadrada = Math.sqrt(num)

	for (let i = 2; i <= raizCuadrada; i++){
		if (num % i == 0){
			return false
		}
	}

	return true
}

console.log(numPrimo(4))

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos

	function elementosComunesArrays(array1, array2){
		let comunes = []

		for (let i = 0; i < array1.length; i++){
			if (array2.includes(array1[i])){
				comunes.push(array1[i])
			}
		}

		return comunes
	}

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares

	function sumaDePares(array) {
		let suma = 0;

		for (let i = 0; i < array.length; i++) {
			if (array[i] % 2 === 0) {
				suma += array[i];
			}
		}

		return suma;
	}

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado

	function cuadradosDeNumeros(array) {
		let cuadrados = [];

		for (let i = 0; i < array.length; i++) {
			cuadrados.push(array[i] ** 2);
		}

		return cuadrados;
	}

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso

	function invertirPalabras(cadena) {
		let palabras = cadena.split(" ");
		let palabrasInvertidas = palabras.reverse();
		return palabrasInvertidas.join(" ");
	}


// 10. Crea una función que calcule el factorial de un número dado

	function factorial(num) {
		let resultado = 1;

		for (let i = 2; i <= num; i++) {
			resultado *= i;
		}

		return resultado;
	}