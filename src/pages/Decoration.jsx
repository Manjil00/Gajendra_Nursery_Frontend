import React from 'react'
import { FaShoppingCart } from "react-icons/fa"; //CART


function Decoration  ()  {
  return (
                                   //NAVIGATION BAR
    <div className='home'>
  <div className='navbar'>
    <nav>
      <img className='logoimage' src='../images/GN_logo.png' alt="logo"/>
      <h2 className="logo">Gajendra <span>Nursery</span></h2>
      <ul>
        <li> <a href="Product">Product</a></li>
        <li> <a href="Decorations">Decorations</a></li>
        <li> <a href="Blogs">Blogs</a></li>
        <li> <a href="AboutUs">About Us</a></li>
      </ul>
      <button type='button'> Cart   <FaShoppingCart /> </button>
    </nav>
    </div>
    </div>
  )
}

export default Decoration;
