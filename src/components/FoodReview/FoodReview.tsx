"use client";
import { useAppDispatch, useAppSelector } from "@/redux/app/hooks";
import { selectFood } from "@/redux/features/food/foodSelector";
import { useAddReviewMutation } from "@/redux/features/review/reviewApi";
import { selectUser } from "@/redux/features/user/userSelector";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import StarRatings from 'react-star-ratings';
import { toast } from "sonner";
import * as yup from "yup";

const schema = yup.object().shape({
  message: yup.string().min(20).max(120).required(),
});

const FoodReview = () => {
  const [addReview, { isLoading, data, isError, error, isSuccess }] = useAddReviewMutation();
  const { _id: foodId, title, reviews } = useAppSelector(selectFood)?.food || {};
  const { email } = useAppSelector(selectUser)?.user || {};
  const dispatch = useAppDispatch();
  const [rating, setRating] = useState(0);
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    if (isLoading) {
      toast.loading("Adding Review");
    } else if (isSuccess) {
      toast.success((data as any)?.message);
      reset();
    } else if (isError) {
      toast.error((error as any)?.data?.error);
    }
  }, [isError, isSuccess, isLoading]);

  const onSubmitHandler = (data: any) => {
    addReview({ message: data?.message, rating, foodId });
  };

  const ratingChanged = (newRating: any) => {
    setRating(newRating)
  };


  return (
    <div>
      {/*  there is no review yet then show this text otherwise show reviews */}
      {reviews?.length === 0 ?
        (
          <div className="text-white">
            <h4>
              There are no reviews yet.
            </h4>
            <h3 className="mb-5 font-helvatica"> BE THE FIRST TO REVIEW “{title}” </h3>
          </div>
        )
        : (
          <div>

          </div>
        )
      }

      {/* if user isn't logged in then show login option otherwise show add review form */}
      {
        email ? (
          <>

            <h3 className="mb-2 text-white"> Add your Review </h3>
            <StarRatings
              rating={rating}
              starRatedColor="#CA9C5E"
              changeRating={ratingChanged}
              numberOfStars={5}
              name='rating'
              starHoverColor="#CA9C5E"
              starDimension="30px"
              starSpacing="5px"
            />


            <form className='' onSubmit={handleSubmit(onSubmitHandler)}>
              <div className="my-6">
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-500 dark:text-white capitalize"> Send your feedback </label>
                <textarea  {...register("message")} className="bg-secondary-olive text-gray-400 rounded border-2 border-primary-yellow block w-full p-3 focus:outline-none" name="message" id="" placeholder='Your message' rows={5} required></textarea>
                <small className="text-red-700 font-bold"> {errors.message?.message} </small>

              </div>
              <button type="submit" disabled={isLoading || !rating} className="rounded px-4 py-2 border-2 border-primary-yellow text-white"> SUBMIT </button>
            </form>
          </>

        )
          :
          (
            <>
              <p className="text-white  lg:text-lg">
                Don&apos;t have an account ? Please <Link href="/signup" className="font-bold border-b"> Create an Account </Link> to add your opinion.
              </p>
            </>
          )
      }

    </div>
  )
}

export default FoodReview