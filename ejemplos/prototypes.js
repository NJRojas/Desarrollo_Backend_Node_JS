'use strict';

function Person(name) {
    this.name = name
}

const pepe = new Person('Pepe')
const luis = new Person('Luis')

// extend with a function
Person.prototype.greet = function() { console.log('Hi, I am ', this.name) }
pepe.greet()
luis.greet()

// Herencia Simple 
function Agent(name) {
    // heredar el contructor de las personas
    // llamar al constructorde las personas con mi this
    Person.call(this, name)
}

// Heredar propiedades de la personas 
Agent.prototype = Object.create(Person.prototype)

const smith = new Agent('Smith')
smith.greet()

// HERENCIA MULTIPLE

// Mixin
function SuperHeroe() {
    this.fly = function() { console.log(this.name, 'fly') }
}

// copiar todas las propiedades de los SuperHeroes al proptotipo del Agente
Object.assign(Agent.prototype, new SuperHeroe())

smith.fly()