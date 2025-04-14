import { Data } from "@/app/_models/data";
import { connectDb } from "@/lib/db";
import { getJwtToken } from "@/lib/getJwt";
import { handleAuth } from "@/lib/middleware";

import bcrypt from "bcrypt";

const BACKEND_URL = process.env.BACKEND_URL || "http://localhost:4000";

export async function POST(req: Request, res: Response) {
  try {
    const username = await handleAuth();
    await connectDb();

    const formData = await req.formData();

    const file = formData.get("file_data");

    if (!formData.get("text") && !file) {
      return Response.json(
        {
          success: false,
          message: "Provide valid text or file",
        },
        { status: 400 }
      );
    }

    if (file instanceof File && file?.size > 1024 * 1024) {
      return Response.json(
        { success: false, message: "File size must be 1MB or less" },
        { status: 400 }
      );
    }

    let authToken;
    try {
      authToken = await getJwtToken(username);
    } catch (err) {
      return Response.json({ success: false }, { status: 500 });
    }

    const response = await fetch(`${BACKEND_URL}/data`, {
      method: "POST",
      body: formData,
      headers: {
        authorization: `Bearer ${authToken}`,
      },
    });

    const result = await response.json();

    if (!result.success) {
      return Response.json(
        { success: false, ...result },
        { status: response.status }
      );
    }
    const keywords_list = result?.data?.keywords
      ?.split("\n")
      .map((k: string) => {
        const parts = k.trim().split("-");
        return parts.length > 1 && parts[0] === "" ? parts[1].trim() : k.trim();
      });

    console.log({ keywords_list });

    const data_to_save = {
      summary: result.data.summary,
      sentiment: result.data.sentiment.trim().toLowerCase(),
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
    console.log(error);
    return Response.json({ success: false }, { status: 500 });
  }
}
