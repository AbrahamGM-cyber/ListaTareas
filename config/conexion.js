const mongoose = require('mongoose');

const usuario = "Henshin_50"
const password = "vJvERx7uaSRT8q4U"
const dbName = "Asignatura"

const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.gursr.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(()=> console.log('conectado a mongodb')) 
  .catch(e => console.log('error de conexión', e))