import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { CartContext } from "../context/cart.jsx";

function ProductDetails() {
  const [product, setProduct] = useState([]);
  const { productid } = useParams();
  const { cartItems, addToCart } = useContext(CartContext);
  const getProduct = () => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/api/product/${productid}`)
      .then((reponse) => setProduct(reponse.data))

      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div>
      {product && (
        <>
          <div className="flex flex-col justify-between lg:flex-row gap-16 lg:items-center">
            <div className="flex flex-col gap-6 lg:w-2/4">
              <img
                src={product.image}
                alt=""
                className="w-full h-full aspect-square object-cover rounded-xl"
              />
              <div className="flex flex-row justify-between h-24"></div>
            </div>

            <div className="flex flex-col gap-4 lg:w-2/4">
              <div>
                <span className=" text-violet-600 font-semibold">
                  {product.brand}
                </span>
                <h1 className="text-3xl font-bold">{product.name}</h1>
                <span className=" text-violet-600 font-semibold">
                  {product.category}
                </span>
              </div>
              <p className="text-gray-700">{product.description}</p>
              <h6 className="text-2xl font-semibold">${product.price}</h6>
              <div className="flex flex-row items-center gap-12">
                <div className="flex flex-row items-center gap-12">
                  <button
                    onClick={() => {
                      addToCart(product);
                    }}
                    className="bg-violet-800 text-white font-semibold py-3 px-16 rounded-xl h-full"
                  >
                    Add to Cart
                  </button>
                </div>
                <div>
                  <Link to={`/product/edit/${product._id}`}>
                    <button className="bg-violet-800 text-white font-semibold py-3 px-16 rounded-xl h-full">
                      Edit Product
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default ProductDetails;
