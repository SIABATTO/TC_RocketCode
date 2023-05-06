const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Client {
    id: ID
    nombre_de_cliente: String
    valor_del_proyecto: String
    departamento_del_proyecto: String
    ciudad_del_proyecto: String
  }

  type Query {
    getAllClients: [Client]
    getClientById(id: ID): Client
  }

  type Mutation {
    createClient(
      nombre_de_cliente: String
      valor_del_proyecto: String
      departamento_del_proyecto: String
      ciudad_del_proyecto: String
    ): Client
    deleteClient(id: ID): String
  }
`;
module.exports = { typeDefs };
