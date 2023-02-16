const express = require('express')
const router = express.Router()
const Agente = require('../../models/Agente')

// CRUD: create, read, update, delete

// GET /api/agentes
router.get('/', async (req, res, next) => {
  try {

    // Filtros
    const filterByName = req.query.name
    const filterByAge = req.query.age

    // Paginación
    const skip = req.query.skip
    const limit = req.query.limit

    const sort = req.query.sort

    const filtro = {}

    if (filterByName) {
        filtro.name = filterByName
    }

    if (filterByAge) {
        filtro.age = filterByAge
    }

    const agentes = await Agente.lista(filtro, skip, limit, sort);

    res.json({ results: agentes });

  } catch (error) {
    next(error);
  }
})

// GET /api/agentes/(_id)
// Devuelve un agente buscando por _id
// Para servidaores http conectandose a una base de datos debe hacerse asincrino
router.get('/:id', async (req, res, next) => {
    try {
        const id = req.params.id
        const agente = await Agente.findById(id)
        res.json({ result: agente })
    } catch (error) {
        next(error)
    }
})

// PUT /api/agentes:(id) (body)
// Actualizar un agente
router.put('/:id', async(req, res, next) => {
    try {
        const id = req.params.id
        const data = req.body

        const agenteActualizado = await Agente.findByIdAndUpdate(id, data, {
            new: true // Esto hace que nos devuelva el documento actualizado
        })
        res.json({ result: agenteActualizado })

    } catch (error) {
        next(error)
    }
})

// POST  /api/agentes(body)
// Crea un agente
router.post('/', async(req, res, next) => {
    try {
        const agenteData = req.body

        // creamos una instancia de Agente
        const agente = new Agente(agenteData)

        // la persistimos en la DB
        const agenteGuardado = await agente.save()

        res.json({
            result: agenteGuardado
        })

    } catch (error) {
        next(error)
    }
})

// DELETE  /api/agentes/:(id)
router.delete('/:id', async (req, res, next) => {
    try {
        const id = req.params.id
        await Agente.deleteOne({ _id: id })

        res.json() // Devuelve un 200 ok

    } catch {

    }
})

module.exports = router;