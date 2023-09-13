"use client";
import { useState } from 'react';
import Titles from '../shared/Titles/Titles';
import { useAppDispatch } from '@/redux/app/hooks';
import { filterFoodByCategory } from '@/redux/features/food/foodSlice';
const categories = ["BURGERS", "DESSERTS", "PASTA", "PIZZAS"];
const FoodCategories = () => {
    const dispatch = useAppDispatch();
    const [category, setCategory] = useState("BURGERS");
    const handleCategory = (category: string) => {
        setCategory(category);
       dispatch(filterFoodByCategory(category)); 
    }
    return (
        <div className="">
            <Titles smTitle='fell free to explore our foods' title='Our Foods' />
            <div className='flex max-md:flex-wrap items-center justify-center gap-4 mt-10 md:mt-16'>
                {categories.map(cat => (
                    <button onClick={() => handleCategory(cat)} key={cat} className={`uppercase max-sm:text-sm tracking-wider px-4 py-2 text-white transition-colors  rounded-full font-bold ${ category === cat   ? "bg-primary-yellow" : "hover:text-primary-yellow"}`}> {cat}</button>
                ))}
            </div>
        </div>
    )
}


export default FoodCategories