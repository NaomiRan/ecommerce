import React from 'react';
import './ProductList.css'; 
import { useDispatch } from 'react-redux';
import { useState } from 'react'
import { addItemToCart } from './CartSlice';


const ProductList = () => {

  const products = [
    { id: 1, name: 'Product A', price: 60, image:'/assets/images/cake_1.jpg' },
    { id: 2, name: 'Product B', price: 75, image:'/assets/images/cake_2.jpg' },
    { id: 3, name: 'Product C', price: 30, image:'/assets/images/cake_3.jpg' },
  ];

  const dispatch = useDispatch();
  const [disabledProducts, setDisabledProducts] = useState([]);

  const handleAddToCart = product=>{
    dispatch(addItemToCart(product));
    setDisabledProducts([...disabledProducts, product.id]);//Mark the product as disabled
  }



  return (
    <div className="product-list">
      <h2 className="product-list-title">Products</h2>
      <ul className="product-list-items">
        {products.map(product => (
          <li key={product.id} className="product-list-item">
             <img src={product.image} alt={product.name} className="product-image" />
            <span>{product.name} - ${product.price}</span>
            <button className={`add-to-cart-btn ${disabledProducts.includes(product.id) ? 'disabled' : ''}`}
              onClick={() => handleAddToCart(product)}
            disabled={disabledProducts.includes(product.id)}>
              Add to Cart
           </button>

          </li>
        )
          
        )
          
     }
      </ul>
    </div>
  );
};

export default ProductList;

