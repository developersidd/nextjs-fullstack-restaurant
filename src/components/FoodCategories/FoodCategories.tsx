"use client";
import { useAppDispatch } from '@/redux/app/hooks';
import { filterFoodByCategory } from '@/redux/features/food/foodSlice';
import { useState } from 'react';
import Titles from '../shared/Titles/Titles';
const categories = ["burger", "dessert", "pasta", "pizza"];
const FoodCategories = () => {
    const dispatch = useAppDispatch();
    const [category, setCategory] = useState("burger");
    // set category
    const handleCategory = (foodName: string) => {
        // if user wants to see same category then don't make an action
        if (foodName !== category) {
            setCategory(foodName);
            dispatch(filterFoodByCategory(foodName));
        }
    }
    return (
        <div className="font-montserrat">
            <Titles smTitle='fell free to explore our foods' title='Our Foods' />
            <div className='flex max-md:flex-wrap items-center justify-center gap-4 mt-10 md:mt-16'>
                {categories.map(cat => (
                    <button onClick={() => handleCategory(cat)} key={cat} className={`uppercase max-sm:text-sm tracking-wider px-4 py-2 text-white transition-colors  rounded-full font-bold ${category === cat ? "bg-primary-yellow" : "hover:text-primary-yellow"}`}> {cat}</button>
                ))}
            </div>
        </div>
    )
}


export default FoodCategories