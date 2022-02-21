import React, { useContext } from "react";

/**
 * Context import
 */
import MenuContext from "../components/context/MenuContext";

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
  const menuContext = useContext(MenuContext);

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
        Sistema de Indicadores sobre seguridad Ciudadana
      </h1>
      <div className="flex flex-row w-full">
        <div className="w-2/4 mt-10 p-4">
          <p className="text-black text-justify">
            El sistema de indicadores de
            seguridad ciudadana es una iniciativa de la Plataforma por la
            Seguridad Ciudadana (PSC), como un ejercicio de contraloría de
            sociedad civil sobre cuatro ámbitos priorizados en seguridad
            ciudadana. El sistema responde a los ejes de persecución del delito,
            prevención e la violencia, atención a víctimas y rehabilitación e
            inserción, a través de la medición de 40 indicadores que intentan
            responder a las cuatro teorías de cambio generadas en cada eje.
          </p>
          <p className="text-black text-justify">
            La Plataforma por la Seguridad Ciudadana (PSC) es un espacio de
            articulación de organizaciones de sociedad civil que trabajan temas
            relacionados a la seguridad ciudadana en El Salvador que buscan monitorear
            la efectividad de las políticas públicas y estrategias de seguridad para que
            estas cumplan con estándares en materia de derechos humanos.
          </p>
          <p className="text-black font-bold mt-4">
            Haz clic en cada eje para ver más detalles.
          </p>
        </div>
        <div className="w-2/4 mt-10 p-4">
          <PanelMenu
            title={"Persecución del delito"}
            content={
              <p className="m-1">
                Este eje está compuesto por 11 indicadores, correspondientes a
                cuatro resultados de corto, mediano y largo plazo. Los
                indicadores se orientan a la medición de la articulación de las
                instituciones de seguridad en torno a una política de
                persecución penal, el fortalecimiento institucional, la lucha
                contra la corrupción y las violaciones a derechos humanos y la
                reducción de la criminalidad y la impunidad. Algunos de los
                indicadores más sobresalientes son:
                <br />
                <ul className="mx-5 list-disc">
                  <li>Detenciones realizadas con base a una investigación</li>
                  <li>
                    Mejora de las condiciones laborales del personal policial
                  </li>
                  <li>Percepción sobre corrupción policial</li>
                  <li>
                    Tasa de victimización por delincuencia y tipo de delito
                  </li>
                </ul>
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
            title={"Prevención de la violencia"}
            content={
              <p className="m-1">
                Este eje tiene 15 indicadores, correspondientes a cinco
                resultados de corto, mediano y largo plazo. Sus indicadores
                buscan brindar información sobre el desarrollo de políticas de
                Estado en prevención de la violencia, la generación de
                condiciones para el acceso y el ejercicio de derechos y la
                transformación de relaciones de poder, el abordaje de conflictos
                y la reconstrucción del tejido social. Algunos de los
                indicadores más sobresalientes son:
                <br />
                <ul className="mx-5 list-disc">
                  <li>
                    Número de campañas sobre promoción de derechos humanos,
                    rechazo a la violencia y promoción de relaciones de equidad
                    en municipios priorizados
                  </li>
                  <li>Percepción de seguridad en la comunidad de vida</li>
                  <li>Tasa de desempleo juvenil en municipios priorizados</li>
                  <li>
                    Número de víctimas por delitos en municipios priorizados
                  </li>
                </ul>
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
                El eje está compuesto por 15 indicadores, cuatro resultados de
                corto, mediano y largo plazo. Estos indicadores tratan de
                indagar sobre las estrategias y políticas para atender a
                víctimas, así como el detalle de los mecanismos descentralizados
                de atención y coordinación entre entidades públicas. Algunos de
                los indicadores más sobresalientes son:
                <br />
                <ul className="mx-5 list-disc">
                  <li>Estrategia de atención a víctimas basada en evidencia</li>
                  <li>
                    Presupuesto asignado a instituciones del sistema nacional de
                    atención y protección de víctimas
                  </li>
                  <li>Cantidad de personal para atención directa a víctimas</li>
                </ul>
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
            title={"Rehabilitación y reinserción"}
            content={
              <p className="m-1">
                El eje está compuesto de 9 indicadores, cinco resultados de
                corto, mediano y largo plazo. Estos indicadores están orientados
                en analizar las condiciones de detención, el cumplimiento de
                estándares internacionales de derechos humanos, la
                implementación de programas integrales de rehabilitación y de
                inserción para personas en conflicto con la ley.
                <br/>
                <ul className="mx-5 list-disc">
                  <li>Efectiva administración de los centros de detención</li>
                  <li>Cumplimiento de estándares mínimos de derecho humanos</li>
                  <li>Programas de reinserción de personas ex privadas de libertad</li>
                </ul>
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
