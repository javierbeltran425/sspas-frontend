import React, { useContext } from "react";

/**
 * Context import
 */
import MenuContext from "../components/context/MenuContext"

/**
 * Components imports
 */
import PanelMenu from "../components/PanelMenu";
import Card from "../components/Card";

/**
 * Icons imports
 */
import ElSalvador from "../resources/elsalvador.svg";
import Agil from "../resources/agil.svg";
import BarChart from "../resources/chart-bar-solid.svg";

export default function LandingPage() {
  const menuContext = useContext(MenuContext)

  function axeNav(id, name) {
    menuContext.selectedOption("ejes");
    menuContext.axeSelection({
      id: id,
      nombre: name,
    });
  }

  return (
    <div>
      <h1 className="text-3xl text-black font-bold text-center mt-10">
        Sistema de visualización de datos de violencia
      </h1>
      <div className="flex flex-row w-full">
        <div className="w-1/4 mt-10 p-4">
          <p className="text-black text-justify">
            El sistema de monitoreo es una iniciativa del Servicio Social
            Pasionista (SSPAS) para fiscalizar las políticas públicas. A través
            de 94 indicadores divididos en cuatro ejes se vigilan los cambios en
            diversos problemas.
          </p>
          <p className="text-black font-bold mt-4">
            Haz clic en cada eje para ver más detalles.
          </p>
        </div>
        <div className="w-3/4 mt-10 p-4">
          <PanelMenu
            title={"Persecución del delito"}
            content={
              <p className="m-1">
                Este eje está compuesto por 22 indicadores, de los cuales X son
                de corto plazo, Y de mediano y Z de largo plazo. Aquí se
                pretende observar si se está avanzando hacía un conjunto de
                instituciones públicas articuladas para el desarrollo de una
                política criminal. Algunos de los indicadores más sobresalientes
                son:
                <dl className="mt-4 mb-4 ml-2">
                  <li>Judicalización de personas detenidas</li>
                  <li>
                    Número de estrategias de operatividad policial basadas en
                    evidencia
                  </li>
                  <li>Corrupción policial</li>
                </dl>
                <p
                  className="text-blue-400 cursor-pointer"
                  onClick={() => axeNav(1, "Persecución del delito")}
                >
                  Ver más
                </p>
              </p>
            }
          />

          <PanelMenu
            title={"Persecución de la violencia"}
            content={
              <p className="m-1">
                Este eje tiene 33 indicadores, de los cuales X son de corto
                plazo, Y de mediano y Z de largo plazo. Se verifica si existen
                políticas de prevención en territorios de mayor afectación y si
                hay acciones para fortalecer los derechos humanos. Algunos de
                los indicadores más sobresalientes son:
                <dl className="mt-4 mb-4 ml-2">
                  <li>
                    Número de actividades formativas en Centros Escalores para
                    el abordaje alterno de conflictos
                  </li>
                  <li>
                    Número de actividades formativas sobre promoción de derechos
                    humanos
                  </li>
                  <li>
                    Número de espacios locales de diálogo y participación entre
                    socidad civil y entidades estatales
                  </li>
                </dl>
                <p 
                  className="text-blue-400 cursor-pointer"
                  onClick={() => axeNav(2, "Prevención de la violencia")}
                >
                  Ver más
                </p>
              </p>
            }
          />

          <PanelMenu
            title={"Atención a víctimas"}
            content={
              <p className="m-1">
                El eje está compuesto por 15 indicadores, de los cuales X son de
                corto plazo, Y de mediano y Z de largo plazo. Con los
                indicadores se indaga si el Estado cuenta con estrategias y
                políticas para atender a víctimas, así como el detalle de los
                mecanismos descentralizados de atención y coordinacional entre
                entidades públicas. Algunos de los indicadores más
                sobresalientes son:
                <dl className="mt-4 mb-4 ml-2">
                  <li>Estrategia de atención a víctimas basada en evidencia</li>
                  <li>
                    Presupuesto asignado a instituciones del sistema nacional de
                    atención y protección de víctimas
                  </li>
                  <li>Cantidad de personal para atención directa a víctimas</li>
                </dl>
                <p 
                  className="text-blue-400 cursor-pointer"
                  onClick={() => axeNav(3, "Atención a víctimas")}
                  >
                  Ver más
                </p>
              </p>
            }
          />

          <PanelMenu
            title={"Rehabilitación"}
            content={
              <p className="m-1">
                Con 18 indicadores, de los cuales X son de corto plazo, Y de
                mediano y Z de largo plazo, este eje aborda aspectos
                relacionados a la administración efectiva de los centros de
                detención. Algunos de los indicadores más sobresalientes son:
                <dl className="mt-4 mb-4 ml-2">
                  <li>
                    Número de delitos ordenados desde centros de detención
                  </li>
                  <li>Tasa de hacinamiento de personas privadas de libertad</li>
                  <li>
                    Porcentaje de personas ex privadas de libertad reincidentes
                  </li>
                </dl>
                <p 
                  className="text-blue-400 cursor-pointer"
                  onClick={() => axeNav(4, "Rehabilitación")}
                  >
                  Ver más
                </p>
              </p>
            }
          />
        </div>
      </div>
      <div className="flex flex-row justify-center w-full p-4 mt-10">
        <Card
          ico={Agil}
          title="Visor avanzado"
          content="Aquí podrás ver los detalles de cada indicador, incluyendo el alcance, fuentes de información, instituciones que poseen la información, método de obtención de los datos y otros."
          buttonTitle="Ver fichas"
        />

        <Card
          ico={ElSalvador}
          title="Visor territorial"
          content="Aquí podrás ver algunos indicadores cuantitativos que tienen desagregación a nivel departamental. Ingresa y selecciona el que sea de tu interés para visualizarlo junto a otros indicadores."
          buttonTitle="Ver mapas"
        />

        <Card
          ico={BarChart}
          title="Tabla dinámica"
          content="Aquí podrás usar nuestra tabla dinámica, así como las de Excel. Podrás crear tus propios gráficos, mapas de calor y similares."
          buttonTitle="Ver tabla"
        />
      </div>
    </div>
  );
}
