import '../styles/ShopPage.css'
import { Link } from "react-router-dom"
import Navbar from './Navbar'

function CartPage() {
  

  return (
    <>
    <Navbar></Navbar>

        <div className='wholePage'>
            <p>CartPage test</p>
            <Link to="/">You can go back to the home page by clicking here!</Link>
        </div>
    </>
  )
}

export default CartPage