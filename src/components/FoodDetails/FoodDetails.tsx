"use client";
import { useState } from 'react';
import FoodDescription from '../FoodDescription/FoodDescription';
import FoodAdditionalInfo from '../FoodAdditionalInfo/FoodAdditionalInfo';
import FoodReview from '../FoodReview/FoodReview';
const desMenu = ["description", "additional info", "reviews"]
const FoodDetails = () => {
    const [category, setCategory] = useState("description");

    // decide what to render in Bottom Description
    let content = null;
    if (category === "description") {
        content = <FoodDescription />;
    } else if (category === "additional info") {
        content = <FoodAdditionalInfo />;
    } else {
        content = <FoodReview />
    }

    return (
        <div className='my-4 md:my-8 lg:my-10'>
            <ul className='w-full  flex items-center justify-between  sm:justify-center sm:gap-5 relative before:absolute before:bottom-0 before:left-0 before:w-full before:h-[2px] before:bg-white z-[99]'>
                {desMenu.map((menu) => {
                    return (
                        <li className={`text-[10px] sm:text-sm lg:text-md px-2 sm:px-3 md:-px-5 py-2 z-[9]  hover:text-primary-yellow cursor-pointer tracking-widest border-2 relative before:absolute before:bottom-[-2px] before:left-0 before:w-full before:h-[2px] before:bg-whit border-b-0  border-white  ${category === menu ? "bg-gray-700 before:bg-secondary-olive  text-primary-yellow" :
                            "text-white"}`} onClick={() => setCategory(menu)} key={menu}>
                            <button className="focus:outline-none  uppercase tracking-widest"> {menu} </button>
                        </li>
                    )
                })}
            </ul>
            <div className='pt-5 lg:mt-7 px-2 md:px-5 lg:px-10 font-montserrat'>
                {content}
            </div>
        </div>
    )
}

export default FoodDetails;