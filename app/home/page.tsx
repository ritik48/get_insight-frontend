import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { Result } from "./components/result";
import { DataForm } from "./components/DataForm";

export default async function Home() {
    const session = await getServerSession(authOptions);

    if (!session?.user?.username) {
        redirect("/");
    }
    return (
        <section className="flex-1 flex flex-col">
            <div className="container flex-grow flex justify-center">
                <div className="my-16 w-full flex items-start gap-3">
                    <DataForm />
                    <Result
                        summary="weffew"
                        sentiment="positive"
                        keywords={["abdc", "mklo"]}
                    />
                </div>
            </div>
        </section>
    );
}
