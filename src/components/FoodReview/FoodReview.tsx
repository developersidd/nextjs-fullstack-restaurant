"use client";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from 'react';
import { useForm } from "react-hook-form";
import StarRatings from 'react-star-ratings';
import * as yup from "yup";
import Input from '../shared/Input/Input';

const schema = yup.object().shape({
  email: yup.string().email().required(),
  author: yup.string().required(),
  message: yup.string().min(20).max(120).required(),
});
const FoodReview = () => {

  const [rating, setRating] = useState(0);
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitHandler = (data: any) => {
    console.log({ data });
    reset();
  };

  const ratingChanged = (newRating: any) => {
    console.log(newRating);
    setRating(newRating)
  };


  return (
    <div>
      <div className="text-white">
        <h4 >
          There are no reviews yet.
        </h4>
        <h3 className="mb-5 font-helvatica"> BE THE FIRST TO REVIEW “VINCENT” </h3>
        <div>

        <h3> Your email address will not be published. Required fields are marked * </h3>
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
            </div>
      </div>

      <form className='' onSubmit={handleSubmit(onSubmitHandler)}>
        <div className="my-6">
          <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-500 dark:text-white capitalize"> Send your feedback </label>
          <textarea  {...register("message")} className="bg-secondary-olive text-gray-400 rounded border-2 border-primary-yellow block w-full p-3 focus:outline-none" name="message" id="" placeholder='Your message' rows={5} required></textarea>
          <small className="text-red-700 font-bold"> {errors.message?.message} </small>

        </div>
        <Input data={{ name: "Author", type: 'text', placeholder: `Enter your Name`, error: errors.author?.message, hookFormRegister: register("author") }} />
        <Input data={{ name: "Email", type: 'email', placeholder: `Enter your Email`, error: errors.email?.message, hookFormRegister: register("email") }} />
        <button type="submit" className="px-4 py-2 border-2 border-primary-yellow text-white"> SUBMIT </button>
      </form>
    </div>
  )
}

export default FoodReview