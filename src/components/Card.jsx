import React from 'react'

/**
 * Component imports
 */
import GeneralButton from './GeneralButton';

export default function Card(props) {
    const { title, content, buttonTitle, ico } = props;

    return (
        <div className='flex flex-col items-center w-64 h-76 p-2 mx-2 ring ring-1 ring-black rounded-md overflow-hidden'>
            <img src={ico} alt="No image" style={{ width: "60px" }} />
            <h5 className='text-center font-bold'>{title}</h5>
            <p className='text-justify'>{content}</p>

            <div className="flex flex-row justify-center w-full h-full items-end">
                <GeneralButton title={buttonTitle}/>
            </div>
        </div>
    )
}
