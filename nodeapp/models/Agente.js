const mongoose = require('mongoose');

// definir el esquema de los agentes
const agenteSchema = mongoose.Schema({
  name: String,
  age: { type: Number, min: 18, max: 90 }
}, {
  // collection: 'agentes'
});

// Tipos de métodods:
// - Agente.createWithColor('red') --> método estático
// - agente.sendEmail({ subject: 'asdsa'}) --> método de instancia (no usar arrow functions)

agenteSchema.statics.lista = function(filtro, skip, limit, sort) {
  const query = Agente.find(filtro) // thenables, Agente.find devuelve una promesa
  query.skip(skip)
  query.limit(limit)
  query.sort(sort)

  // ...
  return query.exec()
}

// crear el modelo de Agente
const Agente = mongoose.model('Agente', agenteSchema);

// exportar el modelo
module.exports = Agente;