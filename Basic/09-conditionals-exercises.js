/*
Clase 3 en vídeo | 24/07/2024
Condicionales, arrays y sets
https://www.twitch.tv/videos/2206228701?t=00h16m02s
*/

// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor

    let nombrePreguntado = true

    if (nombrePreguntado) {
        console.log("Samuel")
    }

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos

    let usuario = "Samuel"
    let contraseña = "1234"

    if (usuario == "Samuel" && contraseña == "1234") {
        console.log("usuario y contraseña correctos")
    }

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje
    let num = 0
    
    if (num > 0) {
        console.log("El numero es positivo.")
    } else if (num < 0) {
        console.log("El numero es negativo.")
    } else {
        console.log("El numero es cero.")
    }

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan

    let edad = 15

    if (edad >= 18){
        console.log("Ya puedes votar!")
    } else {
        console.log("Aun no puedes votar, te quedan " + (18 - edad) + " años.")
    }

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 

    let asignarEdad = edad >= 18 ? "adulto" : "menor"
    
    console.log(asignarEdad)

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "numMes"

    let numMes = 1
    let estacionDelAño

    if (numMes == 12 || numMes == 1 || numMes == 2){
        estacionDelAño = "Invierno"

    } else if (numMes > 2 && numMes <=5){
        estacionDelAño = "Primavera"

    } else if (numMes > 5 && numMes <=8){
        estacionDelAño = "Verano"

    } else if (numMes > 8 && numMes < 12) {
        estacionDelAño = "Otoño"
    
    } else {
        estacionDelAño = "Pa mi que ese mes no existe, hay 12 nama"
    }

    console.log(estacionDelAño)

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior

    if (numMes == 1 || numMes == 3 || numMes == 5 || numMes == 7 || numMes == 8 || numMes == 10 || numMes == 12) {
        diasQueTiene = 31
    
    } else if (numMes == 4 || numMes == 6 || numMes == 9 || numMes == 11) {
        diasQueTiene = 30
    
    } else if (numMes == 2) {
        diasQueTiene = 28

    } else {
        console.log("Pa mi que ese mes no existe, hay 12 nama")
    }

    console.log("El mes " + numMes + " tiene " + diasQueTiene + " dias.")

// switch
// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma

    let idioma = "Ingles", saludo

    switch (idioma) {
        case "Ingles": 
            saludo = "Hello"
            break
        case "Español":
            saludo = "Hola"
            break
        default:
            saludo = "El Idioma no esta en nuestra base de datos."
            break
    }

    console.log(saludo)

// 9. Usa un switch para hacer de nuevo el ejercicio 6

switch (numMes) {
    case 12:
    case 1:
    case 2:
        estacionDelAño = "Invierno"
        break
    case 3:
    case 4:
    case 5:
        estacionDelAño = "Primavera"
        break
    case 6:
    case 7:
    case 8:
        estacionDelAño = "Verano"
        break
    case 9:
    case 10:
    case 11:
        estacionDelAño = "Otoño"
        break
    default:
        estacionDelAño = "Pa mi que ese mes no existe, hay 12 nama"
}

console.log(estacionDelAño)

// 10. Usa un switch para hacer de nuevo el ejercicio 7

let diasQueTiene

switch (numMes) {
    case 1:
        diasQueTiene = 31
        break
    case 2: 
        diasQueTiene = 28
        break
    case 3:
        diasQueTiene = 31
        break
    case 4: 
        diasQueTiene = 30
        break
    case 5:
        diasQueTiene = 31
        break
    case 6: 
        diasQueTiene = 30
        break
    case 7:
        diasQueTiene = 31
        break
    case 8: 
        diasQueTiene = 31
        break
    case 9:
        diasQueTiene = 30
        break
    case 10: 
        diasQueTiene = 31
        break
    case 11:
        diasQueTiene = 30
        break
    case 12: 
        diasQueTiene = 31
        break
    default:
        console.log("Pa mi que ese mes no existe, hay 12 nama")
        break
}

console.log("El mes " + numMes + " tiene " + diasQueTiene + " dias.")