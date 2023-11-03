import React, { useContext } from 'react';
import { ShopContext } from '../../../context/shopContext';
const ProductItem = (props) => {
    const { id, img, title, star, reviews, prevPrice, newPrice, company, category } = props.data;
    const {addToCart, cartItems} = useContext(ShopContext)
    const cartItemAmount = cartItems[id]
    return(
        <div className='product'>
            <img src={img} alt="etwas" className='product-image' />
            <div className='description'>
                <h2 className='product-title'>{title}</h2>
                <div className='product-rating'>{star}</div>
                <p className='product-reviews'>{reviews}</p>
                <div className='product-pricing'>
                    <p className='product-price'>{prevPrice}</p>
                    <p className='product-discounted-price'>{newPrice}</p>
                </div>
                <p className='product-company'>{company}</p>
                <p className='product-category'>{category}</p>
            </div>
            <button className='addToCartBtn' onClick={() => addToCart(id)}>Add To Cart {cartItemAmount>0&& <>({cartItemAmount})</>}</button>
        </div>
    )
}

export default ProductItem;
