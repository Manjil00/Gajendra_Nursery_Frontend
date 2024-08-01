import React, { useState } from 'react';
import { RxCross1, RxHamburgerMenu } from "react-icons/rx"; //ICONS


const Nav = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);
const toggleNavMenu = () => setIsNavOpen(!isNavOpen);

return (
    <nav className="flex justify-between px-6 py-3">
    <div className="flex justify-center items-center">
        <img className="w-10 h-10 mr-3" src="./images/GN_logo.png" alt="Logo" />
        <h1 className='text-black ml-6  text-sm md:text-4xl font-LogoFont
cursor-pointer flex justify-center items-center'>Gajendra Nursery</h1>
    </div>
    <div className={`bg-white absolute min-h-[40vh] left-0 top-[9%] w-full p-5 flex flex-col md:static md:flex md:min-h-fit md:w-auto gap-8 text-sm ${isNavOpen ? 'block' : 'hidden'}`}>
        <ul className=" cursor-pointer flex flex-col gap-4 md:flex-row  md:gap-8 md:justify-evenly md:text-xl font-writingFont">
        <a href="#"><li className="hover:text-green-600">Home</li></a> 
        <a href="#"><li className="hover:text-green-600">Products</li></a>
        <a href="#"><li className="hover:text-green-600">Products</li></a>
        <a href="#"><li className="hover:text-green-600">Products</li></a>
        <a href="#"><li className="hover:text-green-600">Products</li></a>
        <a href="#"><li className="hover:text-green-600">Products</li></a>
        <a href="#"><li className="hover:text-green-600">Products</li></a>
        </ul>
    </div>
    <div>
        <button onClick={toggleNavMenu} className="md:hidden">
            {
            isNavOpen ? <RxCross1 className="text-2xl text-black" /> :
            <RxHamburgerMenu className={`text-2xl text-black  ${isNavOpen ? 'hidden' : 'block'}`} />
            }
        </button>
    </div>
</nav>
)
}

export default Nav;
