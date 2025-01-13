"use client"

import { Ellipsis } from 'lucide-react';
import { title } from 'process';
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

//TEMP DATA
const EVENTS = [
    {
        id: 1,
        title: "Maandag Yoga",
        time: "09:30 - 10:45",
        description: "Ochtend yogales",
    },
    {
        id: 2,
        title: "Maandagavond Yoga",
        time: "19:15 - 20:30",
        description: "Avond yogales voor Mannen :-)",
    },
    {
        id: 3,
        title: "Dinsdag Ochtend Yoga (1)",
        time: "09:15 - 10:30",
        description: "Ochtend yogales",
    },
    {
        id: 4,
        title: "Dinsdag Ochtend Yoga (2)",
        time: "11:00 - 12:15",
        description: "Ochtend yogales",
    },
];

const EventCalendar = () =>{
    const [value, onChange] = useState<Value>(new Date());

    return (
        <div className='bg-yogaBlue rounded-xl w-full p-4'>
            <div className='flex justify-between aligm-center'>
                <h1 className='text-lg font-semibold'>Events</h1>
                <Ellipsis className="text-yogaGreen" size={20} />
            </div>
            <div className='w-full'>
                <Calendar
                    onChange={onChange}
                    value={value}
                />
            </div>
            <div className='flex flex-col gap-2'>
                {EVENTS.map(event=>(
                    <div
                        className='rounded-lg border border-gray-200 border-t-2 border-t-yogaGreen p-2'
                        key={event.id}>
                        <div className='flex items-center justify-between'>
                            <h1 className='font-semibold text-yogaGreen'>{event.title}</h1>
                            <span className='text-yogaGray text-xs'>{event.time}</span>
                        </div>
                        <p className='mt-2 text-yogaGray text-sm'>{event.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EventCalendar;