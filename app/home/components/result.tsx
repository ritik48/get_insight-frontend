import { Textarea } from "@/components/ui/textarea";

type ResultProps = {
    summary: string;
    sentiment: string;
    keywords: string[];
};

const keywords = ["country", "jobs", "population", "inflation"];

export function Result({ summary, sentiment, keywords }: ResultProps) {
    return (
        <div className="flex-1 flex flex-col h-full gap-5">
            <div className="h-[60%] flex flex-col gap-3">
                <h3 className="text-xl font-semibold">Summary</h3>
                <div className="w-full h-full space-y-2">
                    <Textarea
                        className="h-full"
                        readOnly={true}
                        value={summary}
                    />
                </div>
            </div>

            <div className="flex flex-col gap-5">
                <div>
                    <h3 className="font-semibold">Sentiment</h3>
                    <div>{sentiment}</div>
                </div>
                <div className="space-y-2">
                    <h3 className="font-semibold">Keywords</h3>
                    <div className="font-semibold flex gap-3">
                        {keywords.map((k, index) => (
                            <span
                                key={index}
                                className="bg-zinc-800 text-zinc-100 rounded-md px-2 py-1"
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
