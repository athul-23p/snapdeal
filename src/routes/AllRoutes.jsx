import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import MensClothing from "../pages/mens_clothing/MensClothing";
import Product from "../pages/product/Product";


function AllRoutes(){


    return <Routes>
        <Route path='/' element={<Home/>} />
        <Route path="/product/:id" element={<Product/>} />
   
    </Routes>
}

export default AllRoutes;