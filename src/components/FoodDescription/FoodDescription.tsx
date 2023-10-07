"use client";

import { useAppSelector } from '@/redux/app/hooks';
import { selectFood } from '@/redux/features/food/foodSelector';

const FoodDescription = () => {
  const { description } = useAppSelector(selectFood)?.food || {};
  return (
    <div className="text-white">
      <p>
        {description}
      </p>
    </div>
  )
}

export default FoodDescription