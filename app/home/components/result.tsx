import { Textarea } from "@/components/ui/textarea";

type ResultProps = {
    summary?: string;
    sentiment?: string;
    keywords?: string[];
};

const keywords = ["country", "jobs", "population", "inflation"];

export function Result({ summary, sentiment, keywords }: ResultProps) {
    const senti = sentiment?.toLowerCase();
    return (
        <div className="flex flex-col gap-5 mb-8">
            <div className="max-h-[400px] flex flex-col gap-3">
                <h3 className="text-xl font-semibold">Summary</h3>

                <div className="border rounded-md p-4">{summary}</div>
            </div>
            <div className="flex flex-col gap-5">
                <div>
                    <h3 className="font-semibold">Sentiment</h3>
                    <div
                        className={`${
                            senti === "positive"
                                ? "bg-green-500"
                                : senti === "negative"
                                ? "bg-red-500"
                                : senti === "neutral"
                                ? "bg-yellow-500"
                                : "bg-none"
                        } w-fit px-3 py-1 rounded-md text-zinc-100 font-semibold`}
                    >
                        {sentiment}
                    </div>
                </div>
                <div className="space-y-2">
                    <h3 className="font-semibold">Keywords</h3>
                    <div className="font-semibold flex gap-3 flex-wrap">
                        {keywords?.map((k: string, index: number) => (
                            <span
                                key={index}
                                className="bg-zinc-800 text-zinc-100 rounded-md px-2 py-1 text-sm"
                            >
                                {k}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
