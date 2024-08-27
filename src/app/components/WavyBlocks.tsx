import { useEffect } from "react";
import anime from 'animejs'
export default function WavyBlocks() {

    useEffect(() => {
        anime({
            targets: '.rectangle',
            translateY: [
                { value: -200, duration: 1000 },
                { value: 0, duration: 1000 }
            ],
            easing: 'easeInOutSine',
            loop: true,
            delay: anime.stagger(200) // Adjust the delay for the desired phase shift
        });
    }, []);

    return (
        <div className="flex gap-2 h-fit w-fit rotate-45">
            {Array.from({ length: 7 }).map((_, index) => (
                <div
                    key={index}
                    className="rectangle w-32 h-[600px] bg-[#2B2B2B]"
                />
            ))}
        </div>
    );
}