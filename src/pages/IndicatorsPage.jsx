import React, { useState, useEffect, useContext } from "react";
import axios from "axios";

/**
 * Context import
 */
import MenuContext from "../components/context/MenuContext";

/**
 * Components imports
 */
import { Dropdown } from "primereact/dropdown";
import DataTable from "../components/DataTable";
import "../components/cssFiles/DropdownDemo.css";

export default function IndicatorsPage() {
  const { indicator } = useContext(MenuContext);
  const [selectedIndicator, setSelectedIndicator] = useState(null);
  const [indicators, setIndicators] = useState([]);
  const [indicatorData, setIndicatorData] = useState();
  const [factor, setFactor] = useState([]);

  useEffect(() => {
    if (indicator !== null) {
      axios
        .get(
          process.env.REACT_APP_API_URL + "indicador/detalle/" + indicator.code
        )
        .then((res) => {
          if (res.status === 200) {
            setIndicatorData(res.data)
            setFactor(res.data.factores_desagregacion)
          }
        })
        .catch((err) => {
          alert("Ha ocurrido un error");
        });
    }
  }, []);

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_API_URL + "indicadores/select")
      .then((res) => {
        if (res.status === 200) setIndicators(res.data);
      })
      .catch((err) => {
        alert("Ha sucedido un error");
      });
  }, []);

  useEffect(() => {
    if (selectedIndicator !== null) {
      axios
        .get(
          process.env.REACT_APP_API_URL +
            "indicador/detalle/" +
            selectedIndicator.code
        )
        .then((res) => {
          console.log('impresion res selected indicator');
          console.log(res);
          if (res.status === 200) {
            setIndicatorData(res.data)
            setFactor(res.data.factores_desagregacion)
          }
        })
        .catch((err) => {
          alert("Ha ocurrido un error");
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
          <p className="text-black text-justify">
            La Plataforma por la Seguridad Ciudadana ha desarrollado un trabajo
            de discusión, análisis, formulación y validación que permitió con la
            conformación de teorías de cambio con objetivo, resultados e
            indicadores, estos últimos los que se encuentran conformando el
            sistema de monitoreo.
            <br /> <br />
            La definición de resultados e indicadores del sistema se hizo a
            partir de los insumos brindados sobre las diversas formas de
            abordaje y las características del problema priorizado. Esto llevó a
            la conformación de resultados e indicadores que responden
            primordialmente a los elementos identificados en el problema y que
            buscan operativizar la estrategia general de abordaje.
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

      <DataTable
        name={
          selectedIndicator !== null
            ? selectedIndicator.name
            : indicator !== null
            ? indicator.label
            : ""
        }
        data={indicatorData !== undefined ? indicatorData : undefined}
        factors={factor}
      />
    </div>
  );
}
