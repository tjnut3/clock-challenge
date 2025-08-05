import React, { use, useEffect, useState } from "react";

function Time() {
    const [ip, setIP] = useState('');
    const [time, setTime] = useState('');

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

    return (
        <div className="flex flex-col">
            <div className="">
                1
            </div>
            <div className="my-10 text-white font-Inter text-[200px] font-bold">
                {time}
                
            </div>
            <div className="">
                3
            </div>
        </div>
    );
}

export default Time;