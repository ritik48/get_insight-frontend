import Link from "next/link";

export default function Home() {
    return (
        <main className="flex-1 flex flex-col">
            <div className="container flex-grow">
                <div className="mx-auto gap-4 flex w-4/5 flex-col justify-center items-center mt-40">
                    <h1 className="text-5xl font-bold text-center">
                        Unlock the Power of AI-Driven Content Analysis
                    </h1>
                    <h3 className="text-xl">
                        From information overload to actionable insights in
                        seconds
                    </h3>
                    <Link
                        href={"#"}
                        className="bg-primary text-white px-2 py-2 rounded-md"
                    >
                        Login to get started
                    </Link>
                </div>
            </div>
        </main>
    );
}
