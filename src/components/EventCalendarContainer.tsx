import { Ellipsis } from "lucide-react"
import EventList from "./EventList"
import EventCalendar from "./EventCalendar"

const EventCalendarContainer = async ({searchParams}: {searchParams:{[keys:string]:string | undefined}}) => {

    const { date } = searchParams;
    
    return (
        <div className='bg-yogaBlue rounded-xl w-full p-4'>
            <EventCalendar />
            <div className='flex justify-between aligm-center'>
                <h1 className='text-lg font-semibold'>Events</h1>
                <Ellipsis className="text-yogaGreen" size={20} />
            </div>
            <div className='w-full'>
                <EventList dateParam={date} />
                </div>
        </div>
    )
}

export default EventCalendarContainer