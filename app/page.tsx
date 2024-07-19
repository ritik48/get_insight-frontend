import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";
import Link from "next/link";

export default async function Home() {
    const session = await getServerSession(authOptions);
    return (
        <main className="flex-1 flex flex-col">
            <div className="container flex-grow">
                <div className="mx-auto gap-4 flex w-4/5 flex-col justify-center items-center sm:mt-40 mt-20">
                    {session?.user?.username && (
                        <p className="text-sm sm:text-xl my-2 border rounded-full px-6 py-1">
                            Welcome 👋 {session?.user?.username}
                        </p>
                    )}
                    <h1 className="sm:text-5xl text-xl font-bold text-center">
                        Unlock the Power of AI-Driven Content Analysis
                    </h1>
                    <h3 className="sm:text-xl text-sm text-center">
                        From information overload to actionable insights in
                        seconds
                    </h3>
                    {session?.user?.username ? (
                        <Link
                            href={"/home"}
                            className="bg-primary text-white px-2 py-2 rounded-md"
                        >
                            Analyze your document here
                        </Link>
                    ) : (
                        <Link
                            href={"/signin"}
                            className="bg-primary text-white px-2 py-2 rounded-md"
                        >
                            Login to get started
                        </Link>
                    )}
                </div>
            </div>
        </main>
    );
}
