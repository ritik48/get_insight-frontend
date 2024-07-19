import { handleAuth } from "@/lib/middleware";

export async function POST(req: Request, res: Response) {
    try {
        await handleAuth();

        const data = await req.json();

        // // make request to the express app

        const response = await fetch("http://localhost:4000", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json",
            },
        });

        const result = await response.json();

        return Response.json({ ...result }, { status: 200 });
    } catch (error) {
        console.log(error);
    }
}
