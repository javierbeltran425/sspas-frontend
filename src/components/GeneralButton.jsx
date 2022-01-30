import React, { useContext } from "react";

/**
 * Context import
 */
import MenuContext from "./context/MenuContext";

export default function GeneralButton(props) {
  const menuContext = useContext(MenuContext);

  const { title } = props;

  function setContext() {
    switch (title) {
      case "Ver fichas":
          menuContext.selectedOption("indicadores")
        break;

      case "Ver mapas":
            menuContext.selectedOption("mapa")
        break;

      case "Ver tabla":
        menuContext.selectedOption("tablaDinamica")
        break;

      default:
        break;
    }
  }

  return (
    <div
      className="ring ring-1 ring-blue-600 text-blue-600 rounded-sm p-1 hover:text-white hover:bg-blue-600 duration-500 cursor-pointer"
      onClick={() => setContext()}
    >
      <p>{title}</p>
    </div>
  );
}
