import prisma from "@/lib/prisma";
import { DATE_FORMAT } from "@/lib/settings";
import { auth } from "@clerk/nextjs/server";

const Announcements = async () => {
    // Correct way to use auth()
    const { userId, sessionClaims } = await auth();
    
    // Ensure user is authenticated
    if (!userId || !sessionClaims) {
        return <div className="text-yogaRed"> Access denied. Please log in.</div>;
    }

    // Get user role from session Claims metadata
    const role = (sessionClaims?.metadata as { role?: string })?.role;

    // Define role-based conditions
    const roleConditions = {
        // admin: {},
        teacher: { lessons: { some: { teacherId: userId } } },
        student: { students: { some: { id: userId } } },
        parent: { students: { some: { parentId: userId } } },
    };

    // Fetch announcements based on role
    const data = await prisma.announcement.findMany({
        take: 5,
        orderBy: { date: "desc" },
        where: {
            ...(role !== "admin" && {
            OR: [
                { classId: null },
                { class: roleConditions[role as keyof typeof roleConditions] || {} },
            ],
        }),
        },
    });
    
    return (
        <div className="bg-yogaBlue rounded-xl w-full p-4">
            <div className="flex justify-between items-center">
                <h1 className="text-lg font-semibold">Announcements</h1>
                <span className="text-yogaGray text-xs">View All</span>
            </div>
            <div className="flex flex-col gap-2 mb-4">
                {data.length > 0 ? (
                    data.map((announcement) => (
                        <div key={announcement.id} className="bg-yogaYellow rounded-md p-4">
                            <div className="flex items-center justify-between">
                                <h2 className="font-medium">{announcement.title}</h2>
                                <span className="text-xs text-yogaGray bg-white rounded-md px-1 py-1">
                                    {new Date(announcement.date).toLocaleDateString(DATE_FORMAT)}
                                </span>
                            </div>
                            <p className="text-sm text-yogaGray mt-1">{announcement.description}</p>
                        </div>
                    ))
                ) : (
                    <p className="text-sm text-yogaGray">No announcements available.</p>
                )}
            </div>
        </div>
    );
};
export default Announcements; 