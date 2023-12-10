
import SignupPage from "./pages/SignupPage";  
import IsPrivate from "./components/IsPrivate";
import IsAnon from "./components/IsAnon";
import HomePage from "./pages/HomePage";
import Product from "./components/Product";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import EditProductPage from "./pages/EditProductPage";
import NavbarComponent from "./components/Navbar";
import Cart from "./components/Cart"
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";


import 'bootstrap/dist/css/bootstrap.min.css';


 
function App() {
  return (
    <div className="App">
   
      <NavbarComponent />
 
      <Routes>      
     <Route path="/cart" element={<Cart/>}/> 
        <Route path="/" element={ <HomePage /> } />
        <Route path="/products" element={ <Product />  }/>
        <Route path="/products/:productId" element={ <IsPrivate> <ProductDetailsPage /> </IsPrivate> } />
        <Route path="/products/edit/:productId" element={ <IsPrivate> <EditProductPage /> </IsPrivate> } />
        
        <Route path="/signup" element={ <IsAnon> <SignupPage /> </IsAnon> } />
        <Route path="/login" element={ <IsAnon> <LoginPage /> </IsAnon> } />
       
      </Routes>
     
    </div>
  );
}
 
export default App;
