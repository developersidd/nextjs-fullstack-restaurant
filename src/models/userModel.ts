import emailValidator from "email-validator";
import mongoose, { Document, Model, model } from "mongoose";
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
        validate: {
            validator: (email: string) => emailValidator.validate(email),
            message: (props: any) => `Please provide a valid email address`,
        },
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
    //forgotPasswordToken: String,
    forgotPasswordTokenExpiry: Date,
    verifyToken: String,
    verifyTokenExpiry: Date,
    createdAt: {
        type: Date,
        default: () => new Date()
    },
    updatedAt: {
        type: Date,
        default: () => new Date()
    },
}, { timestamps: true });

interface UserDocument extends Document {
    email: string;
    password: string;
    username: string;
    picture: string;
    forgorPasswordToken: boolean;
    forgotPasswordTokenExpiry: Date | undefined;
    verifyToken: string;
    verifyTokenExpiry: Date | undefined;
    isVerified: boolean;
    isAdmin: boolean;
}

export const User: Model<UserDocument> = mongoose.models.user || mongoose.model("user", userSchema);

export default User;