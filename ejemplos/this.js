'use strict';

// crear una función para usarla como constructor de objetos
function Fruit(name) {
    this.name = name
    this.greet = function() {
        console.log('Hi I am', this.name)
    }
}

const lime = new Fruit('lime')

//Donde están los parentesis de ejecución
// mirea loa anterior al punot de la izquierda 
// y lo usa como 'this' para el metodo saluda() 
// limón.salida

setTimeout(lime.greet, 2000)

const aFunction = lime.greet
aFunction()
aFunction.call(lime, 5)