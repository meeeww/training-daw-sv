// Declarar un array numérico (entero) y crear un método que imprima:
// La suma de todos los elementos
// El elemento más grande
// El elemento más pequeño
// La media de los elementos

let array2 = [1, 2, 3]

function doCalculation(array) {
    console.log(`Suma de todos los elementos: ${array.reduce((numero1, numero2) => numero1 + numero2, 0)}`)
    console.log(`El elemento más grande: ${Math.max(...array)}`)
    console.log(`El elemento más pequeño: ${Math.min(...array)}`)
    console.log(`La media de todos los elementos: ${array.reduce((numero1, numero2) => numero1 + numero2, 0) / array.length}`)
    console.log("---")
}



doCalculation([1,2,3,4])
doCalculation([5,5,5,5])
doCalculation([1,1,1,2,2,2,3,3,3,4,4,4,5,5,5])