import React, { useState, useEffect } from "react";
import axios from "axios";

/**
 * Components imports
 */
import { Dropdown } from "primereact/dropdown";
import DataTable from "../components/DataTable";
import "../components/cssFiles/DropdownDemo.css";

export default function IndicatorsPage() {
  const [selectedIndicator, setSelectedIndicator] = useState(null);
  const [indicators, setIndicators] = useState([]);
  const [indicatorData, setIndicatorData] = useState();

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_API_URL + "indicadores/select")
      .then((res) => {
        if (res.status === 200) setIndicators(res.data);
      })
      .catch((err) => {
        console.log(err);
        alert("Ha sucedido un error");
      });
  }, []);

  useEffect(() => {
    if (selectedIndicator !== null) {
      axios.get(
          process.env.REACT_APP_API_URL +
            "indicador/detalle/" +
            selectedIndicator.code
        )
        .then((res) => {
          console.log(res);
          if(res.status === 200) setIndicatorData(res.data);
        })
        .catch((err) => {
          console.log(err);
          alert('Ha ocurrido un error');
        });
    }
  }, [selectedIndicator]);

  const onCityChange = (e) => {
    setSelectedIndicator(e.value);
  };

  return (
    <div className="w-full min-h-screen">
      <div className="flex flex-row w-full">
        <div className="flex flex-col w-1/2 p-4">
          <h1 className="text-black font-bold text-2xl">
            Vista de indicadores
          </h1>
          <p className="text-black">
            En esta vista podrá visualizar la respectiva información de cada
            indicador
          </p>
        </div>
        <div className="w-1/2 p-4 overflow-hidden">
          <div className="card">
            <h5>Seleccione el indicador de su interés</h5>
            <Dropdown
              value={selectedIndicator}
              options={indicators}
              onChange={onCityChange}
              optionLabel="name"
              placeholder="Seleccione un indicador"
              style={{ width: "95%" }}
            />
          </div>
        </div>
      </div>

      <DataTable data={indicatorData !== undefined ? indicatorData : undefined} type={ indicatorData !== undefined ? indicatorData.variable.nombre : "numerico"} />
    </div>
  );
}
