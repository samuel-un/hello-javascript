/*
Clase 2 en vídeo | 17/07/2024
Tipos de datos, operadores y strings
https://www.twitch.tv/videos/2200149072?t=00h08m02s
*/

// 1. Escribe un comentario en una línea

    // Esto es un comentario de Samuel

// 2. Escribe un comentario en varias líneas
    
    /**
     * Esto es un
     * Comentario en varias lineas
     * De Samuel
     */

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos

    // String
    let myString = "Esto es una cadena"

    // Numero entero
    let myNumEntero = 12

    // Número decimal
    let myNumDecimal = 12.12

    // Número entero grande
    let myNumBig = BigInt(1111111222222222333333334444444)

    // Valor booleano
    let soySamuel = true
    let soyFrances = false

    // Valor nulo
    let myNull = null

    // Valor indefinido
    let undefinedValue

    // Valor simbolico
    let mySymbol = Symbol("mysymbol")

// 4. Imprime por consola el valor de todas las variables
    console.log(myString)
    console.log(myNumEntero)
    console.log(myNumDecimal)
    console.log(myNumBig)
    console.log(soySamuel)
    console.log(soyFrances)
    console.log(myNull)
    console.log(undefinedValue)
    console.log(mySymbol)

// 5. Imprime por consola el tipo de todas las variables
    console.log(typeof myString)
    console.log(typeof myNumEntero)
    console.log(typeof myNumDecimal)
    console.log(typeof myNumBig)
    console.log(typeof soySamuel)
    console.log(typeof soyFrances)
    console.log(typeof myNull)
    console.log(typeof undefinedValue)
    console.log(typeof mySymbol)

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo
    // String
    myString = "Esto es una cadena o no"

    // Numero entero
    myNumEntero = 13

    // Número decimal
    myNumDecimal = 13.13

    // Número entero grande
    myNumBig = BigInt(999999999988888888887777777777766666666665555555)

    // Valor booleano
    soySamuel = true
    soyFrances = false

    // Valor nulo
    myNull = null

    // Valor indefinido
    undefinedValue

    // Valor simbolico
    mySymbol = Symbol("mysymbol o no")

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo
// Modificación por otro tipo

    myString = 42; // Cambiado a número

    myNumEntero = "Ahora soy un string"; // Cambiado a string

    myNumDecimal = { valor: "objeto" }; // Cambiado a objeto

    myNumBig = [1, 2, 3]; // Cambiado a array

    soySamuel = "cadena"; // Cambiado a string

    soyFrances = 100; // Cambiado a número

    myNull = undefined; // Cambiado a undefined

    undefinedValue = true; // Cambiado a booleano

    mySymbol = 7; // Cambiado a número entero

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos
    const MY_STRING = "Esto es una cadena de tipo constante"
    
    const MY_NUM_ENTERO = 12
    
    const MY_NUM_DECIMAL = 12.12

    const MY_NUM_BIG = BigInt(1111111222222222333333334444444)

    const SOY_SAMUEL = true

    const SOY_FRANCES = false
    
    const MY_NULL = null

    const MY_SYMBOL = Symbol("Esto es un symbol de tipo constante")

// 9. A continuación, modifica los valores de las constantes

    //const MY_STRING = "Esto es una cadena de tipo constante"
    
    //const MY_NUM_ENTERO = 12
    
    //const MY_NUM_DECIMAL = 12.12

    //const MY_NUM_BIG = BigInt(1111111222222222333333334444444)

    //const SOY_SAMUEL = true

    //const SOY_FRANCES = false
    
    //const MY_NULL = null

    //const MY_SYMBOL = Symbol("Esto es un symbol de tipo constante")

// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse
