import { Ellipsis } from "lucide-react"

const UserCard = ({ type } : { type: string }) => {
    return (
        <div className="rounded-2xl odd:bg-yogaYellow even:bg-yogaYellow p-4 flex-1 min-w-[130px]">
            {/* TOP SECTION */}
            <div className="flex justify-between items-center">
                <span className="text-[10px] bg-white px-2 py-1 rounded-full text-yogaGray">2024/25</span>
                <Ellipsis className="text-yogaGreen" size={20} />
            </div>
            <h1 className="text-2xl text-center font-semibold my-4 text-yogaGreen">34</h1>
            <h2 className="capitalize text-sm text-center font-medium text-yogaGray">{type}</h2>
        </div>
    )
}

export default UserCard