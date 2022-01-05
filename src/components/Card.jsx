import React from 'react'

import GeneralButton from './GeneralButton';

export default function Card(props) {
    const { title, content, buttonTitle } = props;

    return (
        <div className='flex flex-col w-64 h-72 p-2 mx-2 ring ring-1 ring-black rounded-md overflow-hidden'>
            <img alt="No image" />
            <h5 className='text-center font-bold'>{title}</h5>
            <p className='text-justify'>{content}</p>

            <div className="flex flex-row justify-center w-full h-full items-end">
                <GeneralButton title={buttonTitle}/>
            </div>
        </div>
    )
}
