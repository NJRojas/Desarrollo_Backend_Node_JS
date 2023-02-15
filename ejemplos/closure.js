'use strict';

function creaSumador(number) {
    // This context is always ccessible 
    // for the returning function
    return function(otherNumber) {
        return number + otherNumber
    }
} 

const addSeven = creaSumador(7)
console.log(addSeven(10))

function createVehicle(name) {
    return {
        getName: function() { return name },
        setName: function(value) { name = name },
        greet: function() { console.log('Hi, I am  ', name)}
    }
}

const car = createVehicle('Seat')
car.greet()
car.setName('Ford')

setTimeout(car.greet, 2000)
