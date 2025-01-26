import Image from "next/image";
import Pagination from "@/components/Pagination";
import TableSearch from "@/components/TableSearch";
import Table from "@/components/Table";
import { ArrowDownWideNarrow, FilePen, FormInputIcon, Plus, SlidersHorizontal, Trash2 } from "lucide-react";
import { role, subjectsData,  } from "@/lib/data";
import Link from "next/link";
import FormModel from "@/components/FormModel";
import { Prisma, Subject, Teacher } from "@prisma/client";
import prisma from "@/lib/prisma";
import { ITEM_PER_PAGE } from "@/lib/settings";

type SubjectList = Subject & {teachers:Teacher[]}

const columns = [
    {
        header: "Subject Name",
        accessor: "subjectName"
    },
    {
        header: "Teachers",
        accessor: "teachers",
        className: "hidden md:table-cell",
    },
    {
        header: "Actions",
        accessor: "actions"
    }
]

const renderRow = (item: SubjectList) => (
    <tr key={item.id} className="border-b border-yogaGreen border-opacity-70 even:bg-yogaBlue even:bg-opacity-90 text-sm hover:bg-yogaYellow hover:bg-opacity-1">
        <td className="flex items-center gap-4 p-2">{item.name}</td>
        <td className="hidden md:table-cell">{item.teachers.map(teachers=>teachers.name).join(", ")}</td>
        <td>
            <div className="flex items-center gap-2">
                {role === "admin" && (
                    <>
                        <FormModel table={"subject"} type={"update"} data={item} />
                        <FormModel table={"subject"} type={"delete"} id={item.id} />
                    </>
                )}
            </div>
        </td>
    </tr>
);

const SubjectsListPage = async ( {
    searchParams,
} : {
    searchParams: { [key: string]: string | undefined };
}) => {
    const { page, ...queryParams } = searchParams;

    const p = page ? parseInt(page) : 1;

    // URL PARAMS CONDITIONS

    const query: Prisma.SubjectWhereInput = {};

    if (queryParams) {
        for (const [key, value] of Object.entries(queryParams)) {
            if (value !== undefined) {       
                switch (key){
                    case "search":
                        query.name = { contains: value, mode: "insensitive" };
                        break;
                    default:
                        break;
                } 
            }
        }
    }
 
    const [data, count] = await prisma.$transaction([
        prisma.subject.findMany({
            where: query,
            include: {
                teachers: true,
            },
            take: ITEM_PER_PAGE,
            skip: ITEM_PER_PAGE * (p - 1),
    }),
        prisma.subject.count({where:query}),
    ]);
   

    return (
        <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
            {/* TOP */}
            <div className="flex items-center justify-between">
                <h1 className="hidden md:block  backdrop:text-lg font-semibold ">All Subjects</h1>
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
                            <FormModel table={"subject"} type={"create"}/>
                        )}
                    </div>
                </div>
            </div>
            {/* LIST */}
            <Table columns={columns} renderRow={renderRow} data={data} />
            {/* PAGINATION */}
            <Pagination page={p} count={count} />
            
        </div>
    )
}

export default SubjectsListPage;