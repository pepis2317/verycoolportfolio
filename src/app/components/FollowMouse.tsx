import React from "react";

export default function FollowMouse({ children, offsetX, offsetY, multiplier }: { children: React.ReactNode, multiplier: number, offsetX:number, offsetY:number }) {
    return (
        <div className="w-full h-full">
            <div
                className="absolute"
                style={{
                    top: `calc(50% + ${offsetY * multiplier}px)`,
                    left: `calc(50% + ${offsetX * multiplier}px)`,
                    transform: 'translate(-50%, -50%)'
                }}
            >
                {children}
            </div>

        </div>
    )
}