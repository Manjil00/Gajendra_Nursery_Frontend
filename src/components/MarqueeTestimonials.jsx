import React from 'react';
import Marquee from "react-fast-marquee";


const MarqueeTestimonials = () => {
return (
    <Marquee pauseOnHover={true} gradient={true} gradientWidth={40} className="w-full h-auto md:h-[400px] flex justify-center items-center gap-4 ">
    <div className="w-full h-[120px]  md:h-[300px] flex justify-center items-center overflow-hidden gap-4">
    <img src="./images/productt.jpg" className="h-full -w-full" alt='marquee1'></img>
    <img src="./images/productt.jpg" className="h-full -w-full" alt='marquee2'></img>
    <img src="./images/productt.jpg" className="h-full -w-full" alt='marquee3'></img>
</div>

</Marquee>
)
}

export default MarqueeTestimonials
