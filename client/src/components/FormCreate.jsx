import { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_CLIENT, GET_CLIENTS } from "../grahpql/table";
import Swal from "sweetalert2";

const initialState = {
  nombre_de_cliente: "",
  valor_del_proyecto: "",
  departamento_del_proyecto: "",
  ciudad_del_proyecto: "",
};

const ClientForm = () => {
  const [client, setClient] = useState(initialState);

  const [createClient, { loading, error }] = useMutation(CREATE_CLIENT, {
    refetchQueries: [
      {
        query: GET_CLIENTS,
      },
      "getAllClients",
    ],
  });

  const handleChange = (e) =>
    setClient({ ...client, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    createClient({
      variables: {
        nombre_de_cliente: client.nombre_de_cliente,
        valor_del_proyecto: client.valor_del_proyecto,
        departamento_del_proyecto: client.departamento_del_proyecto,
        ciudad_del_proyecto: client.ciudad_del_proyecto,
      },
    });
    setClient(initialState);
    if (!loading) {
      Swal.fire({
        title: "Confirmacion",
        text: "Cliente Creado",
        icon: "success",
        confirmButtonText: "Continuar",
      });
    }
  };
  return (
    <form onSubmit={handleSubmit} className="Formulario">
      {error && <p>{error.message}</p>}

      <input
        type="text"
        name="nombre_de_cliente"
        placeholder="Ingrese el nombre del cliente"
        onChange={handleChange}
        value={client.nombre_de_cliente}
        autoFocus
        required
      />
      <input
        type="text"
        name="valor_del_proyecto"
        placeholder="Ingrese valor del proyecto"
        onChange={handleChange}
        value={client.valor_del_proyecto}
        autoFocus
        required
      />
      <input
        type="text"
        name="departamento_del_proyecto"
        placeholder="Ingrese el departamento del proyecto"
        onChange={handleChange}
        value={client.departamento_del_proyecto}
        autoFocus
        required
      />
      <input
        type="text"
        name="ciudad_del_proyecto"
        placeholder="Ingrese el ciudad del proyecto"
        onChange={handleChange}
        value={client.ciudad_del_proyecto}
        autoFocus
        required
      />
      <button
        disable={
          !client.nombre_de_cliente ||
          !client.valor_del_proyecto ||
          !client.departamento_del_proyecto ||
          !client.ciudad_del_proyecto ||
          loading
        }
      >
        Guardar
      </button>
    </form>
  );
};

export default ClientForm;
