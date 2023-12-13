import axios from "axios";
import { useState, useEffect } from 'react'

function Getorder() {
    const [orders, setOrders] = useState([])
    const getOrders = () => {
        axios
          .get(`${import.meta.env.VITE_API_URL}/api/order`)
          .then((response) => {
            setOrders(response.data);
          })
          .catch((error) => {
            console.log("Error getting Orders from the API...");
            console.log(error);
          });
      };
      useEffect(() => {
        getOrders();
      }, []);
  return (
    <div>
      {orders.map(order => (
 
 
 
    <p>{order.city}</p>





      ))}
    </div>
  )
}

export default Getorder
