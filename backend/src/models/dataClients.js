const {Schema, model} = require("mongoose")

const dataSchema = new Schema({
  nombre_de_cliente: String,
  valor_del_proyecto: String,
  departamento_del_proyecto: String,
  ciudad_del_proyecto: String,
})

module.exports = model("dataClients", dataSchema);