import jwt from "jsonwebtoken";

const EXPRESS_JWT_SECRET = process.env.EXPRESS_JWT_SECRET || "expresssecret";

export const getJwtToken = async (username: string) => {
    const token = await jwt.sign({ username }, EXPRESS_JWT_SECRET, {
        expiresIn: "24h",
    });

    return token;
};
