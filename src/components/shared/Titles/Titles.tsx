import React from 'react'
import Button from '../Button/Button'

type Props = {
    des: string,
    title: string,
    smTitle: string,
    showDes: boolean
}

const Titles = ({ des, title, smTitle, showDes }: Props) => {
    return (
        <div className="text-center text-white mx-auto">
            <h3 className='uppercase lg:text-lg mb-2 md:mb-4 tracking-[3px]'> {smTitle} </h3>
            <h2 className='mx-auto uppercase drop-shadow-lg shadow-black text-3xl md:text-5xl xl:text-7xl font-bold mb-3 md:mb-4 
            '> {title}
            </h2>
            {
                showDes ? (<p className='text-sm lg:text-base mx-auto tracking-wide w-full md:max-w-[70%] lg:max-w-[65%] xl:max-w-[45%]'> {des} </p>) : null
            }
            <Button title='our menus' path="/menus" />
        </div>
    )
}

export default Titles