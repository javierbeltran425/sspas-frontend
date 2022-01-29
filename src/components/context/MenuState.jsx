import React, { useState } from "react";

import MenuContext from "./MenuContext";

const MenuState = (props) => {
    const [option, setOption] = useState('inicio')
    const [selectedAxe, setSelectedAxe] = useState({})

    function selectedOption(optionIn) {
        setOption(optionIn);
    }

    function axeSelection(axe) {
      setSelectedAxe(axe)
    }

    return (
        <MenuContext.Provider
          value={{
            option,
            selectedAxe,
            selectedOption,
            axeSelection,
          }}
        >
          {props.children}
        </MenuContext.Provider>
      );
}

export default MenuState;