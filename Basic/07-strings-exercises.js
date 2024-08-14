/*
Clase 2 en vídeo | 17/07/2024
Tipos de datos, operadores y strings
https://www.twitch.tv/videos/2200149072?t=00h08m02s
*/

// 1. Concatena dos cadenas de texto
    let nombre = "Samuel"
    let saludo = "Hola, " + nombre + " que tengas un buen dia!"

    console.log(saludo)

// 2. Muestra la longitud de una cadena de texto

    let longitudSaludo = saludo.length

    console.log(longitudSaludo + " caracteres tiene la cadena de texto.") 

// 3. Muestra el primer y último carácter de un string

    let primerCaracter = nombre.charAt(0)
    let longitudNombre = nombre.length
    let ultimoCaracter = nombre.charAt(longitudNombre - 1)

    console.log("Primer caracter del nombre: " + primerCaracter)
    console.log("Ultimo caracter del nombre: " + ultimoCaracter)

// 4. Convierte a mayúsculas y minúsculas un string

    console.log(nombre.toUpperCase()) 
    console.log(nombre.toLowerCase())

// 5. Crea una cadena de texto en varias líneas

let mensaje = `Hola,
buenos dias cliente.`

// 6. Interpola el valor de una variable en un string

    console.log(`Hola ${nombre}! que tengas un buen dia.`)

// 7. Reemplaza todos los espacios en blanco de un string por guiones

    console.log(mensaje.replaceAll(" ", "-"))

// 8. Comprueba si una cadena de texto contiene una palabra concreta
    let palabraAbuscar = "samuel"
    let contieneMensaje = mensaje.toLowerCase.includes(palabraAbuscar.toLowerCase)
    contieneMensaje ? console.log("Si contiene la palabra: " + palabraAbuscar) : console.log("No contiene la palabra: " + palabraAbuscar)

// 9. Comprueba si dos strings son iguales

    console.log(nombre == saludo)

    // 10. Comprueba si dos strings tienen la misma longitud

    console.log(nombre.length == saludo.length)