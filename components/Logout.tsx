"use client";

import { signOut } from "next-auth/react";
import { Button } from "./ui/button";

export default function Logout() {
    return (
        <Button
            variant={"outline"}
            onClick={() => signOut({ callbackUrl: "/" })}
        >
            Logout
        </Button>
    );
}
