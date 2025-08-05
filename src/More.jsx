import React from "react";

function More() {
    return (
        <div className="bg-white inline-flex items-center gap-2 rounded-full p-2 pl-5 cursor-pointer">
            <span className="text-[16px] tracking-[5px] font-Inter font-bold decoration-black">MORE</span>
            <span className="rounded-full bg-[#303030] px-[13px] py-[15.5px]"><img src="/assets/desktop/icon-arrow-down.svg" alt="more" className="w-[14px] h-[9px]" /></span>
        </div>
    );
}

export default More;
