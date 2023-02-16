const express = require('express')
const router = express.Router()
const Agente = require('../../models/Agente')

// GET /api/agentes
router.get('/', async (req, res, next) => {
  try {

    const agentes = await Agente.find();

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

        const agenteActualizado = await Agente.findByIdAndUpdate(id, data, {})
        res.json({ result: agenteActualizado })

    } catch (error) {
        next(error)
    }
})
// PATCH /api/agentes


module.exports = router;