import React from 'react'

export default function GeneralButton(props) {
    const { title } = props;

    return (
        <div className='ring ring-1 ring-blue-600 text-blue-600 rounded-sm p-1 hover:text-white hover:bg-blue-600 duration-500 cursor-pointer'>
            <p>{title}</p>
        </div>
    )
}
