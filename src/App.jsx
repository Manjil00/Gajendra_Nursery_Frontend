import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutUs from "./pages/AboutUs.jsx";
import Admin from "./pages/Admin.jsx";
import Blog from "./pages/Blog.jsx";
import Home from "./pages/Home.jsx";
import Product from "./pages/Product.jsx";
import Cart from "./pages/Cart.jsx";


function App() {
  return (

      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/product" element={<Product/>} />
        <Route path="/aboutus" element={<AboutUs/>} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/admin" element={<Admin/>} />
        <Route path="/cart" element={<Cart/>} />
      </Routes>
      </BrowserRouter>
  
  );
}

export default App;
