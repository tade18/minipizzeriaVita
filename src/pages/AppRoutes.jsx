import { BrowserRouter, Route, Routes } from "react-router-dom";
import Pizza from "./Pizza/Pizza";
import Home from "./Home/Home";
import Error from "./Error/Error";
import Delivery from "./Delivery/Delivery";

export default function AppRoutes(){
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/delivery" element={<Delivery />}/>
                    <Route path="/pizza" element={<Pizza />}/>
                    <Route path="/*" element={<Error />}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}