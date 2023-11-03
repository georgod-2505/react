import {Routes, Route } from 'react-router-dom';
import NavMenu from './component/header/wrapper/nav menu';
import MenuFooter from './component/footer/menu_footer';

import Home from "./page/home"
import Category from './page/category'
import CardProduct from './page/cardProduct'
import Cart from './page/cart'  
import Contact from './page/contact';
import DeliveryPayment from './page/deliveryPayment';
import { ShopContextProvider } from './context/shopContext';

function App() {
  return (
    <ShopContextProvider>
      <Sidebar/>
      <NavMenu/>
      <div className='container'>
        <Routes>
            <Route path="/" element={<Home />} /> 
            <Route path="/category" element={<Category />} />
            <Route path="/cardProduct" element={<CardProduct />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/deliveryPayment" element={<DeliveryPayment />} />
        </Routes>
      </div>
      <MenuFooter/>
    </ShopContextProvider>
  );
}

export default App;
