import '../styles/Navbar.css'
import { Link } from "react-router-dom"

function Navbar() {
  

  return (
    <>
        <div className='wholeNavbar'>
            <div className='links'>
                <a>Home</a>
                <a>Shop</a>
                <a>Cart</a>
            </div>
        </div>
    </>
  )
}

export default Navbar