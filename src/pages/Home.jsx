import React from 'react';
import "./Home.css";
import "./Product.jsx";

//Icons
import { FaShoppingCart } from "react-icons/fa"; //CART
import { FcServices, FcShipped, FcShop } from "react-icons/fc";
import { RiShoppingBag4Fill } from "react-icons/ri"; //ShoppingBag


//SLIDER CARASOUEL
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";




function Home() {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
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
      items: 1
    }
  };

return (
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
    <div className='home__container'>
                        { /* HOME CONTAINER 1 */}
    <div className='home-container1'>

    <div className='picture1'>
    <img className='home__image1' src="../images/pic1.jpg" alt="pic1"/>
    <p>YOUR  ONE  STOP  SHOP  FOR    <br></br>
    ALL  THINGS  <span>"BOTANICAL"</span> <br></br>
      AND  <span>"DECOR"</span></p>
    <button className='getStated_btn'>Get Started</button>
    </div>
    <div className='picture2'>
    <img className='home__image2' src='../images/radison.jpg' alt="pic2"/>
    <img className='home__image3' src='../images/heritage.jpg' alt="pic3"/>
      </div>
    
      </div>
                    {/* HOME CONTAINER 2  */}
        <div className='home-container2'>
          <div className='content-box1'>
            <h2  > <FcShipped /> Delivery within 1-2 days</h2>
          <p>Guranteed delivery of product and <br></br> services within specified timestamp with <br></br>proper management.</p>
          </div>
          <div className='content-box2'>
            <h2> <FcServices /> Top-notch Service</h2>
          <p>Servicing more than 100+ clients with <br></br> our product and assistance with <br></br>satisfaction and bliss.</p>
          </div>
          <div className='content-box3'>
          <h2> <FcShop /> Office Hours 8 A.M-5 P.M</h2>
          <p>Open at only office hours and closed<br></br> on weekends. </p>
          </div>
        </div>
      

                          {/* HOME CONTAINER 3 */}
<div className='home-container3'>
  
<div className='services-container'>

<h1 className='serviceh1'> OUR SERVICES</h1>


<Carousel responsive={responsive}  className="carousel-inner">

  <div className='service-content1'>
      <img className="imageservice1" src="../images/productt.jpg " alt="Products"/>
      <button>Products</button>
        </div>

  <div className='service-content2'>
      <img className="imageservice2" src="../images/heritage.jpg " alt="Decorations"/>
      <button>Decorations</button>
  </div>

  <div className='service-content3'>
  <img className="imageservice3" src="../images/gardening.jpg" alt="Gardening"/>
  <button>Gardening</button>
  </div>

  <div className='service-content4'>
  <img className="imageservice4" src="../images/rentalservice.jpg " alt="Rentals"/>
  <button>Rentals</button>
  </div>
  </Carousel>

</div>
</div>


                        {/* HOME CONTAINER 4 */}
<div className='home-container4'>


<div className='Card-container'>

<h1 className='Cardh1'> SHOP WITH US <RiShoppingBag4Fill/> </h1>


<Carousel responsive={responsive}  className="carousel-inner">

<div className='product-Card1'>
      <img className="Cardimg1" src="../images/productt.jpg " alt="card1"/>
      <h2 className='Card-title'>Monstera Plant</h2>
      <h3 className='Card-price'>NPR-2200/-</h3>
      <button>Add to Cart</button>
        </div>

        <div className='product-Card1'>
      <img className="Cardimg1" src="../images/productt.jpg " alt="card1"/>
      <h2 className='Card-title'>Monstera Plant</h2>
      <h3 className='Card-price'>NPR-2200/-</h3>
      <button>Add to Cart</button>
        </div>

        <div className='product-Card1'>
      <img className="Cardimg1" src="../images/productt.jpg " alt="card1"/>
      <h2 className='Card-title'>Monstera Plant</h2>
      <h3 className='Card-price'>NPR-2200/-</h3>
      <button>Add to Cart</button>
        </div>

        <div className='product-Card1'>
      <img className="Cardimg1" src="../images/productt.jpg " alt="card1"/>
      <h2 className='Card-title'>Monstera Plant</h2>
      <h3 className='Card-price'>NPR-2200/-</h3>
      <button>Add to Cart</button>
        </div>

        <div className='product-Card1'>
      <img className="Cardimg1" src="../images/productt.jpg " alt="card1"/>
      <h2 className='Card-title'>Monstera Plant</h2>
      <h3 className='Card-price'>NPR-2200/-</h3>
      <button>Add to Cart</button>
        </div>

        <div className='product-Card1'>
      <img className="Cardimg1" src="../images/productt.jpg " alt="card1"/>
      <h2 className='Card-title'>Monstera Plant</h2>
      <h3 className='Card-price'>NPR-2200/-</h3>
      <button>Add to Cart</button>
        </div>
  </Carousel>

</div>
</div>          {/* HOME CONTAINER 4 ENDS */}

                  {/* HOME CONTAINER 5 TESTIMONIALS */}

      <div className="home-container5">

        
      </div>
</div>     {/* //HOME CONTAINER END */}


</div>    // MAIN HOME DIV END

);
}
export default Home;