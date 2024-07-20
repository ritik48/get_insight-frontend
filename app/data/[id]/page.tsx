import { Result } from "@/app/home/components/result";
import { authOptions } from "@/lib/authOptions";
import { getAnalyzedData } from "@/lib/services/getAnalyzedData";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import toast from "react-hot-toast";


export default async function Page({ params }: { params: { id: string } }) {
    const session = await getServerSession(authOptions);

    if (!session?.user?.username) {
        redirect("/");
    }

    const data = await getAnalyzedData(params.id);
    if (!data.success) {
        toast.error(data.message || "Cannot access this post");
        redirect("/");
    }

    return (
        <section className="mt-10">
            <div className="container">
                <div className="sm:w-[70%] mx-auto flex flex-col gap-4">
                    <Result
                        sentiment={data?.data?.sentiment}
                        summary={data?.data?.summary}
                        keywords={data?.data?.keywords}
                    />
                </div>
            </div>
        </section>
    );
}
