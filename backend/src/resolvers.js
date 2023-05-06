const dataClient = require("./models/dataClients");

const resolvers = {
  Query: {
    getAllClients: async () => {
      const data = await dataClient.find();
      return data;
    },
    async getClientById(_, { id }) {
      const data = await dataClient.findById(id);
      return data;
    },
  },
  Mutation: {
    createClient: async (_, args) => {
      const {
        nombre_de_cliente,
        valor_del_proyecto,
        departamento_del_proyecto,
        ciudad_del_proyecto,
      } = args;
      const newClient = new dataClient({
        nombre_de_cliente,
        valor_del_proyecto,
        departamento_del_proyecto,
        ciudad_del_proyecto,
      });
      await newClient.save(); // Aca se guarda en la DB
      return newClient;
    },
    async deleteClient(_, { id }) {
      //Aca se eleimina lo que se necesite de la DB
      await Client.findByIdAndDelete(id);
      return "Client delete";
    },
  },
};

module.exports = { resolvers };
