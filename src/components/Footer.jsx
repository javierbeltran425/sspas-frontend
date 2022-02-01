import React from 'react';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
    return (
        <div className='flex flex-col justify-center items-center w-full h-16 bg-blue-900'>
            <div className="flex flex-row w-full justify-center items-cnter my-3">
               <a href='https://www.facebook.com/OSCXlaseguridad/'><Icon icon={faFacebookF} className='text-white mx-4 cursor-pointer'/></a>
               <a href='https://twitter.com/OSCxlaseguridad' ><Icon icon={faTwitter} className='text-white mx-4 cursor-pointer'/></a>
            </div>
            <p className='text-white text-xs'>Esta web es responsabilidad del Servicio Social Pasionista (SSPAS), todos los datos son de libre acceso.</p>
        </div>
    )
}
