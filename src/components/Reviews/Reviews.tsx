import { useAppSelector } from '@/redux/app/hooks';
import { selectFood } from '@/redux/features/food/foodSelector';
import { selectUser } from '@/redux/features/user/userSelector';
import sweetAlert from '@/ui/sweetAlert';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import SingleReview from '../Review/Review';

const Reviews = () => {
    const { title } = useAppSelector(selectFood)?.food || {};
    const { email } = useAppSelector(selectUser)?.user || {};
    const router = useRouter();
    const handleAddReview = () => {
        sweetAlert({ icon: "info", title: "Please Log In!", des: "Don't have an account? Please <a href='/signin' style='font-weight:bold'> Register  </a>  to add your opinion." });
    }
    return (
        <div className='bg-light-olive p-4 md:p-7 rounded-md mb-5 md:mb-10'>
            <div className='flex flex-col lg:flex-row lg:items-center justify-between max-lg:gap-3'>
                <div className='text-gray-300 text-center'>
                    <h3 className='mb-2 text-lg md:text-xl font-medium'> Reviews ({reviews?.length}) </h3>
                    <p className='mb-4 '> Get specific details about this Food from who taste it. </p>
                </div>

                <button className='border-2 border-sandy-brown px-3 sm:px-3 lg:px-5 py-2 text-sandy-brown rounded-sm'>
                    {
                        email ? (<Link href="#add-review"> Add your opinion</Link>) : (<p onClick={handleAddReview}> Add your opinion </p>)
                    }

                </button>
            </div>
            <hr className=' h-[1px] my-11 lg:my-8' />
            <div>

                {reviews?.length > 0 ? reviews?.map((review) => (<SingleReview key={review.id} review={review} />)) : (
                    <div className="text-white">
                        <h4>
                            There are no reviews yet.
                        </h4>
                        <h3 className="mb-5 font-helvatica"> BE THE FIRST TO REVIEW “{title}” </h3>
                    </div>
                )}
            </div>
        </div>
    )
}

export default React.memo(Reviews);