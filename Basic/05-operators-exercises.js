/*
Clase 2 en vídeo | 17/07/2024
Tipos de datos, operadores y strings
https://www.twitch.tv/videos/2200149072?t=00h08m02s
*/

// 1. Crea una variable para cada operación aritmética

    let a = 10, b = 50

    let suma = a + b
    let resta = a - b
    let multiplicacion = a * b
    let division = a / b
    let modulo = a % b
    let exponente = a ** b

// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas

    let myVariable = 7

    myVariable += 3
    myVariable -= 3
    myVariable *= 3
    myVariable /= 3
    myVariable %= 3
    myVariable **= 3

// 5. Utiliza el operador lógico and

    console.log((10 > 5) && (5 < 10))

// 6. Utiliza el operador lógico or

    console.log((10 > 5) || (10 < 5))

// 7. Combina ambos operadores lógicos

    console.log((10 == "10" && true == 1) || 0 == false)

// 8. Añade alguna negación

    console.log(!(10 == 10 && 10 == 10) || 10 != 10)

// 9. Utiliza el operador ternario

    let soyEspañol = true

    soyEspañol ? console.log("Viva España!") : console.log("No seras francés no?")

// 10. Combina operadores aritméticos, de comparáción y lógicas

    let resultado = (a + b) == 60 && (a + b) < 100 || (a + b) != 0 || !soyEspañol === false
    console.log(resultado)