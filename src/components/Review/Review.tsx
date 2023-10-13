import type { TypeReview } from "@/types";
import { StarIcon } from "@heroicons/react/24/solid";
import moment from "moment";

const SingleReview = ({ review }: { review: TypeReview }) => {
    const { message, rating, user: { username }, createdAt } = review;
    return (
        <div>
            <div className="flex items-center mb-4">
                {Array.from(Array(rating).keys())?.map((n) => <StarIcon className="text-sandy-brown h-7 w-7" key={n} />)}
            </div>
            <div className="text-gray-200">
                <p className="text-lg mb-2"> {message}. </p>
                <p> By, <span className="text-sandy-brown font-bold"> {username} </span> on {moment(createdAt).format('ll')} </p>
                <hr className='h-[1px]  border-gray-600  my-5 lg:my-7' />
            </div>
        </div>
    )
}

export default SingleReview