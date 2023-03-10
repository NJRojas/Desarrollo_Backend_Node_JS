'use strict'

const Agente = require('../models/Agente')
const connection = require('../lib/connectMongoose')

main().catch(err => console.log('Hubo un error', err))

// marcar una funcion con async inmediatamente lafunción devuelva un apromesa
async function main() {

    // inicializamos colección de agentes
    await initAgentes();
}

async function initAgentes() {

    // borrar todos los documentos de la colección de agentes
    const deleted = await Agente.deleteMany()
    console.log(`Eliminados ${deleted.deletedCount} agentes`, deleted)

    // crear agentes iniciales
    const inserted = await Agente.insertMany([
        { name: 'Brown', age: 32 }
        { name: 'Jones', age: 46 }
    ])
    console.log(`Eliminados ${inserted} agentes`)
}