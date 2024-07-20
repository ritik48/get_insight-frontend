"use client";

import { signOut } from "next-auth/react";
import { Button } from "./ui/button";

export default function Logout() {
    return (
        <Button
            variant={"outline"}
            className="text-sm border px-2 py-1 rounded-md hover:bg-accent leading-none"
            onClick={() => signOut({ callbackUrl: "/" })}
        >
            Logout
        </Button>
    );
}
