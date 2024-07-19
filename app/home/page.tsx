"use client";

import { Result } from "./components/result";
import { DataForm } from "./components/DataForm";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
    const session = useSession();
    const router = useRouter();

    const [result, setResult] = useState<{
        summary?: string;
        sentiment?: string;
        keywords?: string;
    }>();

    const isLoading = session.status === "loading";
    const isAuthenticated = session.status === "authenticated";

    if (isLoading) return null;
    if (!isAuthenticated) {
        router.push("/");
    }

    console.log(result);

    return (
        <section className="h-full">
            <div className="container flex flex-col h-full">
                <div className="my-16 flex-grow flex flex-col sm:flex-row items-start gap-6">
                    <DataForm setResult={setResult} />
                    <Result
                        summary={result?.summary}
                        sentiment={result?.sentiment}
                        keywords={result?.keywords}
                    />
                </div>
            </div>
        </section>
    );
}
