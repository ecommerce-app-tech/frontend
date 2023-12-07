import React from 'react'
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";


const API_URL = "http://localhost:5005";
function Product() {
  const [product, setProduct] = useState([]);
  const getAllProducts = () => {
    axios
      .get(API_URL + "/api/product")
      .then((response) => {
        setProduct(response.data);
        
      })
      .catch((error) => {
        console.log("Error getting Products from the API...");
        console.log(error);
      });
  };
  useEffect(() => {
    getAllProducts();
  }, []);
  return (
    <>
    {product.map((prdt, k) => {
      return <h1>{prdt.name}</h1>
    })}
    
   
    </>
  )
}

export default Product