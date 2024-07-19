import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectDb } from "./db";
import { User } from "@/app/_models/user";

export const authOptions: NextAuthOptions = {
    providers: [
        // @ts-ignore
        CredentialsProvider({
            name: "Credentials",
            // @ts-ignore
            async authorize(credentials: any) {
                const { username, password } = credentials;

                await connectDb();

                const user = await User.findOne({ username, password });

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
