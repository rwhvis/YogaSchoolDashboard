"use client"
import { Ampersands, Ellipsis } from 'lucide-react';
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';


const CountChart = ({ boys, girls }: { boys: number;  girls: number}) => {
    const data = [
        {
            name: "Total",
            count: boys+girls,
            fill: 'yogaLightBlue'
        },
        {
            name: "Girls",
            count: girls,
            fill: '#8884d8'
        },
        {
            name: "Boys",
            count: boys,
            fill: '#82ca9d'
        },
        
        
    ];
    return (
        <div className='relative width-full h-[75%]'>
                <ResponsiveContainer>
                    <RadialBarChart cx="50%" cy="50%" innerRadius="45%" outerRadius="110%" barSize={32} data={data}>
                        <RadialBar background dataKey="count" />
                        {/* <legend iconSize={10} layout="vertical" verticalAlign="middle" /> */}
                    </RadialBarChart>
                </ResponsiveContainer>
                <div className='text-3xl text-yogaGreen font-semibold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>{data[0].count}</div>
        </div>
    );
};

export default CountChart;