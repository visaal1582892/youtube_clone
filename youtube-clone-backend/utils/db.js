import mongoose from "mongoose";

const connectToDB = () => {
    // Connecting to database
    mongoose.connect("mongodb://127.0.0.1:27017/youtube_clone");

    // Giving Success and Error callbacks
    const dbConnection = mongoose.connection;

    dbConnection.on("open", () => {
        console.log("Datbase connected succesfully");
    });

    dbConnection.on("error", () => {
        console.log("Error connecting to database");
    });
}

export default connectToDB;
