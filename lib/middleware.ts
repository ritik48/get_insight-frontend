import { getServerSession } from "next-auth";
import { authOptions } from "./authOptions";

export async function handleAuth() {
    try {
        const session = await getServerSession(authOptions);

        if (!session?.user?.username) {
            throw new Error("You don't have the required access.");
        }
        return session.user.username;
    } catch (error) {
        throw error;
    }
}
