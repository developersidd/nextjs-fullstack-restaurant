import mongoose, { Document, Model } from "mongoose";
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: [true, "Please provide an username"]
    },

    email: {
        type: String,
        require: [true, "Please provide an email"],
        unique: true,
        immutable: false,
        lowercase: true,
    },
    picture: {
        type: String,
        require: [true, "Please provide an email"],
    },
    password: {
        type: String,
        required: [true, "Please provide a password"],
    },
    isVerified: {
        type: Boolean,
        default: false
    },

    isAdmin: {
        type: Boolean,
        default: false
    },
    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: Date,
    verifyToken: String,
    verifyTokenExpiry: Date,
}, { timestamps: true });

export interface UserDocument extends Document {
    email: string;
    password: string;
    username: string;
    picture: string;
    forgorPasswordToken: string;
    forgotPasswordTokenExpiry: Date | undefined;
    verifyToken: string;
    verifyTokenExpiry: Date | undefined;
    isVerified: boolean;
    isAdmin: boolean;
}

const User: Model<UserDocument> = mongoose.models.user || mongoose.model("user", userSchema);
export default User;