import React, { useContext, useRef } from "react";

/**
 * Context import
 */
import MenuContext from "./context/MenuContext";

/**
 * Components imports
 */
import { SlideMenu } from "primereact/slidemenu";
import { Menu } from "primereact/menu";

import sspasLogo from "../resources/sspasLogo.jpeg";

export default function Navbar() {
  const menu = useRef(null);
  const menuContext = useContext(MenuContext);

  const items = [
    {
      items: [
        {
          label: "Persecución del delito",
          command: (e) => {
            menuContext.selectedOption("ejes");
            menuContext.axeSelection({
              id: 1,
              nombre: "Persecución del delito",
            });
          },
        },
        {
          label: "Prevención de la violencia",
          command: (e) => {
            menuContext.selectedOption("ejes");
            menuContext.axeSelection({
                id: 2,
                nombre: "Prevención de la violencia",
              });
          },
        },
        {
          label: "Atención a víctimas",
          command: (e) => {
            menuContext.selectedOption("ejes");
            menuContext.axeSelection({
                id: 3,
                nombre: "Atención a víctimas",
              });
          },
        },
        {
          label: "Rehabilitación",
          command: (e) => {
            menuContext.selectedOption("ejes");
            menuContext.axeSelection({
                id: 4,
                nombre: "Rehabilitación",
              });
          },
        },
      ],
    },
  ];

  return (
    <div className="flex flex-row justify-between w-full h-16 bg-blue-900 rounded-b-3xl">
      <img
        src={sspasLogo}
        alt="No image"
        className="rounded-full p-3 cursor-pointer"
        onClick={() => menuContext.selectedOption("inicio")}
      />
      <ul className="flex flex-row text-white text-lg font-bold">
        <li
          className="flex justify-center items-center px-4 hover:bg-blue-800 duration-500 h-full cursor-pointer"
          onClick={() => menuContext.selectedOption("inicio")}
        >
          Inicio
        </li>
        <Menu model={items} popup ref={menu} id="popup_menu" />
        <li
          className="flex justify-center items-center px-4 hover:bg-blue-800 duration-500 h-full cursor-pointer"
          onClick={(event) => menu.current.toggle(event)}
          aria-controls="popup_menu"
          aria-haspopup
        >
          Ejes
        </li>
        <li
          className="flex justify-center items-center px-4 hover:bg-blue-800 duration-500 h-full cursor-pointer"
          onClick={() => menuContext.selectedOption("indicadores")}
        >
          Indicadores
        </li>
        <li
          className="flex justify-center items-center px-4 hover:bg-blue-800 duration-500 h-full cursor-pointer"
          onClick={() => menuContext.selectedOption("tablaDinamica")}
        >
          Tabla dinámica
        </li>
        <li
          className="flex justify-center items-center px-4 hover:bg-blue-800 duration-500 h-full cursor-pointer"
          onClick={() => menuContext.selectedOption("mapa")}
        >
          Mapa
        </li>
        <li
          className="flex justify-center items-center px-4 hover:bg-blue-800 duration-500 h-full cursor-pointer rounded-br-3xl"
          onClick={() => menuContext.selectedOption("descargas")}
        >
          Descargas
        </li>
      </ul>
    </div>
  );
}
