import loadingGear from "@/assets/images/loading-gear.gif";
import { useAppSelector } from '@/redux/app/hooks';
import { selectFood } from '@/redux/features/food/foodSelector';
import { useGetReviewsQuery } from '@/redux/features/review/reviewApi';
import { selectUser } from '@/redux/features/user/userSelector';
import sweetAlert from '@/ui/sweetAlert';
import Image from "next/image";
import Link from 'next/link';
import React from 'react';
import SingleReview from '../Review/Review';
import { TypeReview } from "@/types";

const Reviews = () => {
    const { title, _id } = useAppSelector(selectFood)?.food || {};
    const { email } = useAppSelector(selectUser)?.user || {};
    const { isLoading, isError, error, data } = useGetReviewsQuery(_id);
    const reviews = data?.data!;

    const handleAddReview = () => {
        sweetAlert({ icon: "info", title: "Please Log In!", des: "Don't have an account? Please <a href='/signin' style='font-weight:bold'> Register  </a>  to add your opinion." });
    }

    // decide what to render.
    let content;
    if (isLoading) {
        content = (<div className="flex items-center justify-center h-[200px] flex-col">
            <Image src={loadingGear} className="w-[60px] md:w-[80px] lg:w-[100px]" alt="loading-gear" />
        </div>)
    } else if (!isLoading && !isError) {
        content = (reviews?.map((review: TypeReview) => (<SingleReview key={review.id} review={review} />)))
    }
    else {
        content = <p className='text-red-600 font-medium p-5 md:p-7 text-center'> There was an server site error! </p>;
    }
    return (
        <div className='bg-light-olive p-4 md:p-7 rounded-md mb-5 md:mb-10'>
            <div className='flex flex-col lg:flex-row lg:items-center justify-between max-lg:gap-3'>
                <div className='text-gray-300'>
                    <h3 className='mb-2 text-lg md:text-xl font-medium'> Reviews ({reviews?.length || 0}) </h3>
                    <p className=''> Get specific details about this Food from who taste it. </p>
                </div>

                <button className='border-2 border-sandy-brown px-3 sm:px-3 lg:px-5 py-2 text-sandy-brown rounded-sm'>
                    {
                        email ? (<Link href="#add-review"> Add your opinion</Link>) : (<p onClick={handleAddReview}> Add your opinion </p>)
                    }

                </button>
            </div>
            <hr className=' h-[1px] border-gray-300 my-11 lg:my-8' />
            <div>

                {reviews?.length === 0 ? (
                    <div className="text-white text-center py-3 md:py-6">
                        <h4>
                            There are no reviews yet.
                        </h4>
                        <h3 className="mb-5 font-helvatica"> BE THE FIRST TO REVIEW “{title}” </h3>
                    </div>
                ) : (content)
                }
            </div>
        </div>
    )
}

export default React.memo(Reviews);