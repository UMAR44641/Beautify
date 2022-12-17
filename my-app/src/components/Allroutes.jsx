import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import Products from "../pages/Products";
import Cart from "../pages/Cart";
import PrivateRoute from "./PrivateRoute";
export default function Allroutes(){
    return (
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={
            <PrivateRoute>
        <Cart />
        </PrivateRoute>
        } />
    </Routes>
    )
}