import React, { useContext } from "react";

/**
 * Components imports
 */
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

/**
 * View imports
 */
import LandingPage from "./LandingPage";
import IndicatorsPage from "./IndicatorsPage";
import MapPage from "./MapPage";
import DinamicTablePage from "./DinamicTablePage";
import AxesPage from "./AxesPage";
import DownloadPage from './DownloadPage'

/**
 * Context import
 */
import MenuContext from "../components/context/MenuContext";

export default function BasePage() {
  const { option } = useContext(MenuContext);

  const renderSwitch = (opt) => {
    switch (opt) {
      case "inicio":
        return <LandingPage />;
        break;

      case "ejes":
        return <AxesPage />
        break;

      case "indicadores":
        return <IndicatorsPage />
        break;
      
      case "mapa":
        return <MapPage />
        break;
      
      case "tablaDinamica":
        return <DinamicTablePage />
        break;

      case "descargas":
        return <DownloadPage />
        break;

      default:
        <LandingPage />;
        break;
    }
  };

  return (
    <>
        <Navbar />
        {renderSwitch(option)}
        <Footer />
    </>
  );
}
