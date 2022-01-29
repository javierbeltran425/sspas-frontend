import React, { useContext, useEffect } from "react";

/**
 * Context import
 */
import MenuContext from "../components/context/MenuContext";

export default function AxesPage() {
  const { selectedAxe } = useContext(MenuContext);
  

  return (
    <div className="w-full min-h-screen">
      <h1>VISTA DE EJES</h1>
      <p>EJE SELECCIONADO: {selectedAxe.nombre}</p>
      <p>ID: {selectedAxe.id}</p>
    </div>
  );
}
