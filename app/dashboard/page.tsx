import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { DataHistory } from "./components/DataHistory";
import { getUserHistory } from "@/lib/services/getUserHistory";

export default async function Dashboard() {
    const session = await getServerSession(authOptions);

    if (!session?.user?.username) {
        redirect("/");
    }

    const userDataHistory = await getUserHistory(session.user.username);

    return (
        <section className="mt-5">
            <div className="container space-y-2">
                <h1 className="text-xl font-bold">Dashboard</h1>
                <DataHistory userData={userDataHistory.data} />
            </div>
        </section>
    );
}
