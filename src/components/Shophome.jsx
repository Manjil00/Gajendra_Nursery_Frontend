import React from 'react'
import { CgShoppingBag } from "react-icons/cg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Shophome = () => {

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 3
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2
        }
    };

return (
    
<div className="Section-4 my-7 w-full h-auto bg-bgcolor rounded-xl">
<div className="flex justify-center items-center">
<h1 className="text-black font-LogoFont text-center text-3xl md:text-5xl mt-4 p-7"> SHOP WITH US</h1>
<CgShoppingBag className="w-[30px] h-[30px]"/>

</div>


    <Carousel responsive={responsive}  swipeable={true} className="flex justify-evenly items-center ">
        
    <div className=" w-[150px] h-auto md:w-[350px] flex flex-col items-center mx-7 pb-3">
    <img src='./images/productt.jpg' className=' mx-4 rounded-xl' alt='Product'/>
    <h1 className="text-slate-600 text-center text-lg font-writingFont font-semibold">Montserrat Plant</h1>
    <p className="text-slate-500 text-center text-sm font-writingFont">PRICE: Rs 1200</p>
    <button className="button-default">Add to Cart</button>
</div>

<div className=" w-[150px] h-auto md:w-[350px] flex flex-col items-center mx-7 pb-3">
<img src='./images/productt.jpg' className='  mx-4 rounded-xl' alt='Decor'/>
<h1 className="text-slate-600 text-center text-lg font-writingFont font-semibold">Montserrat Plant</h1>
<p className="text-slate-500 text-center text-sm font-writingFont">PRICE: Rs 1200</p>
<button className="button-default">Add to Cart</button>
</div>

<div className=" w-[150px] h-auto md:w-[350px] flex flex-col items-center mx-7 pb-3">
<img src='./images/rentalservice.jpg' className='  mx-4 rounded-xl' alt='Gardening '/>
<h1 className="text-slate-600 text-center text-lg font-writingFont font-semibold">Areca Palm</h1>
<p className="text-slate-500 text-center text-sm font-writingFont">PRICE: Rs 2600</p>
<button className="button-default">Add to Cart</button>
</div>

<div className=" w-[150px] h-auto md:w-[350px] flex flex-col items-center mx-7  pb-3">
<img src='./images/picture1.jpg' className=' mx-4 rounded-xl' alt='Ceramics'/>
    <h1 className="text-slate-600 text-center text-lg font-writingFont font-semibold">Cactus Plant</h1>
    <p className="text-slate-500 text-center text-sm font-writingFont">PRICE: Rs 600</p>
<button className="button-default">Add to Cart</button>
</div>
    </Carousel>
    </div>
    
)
}

export default Shophome
