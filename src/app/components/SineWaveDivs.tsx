import React, { useState, useEffect } from 'react';

const SineWaveDivs = ({ count }:{count:number}) => {
    const [positions, setPositions] = useState(Array(count).fill(0));

    useEffect(() => {
        let start = 0;
        const amplitude = 155;  // The maximum movement in pixels
        const frequency = 0.0015;  // Speed of the wave

        const animate = (time:number) => {
            const updatedPositions = positions.map((_, i) => {
                // Calculate the new Y position using the sine function
                return amplitude * Math.sin(frequency * (time + i * 100));
            });

            setPositions(updatedPositions);
            requestAnimationFrame(animate);
        };

        // Start the animation
        requestAnimationFrame(animate);

        // Cleanup on unmount
        return () => cancelAnimationFrame(start);
    }, [positions]);

    const blocks = [];
    for (let i = 0; i < count; i++) {
        blocks.push(
            <div
                className='w-32 h-[600px] bg-[#2B2B2B]'
                key={i}
                style={{
                    transform: `translateY(${positions[i]}px)`,
                    transition: 'transform 0.1s linear'
                }}
            />
        );
    }

    return (
        <div className="flex gap-2 h-fit w-fit">
            {blocks}
        </div>
    );
};

export default SineWaveDivs;