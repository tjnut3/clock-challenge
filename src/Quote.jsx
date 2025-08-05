import React, { useEffect, useState } from "react";

function Quote() {

    const [quote, setQuote] = useState('')
    const [author, setAuthor] = useState('');
    
    const fetchQuote = async () => {
        try {
            const res = await fetch('https://api.quotable.io/random');
            const data = await res.json();
            setQuote(data.content);
            setAuthor(data.author);
        } catch (error) {
            console.error("Error fetching quote:", error);
        }
    };

    useEffect(() => {
        fetchQuote();
    }, []);

    return (
        <div className="grid grid-cols-[1fr_auto] grid-rows-2 gap-4">
            <div className=" text-white font-Inter text-2xl leading-normal">
                {quote}
            </div>
            <div className="row-span-2 mt-2">
                <img src="/assets/desktop/icon-refresh.svg" alt="refresh" className="cursor-pointer" onClick={fetchQuote}/>
            </div>
            <div className="text-white font-Inter font-bold text-2xl">
                {author}
            </div>
        </div>
    );
}

export default Quote;