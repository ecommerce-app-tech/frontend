import SignupPage from "./pages/SignupPage";  
import IsPrivate from "./components/IsPrivate";
import IsAnon from "./components/IsAnon";
import HomePage from "./components/HomePage";
import ProductListPage from "./pages/ProductListPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import EditProductPage from "./pages/EditProductPage";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";

 
function App() {
  return (
    <div className="App">
      <Navbar />
 
      <Routes>      
        <Route path="/" element={ <HomePage /> } />
        <Route path="/products" element={ <IsPrivate> <ProductListPage /> </IsPrivate> } />
        <Route path="/products/:productId" element={ <IsPrivate> <ProductDetailsPage /> </IsPrivate> } />
        <Route path="/products/edit/:productId" element={ <IsPrivate> <EditProductPage /> </IsPrivate> } />
        
       
        <Route path="/signup" element={ <IsAnon> <SignupPage /> </IsAnon> } />
        <Route path="/login" element={ <IsAnon> <LoginPage /> </IsAnon> } />
      </Routes>
    </div>
  );
}
 
export default App;
