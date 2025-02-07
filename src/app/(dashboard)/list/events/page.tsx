import Pagination from "@/components/Pagination";
import TableSearch from "@/components/TableSearch";
import Table from "@/components/Table";
import { ArrowDownWideNarrow,  SlidersHorizontal } from "lucide-react";
import FormModel from "@/components/FormModel";
import { Class, Event, Prisma } from "@prisma/client";
import prisma from "@/lib/prisma";
import { DATE_FORMAT, ITEM_PER_PAGE } from "@/lib/settings";
import { role } from "@/lib/data";
import { currentUserId } from "@/lib/utils";

type EventList = Event & { class: Class };

const columns = [
    {
        header: "Title",
        accessor: "title"
    },
    {
        header: "Class",
        accessor: "class",
    },
    {
        header: "Date",
        accessor: "date",
        className: "hidden md:table-cell",
    },
    {
        header: "Start Time",
        accessor: "startTime",
        className: "hidden lg:table-cell",
    },
    {
        header: "End Time",
        accessor: "endTime",
        className: "hidden lg:table-cell",
    },
    ...(role === "admin" ? [{
        header: "Actions",
        accessor: "actions"
    }] : []),
]

    const renderRow = (item: EventList) => (
        <tr key={item.id} className="border-b border-yogaGreen border-opacity-70 even:bg-yogaBlue even:bg-opacity-90 text-sm hover:bg-yogaYellow hover:bg-opacity-1">
            <td className="flex items-center gap-4 p-2">{item.title}</td>
            <td className="">{item.class?.name || "-"}</td>
            <td className="hidden md:table-cell">{new Intl.DateTimeFormat(DATE_FORMAT).format(item.startTime )}</td>
            <td className="hidden md:table-cell">{item.startTime.toLocaleTimeString(DATE_FORMAT, {
                hour: "2-digit",
                minute: "2-digit",
                hour12: false,
            })} </td>
            <td className="hidden md:table-cell">{item.endTime.toLocaleTimeString(DATE_FORMAT, {
                hour: "2-digit",
                minute: "2-digit",
                hour12: false,
            })} </td>
            <td>
                <div className="flex items-center gap-2">
                    {role === "admin" && (
                        <>
                            <FormModel table={"event"} type={"update"} data={item} />
                            <FormModel table={"event"} type={"delete"} id={item.id} />
                        </>
                    )}
                </div>
            </td>
        </tr>
);
    
const EventsListPage = async ({
    searchParams,
}: {
    searchParams: { [key: string]: string | undefined };
}) => {
    const { page, ...queryParams } = searchParams;

    const p = page ? parseInt(page) : 1;

    // URL PARAMS CONDITIONS

    const query: Prisma.EventWhereInput = {};

    if (queryParams) {
        for (const [key, value] of Object.entries(queryParams)) {
            if (value !== undefined) {       
                switch (key){
                    case "search":
                        query.title = { contains: value, mode: "insensitive" }
                        break;
                    default:
                        break;
                } 
            }
        }
    }

    // ROLE CONDITIONS

    const roleConditions = {
        teacher: { lessons : { some : { teacherId : currentUserId! } } },
        student: { students : { some : { id:currentUserId! } } },
        parent: { students : { some : { parentId : currentUserId! } } },
    }

    query.OR = [
        { classId : null },
        { class: roleConditions[role as keyof typeof roleConditions] || {},
    }];

    const [data, count] = await prisma.$transaction([
        prisma.event.findMany({
            where: query,
            include: {
                class: true,
            },
            take: ITEM_PER_PAGE,
            skip: ITEM_PER_PAGE * (p - 1),
    }),
        prisma.event.count({where:query}),
    ]);


    return (
        <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
            {/* TOP */}
            <div className="flex items-center justify-between">
                <h1 className="hidden md:block  backdrop:text-lg font-semibold ">All Events</h1>
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
                            <FormModel table={"event"} type={"create"}/>
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

export default EventsListPage;