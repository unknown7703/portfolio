import About from "./about";
import Home from "./home";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
export default function Body()
{
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/home" element={<Home/>}> </Route>
            <Route path="/about" element={<About/>}></Route>
        </Routes>
        </BrowserRouter>
    
    );
}