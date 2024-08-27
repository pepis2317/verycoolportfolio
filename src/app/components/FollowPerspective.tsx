export default function FollowPerspective({children, perspective, rotateX, rotateY}:{children:React.ReactNode, perspective:number, rotateX:number, rotateY:number}) {
    return (
        <div className="w-full h-full flex justify-center items-center">
            <div
                style={{
                    transform: `perspective(${perspective}px) rotateX(${rotateX* 0.5}deg) rotateY(${rotateY * 0.5}deg) `,
                }}
            >
                {children}
            </div>
        </div>
    )
}