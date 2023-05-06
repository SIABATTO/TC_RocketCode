import { useEffect, React } from "react";
import { useQuery } from "@apollo/client";
import { GET_CLIENTS } from "../grahpql/table";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

export default function Table() {
  const { loading, error, data } = useQuery(GET_CLIENTS);

  if (loading) return "Loading...";
  if (error) return "An error has occurred: " + error.message;
  if (data)
    return (
      <div className="">
        <DataTable
          value={data.getAllClients}
          stripedRows
          paginator
          rows={10}
          tableStyle={{ minWidth: "100%" }}
          
        >
          {/* <Column field="id" header="id" sortable></Column> */}
          <Column
            field="nombre_de_cliente"
            header="Nombre del cliente"
            sortable
          ></Column>
          <Column
            field="valor_del_proyecto"
            header="Valor del proyecto"
          ></Column>
          <Column
            field="departamento_del_proyecto"
            header="Departamento del proyecto"
          ></Column>
          <Column
            field="ciudad_del_proyecto"
            header="Ciudad del proyecto"
          ></Column>
        </DataTable>
      </div>
    );
}
