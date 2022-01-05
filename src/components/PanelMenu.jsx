import React, { useState } from "react";

export default function PanelMenu(props) {
  const { title, content } = props;

  const [active, setActive] = useState(false)

  return (
    <>
        <div className={`${active ? "bg-gray-400" : "" }` + " w-full text-black ring ring-1 ring-gray-400 rounded-md hover:bg-gray-400 duration-500 cursor-pointer"} onClick={() => active ? setActive(false) : setActive(true) }>
            <h5 className={ `${active ? "text-white" : "text-black"}` + " p-2 font-semibold hover:text-white duration-500"}>{title}</h5>
        </div>
        <div className={`${active ? "h-52" : "h-0"}` + " flex flex-col w-full mb-1 transform duration-200 overflow-y-auto bg-gray-200 rounded-md"}>
            {content}
        </div>
    </>
  );
}
