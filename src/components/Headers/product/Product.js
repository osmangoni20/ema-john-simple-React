import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './product.css';
import { Link } from 'react-router-dom';
const product = (profs) => {
    const {name,img,stock,price,seller,key}=profs.product;
    // console.log(profs.product)
    return (
        <div className="product">
           <div>
               <img src={img}></img>
           </div>
           <div>
            <h3 className='productName'>
                <Link className='link' to={'/product/'+key}>{name}</Link></h3>

               <br/>
               <p><small>By: {seller}</small></p>
               <p>Prize: ${price}</p>
               <p><small>Only {stock} left in stock -order soon</small></p>
               {profs.DisplayAddToCart&&<button className='mainButton' 
               onClick={()=>profs.handleAddProduct(profs.product)}
               ><FontAwesomeIcon icon={faShoppingCart} /> Add to cart 
               </button>}
           </div>
        </div>
    );
};

export default product;