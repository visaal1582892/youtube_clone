import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectToDB = () => {
    // Connecting to database
    mongoose.connect(process.env.MONGO_URL);

    // Giving Success and Error callbacks
    const dbConnection = mongoose.connection;

    dbConnection.on("open", () => {
        console.log("Database connected successfully");
    });

    dbConnection.on("error", () => {
        console.log("Error connecting to database");
    });
}

export default connectToDB;
