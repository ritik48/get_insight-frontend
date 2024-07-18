import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
    providers: [
        // @ts-ignore
        CredentialsProvider({
            name: "Credentials",
            // @ts-ignore
            async authorize(credentials: any) {
                console.log("credentials = ", credentials);
                const { username, password } = credentials;

                const user = { username, password };

                if (user) {
                    return user;
                } else {
                    return null;
                }
            },
        }),
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.username = user.username;
            }
            return token;
        },
        async session({ token, session }) {
            if (session && session.user) {
                session.user.username = token.username;
            }

            return session;
        },
    },
    secret: "fwefwefgg",
    pages: {
        signIn: "/signin",
    },
};
