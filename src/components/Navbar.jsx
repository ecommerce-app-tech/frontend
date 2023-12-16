import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../context/auth.context";
import { Button, Navbar, Modal } from "react-bootstrap";
import { CartContext } from "../context/cart.jsx";
import Cart from "./Cart.jsx";
import Logo from "../assets/Logo.png";
import { BsCartFill } from "react-icons/bs";

function NavbarComponent() {
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext); // <== ADD

  const [showModal, setshowModal] = useState(false);
  const { cartItems } = useContext(CartContext);
  const toggle = () => {
    setshowModal(!showModal);
  };

  return (
    <>
      <div className="bg-white">
        <header className="relative bg-white">
          <nav aria-label="Top" className="max-w-10xl mx-auto sm:px-6 lg:px-8">
            <div className="border-b border-gray-200 px-4 pb-14 sm:px-0 sm:pb-0">
              <div className="h-16 flex items-center justify-between">
                {/* Logo */}
                <div className="flex-1 flex">
                  <a href="#">
                    <span className="sr-only">Workflow</span>
                    <img
                      className="h-8 w-auto"
                      src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600"
                      alt=""
                    />
                  </a>
                </div>
                <div className="w-full py-6 flex items-center justify-between border-b border-indigo-500 lg:border-none">
                  <div className="flex items-center">
                    <a href="#">
                      <Link to={"/"}>
                        <img className="h-10 w-auto" src={Logo} alt="" />
                      </Link>
                    </a>
                    <div className="hidden ml-10 space-x-8 lg:block">
                      <Link to="/products">
                        {" "}
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-gray-100 text-gray-800">
                          All Products
                        </span>
                      </Link>
                      <Link to="/products/smartphones">
                        {" "}
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-gray-100 text-gray-800">
                          Smartphones
                        </span>
                      </Link>
                      <Link to="/products/smartwatches">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-gray-100 text-gray-800">
                          Smartwatches
                        </span>
                      </Link>
                      <Link to="/products/Tablets">
                        {" "}
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-gray-100 text-gray-800">
                          Tablets
                        </span>
                      </Link>
                      <Link to="/products/earphones">
                        {" "}
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-gray-100 text-gray-800">
                          Earphones
                        </span>{" "}
                      </Link>
                      <Link to="/products/computers">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-gray-100 text-gray-800">
                          Computers
                        </span>{" "}
                      </Link>
                    </div>
                  </div>
                  <div className="ml-10 space-x-4">
                    {isLoggedIn && (
                      <>
                        <button onClick={logOutUser}>
                          <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
                            Logout
                          </span>
                        </button>
                        <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-pink-100 text-pink-800">
                          {user && user.name}
                        </span>
                        <Link to="/addproduct">Sell </Link>
                        <Link to="/orders"> Orders history</Link>
                      </>
                    )}
                    {!isLoggedIn && (
                      <>
                        <a>
                          <Link
                            to="/login"
                            className="inline-block bg-indigo-500 py-2 px-4 border border-transparent rounded-md text-base font-medium text-white hover:bg-opacity-75"
                          >
                            Sign in
                          </Link>
                        </a>
                        <a>
                          <Link
                            to="/signup"
                            className="inline-block bg-white py-2 px-4 border border-transparent rounded-md text-base font-medium text-indigo-600 hover:bg-indigo-50"
                          >
                            {" "}
                            Sign Up
                          </Link>
                        </a>
                      </>
                    )}
                  </div>
                  <div>
                    {!showModal && (
                      <button onClick={toggle}>
                        <BsCartFill />
                        <a className="relative -top-2 -right-3 text-white bg-red-500 h-4 w-4 rounded-full m-1 p-1  text-sm text-center ">
                          {cartItems.length}
                        </a>
                      </button>
                    )}
                  </div>
                  <Cart showModal={showModal} toggle={toggle} />
                </div>
              </div>
            </div>
          </nav>
        </header>
      </div>
      <br></br>
    </>
  );
}

export default NavbarComponent;
