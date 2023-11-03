import React, { useContext } from "react";
import products from "../db/data";
import { ShopContext } from "../context/shopContext";
import { CartItem } from "../component/main/content/cartItem";
import '../styles/cart.css'
import {useNavigate} from 'react-router-dom'
export const Cart = () => {
  const {cartItems, getTotalCartAmount} = useContext(ShopContext)
  const totalAmount = getTotalCartAmount()
  console.log(totalAmount)
  const navigate = useNavigate()
  return (
    <div className="cart">
      <div>
        <h1>Your cart Items</h1>
      </div>
      <div className="cartItems">
        {products.map((item)=>{
          console.log(cartItems[item.id]!==0?item.id:"empty")
          if(cartItems[item.id]!==0){
            return(
              <CartItem data={item}/>
            )
          }
        })}
      </div>
{totalAmount > 0 ?
      <div className="checkout">
        
        <p>Subtotal: ${totalAmount}</p>
        <button onClick={() => navigate('/')}>Continue Shopping</button>
        <button>Checkout</button>
      </div>
    :<h1>Your Cart is Empty</h1>}
    </div>
  );
}

export default Cart;
