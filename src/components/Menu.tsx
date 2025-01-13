import Link from "next/link";
import { BookOpen, BookOpenCheck, BookUser, CalendarDays, GraduationCap, Home, HomeIcon, House, LibraryBig, LogOut, Mail, School, ScrollText, Settings, ShieldPlus, TicketCheck, Users, UsersRound, Volume2 } from 'lucide-react';
import { role } from "@/lib/data";

const menuItems = [
  {
    title: "MENU",
    items: [
      {
        icon: House,
        label: "Home",
        href: "/",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: GraduationCap,
        label: "Teachers",
        href: "/list/teachers",
        visible: ["admin", "teacher"],
      },
      {
        icon: Users,
        label: "Students",
        href: "/list/students",
        visible: ["admin", "teacher"],
      },
      {
        icon: UsersRound,
        label: "Parents",
        href: "/list/parents",
        visible: ["admin", "teacher"],
      },
      {
        icon: LibraryBig,
        label: "Subjects",
        href: "/list/subjects",
        visible: ["admin"],
      },
      {
        icon: School,
        label: "Classes",
        href: "/list/classes",
        visible: ["admin", "teacher"],
      },
      {
        icon: BookOpen,
        label: "Lessons",
        href: "/list/lessons",
        visible: ["admin", "teacher"],
      },
      {
        icon: ScrollText,
        label: "Exams",
        href: "/list/exams",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: BookOpenCheck,
        label: "Assignments",
        href: "/list/assignments",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: ShieldPlus,
        label: "Results",
        href: "/list/results",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: TicketCheck,
        label: "Attendance",
        href: "/list/attendance",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: CalendarDays,
        label: "Events",
        href: "/list/events",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: Mail,
        label: "Messages",
        href: "/list/messages",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: Volume2,
        label: "Announcements",
        href: "/list/announcements",
        visible: ["admin", "teacher", "student", "parent"],
      },
    ],
  },
  {
    title: "OTHER",
    items: [
      {
        icon: BookUser,
        label: "Profile",
        href: "/profile",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: Settings,
        label: "Settings",
        href: "/settings",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: LogOut,
        label: "Logout",
        href: "/logout",
        visible: ["admin", "teacher", "student", "parent"],
      },
    ],
  },
];

const Menu = () => {
  return (
    <div className='mt-4 text-sm'>
      {menuItems.map(i => (
        <div className='flex flex-col gap-2' key={i.title}>
          <span className="hidden lg:block text-gray-400 font-light my-4 ">{i.title}</span>
          
          {i.items.map((item) => {
            if (item.visible.includes(role)) {
            return(
              <Link
                href={item.href}
                key={item.label}
                className={`flex items-center justify-center lg:justify-start gap-4 text-yogaGray py-2 md:px-2 rounded-md hover:bg-yogaYellow `}>
                <item.icon size={20}/>
                <span className="hidden lg:block">{item.label}</span>
              </Link>    
              );
            }
          })}
          
          {/* {i.items.map(item => (
            <Link
              href={item.href}
              key={item.label}
              className={`flex items-center justify-center lg:justify-start gap-4 text-yogaGray py-2 `}>
              <item.icon size={20}/>
              <span className="hidden lg:block">{item.label}</span>
            </Link>
          ))} */}
        
        </div>
      ))}
    </div>
  )
}

export default Menu;