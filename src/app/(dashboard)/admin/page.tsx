import { User } from "lucide-react"
import UserCard from "@/components/UserCard";
import FinanceChart from "@/components/FinanceChart";
import EventCalendar from "@/components/EventCalendar";
import Announcements from "@/components/Announcements";
import CountChartContainer from "@/components/CountChartContainer";
import AttendanceChartContainer from "@/components/AttendanceChartContainer";
import EventCalendarContainer from "@/components/EventCalendarContainer";

const AdminPage = ({
  searchParams,
}: {
  searchParams: { [keys: string]: string | undefined }
}) => {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      {/* LEFT */}
      <div className="w-full lg:w-2/3 flex flex-col gap-4">
        {/* USERCARDS */}
        <div className="flex gap-4 justify-between flex-wrap">
          <UserCard type="student" />
          <UserCard type="admin" />
          <UserCard type="teacher" />
          <UserCard type="parent" />
        </div>
        
        {/* MIDDLE CHARTS */}
            <div className='flex gap-4 flex-col lg:flex-row'>
                {/* COUNT CHART */}
                <div className='w-full lg:w-1/3 h-[450px]'>
                    <CountChartContainer />
                </div>

                {/* ATTENDANCE CHART */}
          <div className='w-full lg:w-2/3 h-[450px]'>
            <AttendanceChartContainer/></div>
            </div>
            {/* BOTTOM CHARTS*/}
            <div className='w-full'><FinanceChart/></div>
        </div>

      {/* RIGHT */}
      <div className="w-full lg:w-1/3 flex flex-col gap-4">
        <EventCalendarContainer  searchParams={searchParams} />
        <Announcements />
      </div>

    </div>
  )
}

export default AdminPage