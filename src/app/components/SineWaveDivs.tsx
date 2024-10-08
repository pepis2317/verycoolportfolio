import React, { useState, useEffect } from 'react';
import anime from 'animejs'

const SineWaveDivs = ({ count }:{count:number}) => {
    useEffect(() => {
        anime({
            targets: '.wave-block',
            translateY: [
                { value: -150, duration: 1000 },
                { value: 0, duration: 1000 }
            ],
            easing: 'easeInOutSine',
            loop: true,
            delay: anime.stagger(333) // Adjust the delay for the desired phase shift
        });
    }, []);
      const blocks = Array.from({ length: count }, (_, i) => (
        <div
          className='wave-block w-32 h-[600px] bg-[#2B2B2B]'
          key={i}
        />
      ));
    return (
        <div className="flex gap-2 h-fit w-fit">
            {blocks}
        </div>
    );
};

export default SineWaveDivs;