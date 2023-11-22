import '../styles/ShopPage.css'
import { Link } from "react-router-dom"
import Navbar from './Navbar'
import { useContext, useEffect, useState } from "react"
import { ShopContext } from '../context/ShopContext';

function ShopPage() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const { addItem } = useContext(ShopContext);

  useEffect(() => {
    setLoading(true);
    fetch('https://fakestoreapi.com/products?limit=20', { mode: "cors" })
      .then((response) => response.json())
      .then((json)=> setData(json))
      .catch((error) => console.error(error))
      .finally(()=> setLoading(false));
  }, []);

  return (
    <>
    <Navbar></Navbar>

    <div className='wholePage'>
            <div className='mainShopContent'>
                <h1>All Items:</h1>
            </div>
          <div className='shopImagesUnder'>
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
                    <button className='addToCart' onClick={()=>addItem(product)}> Add to Cart</button>
                    </div>
                ))}

            </div>
        </div>
    </>
  )
}

export default ShopPage