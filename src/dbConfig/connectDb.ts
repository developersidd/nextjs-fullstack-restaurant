import mongoose from "mongoose";

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.NEXT_PUBLIC_MONGO_URL!);
        const connection = mongoose.connection;
        connection.on('error', err => {
            process.exit();
        });
    } catch (error: any) {
        //console.log("DB error:", error)
    }
}
export default connectDb;