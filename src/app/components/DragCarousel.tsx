'use client'
import { useRef, useState } from "react";
function Project({title}:{title:string}) {
    return (
        <div className="relative duration-200 h-[500px] w-[300px] flex-shrink-0">
            <div className=" absolute duration-200 w-[300px] h-[400px] bg-[#393939] flex-shrink-0" />
            <h1 className=" text-white absolute bottom-14 text-lg mt-3 font-light left-1/2 -translate-x-1/2 ">{title}</h1>
        </div>
    )
}
export default function DragCarousel() {
    const itemsRef = useRef<HTMLDivElement | null>(null);
    const [isMouseDown, setIsMouseDown] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const handleMouseDown = (e:any) => {
        if (itemsRef.current) {
            setIsMouseDown(true);
            setStartX(e.pageX - itemsRef.current.offsetLeft);
            setScrollLeft(itemsRef.current.scrollLeft);
        }
    };

    const handleMouseLeave = () => {
        setIsMouseDown(false);
    };

    const handleMouseUp = () => {
        setIsMouseDown(false);
    };

    const handleMouseMove = (e:any) => {
        if (!isMouseDown || !itemsRef.current) return;
        e.preventDefault();
        const x = e.pageX - itemsRef.current.offsetLeft;
        const walk = (x - startX) * 1; // adjust speed if needed
        itemsRef.current.scrollLeft = scrollLeft - walk;
    };
    return (
        <div
            ref={itemsRef}
            className="flex w-full items-center gap-10 overflow-x-scroll pr-[calc(50%-150px)] pl-[calc(50%-150px)]  no-scrollbar"
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
        >
            <Project title={"A"} />
            <Project title={"B"} />
            <Project title={"C"} />
            <Project title={"D"} />
            <Project title={"E"} />
            <Project title={"F"} />
            <Project title={"G"} />
        </div>
    )
}