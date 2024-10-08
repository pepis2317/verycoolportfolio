'use client'
import { useState } from "react";
import FollowMouse from "./FollowMouse";

import SineWaveDivs from "./SineWaveDivs";
function Trapezoid({ color }: { color: string }) {
    return (
        <svg width="1800" height="1024" viewBox="0 0 1800 1024" fill="none" xmlns="http://www.w3.org/2000/svg" className="scale-x-[-1]">
            <path d="M775.9 0H0.5V1024H1799.9L775.9 0Z" fill={color} />
        </svg>
    )
}
export default function ContactMe() {
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
                <div className="w-[100vw] h-[100vh]">
                    <img src="/greyTriangles.svg" className="absolute -left-72" />
                </div>
            </FollowMouse>
            <FollowMouse multiplier={0.4} offsetX={offsetX} offsetY={offsetY}>
                <div className="w-[100vw] h-[100vh] relative">
                    <img src="/wrath.svg" className="absolute top-32 left-32 scale-150" />
                </div>
            </FollowMouse>
            <FollowMouse multiplier={1} offsetX={offsetX} offsetY={offsetY}>
                <div className="z-10 relative">
                    <Trapezoid color={"#1C1C1C"} />
                </div>
                <div className="absolute right-1 top-0">
                    <Trapezoid color={"#FF7528"} />
                </div>
                <div className="absolute z-10 -bottom-64 -right-64 -rotate-45">
                    <SineWaveDivs count={7} />
                </div>
            </FollowMouse>
            <FollowMouse multiplier={1.4} offsetX={offsetX} offsetY={offsetY}>
                <div className="w-[100vw] h-[100vh] relative">
                    <img src="/contactTitle.svg" className="absolute left-1/2 top-36 -translate-x-1/2 scale-110" />
                    <div className="text-white text-3xl font-thin absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-9 rounded-md border border-[#FF7528]">
                        <h1 className="mb-2">@d_monoxide308</h1>
                        <h1 className="mb-2">candradenis2317@gmail.com</h1>
                        <h1 className="mb-2">08164512317</h1>
                        <h1 className="mb-2">candra.wijaya2317 (LINE)</h1>

                    </div>
                </div>
            </FollowMouse>


        </div>
    )
}