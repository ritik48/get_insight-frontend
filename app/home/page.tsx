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
        <section className="h-full">
            <div className="container flex flex-col h-full">
                <div className="my-16 flex-grow flex flex-col sm:flex-row items-start gap-6">
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
