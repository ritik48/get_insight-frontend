import { authOptions } from "@/lib/authOptions";
import { getServerSession, Session } from "next-auth";
import { redirect } from "next/navigation";

export default async function Home() {
    const session = await getServerSession(authOptions);

    if (!session?.user?.username) {
        redirect("/");
    }
    return (
        <section className="flex-1 flex flex-col">
            <div className="container flex-grow flex justify-center">
                <div className="text-5xl mt-40">Welcome</div>
            </div>
        </section>
    );
}
