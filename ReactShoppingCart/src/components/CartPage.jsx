import '../styles/CartPage.css'
import { Link } from "react-router-dom"
import Navbar from './Navbar'

function CartPage() {
  

  return (
    <>
    <Navbar></Navbar>

        <div className='wholePage'>
            <div className='cartTitle'>
                <h1>Your Cart:</h1>
            </div>
            <div className='items'>
              There are currently no items in your cart.
            </div>

            <button className='checkoutBtn'>Proceed to Checkout</button>
        </div>
    </>
  )
}

export default CartPage