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
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Food"
    },

    rating: {
        type: Number,
        require: [true, "Please provide Rating"],
    },

    user: {
        type: mongoose.Types.ObjectId,
        ref: "User"
    }
}, { timestamps: true });

export interface ReviewDocument extends Document {
    user: TypeUser;
    food: TypeFood;
    message: string;
    rating: number
}

const Review: Model<ReviewDocument> = mongoose.models.review || mongoose.model("review", reviewSchema);
export default Review;