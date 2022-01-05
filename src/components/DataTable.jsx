import React from 'react'

import Map from './Map'

export default function DataTable() {
    return (
        <div className='flex flex-row w-full'>
            <div className="w-1/2 mx-4">
                <div className="flex flex-row">
                    <div className="w-1/6">
                        <h5 className='text-black font-bold'>Variable</h5>
                        <ul>
                            <li className='py-2'>Eje temático</li>
                            <li className='py-2'>Indicador</li>
                            <li className='py-2'>Resultado</li>
                            <li className='py-2'>Alcance</li>
                            <li className='py-2'>Fuente de verificación</li>
                            <li className='py-2'>Fuente de información</li>
                            <li className='py-2'>Fórmula</li>
                            <li className='py-2'>Periodicidad</li>
                        </ul>
                    </div>
                    <div className="w-5/6">
                        <h5 className='text-black font-bold'>Valor</h5>

                    </div>
                </div>
            </div>
            <div className="w-1/2">
                <Map />
            </div>
        </div>
    )
}
