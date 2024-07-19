import mongoose from "mongoose";

const connection: { isConnected?: number } = {};

const MONGODB_URL =
    process.env.MONGODB_URL || "mongodb://127.0.0.1:27017/next-app";

const connectDb = async () => {
    if (connection.isConnected) {
        return;
    }

    const db = await mongoose.connect(MONGODB_URL);
    console.log("Connected ===========================================");
    connection.isConnected = db.connections[0].readyState;
};

export { connectDb };
