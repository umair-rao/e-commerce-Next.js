"use client";

import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  deleteProduct,
  setCartItemsEmpty
} from "../Redux/addToCartActionReducer";
import Link from "next/link";
import { useState } from "react";

const Cart = () => {
  const cartTotalItems = useSelector((state) => state.cartItems.cartItems);
  const [message, setMessage] = useState("");

  const disptach = useDispatch();

  const decrementQunaity = (item) => {
    disptach(decrement(item, item.id));
  };

  const incrementQunaity = (item) => {
    disptach(increment(item, item.id));
  };

  const deleteItem = (product) => {
    disptach(deleteProduct(product));
  };

  const checkoutMessage = () => {
    disptach(setCartItemsEmpty())
    setMessage("Order Placed");
    setTimeout(() => {
      setMessage("");
    }, 3000); 
  };

  return (
    <div className="h-screen">
      <div className="flex justify-between">
        <div className="bg-red-200 pl-14">
          <Link href="/">Back to Homepage</Link>
        </div>
        <div className="text-4xl bg-orange-300">
          <p>{message}</p>
        </div>
        <div className="pr-14 bg-green-300">
          <button onClick={() => checkoutMessage()}>
            Checkout / Place Order
          </button>
        </div>
      </div>
      {cartTotalItems.map((item, index) => (
        <div className="flex flex-col items-center pt-10 space-y-2" key={index}>
          <img className="w-32 h-32" src={item.image} alt="Product_Image" />
          <h1>Product: {item.title.slice(0, 40)}</h1>
          <h1>Rating: {item.rating.rate}</h1>
          <h1>Price: {item.price * item.quantity} $</h1>
          <div className="flex items-center">
            <h1 className="pr-4">Quantity:</h1>
            <button
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold px-3 rounded-l"
              onClick={() => decrementQunaity(item)}
            >
              -
            </button>
            <p className="pr-3 pl-3">{item.quantity}</p>
            <button
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold px-2 rounded-l"
              onClick={() => incrementQunaity(item)}
            >
              +
            </button>
          </div>
          <div>
            <button
              className="bg-red-400 rounded-md"
              onClick={() => deleteItem(item)}
            >
              Delete Product from Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
