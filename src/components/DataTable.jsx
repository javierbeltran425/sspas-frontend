import React, { useEffect, useState } from "react";
import axios from "axios";

import BarChart from "./BarChart";
import PieChart from "./PieChart";

export default function DataTable(props) {
  const { name, data } = props;
  const [meditions, setMeditions] = useState([]);

  useEffect(() => {
    if (data !== undefined) {
      axios.get(process.env.REACT_APP_API_URL + "grafica/" + data.pk)
        .then((res) => {
          setMeditions(res.data);
        })
        .catch((err) => {
          alert('Ha ocurrido un error')
        });
    }
  }, [data]);

  return (
    <>
      <h1 className="text-black text-3xl font-bold p-4 text-center mt-4">{name}</h1>
      <div className="flex flex-row w-full">
        <div className="w-1/2 mx-4 my-1">
          <tr>
            <th>Variable</th>
            <th>Valor</th>
          </tr>
          <tr>
            <td className="w-12 py-2 px-2">Eje temático</td>
            <td className="w-full py-2 px-2">
              {data !== undefined ? data.resultado.eje.nombre : ""}
            </td>
          </tr>
          <tr>
            <td className="w-12 py-2 px-2">Indicador</td>
            <td className="w-full py-2 px-2">
              {data !== undefined ? data.nombre : ""}
            </td>
          </tr>
          <tr>
            <td className="w-12 py-2 px-2">Resultado</td>
            <td className="w-full py-2 px-2">
              {data !== undefined ? data.resultado.resultado : ""}
            </td>
          </tr>
          <tr>
            <td className="w-12 py-2 px-2">Alcance</td>
            <td className="w-full py-2 px-2">
              {data !== undefined ? data.alcance : ""}
            </td>
          </tr>
          <tr>
            <td className="w-12 py-2 px-2">Fuente de verificación</td>
            <td className="w-full py-2 px-2">
              {data !== undefined ? data.fuente_verificacion : ""}
            </td>
          </tr>
          <tr>
            <td className="w-12 py-2 px-2">Fuente de información</td>
            <td className="w-full py-2 px-2">
              {data !== undefined && data.fuentes_informacion.length > 0
                ? data.fuentes_informacion[0].nombre
                : ""}
            </td>
          </tr>
          <tr>
            <td className="w-12 py-2 px-2">Fórmula</td>
            <td className="w-full py-2 px-2">
              {data !== undefined ? data.formula : ""}
            </td>
          </tr>
          <tr>
            <td className="w-12 py-2 px-2">Periodicidad</td>
            <td className="w-full py-2 px-2">
              {data !== undefined ? data.periodicidad : ""}
            </td>
          </tr>
        </div>
        <div className="w-1/2 my-1">
          <BarChart meditions={meditions} name={name} />
        </div>
      </div>
    </>
  );
}
