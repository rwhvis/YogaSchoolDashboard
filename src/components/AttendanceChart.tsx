
"use client"
import { Ellipsis } from 'lucide-react';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const DATA = [
    {
        name: 'Mon',
        present: 60,
        absent: 40,
    },
    {
        name: 'Tue',
        present: 70,
        absent: 28,
    },
    {
        name: 'Wed',
        present: 80,
        absent: 20,
    },
    {
        name: 'Thu',
        present: 90,
        absent: 10,
    },
    {
        name: 'Fri',
        present: 73,
        absent: 27,
    },
];
const AttendanceChart = () => {
    return (
        <div className=' bg-yogaBlue rounded-xl w-full h-full p-4'>
            {/* TITLE */}
            <div className='flex justify-between aligm-center'>
                <h1 className='text-lg font-semibold'>Students</h1>
                <Ellipsis className="text-yogaGreen" size={20} />
            </div>
            {/* CHART */}
        <ResponsiveContainer width="100%" height="90%">
            <BarChart
                width={500}
                height={300}
                data={DATA}
                barSize={20}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend align='left' verticalAlign='top' wrapperStyle={{paddingTop:"20px", paddingBottom:"40px"}} le/>
                <Bar dataKey="absent" fill="#8884d8" activeBar={<Rectangle fill="pink"  />} legendType='circle' radius={[10,10,0,0]}/>
                <Bar dataKey="present" fill="#82ca9d" activeBar={<Rectangle fill="gold" />} legendType='circle' radius={[10,10,0,0]}/>
            </BarChart>
        </ResponsiveContainer>
    </div>
    );
};


export default AttendanceChart