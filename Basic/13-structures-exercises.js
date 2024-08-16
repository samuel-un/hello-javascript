/*
Clase 4 en vídeo | 31/07/2024
Mapas, bucles y funciones
https://www.twitch.tv/videos/2212289583?t=00h17m45s
*/

// 1. Crea un array que almacene cinco animales

    let animalsArray = ["Gato", "Perro", "Leon", "Elefante", "loro"]

// 2. Añade dos más. Uno al principio y otro al final

    animalsArray.unshift("Geopardo")
    animalsArray.push("Leopardo")

// 3. Elimina el que se encuentra en tercera posición

    animalsArray.splice(2, 1)

// 4. Crea un set que almacene cinco libros

    let booksSet = new Set(["El quijote", "Los juegos del hambre", "Pinocho", "El libro de la selva", "Salah"])

// 5. Añade dos más. Uno de ellos repetido

    booksSet.add("Aleluya")
    booksSet.add("El quijote")

// 6. Elimina uno concreto a tu elección

    booksSet.delete("Pinocho")

// 7. Crea un mapa que asocie el número del mes a su nombre

// 7. Crea un mapa que asocie el número del mes a su nombre

    let monthsMaps = new Map([
        [1, "Enero"],
        [2, "Febrero"],
        [3, "Marzo"],
        [4, "Abril"],
        [5, "Mayo"],
        [6, "Junio"],
        [7, "Julio"],
        [8, "Agosto"],
        [9, "Septiembre"],
        [10, "Octubre"],
        [11, "Noviembre"],
        [12, "Diciembre"]
    ]);

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor

    console.log(monthsMaps.get(5))

// 9. Añade al mapa una clave con un array que almacene los meses de verano
    let arrayMonthSummer =  ["Junio", "Julio", "Agosto"]
    monthsMaps.set("Meses de verano", arrayMonthSummer)

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map

    let arrayTest = [1, 2, 3]
    let setTest = new Set(arrayTest)
    let mapTests = new Map()
    mapTests.set("Array transformado a set y almacenado en map", setTest)