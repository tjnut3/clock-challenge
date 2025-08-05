import React, { useEffect, useState } from "react";

let greeting;
let icon;

function Time() {
    const [ip, setIP] = useState('');
    const [time, setTime] = useState('');
    const [timeZone, setTimeZone] = useState('');
    const [hour, setHour] = useState('');

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
            setTime(data.time);
            setTimeZone(data.timeZone);
            setHour(data.hour);
        }
        catch (error) {
            console.error("Error fetching time:", error);
        }
    }

    useEffect(() => {
        fetchIP();
    }, []);

    useEffect(() => {
        if (ip) {
            fetchTime();
        }
    }, [ip]);

    if (hour >= 5 && hour < 12) {
        greeting = "GOOD MORNING";
        icon = "/assets/desktop/icon-sun.svg";
    } else if (hour >= 12 && hour < 18) {
        greeting = "GOOD AFTERNOON";
        icon = "/assets/desktop/icon-sun.svg";
    } else {
        greeting = "GOOD EVENING";
        icon = "/assets/desktop/icon-moon.svg";
    }
    
    return (
        <div className="flex flex-col">
            <div className="flex">
                <span className="mr-4"><img src={icon} alt="time-icon"/></span>
                <span className="text-white font-Inter text-[20px] tracking-[4px]">{greeting}, IT'S CURRENTLY</span>
            </div>
            <div>
                <span className="text-white font-Inter text-[200px] font-bold leading-[242px]">{time}</span>
                <span className="text-white font-Inter text-[40px] font-light ml-4">{timeZone}</span>
            </div>
            <div className="">
                3
            </div>
        </div>
    );
}

export default Time;