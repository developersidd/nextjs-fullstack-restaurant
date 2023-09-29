import { TypeReview } from "@/types";
import mongoose, { Document, Model } from "mongoose";
const foodSchema = new mongoose.Schema({
    title: {
        type: String,
        require: [true, "Please provide a Title"],
        unique: true,
    },

    description: {
        type: String,
        require: [true, "Please provide a description"],
    },

    image: {
        type: String,
        require: [true, "Please provide an image url"],
    },
    category: {
        type: String,
        required: [true, "Please provide a category"],
    },
    weight: {
        type: Number,
        required: [true, "Please provide a weight"],
    },
    price: {
        type: Number,
        required: [true, "Please provide a price"],
    },
    dimension: {
        type: String,
        required: [true, "Please provide a dimension"],
    },
    reviews: [
        {
            type: mongoose.SchemaTypes.ObjectId,
            ref: "review"
        }
    ],
    createdAt: {
        type: Date,
        default: () => new Date()
    },
    updatedAt: {
        type: Date,
        default: () => new Date()
    },
}, { timestamps: true });

export interface FoodDocument extends Document {
    title: string;
    description: string;
    price: number;
    image: string;
    weight: number;
    dimension: string;
    category: string;
    reviews: TypeReview[];
}

export const Food: Model<FoodDocument> = mongoose.models.food || mongoose.model("food", foodSchema);

export default Food;