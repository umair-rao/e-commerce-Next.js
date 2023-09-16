"use client";

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductDetail } from "../Redux/FetchProductsActionReducer";
import { useEffect, useState } from "react";
import { addToCart } from "../Redux/addToCartActionReducer";
import Navbar from "./Navbar";

const HomePage = () => {
  const product = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const [message, setMessage] = useState("");

  useEffect(() => {
    dispatch(fetchProductDetail());
  }, []);

  const handleClick = (product) => {
    dispatch(addToCart(product));
    setMessage("Product is added to cart");
    setTimeout(() => {
      setMessage("");
    }, 1000);
  };

  return (
    <div>
      <Navbar message={message} />
      <div className="grid grid-cols-4 bg-red-200 w-screen">
        {product.products.productDetail.map((item, index) => (
          <div
            className="flex flex-col items-center pt-10 pb-2.5 space-y-2 border-2 border-current"
            key={index}
          >
            <div className="image w-72 px-14 pt-10">
              <img
                className="w-40 h-32"
                src={item.image}
                alt="Product_image"
              ></img>
              <h3>{item.title.slice(0, 20)}</h3>
              <img
                className="cursor-pointer"
                src="/images/addCart.png"
                onClick={() => handleClick(item)}
                alt="add_toCart_image"
              ></img>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
