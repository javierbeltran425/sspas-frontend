import React, { useState } from "react";

import MenuContext from "./MenuContext";

const MenuState = (props) => {
    const [option, setOption] = useState('inicio')

    function selectedOption(optionIn) {
        setOption(optionIn);
    }

    return (
        <MenuContext.Provider
          value={{
            option,
            selectedOption,
          }}
        >
          {props.children}
        </MenuContext.Provider>
      );
}

export default MenuState;