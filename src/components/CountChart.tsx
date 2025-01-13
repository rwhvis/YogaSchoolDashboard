"use client"
import { Ampersands, Ellipsis } from 'lucide-react';
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';

const Data = [
    {
        name: "Total",
        count: 40,
        fill: 'yogaLightBlue'
    },
    {
        name: "Girls",
        count: 35,
        fill: '#8884d8'
    },
    {
        name: "Boys",
        count: 5,
        fill: '#82ca9d'
    },
    
    
];

const CountChart = () => {
    return (
        <div className=' bg-yogaBlue rounded-xl w-full h-full p-4'>
            {/* TITLE */}
            <div className='flex justify-between aligm-center'>
                <h1 className='text-lg font-semibold'>Students</h1>
                <Ellipsis className="text-yogaGreen" size={20} />
            </div>
            
            {/* CHART */}
            <div className='relative width-full h-[75%]'>
                <ResponsiveContainer>
                    <RadialBarChart cx="50%" cy="50%" innerRadius="45%" outerRadius="110%" barSize={32} data={Data}>
                        <RadialBar background dataKey="count" />
                        <legend iconSize={10} layout="vertical" verticalAlign="middle" />
                    </RadialBarChart>
                </ResponsiveContainer>
                <Ampersands className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' size={35} />
        </div>
            {/* BOTTOM */}
            <div className='flex justify-center gap-16'>
                <div className='flex flex-col gap-1'>
                    <div className='w-5 h-5 bg-yogaGreen rounded-full' />
                    <h1 className='font-bold'>1.234</h1>
                    <h2 className='text-xs text-gray-500'>boys 55%</h2>
                </div>
                <div className='flex flex-col gap-1'>
                    <div className='w-5 h-5 bg-yogaBackgroundBlue rounded-full' />
                    <h1 className='font-bold'>1.234</h1>
                    <h2 className='text-xs text-gray-500'>girls 45%</h2>
                </div>
            </div>
        </div>
    )
};

export default CountChart;