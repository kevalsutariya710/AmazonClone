import React from 'react'
import { useStateValue } from '../StateProvider'
import "./Product.css"


function Product({ image, price, title, id }) {
    //eslint-disable-next-line
    const [{ basket }, dispatch] = useStateValue();
    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price
            }
        })
    }
    return (
        <div className='products'>
            <div class="row">
                <div class="column">
                    <p>{title}</p>
                    <small>$</small>
                    <strong>{price}</strong><br />
                    <strong>****</strong>
                    <div class="card">
                        <img className="img" src={image} alt="img" />
                        <button className='bt' onClick={addToBasket}>Add to Basket</button>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Product;