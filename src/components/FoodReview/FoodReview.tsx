"use client";
import loadingGear from "@/assets/images/loading-gear.gif";
import { useAppDispatch, useAppSelector } from "@/redux/app/hooks";
import { selectFood } from "@/redux/features/food/foodSelector";
import { useAddReviewMutation } from "@/redux/features/review/reviewApi";
import { selectUser } from "@/redux/features/user/userSelector";
import { yupResolver } from "@hookform/resolvers/yup";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import StarRatings from 'react-star-ratings';
import { toast } from "sonner";
import * as yup from "yup";
import Reviews from "../Reviews/Reviews";

const schema = yup.object().shape({
  message: yup.string().min(20).max(120).required(),
});

const FoodReview = () => {
  const [addReview, { isLoading, data, isError, error, isSuccess }] = useAddReviewMutation();

  const { _id: foodId, title, image } = useAppSelector(selectFood)?.food || {};
  const { email, picture, username, _id: userId } = useAppSelector(selectUser)?.user || {};
  const [rating, setRating] = useState(0);
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    if (isSuccess) {
      toast.success((data as any)?.message);
      setRating(0);
      reset();
    } else if (isError) {
      toast.error((error as any)?.data?.error);
    }
  }, [isError, isSuccess]);

  const onSubmitHandler = (data: any) => {
    addReview({
      message: data?.message, rating,
      food: { id: foodId, picture: image, title },
      user: { email, picture, username, id: userId }
    });
  };

  const ratingChanged = (newRating: any) => {
    setRating(newRating)
  };


  return (
    <div>
      <Reviews />
      {
        email ? (
          <>
            <h3 id="add-review" className="mb-3 text-white font-helvatica uppercase text-base md:text-xl"> Add your Review </h3>
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
                <label htmlFor="message" className="block mb-2 text-base font-medium text-gray-500 dark:text-white capitalize"> Send your feedback </label>
                <textarea  {...register("message")} className="bg-olive text-gray-400 placeholder:text-sm rounded border-2 border-sandy-brown block w-full p-3 focus:outline-none" name="message" id="" placeholder='Your message' rows={5} required></textarea>
                <small className="text-red-700 font-bold"> {errors.message?.message} </small>
              </div>
              <button type="submit" disabled={isLoading || !rating} className="rounded px-4 py-3 border-2 border-sandy-brown text-white">
                {
                  isLoading ? (<Image className="" src={loadingGear} alt="loading-gear" width={25} height={20} />) : "SUBMIT"
                }
              </button>
            </form>
          </>)
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