import Announcements from "@/components/Announcements"
import BigCalendar from "@/components/BigCalendar"
import FormModel from "@/components/FormModel"
import Performance from "@/components/Performance"
import { Bandage, BookA, CalendarDays, CalendarX2, ClipboardList, Mail, Phone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const SingleTeacherPage = () => {
    return (
        <div className="flex-1 p-4 flex flex-col gap-4 xl:flex-row ">
            {/* LEFT */}
            <div className="w-full xl:w-2/3">
                {/* TOP */}
                <div className="flex flex-col lg:flex-row gap-4">
                    {/* USER INFO CARD */}
                    <div className="bg-yogaYellow py-6 px-4 rounded-md flex-1 flex gap-4">
                        <div className="w-1/3 flex ">
                            <Image
                                src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=conpress&cs=tinysrgb&w=1200"
                                alt=""
                                width={144}
                                height={144}
                                className="w-36 h-36 rounded-full object-cover"
                            />
                        </div>
                        <div className="w-2/3 flex flex-col justify-between gap-4">
                            <div className="flex items-center gap-4">

                            <h1 className="tex-xl font-semibold">Leonard Snyder</h1>
                            <FormModel table={"teacher"} type={"update"} data={{
                                id: 1,
                                username: "deanguerrero",
                                email: "deanguerrero@gmail.com",
                                password: "password",
                                firstName: "Dean",
                                lastName: "Guerrero",
                                phone: "+1 234 567 89",
                                address: "1234 Main St, Anytown, USA",
                                bloodType: "A+",
                                birthday: "1985-07-30",
                                gender: "male",
                                img: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1200",
                            }} />
                            </div>
                            <p className="text-sm text-yogaGray">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                            <div className="flex items-center justify-between gap-2 flex-wrap text-xs font-medium">
                                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex item-center gap-2">
                                    <Bandage size={14} />
                                    <span>A+</span>
                                </div>
                                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex item-center gap-2">
                                    <CalendarDays size={14} />
                                    <span>January 2025</span>
                                </div>
                                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex item-center gap-2">
                                    <Mail size={14} />
                                    <span>user@gmail.com</span>
                                </div>
                                <div className="w-full md:w-1/3 flex item-center gap-2">
                                    <Phone size={14} />
                                    <span>+31 6 4437 4437</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* SMALL CARDS */}
                    <div className="flex-1 flex gap-4 justify-between flex-wrap">
                        {/* CARD Attendance */}
                        <div className="bg-white w-full p-4 rounded-md flex gap-4 md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
                            <CalendarX2 size={24} className="w-6 h-6 text-yogaGreen" />
                            <div>
                                <h1 className="text-xl font-semibold">90%</h1>
                                <span className="text-sm text-yogaGray">Attendance</span>
                            </div>
                        </div>
                        {/* CARD BRANCHES */}
                        <div className="bg-white w-full p-4 rounded-md flex gap-4 md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
                            <ClipboardList size={24} className="w-6 h-6 text-yogaGreen" />
                            <div>
                                <h1 className="text-xl font-semibold">2</h1>
                                <span className="text-sm text-yogaGray">Branches</span>
                            </div>
                        </div>
                        {/* CARD SINGLE LESSON*/}
                        <div className="bg-white w-full p-4 rounded-md flex gap-4 md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
                            <BookA size={24} className="w-6 h-6 text-yogaGreen" />
                            <div>
                                <h1 className="text-xl font-semibold">6</h1>
                                <span className="text-sm text-yogaGray">Lessons</span>
                            </div>
                        </div>
                        {/* CARD SINGLE CLASSES*/}
                        <div className="bg-white w-full p-4 rounded-md flex gap-4 md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
                            <BookA size={24} className="w-6 h-6 text-yogaGreen" />
                            <div>
                                <h1 className="text-xl font-semibold">6</h1>
                                <span className="text-sm text-yogaGray">Classes</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* BOTTOM */}
                <div className="bg-white mt-4 rounded-md p-4 h-[800px]">
                    <h1 className="text-xl font-semibold">Teacher's Schedule</h1>
                    <BigCalendar />
                </div>
            </div>

            {/* RIGHT */}
            <div className="w-full xl:w-1/3 flex flex-col gap-4 ">
                <div className="bg-white p-4 rounded-md ">
                    <h1 className="text-xl text-semibold">Shortcuts</h1>
                    <div className="mt-4 flex gap-4 flex-wrap text-xs text-yogaGray">
                        <Link className="p-3 rounded-md bg-yogaYellow" href={`/list/classes?supervisorId=${"teacher2"}`}>Teacher's Classes</Link>
                        <Link className="p-3 rounded-md bg-yogaYellow" href={ `/list/students?teacherId=${"teacher2"}`}>Teacher's Students</Link>
                        <Link className="p-3 rounded-md bg-yogaYellow" href={`/list/lessons?teacherId=${"teacher2"}`}>Teacher's Lessons</Link>
                        <Link className="p-3 rounded-md bg-yogaYellow" href={`/list/exams?teacherId=${"teacher2"}`}>Teacher's Exams</Link>
                        <Link className="p-3 rounded-md bg-yogaYellow" href={`/list/assignments?teacherId=${"teacher2"}`}>Teacher's Addignments</Link>
                    </div>
                </div>
                <Performance />
                <Announcements />
            </div>
        </div>
    )
}

export default SingleTeacherPage