import { MdDeleteOutline } from "react-icons/md";

const data = [
    {
        id: 2,
        type: "text",
        value: "Lorem ipsum dolor sit amet",
        date: "21-02-2024 8:12",
    },
    {
        id: 3,
        type: "file",
        value: "https://example.com/file1.pdf",
        date: "21-02-2024 8:45",
    },
    {
        id: 4,
        type: "text",
        value: "Consectetur adipiscing elit",
        date: "21-02-2024 9:21",
    },
    {
        id: 5,
        type: "file",
        value: "https://example.com/file2.docx",
        date: "21-02-2024 10:02",
    },
    {
        id: 6,
        type: "text",
        value: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        date: "21-02-2024 10:35",
    },
    {
        id: 7,
        type: "file",
        value: "https://example.com/file3.jpg",
        date: "21-02-2024 11:14",
    },
    {
        id: 8,
        type: "text",
        value: "Ut enim ad minim veniam",
        date: "21-02-2024 11:42",
    },
    {
        id: 9,
        type: "file",
        value: "https://example.com/file4.txt",
        date: "21-02-2024 12:20",
    },
    {
        id: 10,
        type: "text",
        value: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
        date: "21-02-2024 12:55",
    },
    {
        id: 11,
        type: "file",
        value: "https://example.com/file5.pdf",
        date: "21-02-2024 13:30",
    },
    {
        id: 12,
        type: "text",
        value: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
        date: "21-02-2024 14:10",
    },
    {
        id: 13,
        type: "file",
        value: "https://example.com/file6.docx",
        date: "21-02-2024 14:45",
    },
    {
        id: 14,
        type: "text",
        value: "Excepteur sint occaecat cupidatat non proident",
        date: "21-02-2024 15:22",
    },
    {
        id: 15,
        type: "file",
        value: "https://example.com/file7.jpg",
        date: "21-02-2024 16:00",
    },
    {
        id: 16,
        type: "text",
        value: "Sunt in culpa qui officia deserunt mollit anim id est laborum",
        date: "21-02-2024 16:35",
    },
    {
        id: 17,
        type: "file",
        value: "https://example.com/file8.txt",
        date: "21-02-2024 17:10",
    },
    {
        id: 18,
        type: "text",
        value: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit",
        date: "21-02-2024 17:50",
    },
    {
        id: 19,
        type: "file",
        value: "https://example.com/file9.pdf",
        date: "21-02-2024 18:25",
    },
    {
        id: 20,
        type: "text",
        value: "Sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt",
        date: "21-02-2024 19:00",
    },
    {
        id: 21,
        type: "file",
        value: "https://example.com/file10.docx",
        date: "21-02-2024 19:35",
    },
];

export function DataHistory() {
    return (
        <div className="overflow-x-auto">
            {!data?.length && (
                <div className="text-center mt-4 text-sm sm:text-lg text-gray-600">
                    You dont have any record
                </div>
            )}
            {data.length > 0 && (
                <table className="w-full min-w-[500px]">
                    <tr className="grid text-left py-3 border-b grid-cols-[0.1fr_0.4fr_0.4fr_0.1fr] font-semibold">
                        <th className="sm:text-[16px] text-sm">Type</th>
                        <th className="sm:text-[16px] text-sm">Value</th>
                        <th className="sm:text-[16px] text-sm">Date</th>
                    </tr>
                    <div className="h-[400px] overflow-y-auto">
                        {data?.map((d) => (
                            <tr
                                key={d.id}
                                className="grid grid-cols-[0.1fr_0.4fr_0.4fr_0.1fr] py-3 px-2 border-b hover:bg-accent transition-all duration-300"
                            >
                                <td className="sm:text-sm text-xs text-gray-600">
                                    {d.type}
                                </td>
                                <td>{d.value.slice(0, 15)}</td>
                                <td className="sm:text-sm text-xs text-gray-600">
                                    {d.date}
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
