import { Ellipsis } from "lucide-react"
import CountChart from "./CountChart"
import prisma from "@/lib/prisma"

const CountChartContainer = async () => {

    const data = await prisma.student.groupBy({
        by: ["gender"],
        _count: true,
    });

    const girls = data.find(d => d.gender === "FEMALE")?._count || 0;
    const boys = data.find(d => d.gender === "MALE")?._count || 0;

    return (
        <div className=' bg-yogaBlue rounded-xl w-full h-full p-4'>
            {/* TITLE */}
            <div className='flex justify-between aligm-center'>
                <h1 className='text-lg font-semibold'>Students</h1>
                <Ellipsis className="text-yogaGreen" size={20} />
            </div>
            
            {/* CHART */}
            
                <CountChart boys={boys} girls={girls}/>

            {/* BOTTOM */}
            <div className='flex justify-center gap-16'>
                <div className='flex flex-col gap-1'>
                    <div className='w-5 h-5 bg-yogaGreen rounded-full' />
                    <h1 className='font-bold'>{boys}</h1>
                    <h2 className='text-xs text-gray-500'>boys { Math.round(boys/(boys+girls)*100)}%</h2>
                </div>
                <div className='flex flex-col gap-1'>
                    <div className='w-5 h-5 bg-yogaBackgroundBlue rounded-full' />
                    <h1 className='font-bold'>{girls}</h1>
                    <h2 className='text-xs text-gray-500'>girls { Math.round(girls/(boys+girls)*100)}%</h2>
                </div>
            </div>
        </div>
    )
}

export default CountChartContainer