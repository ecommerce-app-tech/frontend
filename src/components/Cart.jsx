import PropTypes from 'prop-types'
import { useContext,useState } from 'react'
import { CartContext } from '../context/cart.jsx'
import { Link } from "react-router-dom";


 function Cart ({showModal, toggle}) {

  const { cartItems, addToCart, removeFromCart, clearCart, getCartTotal } = useContext(CartContext)
  

  return (
    showModal && (
      <div className="flex-col flex items-center fixed inset-0 left-1/4 bg-white dark:bg-black gap-8  p-10  text-black dark:text-white font-normal uppercase text-sm">
        <h1 className="text-2xl font-bold">Cart</h1>
        <div className="absolute right-16 top-10">
          <button
            className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
            onClick={toggle}
          >
            Close
          </button>
        </div>
        <div className="flex flex-col gap-4">
          {cartItems.map((item) => (
            <div className="flex justify-between items-center" key={item._id}>
              <div className="flex gap-4">
                <img src={item.image} alt={item.title} className="rounded-md h-24" />
                <div className="flex flex-col">
                  <h1 className="text-lg font-bold">{item.name}</h1>
                  <p className="text-2xl font-semibold">{item.price}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <button
                  className='bg-gray-200 py-2 px-5 rounded-lg text-violet-800 text-3xl'onClick={() => {
                    addToCart(item)
                  }}
                >
                  +
                </button>
                <p>{item.quantity}</p>
                <button
                  className='bg-gray-200 py-2 px-5 rounded-lg text-violet-800 text-3xl' onClick={() => {
                    removeFromCart(item)
                  }}
                >
                  -
                </button>
              </div>
            </div>
          ))}
        </div>
        {
          cartItems.length > 0 ? (
            <div className="flex flex-col justify-between items-center">
          <h1 className="text-lg font-bold">Total: ${getCartTotal()}</h1>
          <button
            className='bg-violet-800 text-white font-semibold py-3 px-16 rounded-xl h-full' onClick={() => {
              clearCart()
            }}
          >
            Clear cart
          </button>
         <br></br>
         <Link to={`/checkout`}>
          <button
            className='bg-violet-800 text-white font-semibold py-3 px-16 rounded-xl h-full'>
            Checkout
            </button>
            </Link>
        </div>
          ) : (
            <h1 className="text-lg font-bold">Your cart is empty</h1>
          )
        }
      </div>
    )
  )
}

Cart.propTypes = {
  showModal: PropTypes.bool,
  toggle: PropTypes.func
}

export default Cart