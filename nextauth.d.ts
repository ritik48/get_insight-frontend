import { DefaultSession, DefaultUser } from "next-auth";

interface IUser extends DefaultUser {
    username?: string;
}

declare module "next-auth" {
    interface User extends IUser {}
    interface Session extends DefaultSession {
        user?: User;
    }
}

declare module "next-auth/jwt" {
    interface JWT extends IUser {}
}
