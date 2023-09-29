import { TypeFood } from "@/types";
import mongoose, { Document, Model } from "mongoose";

const reviewSchema = new mongoose.Schema({
    reviewerName: {
        type: String,
        require: [true, "Please provide an Reviewer Name"]
    },
    email: {
        type: String,
        require: [true, "Please provide an email"],
        unique: true,
        immutable: false,
        lowercase: true,
    },
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
    reviewerName: string;
    email: string;
    message: string;
    picture: string;
    food: TypeFood
}

const Review: Model<ReviewDocument> = mongoose.models.review || mongoose.model("review", reviewSchema);
export default Review;