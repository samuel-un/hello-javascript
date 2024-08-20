/*
Clase 4 en vídeo | 31/07/2024
Mapas, bucles y funciones
https://www.twitch.tv/videos/2212289583?t=00h17m45s
*/

// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20

    for (let i = 1; i <= 20; i++){
        console.log(i)
    }

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado
    
    let resultado = 0
    
    for (let i = 1; i <= 100; i++){
        resultado += i
    }
    console.log(resultado)

// 3. Crea un bucle que imprima todos los números pares entre 1 y 50

    for (let i = 1; i <= 50; i++){
        if (i % 2 == 0){
            console.log(i)
        }
    }

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola

    let myArrayNames = ["Samuel", "Manuel", "Israel", "Ismael"]

    for (let i = 0; i < myArrayNames.length; i++){
        console.log(myArrayNames[i])
    }

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto

    let myString = "Samuel"
    let contVocales = 0
    
    for (i = 0; i < myString.length; i++){
        if (myString[i] == "a" || myString[i] == "e" || myString[i] == "i" || myString[i] == "o" || myString[i] == "u" || myString[i] == "A" || myString[i] == "E" || myString[i] == "I" || myString[i] == "O" || myString[i] == "U"){
            contVocales++
        }
    }

    console.log(contVocales)

// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto

    let myArrayNumbers = [1,2,3,4,5,10]
    let resMultiplicacion = myArrayNumbers[0]

    for (let i = 1; i < myArrayNumbers.length; i++){
        resMultiplicacion *= myArrayNumbers[i]
    }

    console.log(resMultiplicacion)

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5

    let resTabla5 = 0

    for (let i = 0; i <= 10; i++){
        resTabla5 = 5*i
        console.log("5 x "  + i + " = " + resTabla5)
    }

// 8. Usa un bucle para invertir una cadena de texto

    let myStringA = "Samuel"
    let myStringVacio = ""

    for (let i = myStringA.length - 1; i >= 0 ; i--){
        myStringVacio += myStringA[i];
    }

    myStringA = myStringVacio

    console.log(myStringA)

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci
    let anterior = 0
    let actual = 1
    let siguiente

    console.log(anterior)
    console.log(actual)

    for (let i = 3; i <= 10; i++){
        siguiente = anterior + actual
        anterior = actual
        actual = siguiente
        console.log(siguiente)
    }

// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10

    myArrayNumbers = [123, 1, 344, 5, 67, 19, 2, 4, 9999]

    for (let value of myArrayNumbers) {
        
        if (value > 10){
            console.log(value)
        }
    }