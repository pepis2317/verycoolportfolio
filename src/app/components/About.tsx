'use client'
import { useState } from "react";
import Tiles from "./Tiles";

import Clickable from "./Clickable";

import FollowPerspective from "./FollowPerspective";
import FollowMouse from "./FollowMouse";
import SineWaveDivs from "./SineWaveDivs";

export default function About() {
    const [rotate, setRotate] = useState({ x: 0, y: 0 });
    const [offsetX, setOffsetX] = useState(0)
    const [offsetY, setOffsetY] = useState(0)

    const handleMouseMove = (e: any) => {
        const wrapper = e.currentTarget;
        const { offsetWidth: width, offsetHeight: height } = wrapper;
        const { clientX, clientY } = e.nativeEvent;
        const { left, top } = wrapper.getBoundingClientRect();
        const x = clientX - left;
        const y = clientY - top;
        const rotateX = ((y / height) - 0.5) * -30;
        const rotateY = ((x / width) - 0.5) * 30;

        setRotate({ x: rotateX, y: rotateY });
        const xOffset = (window.innerWidth / 2 - e.clientX) / 20
        const yOffset = (window.innerHeight / 2 - e.clientY) / 20

        setOffsetX(xOffset)
        setOffsetY(yOffset)
    };

    const handleMouseLeave = () => {
        setRotate({ x: 0, y: 0 });
    };

    return (
        <div className="relative w-full md:h-[100vh] h-[1300px]  overflow-hidden bg-[#171717]" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
            <div className=" md:-translate-y-0 -translate-y-[200px] h-full">
                <FollowMouse multiplier={0.4} offsetX={offsetX} offsetY={offsetY}>
                    <div className="w-[100vw] h-[100vh] relative">
                        <div className=" absolute -rotate-45 -bottom-72 -right-[550px]">
                            <SineWaveDivs count={7} />
                        </div>
                    </div>
                </FollowMouse>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:scale-100 scale-90">
                    <FollowPerspective perspective={1000} rotateX={rotate.x} rotateY={rotate.y}>
                        <Tiles />
                    </FollowPerspective>
                </div>

                <div className="w-full h-full absolute top-0 left-0 pointer-events-none md:scale-100 scale-90">
                    <FollowPerspective perspective={500} rotateX={rotate.x} rotateY={rotate.y}>
                        <img src="/Exclude.png" className="w-[500px] relative top-14 " />
                    </FollowPerspective>
                </div>
                <div className="pointer-events-none ">
                    <FollowMouse multiplier={0.4} offsetX={offsetX} offsetY={offsetY}>
                        <div className="w-[800px] h-[800px] relative md:scale-100 scale-90">
                            <img src="/aboutTitle.svg" className=" absolute top-14 md:-left-5 left-10" />
                            <img src="/wriggly.svg" className="absolute right-16 top-28" />
                            <div className="flex justify-center items-center absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-60 ">
                                <div className="w-28 text-white">
                                    <h1 className="text-2xl font-black">500+</h1>
                                    <h1 className="font-extralight">Hours in Garry's Mod</h1>
                                </div>
                                <div className="w-28 text-white">
                                    <h1 className="text-2xl font-black">1</h1>
                                    <h1 className="font-extralight">year of Experience</h1>
                                </div>
                                <div className="w-28 text-white">
                                    <h1 className="text-2xl font-black">1</h1>
                                    <h1 className="font-extralight">Disappointed Professor</h1>
                                </div>
                            </div>
                        </div>
                    </FollowMouse>
                </div>
            </div>

            <FollowMouse multiplier={0.4} offsetX={offsetX} offsetY={offsetY}>
                <div className="absolute -right-[600px] -top-32 w-[350px] flex-col gap-5 md:flex hidden">
                    <Clickable title={"Developer"} subtitle={"idk"} icon={"Chip.svg"} />
                    <Clickable title={"Designer"} subtitle={"idk"} icon={"Pen.svg"} />
                    <Clickable title={"Student"} subtitle={"idk"} icon={"Book.svg"} />
                </div>
            </FollowMouse>
            <FollowMouse multiplier={0.4} offsetX={offsetX} offsetY={offsetY}>
                <div className="absolute -translate-x-1/2 translate-y-32  flex-col gap-5 flex md:hidden">
                    <div className="relative w-[80vw] h-[110px] border border-white rounded-md text-white bg-[#171717] overflow-hidden  p-5">
                        <img src='/Chip.svg' className="w-14 h-14 absolute top-1/2 left-5  -translate-y-1/2" />
                        <div className="absolute left-24">
                            <h1 className="font-bold text-xl mb-2">Developer</h1>
                            <h1>idk</h1>
                        </div>
                    </div>
                    <div className="relative w-[80vw] h-[110px] border border-white rounded-md text-white bg-[#171717] overflow-hidden  p-5">
                        <img src='/Pen.svg' className="w-14 h-14 absolute top-1/2 left-5  -translate-y-1/2" />
                        <div className="absolute left-24">
                            <h1 className="font-bold text-xl mb-2">Designer</h1>
                            <h1>idk</h1>
                        </div>
                    </div>
                    <div className="relative w-[80vw] h-[110px] border border-white rounded-md text-white bg-[#171717] overflow-hidden  p-5">
                        <img src='/Book.svg' className="w-14 h-14 absolute top-1/2 left-5  -translate-y-1/2" />
                        <div className="absolute left-24">
                            <h1 className="font-bold text-xl mb-2">Student</h1>
                            <h1>idk</h1>
                        </div>
                    </div>
                </div>
            </FollowMouse>
        </div>
    );
}
