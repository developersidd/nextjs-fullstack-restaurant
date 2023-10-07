"use client";

import { useAppSelector } from '@/redux/app/hooks';
import { selectFood } from '@/redux/features/food/foodSelector';
import RelatedFoods from '../RelatedFoods/RelatedFoods';
const FoodAdditionalInfo = () => {
  const { weight, dimension } = useAppSelector(selectFood)?.food || {};

  return (
    <div className='text-white'>
      <p className='text-lg md:text-xl mb-2 lg:mb-3'> <span className='font-bold mr-3 md:mr-4'> Weight : </span> {weight} kg </p>
      <p className='text-lg md:text-xl '> <span className='font-bold mr-3 md:mr-4'> Dimensions : </span> {dimension} </p>
      <RelatedFoods />
    </div>
  )
}

export default FoodAdditionalInfo;