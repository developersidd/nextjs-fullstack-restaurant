import React from 'react'
import { Tooltip } from 'react-tooltip'

const MenuToolTip = ({ data, name }: { data: { key: string, value: string | number }[], name: string }) => {
    return (
        <Tooltip
            style={{ background: "#fff", color: "#1F1F1F", zIndex: "999", boxShadow: "0 0 3px rgba(0,0,0,0.3)" }}
            id={`item-${name}`}
        >
            <div className='p-4  shadow'>
                <h4 className='font-bold mb-3'> MENU INFORMATION </h4>
                <ul className=" list-disc list-inside">

                    {data.map(({ key, value }) => (
                        <li key={value} className=''> <span className='font-bold capitalize'>{key}</span> {value}  </li>
                    ))}
                </ul>
            </div>
        </Tooltip>
    )
}

export default MenuToolTip