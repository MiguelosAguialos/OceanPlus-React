import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Cart } from "./pages/Cart";
import { Catalog } from "./pages/Catalog";
import { Menu } from "./pages/Menu";
import Payment from "./pages/Payment";

export function AppRoutes(){
    return(
        <Router>

            <Routes>
                <Route path="/menu" element={<Menu />}/>
                <Route  path='/cart' element={<Cart />} />
                <Route path="/" element={<Catalog />}/>
                <Route path="/payment" element={<Payment />}/>
            </Routes>
        </Router>
    )
}