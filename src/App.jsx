
import SignupPage from "./pages/SignupPage";  
import IsPrivate from "./components/IsPrivate";
import IsAnon from "./components/IsAnon";
import HomePage from "./pages/HomePage";
import Product from "./components/Product";
import ProductDetails from "./pages/ProductDetailsPage";
import EditProductPage from "./pages/EditProductPage";
import NavbarComponent from "./components/Navbar";
import Cart from "./components/Cart"
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import AddProductPage from "./pages/AddProductPage";
import CheckoutPage from "./pages/CheckoutPage";
import Getorder from "./pages/Getorder";


 
function App() {
  return (
    <div className="App">
   
      <NavbarComponent />
 
      <Routes>      
     <Route path="/cart" element={<Cart/>}/> 
        <Route path="/" element={ <HomePage /> } />
        <Route path="/products" element={ <Product />  }/>
        <Route path="/product/:productid" element={  <ProductDetails />  } />
        <Route path="/product/edit/:productid" element={  <EditProductPage /> } />
        <Route path="/addproduct" element={<AddProductPage/>}/>
        <Route path="/signup" element={ <IsAnon> <SignupPage /> </IsAnon> } />
        <Route path="/login" element={ <IsAnon> <LoginPage /> </IsAnon> } />
        <Route path="/checkout" element={<CheckoutPage/>} />
        <Route path="/orders" element={<Getorder/>}/>
       
      </Routes>
     
    </div>
  );
}
 
export default App;
