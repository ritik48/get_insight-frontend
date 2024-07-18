import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export function DataForm() {
    return (
        <div className="flex-1 flex flex-col gap-3 items-start h-[60%]">
            <h3 className="text-xl font-semibold">
                Write text or upload file to analyse
            </h3>
            <div className="w-full h-full space-y-2">
                <Textarea className="h-full transition-all duration-300 ease-in-out" />
                <Button>Upload</Button>
            </div>
        </div>
    );
}
