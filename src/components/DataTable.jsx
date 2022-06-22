import React, { useEffect, useState } from "react";
import axios from "axios";

/**
 * Components imports
 */
import BarChart from "./BarChart";
import PieChart from "./PieChart";
import { Dropdown } from "primereact/dropdown";

export default function DataTable(props) {
  const { name, data, factors } = props;
  const [meditions, setMeditions] = useState([]);
  const [selectedFactor, setSelectedFactor] = useState(null);
  const [indicators, setIndicators] = useState([]);
  const [vals, setVals] = useState([])
  
  // console.log('impresion de factors');
  // console.log(factors);
//-------------------------------------------------------------------------------//
//-------------Carga de primer factor para muestra de barchart-------------------//
//---------------------------------22/06/2022------------------------------------//
/* Al cambiar de indicador se cargan los valores del primer factor que este posea*/ 
  useEffect(() => {
    if (factors.length > 0) {
      setSelectedFactor(factors[0]);
    }
  }, [factors]);
//-------------------------------------------------------------------------------//

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
  //console.log('impresion data');
  //console.log(data);

  useEffect(() => {
      if (selectedFactor !== null) {
        axios.get(process.env.REACT_APP_API_URL + "factorDesagregacion/detalle/" + selectedFactor.pk)
          .then((res) => {
            //console.log('impresion info factor');
            //console.log(res.data);
            //console.log(factors[0]);
            setVals(res.data.valores)
          })
          .catch((err) => {
            alert('Ha ocurrido un error')
          });

      }
  }, [selectedFactor]);

  // console.log('impresion de vals 1');
  // console.log(vals);
  

  const onCityChange = (e) => {
    setSelectedFactor(e.value);
  };

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
            <td className="w-12 py-2 px-2">SubIndicador</td>
            <td className="w-full py-2 px-2">
              {data !== undefined ? data.subtitulo : ""}
            </td>
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
          {/*<tr>

            
            <td className="w-12 py-2 px-2">Alcance</td>
            <td className="w-full py-2 px-2">
              {data !== undefined ? data.alcance : ""}
            </td>
            
          </tr>*/}
          <tr>
            <td className="w-12 py-2 px-2">Descripción</td>
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
            <td className="w-12 py-2 px-2">Instituciones</td>
            <td className="w-full py-2 px-2">
              {data !== undefined && data.instituciones.length > 0 ? data.instituciones.map((e)=>{
                return <p>{e.nombre}</p>
              }) : ""}
            </td>
          </tr>
          {/*<tr>
            <td className="w-12 py-2 px-2">Periodicidad</td>
            <td className="w-full py-2 px-2">
              {data !== undefined ? data.periodicidad : ""}
            </td>
          </tr>
          */}
          <tr>
            <td className="w-12 py-2 px-2">Archivo de ficha</td>
            <td className="w-full py-2 px-2 text-blue-500">
              <a href={data !== undefined ? process.env.REACT_APP_DOC_DOWNLOAD + data.archivo : ""} >
                { data !== undefined ? "Descargar archivo" : "No hay archivo disponible" }
              </a>
            </td>
          </tr>

        </div>
        <div className="w-1/2 my-1">
        <div className="card">
            <h5>Selecciona un factor para desplegar su información</h5>  
            <Dropdown
              value={selectedFactor}
              options={factors}
              onChange={onCityChange}
              
              optionLabel="nombre"
              placeholder="Haz click aqui para selecciona un factor"
              style={{ width: "100%" }}
            />
          </div>
          <BarChart meditions={meditions} name={name} data={data} vals={vals} selectedFactor={selectedFactor}/>
        </div>
      </div>
    </>
  );
}
