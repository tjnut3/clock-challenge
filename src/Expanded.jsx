import React, { useEffect, useState } from "react";
import Time from "./Time";

function Expanded() {
    const [ip, setIP] = useState('');
    const [timeZone, setTimeZone] = useState('');
    const [dayOfWeek, setDayOfWeek] = useState('');
    const [dayOfYear, setDayOfYear] = useState('');
    const [weekNumber, setWeekNumber] = useState('');

    const fetchIP = async () => {
        try {
            const res = await fetch('https://api.ipify.org?format=json');
            const data = await res.json();
            setIP(data.ip);
        }
        catch (error) {
            console.error("Error fetching IP:", error);
        }
    }

    const fetchTime = async () => {
        try {
            const res = await fetch(`https://timeapi.io/api/time/current/ip?ipAddress=${ip}`);
            const data = await res.json();
            setTimeZone(data.timeZone);
            console.log("Timezone data:", timeZone);

            const DayToNumberMatch = {
                'Sunday': 7,
                'Monday': 1,
                'Tuesday': 2,
                'Wednesday': 3,
                'Thursday': 4,
                'Friday': 5,
                'Saturday': 6
            };

            setDayOfWeek(DayToNumberMatch[data.dayOfWeek]);

            const currentDate = new Date(data.year, data.month - 1, data.day);
            const startOfYear = new Date(data.year, 0, 1);

            const diffInMs = currentDate - startOfYear;

            setDayOfYear(Math.floor(diffInMs / (1000 * 60 * 60 * 24)) + 1)
        }
        catch (error) {
            console.error("Error fetching timezone:", error);
        }
    };

    useEffect(() => {
        fetchIP();
        if (ip) {
            fetchTime();
        }
    }, [ip]);

    useEffect(() => {
        setWeekNumber(Math.ceil(dayOfYear / 7))
    }, [dayOfYear]);

    return (
        <div className="grid grid-cols-[1fr_1px_1fr] grid-rows-2 gap-x-[80px] pt-[80px] pb-[44px] px-41">
            <div className="flex flex-col mb-10">
                <span className="font-Inter font-regular text-[15px] tracking-[3px] decoration-[#808080] mb-3">CURRENT TIMEZONE</span>
                <span className="font-Inter font-bold text-[56px] decoration-[#303030] leading-[120%]">{timeZone}</span>
            </div>
            <div className="row-span-2 w-px bg-[#808080]/25 mb-8"></div>
            <div className="flex flex-col mb-10">
                <span className="font-Inter font-regular text-[15px] tracking-[3px] decoration-[#808080] mb-3">DAY OF THE WEEK</span>
                <span className="font-Inter font-bold text-[56px] decoration-[#303030] leading-[120%]">{dayOfWeek}</span>
            </div>
            <div className="flex flex-col">
                <span className="font-Inter font-regular text-[15px] tracking-[3px] decoration-[#808080] mb-3">DAY OF THE YEAR</span>
                <span className="font-Inter font-bold text-[56px] decoration-[#303030] leading-[120%]">{dayOfYear}</span>
            </div>
            <div className="flex flex-col">
                <span className="font-Inter font-regular text-[15px] tracking-[3px] decoration-[#808080] mb-3">WEEK NUMBER</span>
                <span className="font-Inter font-bold text-[56px] decoration-[#303030] leading-[120%]">{weekNumber}</span>
            </div>
        </div>
    );
}

export default Expanded;