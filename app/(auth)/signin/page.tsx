"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function Signin() {
    return (
        <section className="flex-1 flex flex-col">
            <div className="container flex-grow">
                <div className="mx-auto w-96 bg-slate-100 rounded-xl p-8 gap-4 flex flex-col mt-40">
                    <div className="text-center">
                        <h2 className="text-xl font-bold">
                            Login to your account
                        </h2>
                        <p>Enter your username and password</p>
                    </div>
                    <div className="w-full flex flex-col gap-2">
                        <Input placeholder="Username" />
                        <Input placeholder="Password" type="password" />
                        <Button className="mt-3">Login</Button>
                        <Link
                            href={"/signup"}
                            className="text-left text-sm hover:underline mt-1"
                        >
                            Don&apos;t have an account ?
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
