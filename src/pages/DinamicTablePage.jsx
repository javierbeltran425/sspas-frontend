import React, { useState, useEffect } from "react";
import axios from "axios";

/**
 * Components imports
 */
import { Dropdown } from "primereact/dropdown";
import DinamicTableChart from "../components/DinamicTableChart";

let values1 = [];
let values2 = [];

export default function DinamicTablePage() {
  const [selectedIndicator1, setSelectedIndicator1] = useState(null);
  const [indicators, setIndicators] = useState([]);
  const [indicatorData1, setIndicatorData1] = useState();

  const [disaggregationFactors, setDisaggregationFactors] = useState([]);
  const [selectedDisaggregationFactors, setSelectedDisaggregationFactors] =
    useState([]);
  const [selectedDisaggregationFactors2, setSelectedDisaggregationFactors2] =
    useState([]);

  const [selectedDisaggregationValues, setSelectedDisaggregationValues] =
    useState([]);
  const [selectedDisaggregationValues2, setSelectedDisaggregationValues2] =
    useState([]);

  const [measurements, setMeasurements] = useState();

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
    try {
      values1 = [];
      values2 = [];
      if (selectedIndicator1 !== null) {
        axios
          .get(
            process.env.REACT_APP_API_URL +
              "indicador/detalle/" +
              selectedIndicator1.code
          )
          .then((res) => {
            console.log(res);
            if (res.status === 200) {
              setIndicatorData1(res.data);
              setDisaggregationFactors(res.data.factores_desagregacion);
            }
          })
          .catch((err) => {
            console.log(err);
            alert("Ha ocurrido un error");
          });
      }  
    } catch (error) {
      throw console.error(error);
    }
  }, [selectedIndicator1]);

  useEffect(() => {
    try {
      for (let i = 0; i < indicatorData1.factores_desagregacion.length; i++) {
        if (
          indicatorData1.factores_desagregacion[i].nombre ===
          selectedDisaggregationFactors.nombre
        ) {
          for (
            let j = 0;
            j < indicatorData1.factores_desagregacion[i].valores.length;
            j++
          ) {
            values1.push({
              name: indicatorData1.factores_desagregacion[i].valores[j],
            });
          }
        }
      }
    } catch (error) {
      console.error(error);
    }
  }, [selectedDisaggregationFactors]);

  useEffect(() => {
    try {
      for (let i = 0; i < indicatorData1.factores_desagregacion.length; i++) {
        if (
          indicatorData1.factores_desagregacion[i].nombre ===
          selectedDisaggregationFactors2.nombre
        ) {
          for (
            let j = 0;
            j < indicatorData1.factores_desagregacion[i].valores.length;
            j++
          ) {
            values2.push({
              name: indicatorData1.factores_desagregacion[i].valores[j],
            });
          }
        }
      }
    } catch (error) {}
  }, [selectedDisaggregationFactors2]);

  useEffect(() => {
    try {
      if (selectedIndicator1 !== null) {
        axios
          .get(
            process.env.REACT_APP_API_URL + "grafica/" + selectedIndicator1.code
          )
          .then((res) => {
            setMeasurements(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    } catch (error) {
      throw console.error(error);
    }
  }, [selectedIndicator1]);

  const onCityChange1 = (e) => {
    setSelectedIndicator1(e.value);
  };

  const onFactorChange = (e) => {
    setSelectedDisaggregationFactors(e.value);
  };

  const onFactorChange2 = (e) => {
    setSelectedDisaggregationFactors2(e.value);
  };

  const onValueChange1 = (e) => {
    setSelectedDisaggregationValues(e.value);
  };

  const onValueChange2 = (e) => {
    setSelectedDisaggregationValues2(e.value);
  };

  return (
    <div className="w-full min-h-screen">
      <div className="w-full p-4">
        <h1 className="text-black font-bold text-2xl">Resúmen de datos</h1>
        <h2 className="text-black">
          En esta sección podrá encontrar un resúmen de datos de los
          indicadores.
          <br />
          Puede seleccionar un indicador y hacer combinaciones de factores de
          desagregación para hacer comparativas entre un factor contra otro,
          seleccionando el indicador de su interés y luego jugando con las
          combinaciones entre factores y valores.
        </h2>
      </div>

      <div className="flex flex-row w-full">
        <div className="w-full p-4 overflow-hidden">
          <div className="flex w-full justify-center card">
            <Dropdown
              value={selectedIndicator1}
              options={indicators}
              onChange={onCityChange1}
              optionLabel="name"
              placeholder="Seleccione un indicador"
              style={{ width: "100%" }}
            />
          </div>

          <div className="w-full grid grid-cols-2 gap-4 mt-5">
            <div className="flex w-full justify-center card">
              <Dropdown
                value={selectedDisaggregationFactors}
                options={disaggregationFactors}
                onChange={onFactorChange}
                optionLabel="nombre"
                placeholder="Seleccione un factor de desagregación"
                style={{ width: "100%" }}
              />
            </div>

            <div className="flex w-full justify-center card">
              <Dropdown
                value={selectedDisaggregationFactors2}
                options={disaggregationFactors}
                onChange={onFactorChange2}
                optionLabel="nombre"
                placeholder="Seleccione un factor de desagregación"
                style={{ width: "100%" }}
              />
            </div>

            <div className="flex w-full justify-center card">
              <Dropdown
                value={selectedDisaggregationValues}
                options={values1}
                onChange={onValueChange1}
                optionLabel="name"
                placeholder="Seleccione un valor"
                style={{ width: "100%" }}
              />
            </div>

            <div className="flex w-full justify-center card">
              <Dropdown
                value={selectedDisaggregationValues2}
                options={values2}
                onChange={onValueChange2}
                optionLabel="name"
                placeholder="Seleccione un valor"
                style={{ width: "100%" }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full p-4">
        <DinamicTableChart
          measurements={measurements}
          disaggregation1={selectedDisaggregationFactors}
          disaggregation2={selectedDisaggregationFactors2}
          value1={selectedDisaggregationValues}
          value2={selectedDisaggregationValues2}
        />
      </div>
    </div>
  );
}
