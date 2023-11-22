import '../styles/HomePage.css'
import { Link } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import { ShopContext } from '../context/ShopContext';

function HomePage(props) {

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const { addItem, cartItems } = useContext(ShopContext);



  useEffect(() => {
    setLoading(true);
    fetch('https://fakestoreapi.com/products?limit=3', { mode: "cors" })
      .then((response) => response.json())
      .then((json)=> setData(json))
      .catch((error) => console.error(error))
      .finally(()=> setLoading(false));
  }, []);



  return (
    <>
        <div className='wholePage'>
            <div className='mainContent'>
                <h1>Welcome to Dev's shop!</h1>
                <h4>Click here to go to the shop page!</h4>
                <Link to="ShopPage"><button>Shop</button></Link>
            </div>
          <h1>Featured Items:</h1>
          <div className='imagesUnder'>
              {loading && (
                <div>
                  {" "}
                  <h2>Loading...</h2>
                </div>
              )}

                {data.map((product)=> (
                  <div key={product.id} className='card'>
                    <div><img src={product.image} alt="#"/></div>
                    <div className="card-description">
                      <h5>{product.title}</h5>
                      <h5>{`Price: $${product.price}`}</h5>
                    </div>
                    <button className='addToCart' onClick={()=>addItem(product)}> Add to Cart </button>
                    </div>
                ))}

            </div>
        </div>
    </>
  )
}

export default HomePage