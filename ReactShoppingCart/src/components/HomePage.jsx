import '../styles/HomePage.css'
import { Link } from "react-router-dom"

function HomePage() {
  

  return (
    <>
        <div className='wholePage'>
            <div className='mainContent'>
                <h1>Welcome to Dev's shop!</h1>
                <h4>Click here to go to the shop page!</h4>
                <button>Shop</button>
            </div>
            <div className='imagesUnder'>
                <p>placeholder image</p>
                <p>placeholder image</p>
                <p>placeholder image</p>
            </div>
        </div>
    </>
  )
}

export default HomePage