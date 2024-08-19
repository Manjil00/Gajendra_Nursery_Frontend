import React from 'react'
import Marquee from "react-fast-marquee";


const Testimonials = () => {
return (
<div className="Section5 my-7 w-full h-auto bg-bgcolor rounded-xl flex">
<div className="left w-[70%] h-[300px] md:h-full ">
<h1 className="text-center font-LogoFont text-3xl md:text-5xl pt-4">TESTIMONIALS</h1>
<Marquee pauseOnHover={false} gradient={true} gradientWidth={40} className="w-full h-[150px] md:h-[400px] flex justify-center items-center gap-4 ">
    <div className="w-full h-[150px]  md:h-[350px] flex justify-center items-center overflow-hidden gap-4">
    <img src="./images/productt.jpg" className="h-full -w-full" alt='marquee1'></img>
    <img src="./images/productt.jpg" className="h-full -w-full" alt='marquee2'></img>
    <img src="./images/productt.jpg" className="h-full -w-full" alt='marquee3'></img>
</div>

</Marquee>
</div>

<div className="right w-[30%] h-full">
    <img src="./images/worker.png" className="w-full h-full md:h-[100%] rounded-xl"   alt="worker"></img>
</div>

</div>
)
}

export default Testimonials
