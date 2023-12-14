import axios from "axios";
import { useState, useEffect ,useContext} from 'react'
import { AuthContext } from "../context/auth.context.jsx";

function Getorder() {

    const [orders, setOrders] = useState([])
    const { user } = useContext(AuthContext)
    const getOrders = () => {
      axios
        .get(`${import.meta.env.VITE_API_URL}/api/order`)
        .then((response) => {
          console.log(response.data);
          setOrders(response.data.filter(order => order.user?._id === user._id))
        })
        .catch((error) => {
          console.log("Error getting orders from the API...");
          console.log(error);
        });
    };
    useEffect(() => {
      getOrders();
    }, []);
    
  return (
    <div>
     
   {orders ? orders.map((order) => (
    <>
        <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
     <div className="mt-8 flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
     <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                      Name
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Email
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Date
                    </th>
                   
                  </tr>
                </thead>
     <tbody className="divide-y divide-gray-200 bg-white">
   <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{order.user?.name}</td>
   <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{order.city}</td>
   <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{order.createdAt}</td>
   
   </tbody>
   </table>
   </div>
   </div>
   </div>
   </div>
   </div>
   </div>
   </div>
    </>
    
   )): (<p>no orders yet</p>)
    
   
   }
  
    </div>
 
  )
}

export default Getorder
