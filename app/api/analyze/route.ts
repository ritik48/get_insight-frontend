import { handleAuth } from "@/lib/middleware";

const BACKEND_URL = process.env.BACKEND_URL;

export async function POST(req: Request, res: Response) {
    try {
        await handleAuth();

        const formData = await req.formData();

        const response = await fetch(`${BACKEND_URL}/data`, {
            method: "POST",
            body: formData,
        });

        const result = await response.json();
        console.log(result);

        return Response.json({ ...result }, { status: 200 });
    } catch (error) {
        console.log(error);
    }
}
