import { Data } from "@/app/_models/data";
import { connectDb } from "@/lib/db";
import { handleAuth } from "@/lib/middleware";

const BACKEND_URL = process.env.BACKEND_URL || "http://localhost:4000";

export async function POST(req: Request, res: Response) {
    try {
        const username = await handleAuth();
        await connectDb();

        const formData = await req.formData();

        const file = formData.get("file_data");
        if (file instanceof File && file?.size > 1024 * 1024) {
            return Response.json(
                { success: false, message: "File size must be 1MB or less" },
                { status: 400 }
            );
        }

        const response = await fetch(`${BACKEND_URL}/data`, {
            method: "POST",
            body: formData,
        });

        const result = await response.json();

        if (!result.sucess) {
            return Response.json({ ...result }, { status: response.status });
        }

        const keywords_list = result?.data?.keywords
            ?.split("\n")
            .map((k: string) => {
                const parts = k.trim().split("-");
                return parts.length > 1 && parts[0] === ""
                    ? parts[1].trim()
                    : k.trim();
            });

        const data_to_save = {
            summary: result.data.summary,
            sentiment: result.data.sentiment.toLowerCase(),
            keywords: keywords_list,
            username: username,
            url: result?.upload_result?.url,
            filename: result?.upload_result?.filename,
            data_type: formData.get("type_of_data"),
            text: formData.get("text"),
        };

        await Data.create({ ...data_to_save });

        return Response.json(
            { ...result, keywords: keywords_list },
            { status: 200 }
        );
    } catch (error) {
        throw error;
    }
}
