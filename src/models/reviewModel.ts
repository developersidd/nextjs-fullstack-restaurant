import { TypeFood, TypeUser } from "@/types";
import mongoose, { Document, Model } from "mongoose";

const reviewSchema = new mongoose.Schema({
    message: {
        type: String,
        require: [true, "Please provide message"],
        min: 10,
        max: 100
    },
    food: {

        id: {
            type: String,
            require: [true, "Please provide Food Id"],
        },
        picture: {
            type: String,
            require: [true, "Please provide Food picture"],
        },
        title: {
            type: String,
            require: [true, "Please provide Food Name"],
        }
    },
    rating: {
        type: Number,
        require: [true, "Please provide Rating"],
    },
    user: {
        id: {
            type: String,
            require: [true, "Please provide Id"],
        },
        username: {
            type: String,
            require: [true, "Please provide username"],
        },
        picture: {
            type: String,
            require: [true, "Please provide picture"],
        },
        email: {
            type: String,
            require: [true, "Please provide email"],
        },
    }
}, { timestamps: true });

export interface ReviewDocument extends Document {
    user: TypeUser;
    food: TypeFood;
    message: string;
    rating: number
}

const Review: Model<ReviewDocument> = mongoose.models.review || mongoose.model("review", reviewSchema);
console.log("Review:", Review)
export default Review;