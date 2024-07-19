import mongoose from "mongoose";

const connection: { isConnected?: number } = {};

const connectDb = async () => {
    if (connection.isConnected) {
        return;
    }

    const db = await mongoose.connect("mongodb://127.0.0.1:27017/next-app");
    connection.isConnected = db.connections[0].readyState;
};

export { connectDb };