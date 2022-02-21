import React, { useContext } from "react";
import "./index.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";

/**
 * Components imports
 */
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

/**
 * pages imports
 */
import BasePage from "./pages/BasePage";
import MenuState from "./components/context/MenuState";

function App() {
  

  return (
    <MenuState>
      <Router>
        <Routes>
          <Route path='/' element={<BasePage />} />
        </Routes>
      </Router>
    </MenuState>
  );
}

export default App;
