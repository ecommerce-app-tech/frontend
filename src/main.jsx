import { AuthProviderWrapper } from "./context/auth.context";
import ReactDOM from 'react-dom/client'
import React from "react";
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import { CartProvider } from "./context/cart.jsx";

 
const root = ReactDOM.createRoot(document.getElementById('root'));
 
root.render(
  <React.StrictMode>
    <AuthProviderWrapper>
    <Router>
    <CartProvider>
  <App />
</CartProvider>   
    </Router>
    </AuthProviderWrapper>
  </React.StrictMode>
);
