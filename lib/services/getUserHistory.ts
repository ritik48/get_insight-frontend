import { Data } from "@/app/_models/data";
import { connectDb } from "../db";

export const getUserHistory = async (username: string) => {
    try {
        await connectDb();
        const data = await Data.find({ username });

        return { success: true, data };
    } catch (error) {
        console.log("Error occurred while fetching user history");
        return { success: false, data: [] };
    }
};
