import { DataDocument } from "@/app/_models/data";
import Link from "next/link";
import { MdDeleteOutline } from "react-icons/md";


export function DataHistory({ userData }: { userData: DataDocument[] }) {
    return (
        <div className="overflow-x-auto">
            {!userData?.length && (
                <div className="text-center mt-10 text-sm sm:text-lg text-gray-600">
                    You dont have any record
                </div>
            )}
            {userData.length > 0 && (
                <table className="w-full min-w-[500px]">
                    <tr className="grid text-left py-3 border-b grid-cols-[0.1fr_0.4fr_0.4fr_0.1fr] font-semibold">
                        <th className="sm:text-[16px] text-sm">Type</th>
                        <th className="sm:text-[16px] text-sm">Value</th>
                        <th className="sm:text-[16px] text-sm">Date</th>
                    </tr>
                    <div className="h-[400px] overflow-y-auto">
                        {userData?.map((data) => (
                            <tr
                                key={data._id}
                                className="grid grid-cols-[0.1fr_0.4fr_0.4fr_0.1fr] py-3 px-2 border-b hover:bg-accent transition-all duration-300"
                            >
                                <td
                                    className={`sm:text-sm text-xs w-fit rounded-md px-2 py-1 text-gray-100 ${
                                        data?.data_type === "file"
                                            ? "bg-primary"
                                            : "bg-gray-800"
                                    }`}
                                >
                                    {data?.data_type}
                                </td>
                                <td>
                                    {data.data_type === "file" ? (
                                        <Link
                                            href={data.url}
                                            target="_blank"
                                            className="text-blue-500 hover:underline"
                                        >
                                            {data?.filename}
                                        </Link>
                                    ) : (
                                        data?.text?.slice(0, 50) + "..."
                                    )}
                                </td>
                                <td className="sm:text-sm text-xs text-gray-600">
                                    {data?.createdAt.toISOString()}
                                </td>
                                <td>
                                    <MdDeleteOutline />
                                </td>
                            </tr>
                        ))}
                    </div>
                </table>
            )}
        </div>
    );
}
