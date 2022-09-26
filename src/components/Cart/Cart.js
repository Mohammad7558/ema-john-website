import React from 'react';
import './Cart.css'

const Cart = (props) => {

    const { cart } = props;
    console.log(cart)

    let total = 0;
    let shipping = 0;
    for(const product of cart){
        total = total + product.price;
        shipping = shipping + product.shipping;
    }
    const tax = parseFloat((total * 0.1).toFixed(2));
    const grandTotal = Math.round(total + shipping + tax);
    return (
        <div className='cart'>
            <h4>Order Summary</h4>
            <p>Selected Items: {cart.length}</p>
            <p>Total Price : {total}</p>
            <p>Total Shipping charge : {shipping}</p>
            <p>Total Tax : {tax}</p>
            <h3>Grand Total : {grandTotal}</h3>
        </div>
    );
};

export default Cart;