import Home from "../Pages/Home";
import Navbar from "./Navbar";
import Footer from "./Footer";

import { Route,Routes } from "react-router-dom";


export default function AllRoutes(){

    return <>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/home" element={<Home/>}/>
            </Routes>
            <Footer/>
    </>
}