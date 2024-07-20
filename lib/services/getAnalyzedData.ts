import { Data } from "@/app/_models/data";
import { connectDb } from "../db";

export const getAnalyzedData = async (id: string) => {
    try {
        await connectDb();

        const data = await Data.findById(id);
        if (!data) {
            return { success: false, message: "Invalid request" };
        }
        return { success: true, data };
    } catch (error) {
        return { success: false };
    }
};
