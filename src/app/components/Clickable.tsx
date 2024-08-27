'use client'
import { useState } from "react"
export default function Clickable({ title, subtitle, icon}: { title: string, subtitle: string, icon:string}) {
    const [isClicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(!isClicked);
    };

    return (
        <div
            onClick={handleClick}
            className="relative p-4 h-[110px] rounded-md border border-white bg-[#171717] overflow-hidden transition-all duration-300 hover:cursor-pointer"
            style={{width: isClicked ? '350px' : '110px', transformOrigin:'right'}}
        >
            <div
                className={`w-[350px] h-full text-white transition-opacity text-left`}
                style={{opacity: isClicked ? '100%' : '0%'}}
            >
                <h1 className="font-bold text-xl mb-2">{title}</h1>
                <h1>{subtitle}</h1>
            </div>
            <img src={`/${icon}`} className="w-14 h-14 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" style={{opacity: isClicked ? '0%' : '100%'}}/>
        </div>
    );
}