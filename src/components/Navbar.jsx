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
      <Navbar className="mx-auto max-w-screen-xl px-4 py-2 lg:px-8 lg:py-4">
        <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          
         

          {isLoggedIn && (
            <>
              <Link to="/products">All Proroducts</Link>
              <button onClick={logOutUser}>Logout</button>
              <span>{user && user.name}</span>
            </>
          )}

          {!isLoggedIn && (
            <>
              <Link to="/signup"> Sign Up</Link>
              <Link to="/login"> <button className='bg-violet-800 text-white font-semibold py-2 px-8 rounded-xl h-full'>Login</button> </Link>
            
            </>
          )}
         <div className='flex justify-between items-center px-20 py-5'>
       
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
      </Navbar>
      
    </>
  );
}

export default NavbarComponent;
