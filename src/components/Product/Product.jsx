import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';

const Product = (props) => {

    const {img, name, seller, ratings, price} = props.product;

    const handleAddtoCart = props.handleAddtoCart;

    
    return (
        <div className='product'>
            <img src={img} alt="" />
        <div className="product-info">
            <h6 className='product-name'>{name}</h6>
            <p>Price: ${price}</p>
            <p>Manufacturer: {seller}</p>
            <p>Rating: {ratings} Stars</p>
           
        </div>
            <button onclick ={() => handleAddtoCart(props.product)} className='btn-cart'>
                Add to cart  <FontAwesomeIcon icon={faShoppingCart} /> </button>
            
        </div>
    );
};

export default Product;