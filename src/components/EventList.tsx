import prisma from "@/lib/prisma"
import { DATE_FORMAT } from "@/lib/settings";

const EventList = async ({ dateParam }: { dateParam: string | undefined }) => {

    const date = dateParam ? new Date(dateParam) : new Date()
    
    const data = await prisma.event.findMany({
        where: {
            startTime: {
                gte: new Date(date.setHours(0, 0, 0, 0)),
                lte: new Date(date.setHours(23, 59, 59, 999)),
            },
        },
    });

    return data.map((event) => (
        <div
            className='rounded-lg border border-gray-200 border-t-2 border-t-yogaGreen p-2 mb-4'
            key={event.id}>
            <div className='flex items-center justify-between'>
                <h1 className='font-semibold text-yogaGreen'>{event.title}</h1>
                <span className='text-yogaGray text-xs'>{event.startTime.toLocaleString(DATE_FORMAT, {
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: false,
                })}</span>
            </div>
            <p className='mt-2 text-yogaGray text-sm'>{event.description}</p>
        </div>
    ));
};

export default EventList