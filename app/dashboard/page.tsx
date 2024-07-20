import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { DataHistory } from "./components/DataHistory";

export default async function Dashboard() {
    const session = await getServerSession(authOptions);

    if (!session?.user?.username) {
        redirect("/");
    }

    return (
        <section className="mt-5">
            <div className="container space-y-2">
                <h1 className="text-xl font-bold">Dashboard</h1>
                <DataHistory />
            </div>
        </section>
    );
}
