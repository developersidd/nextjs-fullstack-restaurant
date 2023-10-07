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
        ref: "food"
    },

    rating: {
        type: Number,
        require: [true, "Please provide Rating"],
    },
    user: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "user"
    },
    createdAt: {
        type: Date,
        default: () => new Date()
    },
    updatedAt: {
        type: Date,
        default: () => new Date()
    },
}, { timestamps: true });

export interface ReviewDocument extends Document {
    user: TypeUser;
    message: string;
    food: TypeFood
}

const Review: Model<ReviewDocument> = mongoose.models.review || mongoose.model("review", reviewSchema);
export default Review;