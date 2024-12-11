import React from 'react'
import { CiSearch } from "react-icons/ci";

const Searchbar = () => {
return (
<div className="searchbar h-[30px] md:h-[50px] w-[70%] border-2 borderslate-200 rounded-md mx-auto my-8
        hover:cursor-text  flex items-center justify-between p-5">
        <input className='bg-transparent text-sm md:text-xl w-[100%] placeholder:text-slate-500' placeholder='Search for Products'></input>
        <button className='h-[20px] w-[20px] md:h-full md:w-[50px] cursor-pointer '><CiSearch/></button>
        </div>
)
}

export default Searchbar;
