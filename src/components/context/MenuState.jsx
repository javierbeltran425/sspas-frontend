import React, { useState } from "react";

import MenuContext from "./MenuContext";

const MenuState = (props) => {
    const [option, setOption] = useState('inicio')
    const [selectedAxe, setSelectedAxe] = useState({})
    const [indicator, setIndicator] = useState(null)

    function selectedOption(optionIn) {
        setOption(optionIn);
    }

    function axeSelection(axe) {
      setSelectedAxe(axe)
    }

    function indicatorSelection(indicator){
      setIndicator({
        label: indicator.label,
        code: indicator.code
      })
    }

    return (
        <MenuContext.Provider
          value={{
            option,
            selectedAxe,
            selectedOption,
            indicator,
            axeSelection,
            indicatorSelection
          }}
        >
          {props.children}
        </MenuContext.Provider>
      );
}

export default MenuState;