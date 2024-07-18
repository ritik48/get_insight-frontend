import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
    providers: [
        // @ts-ignore
        CredentialsProvider({
            name: "Credentials",
            async authorize(credentials: any) {
                console.log("credential = ", credentials);

                const user = {
                    id: "1",
                    name: "J Smith",
                    email: "jsmith@example.com",
                };

                if (user) {
                    return user;
                } else {
                    return null;
                }
            },
        }),
    ],
    pages: {
        signIn: "/signin",
    },
});

export const GET = handler;
export const POST = handler;
