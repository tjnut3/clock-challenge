import React, { useEffect, useState } from "react";

let greeting;
let icon;

function Time({ onChangeDay }) {
    const [ip, setIP] = useState('');
    const [time, setTime] = useState('');
    const [timeZone, setTimeZone] = useState('');
    const [hour, setHour] = useState('');
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');

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
            console.log("Fetching time for IP:", ip);
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

    const fetchLocation = async () => {
        try {
            const res = await fetch(`https://ipapi.co/${ip}/json/`);
            const data = await res.json();
            setCity(data.city);
            setCountry(data.country);
        } catch (error) {
            console.error("Error fetching location:", error);
        }
    }

    useEffect(() => {
        fetchIP();
        fetchLocation();
    }, []);

    useEffect(() => {
        console.log("IP:", ip);
        if (ip) {
            const intervalTime = setInterval(() => {
                fetchTime();
            }, 6000);

            fetchTime();

            return () => clearInterval(intervalTime);
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

    useEffect(() => {
        if (hour >= 5 && hour < 18) {
            onChangeDay(true);
        } else {
            onChangeDay(false);
        }
    }, [hour]);
    
    return (
        <div className="flex flex-col">
            <div className="flex">
                <span className="mr-4"><img src={icon} alt="time-icon"/></span>
                <span className="text-white font-Inter text-[20px] tracking-[4px]">{greeting}, IT'S CURRENTLY</span>
            </div>
            <div>
                <span className="text-white font-Inter text-[200px] font-bold leading-[242px]">{time}</span>
                <span className="text-white font-Inter text-[40px] font-light ml-4 uppercase">{timeZone}</span>
            </div>
            <div>
                <span className="text-white font-Inter text-[24px] font-bold tracking-[4.8px] uppercase">IN {city}, {country}</span>
            </div>
        </div>
    );
}

export default Time;