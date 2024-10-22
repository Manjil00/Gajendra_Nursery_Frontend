import React from 'react';
import Nav from "../components/Nav";
import '../index.css';

import { useSelector, useDispatch } from "react-redux";
import { decNum, incNum } from "../actions/index";

const Cart = () => {
    // const cartItems=useSelector((state)=>state.cart.cartItems);

    const mystate= useSelector ((state)=>state.changeNum);
    const dispatch= useDispatch();
    
return (
    <div className='main w-full h-[800px]'>
    <Nav/>

    <div className="total h-[100px] w-full mt-5 flex justify-start items-center ">
    <h1 className=' font-sans font-semibold ml-20 text-sm md:text-3xl text-black'>Total Price: $ 62.09</h1>
    <button
    className='h-[50px] w-[100px] ml-10 bg-blue-600 rounded-xl font-sans font-semibold text-white'> Checkout</button>
    </div>

    <div className="cartSection p-5 mt-5">
        <div  className="product1 h-auto w-full bg-slate-300 flex flex-col md:flex-row justify-evenly items-center rounded-xl">
        <div className="picDesc flex justify-between items-center p-2">
        <img src='../images/ceramics.jpg' className='h-[100px] w-[250px]' alt='productimg'/>
        <h1 className= 'text-black text-start md:font-semibold font-sans text-xl md:text-2xl break-words ml-5'>Lorem ipsum dolor sit,  consectetur adipisicing elit. Quasi quisquam magni </h1>
        </div>
        <div className="qtyprice w-full  flex justify-evenly items-center mt-3">
            <div className="qty flex justify-center items-center bg-blue-600 gap-4 rounded-lg p-2">
                <button onClick={()=>mystate > 0 ? dispatch((decNum())) : 0}
                className='bg-blue-600 rounded-xl text-white p-1'>-</button>
                <p className='text-white font-sans md:font-semibold text-sm md:text-xl'>Quantity: {mystate}</p>
                <button onClick={()=>dispatch((incNum()))}
                className='bg-blue-600 rounded-xl text-white p-1'>+</button>

            </div>
        <h2 className='text-black md:font-semibold font-sans text-xl md:text-2xl'>$ 62.09</h2>
        <button className='h-[50px] w-[100px] bg-green-600 rounded-xl'>Delete</button>
        </div>
            
        </div>

    </div>

    </div>
)
}

export default Cart;
