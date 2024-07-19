"use client";

import { useState } from "react";
import { DataForm } from "./DataForm";
import { Result } from "./result";

export function DataAndResult() {
    const [result, setResult] = useState<{
        summary?: string;
        sentiment?: string;
        keywords?: string;
    }>();

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
