
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


 
function App() {
  return (
    <div className="App">
   
      <NavbarComponent />
 
      <Routes>      
     <Route path="/cart" element={<Cart/>}/> 
        <Route path="/" element={ <HomePage /> } />
        <Route path="/products" element={ <Product />  }/>
        <Route path="/product/:productid" element={  <ProductDetails />  } />
        <Route path="/product/edit/:productId" element={ <IsPrivate> <EditProductPage /> </IsPrivate> } />
        <Route path="/addproduct" element={<AddProductPage/>}/>
        <Route path="/signup" element={ <IsAnon> <SignupPage /> </IsAnon> } />
        <Route path="/login" element={ <IsAnon> <LoginPage /> </IsAnon> } />
       
      </Routes>
     
    </div>
  );
}
 
export default App;
