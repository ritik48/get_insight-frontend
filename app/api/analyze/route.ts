import { handleAuth } from "@/lib/middleware";

export async function POST(req: Request, res: Response) {
    try {
        await handleAuth();

        const formData = await req.formData();

        const response = await fetch("http://localhost:4000/data", {
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
