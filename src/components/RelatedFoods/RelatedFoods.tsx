"use client";
import { useAppSelector } from '@/redux/app/hooks';
import { selectFood } from '@/redux/features/food/foodSelector';
import { TypeFood } from '@/types';
import RelatedFood from '../RelatedFood/RelatedFood';

const RelatedFoods = () => {
    const relatedFoods = useAppSelector(selectFood).relatedFoods;
    return (
        <div>
            <h3 className='text-xl md:text-2xl 2xl:text-3xl uppercase text-center my-10 md:my-14 lg:my-16 font-medium'>Related Products</h3>
            <div className='lg:container mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-10 pt-20 font-montserrat '>
                {relatedFoods?.map((food: TypeFood) => <RelatedFood food={food} key={food?._id} />)}
            </div>
        </div>
    )
}

export default RelatedFoods