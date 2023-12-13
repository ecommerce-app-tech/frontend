import { useState,useContext } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from '../context/cart.jsx'


function CheckoutPage() {
  const [user, setUser] = useState("");
  const [shippingAddress, setShippingAddress] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");

  const {  getCartTotal } = useContext(CartContext)
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const requestBody = {
    user: user,
    shippingAddress: shippingAddress,
    country: country,
    city: city,
    postalCode: postalCode,
      
    };

    axios
      .post(`${import.meta.env.VITE_API_URL}/api/order`, requestBody)
      .then(() => {
        navigate("/addorder");
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-10 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          alt="Your Company"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Chekout
        </h2>
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
               Name :
            </label>
            <div className="mt-2">
              <input
                name="name"
                type="text"
                value={user}
                onChange={(e) => setUser(e.target.value)}
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              shipping Address :
            </label>
            <div className="mt-2">
              <input
                name="brand"
                type="text"
                value={shippingAddress}
                onChange={(e) => setShippingAddress(e.target.value)}
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              country :
            </label>
            <div className="mt-2">
              <input
                name="category"
                type="text"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              city :
            </label>
            <div className="mt-2">
              <input
                name="name"
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              postalCode :
            </label>
            <div className="mt-2">
              <input
                name="price"
                type="number"
                value={postalCode}
                onChange={(e) => setPostalCode(e.target.value)}
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          

          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Add
          </button>
        </form>
        <div>
        <h1 className="text-lg font-bold">Total: ${getCartTotal()}</h1>
        </div>
      </div>
    </div>
  )
}

export default CheckoutPage
