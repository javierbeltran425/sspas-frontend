import React, { useContext, useEffect, useState } from "react";
import axios from "axios";

/**
 * Context import
 */
import MenuContext from "../components/context/MenuContext";

/**
 * Components imports
 */
import { PanelMenu } from "primereact/panelmenu";

export default function AxesPage() {
  const { selectedAxe } = useContext(MenuContext);
  const [axeData, setAxeData] = useState(null);

  useEffect(() => {
    try {
      axios
        .get(process.env.REACT_APP_API_URL + "eje/detalle/" + selectedAxe.id)
        .then((res) => {
          setAxeData(res.data);
        })
        .catch((err) => {
          console.error(err);
        });
    } catch (error) {
      throw console.error(error);
    }
  }, [selectedAxe]);

  let resultsContent = null;
  if (axeData !== null) {
    resultsContent = axeData.resultados.map((e) => {
      return Results(e.id, e.presupuesto, e.resultado, e.indicadores);
    });
  }

  return (
    <div className="w-full min-h-screen">
      <h1 className="text-black text-2xl font-bold p-4">VISTA DE EJES</h1>
      <h2 className="p-4">
        En la presente vista, podrán encontrar información sobre cada uno de los
        ejes de informcaión, como:
        <br />
        <ul className="list-disc ml-5">
          <li>Problemáticas</li>
          <li>Estratégias implementadas par abordar las problemáticas</li>
          <li>Resultados obtenidos</li>
        </ul>
      </h2>

      <br />
      <br />
      <p className="text-black text-3xl font-bold px-4">{selectedAxe.nombre}</p>
      <br />

      <div className="w-full p-4">
        <div className="flex flex-col w-full min-h-screen outline outline-1 outline-gray-300 rounded-md">
          <h1 className="text-black font-bold text-xl p-4">Problemática</h1>
          <p className="p-4 text-base text-justify">
            {axeData !== null ? axeData.problematica : ""}
          </p>

          <h2 className="text-black font-bold text-xl p-4">Estratégia</h2>
          <p className="p-4 text-base text-justify">
            {axeData !== null ? axeData.estrategia : ""}
          </p>

          <h3 className="text-black font-bold text-xl p-4">Resultados</h3>
          {resultsContent}
        </div>
      </div>
    </div>
  );
}

function Results(id, presupuesto, resultado, indicadores) {
  const menuContext = useContext(MenuContext);

  return (
    <div className="w-full p-4">
      <div className="flex flex-col w-full h-auto outline outline-1 outline-gray-300 rounded-md">
        <h4 className="text-black font-bold text-lg p-4">Resultado</h4>
        <p className="p-4 text-base text-justify">{resultado}</p>

        <h4 className="text-black font-bold text-lg p-4">Presupuesto</h4>
        <p className="p-4 text-base text-justify">{presupuesto}</p>

        <PanelMenu
          model={[
            {
              label: "Indicadores",
              icon: "pi pi-fw pi-file",
              items: indicadores.map((e) => {
                return {
                  label: e.label,
                  command: () => {
                    menuContext.indicatorSelection({
                      label: e.label,
                      code: e.code,
                    });
                    menuContext.selectedOption("indicadores");
                  },
                };
              }),
            },
          ]}
          style={{ width: "100%" }}
        />
      </div>
    </div>
  );
}
