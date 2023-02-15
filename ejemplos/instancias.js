'use strict';

// crear una función para usarla como constructor de objetos
function Fruit(name) {
    this.name = name
    this.greet = function() {
        console.log('Hi I am', this.name)
    }
}

const lime = new Fruit('lime')
console.log(lime)


function serie(n, fn, callback) {
    if (n == 0) {
        // end the cycle
        callback()
        return
    }
    n = n - 1
    fn('text' + n, () => {
        serie(n, fn, callback)
    } )
}

console.log('inicio')

serie(['uno', 'dos', 'tres', 'cuatro', 'cinco'], writeAfter2Seconds, () => {
    console.log('fin')
})