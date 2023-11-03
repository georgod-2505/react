import React, { useContext } from "react";
import { ShopContext } from "../../../context/shopContext";
import '../../../styles/cart.css'
export const CartItem = (props) => {
    const { id, img, title, star, reviews, prevPrice, newPrice, company, category } = props.data;
    const {cartItems, addToCart, removeFromCart, updateCartItemCount} = useContext(ShopContext)
  return (
    <div className="cartItem">
      <img src={img}/>
      <div className="description">
        <p>
            {" "}
            <b>{title}</b>
        </p>
        <p>${newPrice}</p>
        <div className="countHandler">
            <button onClick={() => removeFromCart(id)}>-</button>
            <input value={cartItems[id]} onChange={(e) => updateCartItemCount(Number(e.target.value), id)}/>
            <button onClick={() => addToCart(id)}>+</button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
