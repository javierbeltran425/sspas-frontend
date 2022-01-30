import React, { useState, useEffect } from "react";
import axios from "axios";

/**
 * Components imports
 */
import { Dropdown } from "primereact/dropdown";
import PdfTargetDownload from "../components/PdfTargetDownload";

export default function DownloadPage() {
  const [indicators, setIndicators] = useState()
  const [selectedIndicator, setSelectedIndicator] = useState(null);

  useEffect(() => {
    try {
      axios.get('https://api.sspas.info/visor/descarga')
      .then(res => {
        if(res.status === 200) setIndicators(res.data)
      })
      .catch(err => {
        console.error(err);
      })
    } catch (error) {
      throw console.error(error);
    }
  }, []);
  
  const selectedIndicatorTemplate = (option, props) => {
    if (option) {
      return (
        <div className="country-item country-item-value">
            <div>{option.name}</div>
        </div>
      );
    }

    return (
        <span>
            {props.placeholder}
        </span>
    );
}

  const onIndicatorChange = (e) => {
    setSelectedIndicator(e.value);
  };

  return (
    <div className="w-full min-h-screen">
      <div className="m-4">
        <h1 className="text-black text-2xl font-bold">Vista de descargas</h1>
        <h2 className="my-4">
          En la presente sección podrá descargar en PDF la información de interés de cada indicador
          <br/>
          En la barra seleccionadora, seleccione el indicador de su interés para descar el documento en PDF  de dicho indicador
        </h2>
        <Dropdown
          value={selectedIndicator}
          options={indicators}
          onChange={onIndicatorChange}
          optionLabel="name"
          filter
          showClear
          filterBy="name"
          placeholder="Seleccione un indicador"
          valueTemplate={selectedIndicatorTemplate}
          className="w-full"
        />
      </div>

      <div className="flex flex-row justify-center items-center w-full p-4" style={{ height: "28rem" }} >
        <div className="flex flex-row flex-wrap w-full h-full p-5 bg-gray-100 outline outline-1 outline-gray-300 rounded-md">
          <PdfTargetDownload />
        </div>
      </div>
    </div>
  );
}
