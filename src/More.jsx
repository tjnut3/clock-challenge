import React, { useEffect, useState } from "react";

function More( {onToggleMore} ) {
    const [status, setStatus] = useState(true);
    const [isMore, setisMore] = useState('More');
    const [arrow, setArrow] = useState('/assets/desktop/icon-arrow-down.svg');

    const handleClick = () => {
        setStatus(!status);
    };

    useEffect(() => {
        if (status) {
            setisMore('MORE');
            setArrow('/assets/desktop/icon-arrow-down.svg');
        } else {
            setisMore('LESS');
            setArrow('/assets/desktop/icon-arrow-up.svg');
        }
    }, [status]);

    return (
        <div className="bg-white inline-flex items-center gap-2 rounded-full p-2 pl-5 cursor-pointer" onClick={() => {onToggleMore(); handleClick();}}>
            <span className="text-[16px] tracking-[5px] font-Inter font-bold decoration-black">{isMore}</span>
            <span className="rounded-full bg-[#303030] px-[13px] py-[15.5px]"><img src={arrow} alt="more" className="w-[14px] h-[9px]" /></span>
        </div>
    );
}

export default More;
