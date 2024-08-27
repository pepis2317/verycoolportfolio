'use client'
import { useState } from "react";
import FollowMouse from "./FollowMouse";
import DragCarousel from "./DragCarousel";
function Wall({ color }: { color: string }) {
    return (
        <div className="w-full h-full">
            <div className={`absolute -translate-x-[30%] w-full h-[120vh] rotate-[20deg]`} style={{ backgroundColor: color }} />
            <div className={`absolute translate-x-[30%] w-full h-[120vh] -rotate-[20deg] `} style={{ backgroundColor: color }} />
        </div>
    )
}
export default function Featured() {
    const [offsetX, setOffsetX] = useState(0)
    const [offsetY, setOffsetY] = useState(0)
    const handleMouseMove = (e: any) => {
        const x = (window.innerWidth / 2 - e.clientX) / 20
        const y = (window.innerHeight / 2 - e.clientY) / 20
        setOffsetX(x)
        setOffsetY(y)
    };

    return (
        <div onMouseMove={handleMouseMove} className="w-full h-[100vh] flex justify-center items-center bg-[#2B2B2B] overflow-hidden relative">
            <FollowMouse multiplier={0.1} offsetX={offsetX} offsetY={offsetY}>
                <div className="w-[100vw] h-[100vh]">
                    <img src="/greyTriangles.svg" className="absolute" />
                </div>
            </FollowMouse>
            <FollowMouse multiplier={0.4} offsetX={offsetX} offsetY={offsetY}>
                <div className="w-[100vw] h-[100vh]">
                    <img src="/orangeTriangles.svg" className="w-full h-full absolute -top-52 -left-[500px] scale-50" />
                </div>
            </FollowMouse>
            <FollowMouse multiplier={1} offsetX={offsetX} offsetY={offsetY}>
                <div className="w-[100vw] h-[100vh] translate-y-40 relative">
                    <div className="-translate-y-1">
                        <Wall color={"#FF7528"} />
                    </div>
                    <Wall color={"#1C1C1C"} />
                    <div className="w-full absolute top-24 left-1/2 -translate-x-1/2  scale-110">
                        <DragCarousel />
                    </div>
                </div>
            </FollowMouse>
            <div className="pointer-events-none">
                <FollowMouse multiplier={1.4} offsetX={offsetX} offsetY={offsetY}>
                    <div className="w-[100vw] h-[100vh] relative">
                        <img src="/featuredTitle.svg" className="absolute top-20 left-1/2 -translate-x-1/2" />
                    </div>
                </FollowMouse>
            </div>

        </div>
    )
}