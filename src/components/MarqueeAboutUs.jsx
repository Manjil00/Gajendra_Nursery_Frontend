import React from 'react';
import Marquee from "react-fast-marquee";

const MarqueeAboutUs = () => {
return (
    <Marquee pauseOnHover={false} gradient={true} gradientWidth={40} className="w-full h-auto md:h-[400px] flex justify-center items-center gap-4 cursor-pointer ">
    <div className="w-full h-[120px]  md:h-[300px] flex justify-center items-center overflow-hidden gap-4">
    <img src="./images/radison.jpg" className="h-full -w-full" alt='marquee1'></img>
    <img src="./images/heritage.jpg" className="h-full -w-full" alt='marquee2'></img>
    <img src="./images/rentalservice.jpg" className="h-full -w-full" alt='marquee3'></img>
    <img src="./images/picture1.jpg" className="h-full -w-full" alt='marquee4'></img>

</div>

</Marquee>
)
}

export default MarqueeAboutUs
