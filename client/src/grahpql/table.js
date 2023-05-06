import { gql } from "@apollo/client";

export const GET_CLIENTS = gql`
  {
    getAllClients {
      id
      nombre_de_cliente
      valor_del_proyecto
      departamento_del_proyecto
      ciudad_del_proyecto
    }
  }
`;

export const CREATE_CLIENT = gql`
  mutation (
    $nombre_de_cliente: String
    $valor_del_proyecto: String
    $departamento_del_proyecto: String
    $ciudad_del_proyecto: String
  ) {
    createClient(
      nombre_de_cliente: $nombre_de_cliente
      valor_del_proyecto: $valor_del_proyecto
      departamento_del_proyecto: $departamento_del_proyecto
      ciudad_del_proyecto: $ciudad_del_proyecto
    ) {
      id
      nombre_de_cliente
      valor_del_proyecto
      departamento_del_proyecto
      ciudad_del_proyecto
    }
  }
`;
