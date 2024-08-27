'use client'
import anime from 'animejs'
export default function Tiles() {
    const blocks = []
    const rows = 6
    const cols = 6
    let index = 0
    const handleBlockClick = (e: any) => {
        anime({
            targets: '.block-point',
            scale: [
                { value: 1.1, easing: 'easeOutSine', duration: 250 },
                { value: 1, easing: 'easeInOutQuad', duration: 300 }
            ],
            translateY: [
                { value: -20, easing: 'easeOutSine', duration: 250 },
                { value: 0, easing: 'easeInOutQuad', duration: 500 }
            ],
            backgroundColor: [
                { value: '#FF7528', easing: 'easeOutSine', duration: 200 },
                { value: 'rgba(255, 101, 17, 0)', easing: 'easeOutSine', duration: 500 }, 
            ],
            delay: anime.stagger(100, {
                grid: [rows, cols],
                from: e.target.dataset.index
            }),
        })

    }
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            blocks.push(
                <div
                    onClick={handleBlockClick}
                    className='block-point w-20 h-20 border border-[#FF7528]'
                    data-index={index}
                    key={`${i}-${j}`} />
            )
            index++
        }
    }

    return (
        <div
            style={{ gridTemplateColumns: `repeat(${rows}, 1fr)` }}
            className={`grid w-fit gap-1 duration-100 `}
        >
            {blocks}
        </div>
    )
}
