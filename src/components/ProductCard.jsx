import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {incNum,decNum} from '../actions/index';

const ProductCard = () => {
const mystate= useSelector ((state)=>state.changeNum);
const dispatch= useDispatch();
return (
    <div className="cardPlace grid grid-cols-2 md:grid-cols-3 h-auto w-full md:mx-10 gap-5 md:gap-10 p-3">

    <div className="card bg-bgcolor w-[150px] h-auto md:w-[300px] rounded-xl ml-3 shadow-2xl flex flex-col justify-center items-center">
        <img src='./images/luckybamboo.jpg' className=' rounded-xl h-[120px] md:h-[250px] w-[90%] mt-4 ' alt='Card1'></img>
        <h1 className='font-writingFont text-sm md:text-2xl'>Lucky Bamboo</h1>
        <div className="IncrDecr flex justify-between items-center">
        <button className='button-small'onClick={()=>dispatch(decNum())}>-</button>
        <h1 className='Counter text-sm md:text-3xl font-writingFont '>{mystate}</h1>
        <button className='button-small' onClick={()=>dispatch(incNum())} >+</button>
    
        </div>
        <button className='button-default'>Add to Cart</button>
        </div>

        
    
        </div>
)
}

export default ProductCard
