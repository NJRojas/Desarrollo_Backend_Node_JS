'use strict'

// cara la librería de express
const express = require('express')

// crear la aplicación
const app = express()

// añadimos una ruta
app.get('/', (request, response, next) => {
    response.send('Hello, it\'s me')
})

// arrancar el servidor
app.listen(8080, () => {
    console.log('HTTP server launched on http://127.0.0.1:8080')
})