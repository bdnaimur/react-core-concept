import React, { useState } from 'react';
import fakeData from '../../../metaDatas';
import Cart from '../../carts/Cart';
import Product from '../products/Product';
import './shop.css';

const Shop = () => {
    console.log(fakeData);
    // const first10 = fakeData.slice(0, 10);
    const [product, setProduct] = useState(fakeData);
    const [cart, setCart] = useState([]);
    const [player, setPlayer] = useState([]);
    const handleProduct = (product) => {
        console.log("Added a product",product);        
        const checkIndex = cart.indexOf(product);
        console.log(checkIndex);
       if(checkIndex == -1){
        const newCart = [...cart, product];
        setCart(newCart);
       }
       else{
           alert("The product is already Added.");
       }
    }
    // const handleProduct = (product) => {
    //     console.log("Added a product",product);        
    //     const checkIndex = cart.indexOf(product);
    //     console.log(checkIndex);
    //    if(checkIndex == -1){
    //     const newCart = [...cart, product];
    //     setCart(newCart);
    //    }
    //    else{
    //        alert("The product is already Added.");
    //    }
    // }
    return (
        <div className="">
            <div className="grid-display">
                {product.map(pd => <Product handleAddProduct={handleProduct} product={pd}>

                </Product>)}
            </div>
            <div className="">
                <Cart cart={cart} ></Cart>
            </div>
        </div>
        
    );
};

export default Shop;