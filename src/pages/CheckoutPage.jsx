import { useState,useContext } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from '../context/cart.jsx'
import { AuthContext } from "../context/auth.context.jsx";
import Logo from "../assets/Logo.png"


function CheckoutPage() {
  
  const [shippingAddress, setShippingAddress] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [state,setState]=useState("")
  const [postalCode, setPostalCode] = useState("");
  const [price, setPrice]= useState("")

  const {  getCartTotal,cartItems } = useContext(CartContext)
  const navigate = useNavigate();
  const {user } = useContext(AuthContext)
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const requestBody = {
   
    user: user._id,
    shippingAddress: shippingAddress,
    country: country,
    city: city,
    state: state,
    postalCode: postalCode,
    price : price,
      
    };

    axios
      .post(`${import.meta.env.VITE_API_URL}/api/order`, requestBody)
      .then(() => {
        navigate("/orders");
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="bg-white">
      {/* Background color split screen for large screens */}
      <div className="px-4 py-6 sm:px-6 lg:hidden" />
      <div className="g:min-h-full lg:overflow-hidden lg:flex lg:flex-row-reverse" />

      <header className="relative max-w-7xl mx-auto  py-6 lg:bg-transparent lg:grid lg:grid-cols-2 lg:gap-x-16 lg:px-8 lg:pt-16 lg:pb-10">
        <div className="max-w-2xl mx-auto flex px-4 lg:max-w-lg lg:w-full lg:px-0">
          <a href="#">
            <span className="sr-only">Workflow</span>
            <img
              src={Logo}
              alt=""
              className="h-8 w-auto lg:hidden"
            />
            <img
              src={Logo}
              alt=""
              className="hidden lg:block h-8 w-auto"
            />
          </a>
        </div>
      </header>

      <main className="relative grid grid-cols-1 gap-x-16 max-w-7xl mx-auto lg:px-8 lg:grid-cols-2">
        <h1 className="sr-only">Checkout</h1>

        <section
          aria-labelledby="summary-heading"
          className="bg-indigo-900 text-black pt-6 pb-12 md:px-10 lg:max-w-lg lg:w-full lg:mx-auto lg:px-0 lg:pt-0 lg:pb-24 lg:bg-transparent lg:row-start-1 lg:col-start-2"
        >
          <div className="max-w-2xl mx-auto px-4 lg:max-w-none lg:px-0">
            <h2 id="summary-heading" className="sr-only">
              Order summary
            </h2>

            <dl>
              <dt className="text-sm font-medium">Amount due</dt>
              <dd className="mt-1 text-3xl font-extrabold text-black">${getCartTotal()}</dd>
            </dl>

            <ul role="list" className="text-sm font-medium divide-y divide-black divide-opacity-10">
              {cartItems.map((item) => (
                <li key={item.id} className="flex items-start py-6 space-x-4">
                  <img
                    src={item.image}
                    alt={item.imageAlt}
                    className="flex-none w-20 h-20 rounded-md object-center object-cover"
                  />
                  <div className="flex-auto space-y-1">
                    <h3 className="text-black">{item.name}</h3>
                    <p>{item.color}</p>
                    <p>{item.size}</p>
                  </div>
                  <p className="flex-none text-base font-medium text-black">{item.price}</p>
                </li>
              ))}
            </ul>

            <dl className="text-sm font-medium space-y-6 border-t border-black border-opacity-10 pt-6">
             

              <div className="flex items-center justify-between">
                <dt>Shipping</dt>
                <dd>Free</dd>
              </div>

              <div className="flex items-center justify-between" value={price}
                        onChange={(e) => setPrice(e.target.value)}>
                <dt>Total</dt>
                <dd >${getCartTotal()}</dd>
              </div>


              <div className="flex items-center justify-between border-t border-white border-opacity-10 text-white pt-6">
                <dt className="text-base">Total</dt>
                <dd className="text-base">$642.60</dd>
              </div>
            </dl>
          </div>
        </section>

        <section
          aria-labelledby="payment-and-shipping-heading"
          className="py-16 lg:max-w-lg lg:w-full lg:mx-auto lg:pt-0 lg:pb-24 lg:row-start-1 lg:col-start-1"
        >
          <h2 id="payment-and-shipping-heading" className="sr-only">
            Payment and shipping details
          </h2>

          <form onSubmit={handleSubmit}>
            <div className="max-w-2xl mx-auto px-4 lg:max-w-none lg:px-0">
              
              

              <div className="mt-10">
                <h3 id="shipping-heading" className="text-lg font-medium text-gray-900">
                  Shipping address
                </h3>

                <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-3">
                  <div className="sm:col-span-3">
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                      Address
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        id="address"
                        value={shippingAddress}
                        onChange={(e) => setShippingAddress(e.target.value)}
                        autoComplete="street-address"
                        className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                      Country
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        id="city"
                        value={country}
                 onChange={(e) => setCountry(e.target.value)}
                        autoComplete="address-level2"
                        className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                      City
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        id="city"
                        value={city}
                    onChange={(e) => setCity(e.target.value)}
                        autoComplete="address-level2"
                        className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>
                 

                  <div>
                    <label htmlFor="region" className="block text-sm font-medium text-gray-700">
                      State / Province
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        id="region"
                       value={state}
                       onChange={(e) => setState(e.target.value)}
                        autoComplete="address-level1"
                        className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="postal-code" className="block text-sm font-medium text-gray-700">
                      Postal code
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        id="postal-code"
                        value={postalCode}
                    onChange={(e) => setPostalCode(e.target.value)}
                        autoComplete="postal-code"
                        className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="text-lg font-medium text-gray-900">Billing information</h3>

                <div className="mt-6 flex items-center">
                  <input
                    id="same-as-shipping"
                    name="same-as-shipping"
                    type="checkbox"
                    defaultChecked
                    className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                  />
                  <div className="ml-2">
                    <label htmlFor="same-as-shipping" className="text-sm font-medium text-gray-900">
                      Same as shipping information
                    </label>
                  </div>
                </div>
              </div>

              <div className="mt-10 flex justify-end pt-6 border-t border-gray-200">
                
                <button
                  type="submit"
                  className="bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500"
                  
                >
                  Add Order
                </button>
                
              </div>
            </div>
          </form>
        </section>
      </main>
    </div>
  )
}

export default CheckoutPage
