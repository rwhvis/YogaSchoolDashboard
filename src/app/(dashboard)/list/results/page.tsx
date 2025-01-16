import Image from "next/image";
import Pagination from "@/components/Pagination";
import TableSearch from "@/components/TableSearch";
import Table from "@/components/Table";
import { ArrowDown, ArrowDownRight, ArrowDownWideNarrow, FilePen, Plus, SlidersHorizontal, Trash2 } from "lucide-react";
import { resultsData, role, } from "@/lib/data";
import Link from "next/link";
import FormModel from "@/components/FormModel";

type Result = {
    id: number;
    subject: string;
    class: string;
    teacher: string;
    student: string;
    type: "Exam" | "Assignment";
    date: string;
    score: number
}

const columns = [
    {
        header: "Subject",
        accessor: "subject"
    },
    {
        header: "Student",
        accessor: "student",
    },
    {
        header: "Score",
        accessor: "score",
        className: "hidden md:table-cell",
    },
    {
        header: "Teacher",
        accessor: "teacher",
        className: "hidden lg:table-cell",
    },
    {
        header: "Class",
        accessor: "class",
        className: "hidden lg:table-cell",
    },
    {
        header: "Date",
        accessor: "date",
        className: "hidden lg:table-cell",
    },
    {
        header: "Actions",
        accessor: "actions"
    }
]

const ResultsListPage = () => {

    const renderRow = (item: Result) => (
        <tr key={item.id} className="border-b border-yogaGreen border-opacity-70 even:bg-yogaBlue even:bg-opacity-90 text-sm hover:bg-yogaYellow hover:bg-opacity-1">
            <td className="flex items-center gap-4 p-2">{item.subject}</td>
            <td className="">{item.student}</td>
            <td className="hidden md:table-cell">{item.score}</td>
            <td className="hidden md:table-cell">{item.teacher}</td>
            <td className="hidden md:table-cell">{item.class}</td>
            <td className="hidden md:table-cell">{item.date}</td>
            <td>
                <div className="flex items-center gap-2">
                    {role === "admin" && (
                        <>
                            <FormModel table={"result"} type={"update"} data={item} />
                            <FormModel table={"result"} type={"delete"} id={item.id} />
                        </>                    )}
                </div>
            </td>
        </tr>
    );

    return (
        <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
            {/* TOP */}
            <div className="flex items-center justify-between">
                <h1 className="hidden md:block  backdrop:text-lg font-semibold ">All Results</h1>
                <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
                    <TableSearch />
                    <div className="flex items-center gap-4 self-end">
                        <button className="w-8 h-8 flex items-center justify-center rounded-full bg-[#144E5A] text-white">
                            <SlidersHorizontal size={14} />
                        </button>
                        <button className="w-8 h-8 flex items-center justify-center rounded-full bg-[#144E5A] text-white">
                            <ArrowDownWideNarrow size={14} />
                        </button>
                        {role === "admin" && (
                           <FormModel table={"result"} type={"create"} />
                        )}
                    </div>
                </div>
            </div>
            {/* LIST */}
            <Table columns={columns} renderRow={renderRow} data={resultsData} />
            {/* PAGINATION */}
            <Pagination />
            
        </div>
    )
}

export default ResultsListPage;