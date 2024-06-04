import { BrowserRouter, Route, Routes } from "react-router-dom";
import Blog from "./pages/Blog.jsx";
import Decoration from "./pages/Decoration.jsx";
import Home from "./pages/Home.jsx";
import Product from "./pages/Product.jsx";


function App() {
  return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} /> 
        <Route path="/decoration" element={<Decoration />} />
        <Route path="/blog" element={<Blog/>} />
      </Routes>
      </BrowserRouter>
  
  );
}

export default App;
