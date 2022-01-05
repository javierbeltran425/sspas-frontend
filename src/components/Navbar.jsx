import React, { useContext } from 'react'

/**
 * Context import
 */
import MenuContext from './context/MenuContext'

export default function Navbar() {
    const menuContext = useContext(MenuContext);

    return (
        <div className='flex flex-row justify-between w-full h-16 bg-blue-900'>
            <img alt='No image'/>
            <ul className='flex flex-row text-white text-lg font-bold'>
                <li className='flex justify-center items-center px-4 hover:bg-blue-800 duration-500 h-full cursor-pointer' onClick={() => menuContext.selectedOption('inicio') } >Inicio</li>
                <li className='flex justify-center items-center px-4 hover:bg-blue-800 duration-500 h-full cursor-pointer' onClick={() => menuContext.selectedOption('ejes') }>Ejes</li>
                <li className='flex justify-center items-center px-4 hover:bg-blue-800 duration-500 h-full cursor-pointer' onClick={() => menuContext.selectedOption('indicadores') }>Indicadores</li>
                <li className='flex justify-center items-center px-4 hover:bg-blue-800 duration-500 h-full cursor-pointer' onClick={() => menuContext.selectedOption('tablaDinamica') }>Tabla dinámica</li>
                <li className='flex justify-center items-center px-4 hover:bg-blue-800 duration-500 h-full cursor-pointer' onClick={() => menuContext.selectedOption('mapas') }>Mapas</li>
                <li className='flex justify-center items-center px-4 hover:bg-blue-800 duration-500 h-full cursor-pointer' onClick={() => menuContext.selectedOption('descargas') }>Descargas</li>
            </ul>
        </div>
    )
}
