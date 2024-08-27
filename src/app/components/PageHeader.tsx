'use client'
import { useState } from "react";

import FollowMouse from "./FollowMouse";
import WavyBlocks from "./WavyBlocks";

function Trapezoid({color}:{color:string}) {
    return (
        <svg width="1800" height="1024" viewBox="0 0 1800 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M775.9 0H0.5V1024H1799.9L775.9 0Z" fill={color} />
        </svg>
    )
}

export default function PageHeader() {
    const [offsetX, setOffsetX] = useState(0)
    const [offsetY, setOffsetY] = useState(0)
    const handleMouseMove = (e: any) => {
        const x = (window.innerWidth / 2 - e.clientX) / 20
        const y = (window.innerHeight / 2 - e.clientY) / 20
        setOffsetX(x)
        setOffsetY(y)
    };
    return (
        <div className="w-full h-[100vh] bg-[#2B2B2B] overflow-hidden relative" onMouseMove={handleMouseMove}>
            <FollowMouse multiplier={0.1} offsetX={offsetX} offsetY={offsetY}>
                <div className="w-[2000px] h-[2000px]">
                    <img src="/greyTriangles.svg" className="absolute left-72" />
                </div>
            </FollowMouse>
            <FollowMouse multiplier={0.4} offsetX={offsetX} offsetY={offsetY}>
                <div className="w-[1000px] h-[1000px]">
                    <img src="/orangeTriangles.svg" className="w-full h-full absolute -top-32" />
                    <img src="/orangeTriangles.svg" className="w-full h-full absolute -bottom-64 -right-[1100px] " />
                </div>
            </FollowMouse>
            <FollowMouse multiplier={1} offsetX={offsetX} offsetY={offsetY}>
                <div className="z-10 relative">
                    <Trapezoid color={"#1C1C1C"} />
                </div>
                <div className="absolute left-1 top-0">
                    <Trapezoid color={"#FF7528"} />
                </div>
                <div className="absolute z-10 -bottom-48 -left-64">
                    <WavyBlocks />
                </div>

            </FollowMouse>
            <FollowMouse multiplier={1.4} offsetX={offsetX} offsetY={offsetY}>
                <div className={`lg:w-[1200px] md:w-[800px] w-[600px]  z-30 text-white relative md:left-5 -top-4 `}>
                    <h1 className="absolute md:-top-14 -top-9 font-extralight lg:text-3xl md:text-2xl">Hi! I'm Candra Wijaya</h1>
                    <img src="/whiteTitle.svg" className="w-full h-fit relative z-10" />
                    <img src="/borderTitle.svg" className="w-full absolute lg:top-5 md:top-3 top-2 z-0" />
                    <img src="/sign.svg" className=" absolute -bottom-28 md:-right-24 -right-36" />
                    <div className="flex gap-5 absolute md:-bottom-24 -bottom-12">
                        <h1 className="w-fit p-1 pl-2 pr-2  md:p-2 md:pl-3 md:pr-3 lg:p-3 lg:pl-8 lg:pr-8 border border-white rounded-full lg:text-xl md:text-base font-extralight">I Study Software Engineering</h1>
                        <h1 className="w-fit p-1 pl-2 pr-2 md:p-2 md:pl-3 md:pr-3 lg:p-3 lg:pl-8 lg:pr-8 border border-white rounded-full lg:text-xl md:text-base font-extralight">I Also Design for Fun :3c</h1>
                    </div>
                </div>
            </FollowMouse>
        </div>
    );
}