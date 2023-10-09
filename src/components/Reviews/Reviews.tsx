import { TypeReview } from '@/types';
import React from 'react';

const Reviews = ({ reviews }: { reviews: TypeReview[] }) => {

    return (
        <div>
            <div className='flex flex-col sm:flex-row items-center justify-between '>
                <>
                    <h3 className='mb-2 text-base sm:text-lg md:text-xl font-medium'> Reviews ({reviews?.length}) </h3>
                    <p className='mb-4 text-gray-300'> Get specific details about this Food from who taste it. </p>
                </>
                <button className='border-2 border-sandy-brown px-4 md:px-6 py-2 text-sandy-brown rounded-sm'> Add your opinion </button>
            </div>
        </div>
    )
}

export default React.memo(Reviews);