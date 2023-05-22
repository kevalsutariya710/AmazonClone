import React from 'react'
import "./Checkout.css"
import Subtotal from "./Subtotal"

function Checkout() {
    return (

        <div className='checkout'>
            <div className='checkout__left'>
                <div>
                    <h2 className="checkout__title">Your Shopping Basket is Empty</h2>
                    <p className='check__ad'>You have no item in your basket</p>
                </div>
            </div>
            <div className='checkout__right'>
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
