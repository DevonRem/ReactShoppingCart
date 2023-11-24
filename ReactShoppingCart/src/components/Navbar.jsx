import '../styles/Navbar.css'
import { Link } from "react-router-dom"
import { useContext } from "react"
import { ShopContext } from '../context/ShopContext';

function Navbar(props) {
  const { cartItems } = useContext(ShopContext);

  return (
    <>
        <div className='wholeNavbar'>
            <div className='links'>
                <Link to="/">Home</Link>
                <Link to="/ShopPage">Shop</Link>
                <Link to="/CartPage">Cart: {cartItems.length}</Link>
            </div>
        </div>
    </>
  )
}

export default Navbar