import mongoose from "mongoose";

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL!);
        const connection = mongoose.connection;
        connection.on('error', err => {
            console.log(err);
            process.exit();
        });
        console.log("connection:", connection)
    } catch (error: any) {
        console.log("DB error:", error)
    }
}
export default connectDb;