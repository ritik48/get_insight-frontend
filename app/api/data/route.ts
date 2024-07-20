import { Data } from "@/app/_models/data";
import { connectDb } from "@/lib/db";
import { handleAuth } from "@/lib/middleware";

export async function DELETE(req: Request, res: Response) {
    try {
        await handleAuth();
        await connectDb();

        const body = await req.json();
        const id = body.id;

        const data = await Data.findById(id);
        if (!data) {
            return Response.json(
                { success: false, message: "Invalid request" },
                { status: 400 }
            );
        }

        await Data.deleteOne({ _id: id });

        return Response.json({ success: true }, { status: 200 });
    } catch (error) {
        throw error;
    }
}
