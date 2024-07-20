import { Textarea } from "@/components/ui/textarea";

type ResultProps = {
    summary?: string;
    sentiment?: string;
    keywords?: string;
};

const keywords = ["country", "jobs", "population", "inflation"];

export function Result({ summary, sentiment, keywords }: ResultProps) {
    const keywords_list = keywords?.split("\n").map((k) => {
        const parts = k.trim().split("-");
        return parts.length > 1 && parts[0] === "" ? parts[1].trim() : k.trim();
    });

    return (
        <div className="flex-1 flex flex-col sm:h-full gap-5 w-full sm:w-auto">
            <div className="h-[200px] sm:h-[60%] flex flex-col gap-3">
                <h3 className="text-xl font-semibold">Summary</h3>
                <div className="w-full h-full">
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
                    <div className="font-semibold flex gap-3 flex-wrap">
                        {keywords_list?.map((k, index) => (
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
