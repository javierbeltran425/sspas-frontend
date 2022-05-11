import React, { useState, useEffect } from "react";
import axios from "axios";

/**
 * Components imports
 */
import Map from "../components/Map";
import DataTable from "../components/DataTable";
import { Dropdown } from "primereact/dropdown";
import { Carousel } from "primereact/carousel";

export default function MapPage() {
  const [selectedIndicator, setSelectedIndicator] = useState(null);
  const [indicatorData, setIndicatorData] = useState();
  const [indicators, setIndicators] = useState([]);
  const [coordinatesList, setCoordinatesList] = useState([]);
  const [factor, setFactor] = useState([]);

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_API_URL + "/mapa/")
      .then((res) => {
        if (res.status === 200) setIndicators(res.data);
      })
      .catch((err) => {
        alert("Ha sucedido un error");
      });
  }, []);

  useEffect(() => {
    try {
        setCoordinatesList([])
        if(selectedIndicator !== null){
            axios.get(process.env.REACT_APP_API_URL + 'medicion/lista/' + selectedIndicator.code)
            .then(res => {
                setCoordinatesList(res.data)
            })
            .catch(err => {
                console.error(err);
            })
        }
    } catch (error) {
        throw console.error(error);
    }
    
  }, [selectedIndicator]);  

  useEffect(() => {
    if (selectedIndicator !== null) {
      axios
        .get(
          process.env.REACT_APP_API_URL +
            "indicador/detalle/" +
            selectedIndicator.code
        )
        .then((res) => {
          if (res.status === 200) setIndicatorData(res.data);
        })
        .catch((err) => {
          alert("Ha ocurrido un error");
        });
    }
  }, [selectedIndicator]);

  useEffect(() => {
    if (selectedIndicator !== null) {
      axios
        .get(
          process.env.REACT_APP_API_URL + "indicador/detalle/" + selectedIndicator.code
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
  }, [selectedIndicator]);

  const onCityChange = (e) => {
    setSelectedIndicator(e.value);
  };

  return (
    <div className="w-full min-h-screen">
        <div className="grid grid-cols-2 gap-4 w-full p-4">
            <div className="w-full">
                <h1 className="text-black font-bold text-2xl">
                    Vista de mapa interactivo
                </h1>
                <h2 className="text-black">
                    En esta sección podrá ver indicadores que contengan valor de desagregación.<br/>
                    Para utilizar esta sección, únicamente debe seleccionar el indicaddor de su interés en el menú de la derecha.
                </h2>
            </div>

            <div className="w-full overflow-hidden">
                <div className="card w-full">
                <h5>Seleccione el indicador de su interés</h5>
                <Dropdown
                    name={ selectedIndicator !== null ? selectedIndicator.name : "" }
                    value={selectedIndicator}
                    options={indicators}
                    onChange={onCityChange}
                    optionLabel="name"
                    placeholder="Seleccione un indicador"
                    style={{ width: "95%" }}
                    filter
                />
                </div>
            </div>
        </div>


      <div
        className="flex justify-center items-center w-full p-4"
        style={{ height: "30rem" }}
      >
        <Map coordinates={coordinatesList} key={1}/>
      </div>

      <div className="w-full p-4">
        <DataTable
          data={indicatorData !== undefined ? indicatorData : undefined}
          type={
            indicatorData !== undefined
              ? indicatorData.variable.nombre
              : "numerico"
          }
          factors={factor}
        />
      </div>
    </div>
  );
}
