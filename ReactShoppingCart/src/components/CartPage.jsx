import '../styles/CartPage.css'
import { Link } from "react-router-dom"
import Navbar from './Navbar'
import { ShopContext } from '../context/ShopContext';
import { useContext } from 'react';

function CartPage(props) {
  const { addItem, removeItem, cartItems } = useContext(ShopContext);

  return (
    <>
    <Navbar></Navbar>

        <div className='wholePage'>
            <div className='cartTitle'>
                <h1>Your Cart:</h1>
            </div>
            <div className='items'>
              {cartItems.length === 0 && <div>There are currently no items in your cart.</div>}
              {cartItems.map((product)=> (
                  <div key={product.id} className='card'>
                    <div><img src={product.image} alt="#"/></div>
                    <div className="card-description">
                      <h5>{product.title}</h5>
                      <h5>{`Price: $${product.price}`}</h5>
                    </div>
                    <button className='addToCart' onClick={()=>removeItem(product.id)}> Remove from Cart </button>
                    </div>
                ))}
            </div>

            {cartItems.length > 0 && <button className='checkoutBtn'>Proceed to Checkout</button>}
        </div>
    </>
  )
}

export default CartPage