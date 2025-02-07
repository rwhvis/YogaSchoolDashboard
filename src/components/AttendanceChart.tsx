
"use client"
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const AttendanceChart = ({
    data, 
}: {
        data: {name: string; present: number; absent: number }[];
}) => {
    return (
        <ResponsiveContainer width="100%" height="90%">
            <BarChart
                width={500}
                height={300}
                data={data}
                barSize={20}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend align='left' verticalAlign='top' wrapperStyle={{paddingTop:"20px", paddingBottom:"40px"}} />
                <Bar dataKey="absent" fill="#8884d8" activeBar={<Rectangle fill="pink"  />} legendType='circle' radius={[10,10,0,0]}/>
                <Bar dataKey="present" fill="#82ca9d" activeBar={<Rectangle fill="gold" />} legendType='circle' radius={[10,10,0,0]}/>
            </BarChart>
        </ResponsiveContainer>
    );
};


export default AttendanceChart