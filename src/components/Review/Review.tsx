import type { TypeReview } from "@/types";
import { StarIcon } from "@heroicons/react/24/solid";

const SingleReview = ({ review }: { review: TypeReview }) => {
    const { message, rating, user: { username }, createdAt } = review;
    console.log("createdAt:", createdAt)
    return (
        <div>
            <div className="flex items-center mb-3">
                {Array.from(Array(rating).keys())?.map((n) => <StarIcon className="text-sandy-brown h-7 w-7" key={n} />)}
            </div>
            <div className="text-gray-200">
                <p> {message} </p>
                <p> By, {username} </p>
            </div>
        </div>
    )
}

export default SingleReview