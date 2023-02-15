# MongoDB

13.02.2022

## MongoDB Database server

### Instalar

Esto es un motor de base de datos abtractos, nada grafico.

1. Descargar version `macOS` no la version ARM-64
2. Descomprimir
3. Crear carpeta `data` al lado de la carpeta bin
4. Para arrancar el servidor `./bin/mongod --dbpath ./data`


- source
  https://www.mongodb.com/try/download/community-kubernetes-operator


## MongoDB Shell console client

un cliente tipo consola que me permite interactuar con el servidor de mongo db
### Instalar

1. Descargar version `macOS`
2. Descomprimir
3. moverser al correspondiente
4. Para arrancar `./bin/mongosh` y se debe conectar al servidor que lanzamos antes


### Comandos

- `show dbs` despliega las DB disponibles
- `use DBName` y se mueve a la correspondiente DB
- `show collections` muestra coleccione dsiponibles
- `db.agentes.insert({ name: 'Smith', age: 39 })` crea la tabla `agentes` con un regsitro
- `db.agentes.find()` despliega el contenido de esa colleción.
- `db.agentes.deleteOne({_id: ObjectId("63ed32105469a26be4e8a820") })` borra el registro con el id dado
- `db.agentes.updateOne({ _id: ObjectId("63ed32f15469a26be4e8a821")}, { $set: {age: 22 }})` actualiza el registro correspondiente
  
- source
  https://www.mongodb.com/try/download/shell