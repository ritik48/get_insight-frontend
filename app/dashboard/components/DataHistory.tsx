"use client";

import { DataDocument } from "@/app/_models/data";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { MdDeleteOutline } from "react-icons/md";

export function DataHistory({ userData }: { userData: DataDocument[] }) {
    const router = useRouter();
    const [loading, setLoading] = useState<boolean>(false);

    async function handleDelete(id: string) {
        try {
            setLoading(true);

            const res = await fetch(`/api/data/`, {
                method: "DELETE",
                body: JSON.stringify({ id }),
            });

            const data = await res.json();

            if (!data.success) {
                toast.error(data.message || "Cannot delete this data");
                return;
            }
            toast.success("Delete successfully");

            router.refresh();
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="overflow-x-auto">
            {!userData?.length && (
                <div className="text-center mt-10 text-sm sm:text-lg text-gray-600">
                    You dont have any record
                </div>
            )}
            {userData.length > 0 && (
                <table className="w-full min-w-[400px]">
                    <tr className="grid text-left py-3 border-b grid-cols-[0.1fr_0.4fr_0.4fr_0.1fr] font-semibold">
                        <th className="sm:text-[16px] text-sm font-medium">
                            Type
                        </th>
                        <th className="sm:text-[16px] text-sm font-medium">
                            Value
                        </th>
                        <th className="sm:text-[16px] text-sm font-medium">
                            Date
                        </th>
                    </tr>
                    <div className="max-h-[400px] overflow-y-auto">
                        {userData?.map((data) => (
                            <tr
                                key={data._id}
                                className="grid grid-cols-[0.1fr_0.4fr_0.4fr_0.1fr] py-3 px-2 border-b hover:bg-accent transition-all duration-300 cursor-pointer"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    router.push(`/data/${data._id}`);
                                }}
                            >
                                <td
                                    className={`sm:text-sm text-xs w-fit rounded-md px-2 py-1 text-gray-100 h-fit ${
                                        data?.data_type === "file"
                                            ? "bg-primary"
                                            : "bg-gray-800"
                                    }`}
                                >
                                    {data?.data_type}
                                </td>
                                <td className="text-sm mx-2">
                                    {data.data_type === "file" ? (
                                        <Link
                                            href={data.url}
                                            target="_blank"
                                            className="text-blue-500 hover:underline"
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            {data?.filename}
                                        </Link>
                                    ) : (
                                        data?.text?.slice(0, 50) + "..."
                                    )}
                                </td>
                                <td className="sm:text-sm text-xs text-gray-600">
                                    <div className="flex sm:flex-row flex-col gap-2 sm:gap-4">
                                        <div>
                                            {data?.createdAt.toDateString()}
                                        </div>
                                        <div>
                                            {data?.createdAt.toLocaleTimeString()}
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <MdDeleteOutline
                                        className={`hover:text-primary ${
                                            loading && "opacity-70 cursor-wait"
                                        }`}
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            !loading && handleDelete(data._id);
                                        }}
                                    />
                                </td>
                            </tr>
                        ))}
                    </div>
                </table>
            )}
        </div>
    );
}
