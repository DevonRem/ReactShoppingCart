import '../styles/Navbar.css'
import { Link } from "react-router-dom"

function Navbar() {
  

  return (
    <>
        <div className='wholeNavbar'>
            <div className='links'>
                <Link to="/">Home</Link>
                <Link to="/ShopPage">Shop</Link>
                <Link to="/CartPage">Cart</Link>
            </div>
        </div>
    </>
  )
}

export default Navbar