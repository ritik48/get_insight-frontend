"use client";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

import { IoIosMenu } from "react-icons/io";
import Logout from "./Logout";
import { useState } from "react";
import { Button } from "./ui/button";
import { signOut } from "next-auth/react";

export function HamMenu({
    isAuthenticated,
}: {
    isAuthenticated: string | undefined;
}) {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <IoIosMenu size={24} />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                {isAuthenticated ? (
                    <>
                        <DropdownMenuItem asChild>
                            <Link href={"/home"}>Analyze Data</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                            <Link href={"/dashboard"}>Dashboard</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                            <Link
                                href={""}
                                onClick={() => signOut({ callbackUrl: "/" })}
                            >
                                Logout
                            </Link>
                        </DropdownMenuItem>
                    </>
                ) : (
                    <>
                        <DropdownMenuItem asChild>
                            <Link href={"/signin"}>Login</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                            <Link href={"/signup"}>Signup</Link>
                        </DropdownMenuItem>
                    </>
                )}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
