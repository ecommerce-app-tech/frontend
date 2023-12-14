import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../context/auth.context";
import { Button, Navbar, Modal } from "react-bootstrap";
import { CartContext } from '../context/cart.jsx'
import Cart from './Cart.jsx';
import { BsCart2 } from "react-icons/bs";
import { BsCartFill } from "react-icons/bs";
function NavbarComponent() {

  const { isLoggedIn, user, logOutUser } = useContext(AuthContext); // <== ADD
 
  const [showModal, setshowModal] = useState(false);
  const { cartItems } = useContext(CartContext)
  const toggle = () => {
    setshowModal(!showModal);
  };
  
  return (
    <>
       <header className="bg-white">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="w-full py-6 flex items-center justify-between border-b border-indigo-500 lg:border-none">
          <div className="flex items-center">
            <a href="#">
              <span className="sr-only">Workflow</span>
              <img
                className="h-10 w-auto"
                src="https://tailwindui.com/img/logos/workflow-mark.svg?color=white"
                alt=""
              />
            </a>
            <div className="hidden ml-10 space-x-8 lg:block">
      
              <Link to="/products/smartphones"> Smartphones</Link>
               <Link to="/products/smartwatches"> Smartwatches</Link>
                <Link to="/products/Tablets"> Tablets</Link>
                 <Link to="/products/earphones"> Earphones </Link>
                  <Link to="/products/computers"> Computers </Link>
            </div>
          </div>
          <div className="ml-10 space-x-4">
            {isLoggedIn && (
            <>
              
              <button onClick={logOutUser}>Logout</button>
              <span>{user && user.name}</span>
            </>
          )}
          {!isLoggedIn && (
            <>
              
            
           
            <a
              href="/login"
              className="inline-block bg-indigo-500 py-2 px-4 border border-transparent rounded-md text-base font-medium text-white hover:bg-opacity-75"
            >
              Sign in
            </a>
            <a
              href="/signup"
              className="inline-block bg-white py-2 px-4 border border-transparent rounded-md text-base font-medium text-indigo-600 hover:bg-indigo-50"
            >
              Sign up
            </a>
             </>
          )}
          
          </div>
          <div>
          {!showModal && <button 
         onClick={toggle}
       >  <BsCartFill />
       <a className="relative -top-2 -right-3 text-white bg-red-500 h-4 w-4 rounded-full m-1 p-1  text-sm text-center ">
       {cartItems.length}
       </a>
       </button>}
     </div>
     <Cart showModal={showModal} toggle={toggle} />
        </div>

       
      </nav>
    </header>
    </>
  );
}

export default NavbarComponent;
