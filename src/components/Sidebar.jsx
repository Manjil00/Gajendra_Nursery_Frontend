import React from 'react';

const Sidebar = () => {
return (
    <div className="sidebar h-[100%] w-[20%] md:w-[15%] cursor-pointer">
    <ul className='flex flex-col justify-evenly items-center my-10 gap-5 mb-[200px] px-5 text-appleblack font-writingFont'>

    <li className='text-md md:text-3xl text-slate-500 font-LogoFont font-semibold'>Products</li>
    <li className='text-sm md:text-xl   hover:text-md hover:md:text-2xl'>Indoor</li>
    <li className='text-sm md:text-xl   hover:text-md hover:md:text-2xl'>Outdoor</li>
    <li className='text-sm md:text-xl   hover:text-md hover:md:text-2xl'>Seasonal</li>
    <li className='text-sm md:text-xl   hover:text-md hover:md:text-2xl'>Others</li>

    <li className='text-md md:text-3xl text-slate-500 font-LogoFont'>Decorations</li>
    <li className='text-sm md:text-xl  hover:text-md hover:md:text-2xl'>Stage</li>
    <li className='text-sm md:text-xl  hover:text-md hover:md:text-2xl'>Backdrop</li>
    <li className='text-sm md:text-xl  hover:text-md hover:md:text-2xl'>Mandap</li>
    <li className='text-sm md:text-xl  hover:text-md hover:md:text-2xl'>Entrance</li>
    <li className='text-sm md:text-xl  hover:text-md hover:md:text-2xl'>Photo-Booth</li>
    <li className='text-sm md:text-xl  hover:text-md hover:md:text-2xl'>Name-Board</li>

    <li className='text-md md:text-3xl text-slate-500 font-LogoFont'>Ceramics</li>
    <li className='text-md md:text-3xl text-slate-500 font-LogoFont'>Fertilizers</li>
    
    <li className='text-md md:text-3xl text-slate-500 font-LogoFont'>Gardening</li>
    <li className='text-sm md:text-xl hover:text-md hover:md:text-2xl'>Rock Garden</li>
    <li className='text-sm md:text-xl hover:text-md hover:md:text-2xl'>Maintainence</li>
    </ul>

</div>
)
}

export default Sidebar;
