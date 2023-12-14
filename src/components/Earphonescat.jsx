import React from 'react'
import { useState, useEffect, useContext } from 'react'
import { CartContext } from '../context/cart.jsx'
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";


function Earphonescat() {
    const [showModal, setshowModal] = useState(false);
  const [products, setProducts] = useState([])
  const { cartItems, addToCart } = useContext(CartContext)

  const toggle = () => {
    setshowModal(!showModal);
  };
    const getProducts = () => {
        axios
          .get(`${import.meta.env.VITE_API_URL}/api/product`)
          .then((response) => {
            setProducts(response.data.filter(product => product.category === "Earphone"));
          })
          .catch((error) => {
            console.log("Error getting Products from the API...");
            console.log(error);
          });
      };
      useEffect(() => {
        getProducts();
      }, []);

  return (
    
    
    <div className="bg-white">
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <h2 className=" flex items-center justify-center text-2xl font-bold tracking-tight text-gray-900">Earphones</h2>
      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
       {products.map((product) => (
   <div key={product._id} className="group relative">
   <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
    <img src={product.image} alt={product.name} className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
    </div>
    <div className="mt-4 flex justify-between">
      <h3 className="text-sm  text-gray-700">{product.name}</h3>
      
      <p className='mt-2 text-gray-600'>${product.price}</p>
    
    </div>
    <div className="mt-4 flex justify-between">
    <p className="mt-1 text-sm text-gray-500">{product.brand}</p>
    <p className="mt-1 text-sm text-gray-500">{product.category}</p>
    
    </div>
    <div className='mt-6 flex justify-between items-center'>
      <button className='px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700'
        onClick={() => {
          addToCart(product)
        }
        }
      >Add to cart</button>
    
        <Link to={`/product/${product._id}`}>
          <button className='px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700'>product Details</button>
        </Link>
      </div>
  </div>
  
   
   

   
   
  ) )}
   </div> 
   </div>
   </div>
  )
}

export default Earphonescat
