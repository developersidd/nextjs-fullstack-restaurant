//"use client";
import generateTailwindClass from '@/utils/generateTailwindClass';
import Link from 'next/link';
import FoodAdditionalInfo from '../FoodAdditionalInfo/FoodAdditionalInfo';
import FoodDescription from '../FoodDescription/FoodDescription';
import FoodReview from '../FoodReview/FoodReview';
const desMenu = ["description", "additional Info", "reviews"]
type FoodDetailsComponent = {
    description: () => JSX.Element;
    additionalInfo: () => JSX.Element;
    reviews: () => JSX.Element;
}
const FoodDetails = ({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) => {
    const category = searchParams?.details || "description";
    // decide what to render in Bottom Description
    let foodDetailsComponent = {
        description: FoodDescription,
        additionalInfo: FoodAdditionalInfo,
        reviews: FoodReview
    };

    const Content = (foodDetailsComponent[category as keyof FoodDetailsComponent]) as () => JSX.Element;

    return (
        <div className='my-4 md:my-8 lg:my-10'>
            <ul className={`w-full  flex items-center justify-center gap-3 sm:gap-5 relative before:absolute before:bottom-0 before:left-0 before:w-full before:h-[2px] before:bg-white z-[99]`}>
                {desMenu.map((menu) => {
                    return (
                        <li className={`text-[10px] sm:text-sm lg:text-md px-2 sm:px-3 md:-px-5 py-2 z-[9]  hover:text-sandy-brown cursor-pointer tracking-widest border-2 relative 
                        ${generateTailwindClass("before", "absolute bottom-[-2px] left-0 w-full h-[2px] bg-white")} border-b-0  border-white  
                        ${category === menu?.split(" ")?.join("") ? "bg-gray-700   text-sandy-brown" :
                                "text-white"}`}
                            key={menu}>
                            <Link
                                href={`?${new URLSearchParams({
                                    details: menu?.split(" ")?.join("")
                                })}`}
                                scroll={false} className="focus:outline-none  uppercase tracking-widest"> {menu} </Link>
                        </li>
                    )
                })}
            </ul>
            <div className='pt-5 lg:mt-7 px-2 md:px-5 lg:px-10 font-montserrat'>
                {<Content />}
            </div>
        </div>
    )
}

export default FoodDetails;