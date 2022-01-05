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

      case "indicadores":
        return <IndicatorsPage />
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
