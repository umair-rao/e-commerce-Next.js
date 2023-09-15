"use client";

import { useDispatch, useSelector } from "react-redux"
import { fetchProductDetail } from "../Redux/actions";


const HomePage = () => {

    const product = useSelector((state) => state.products);
    console.log(product)
    const dispatch = useDispatch();

    const fetchProducts = () => {
        dispatch(fetchProductDetail())
    }
  return (
    <div>
      <button onClick={() => fetchProducts()}>Fetch Prodcuts</button>
      <div>
        {product.products.productDetail.map((item, index) => (
        <div className='flex flex-col items-center pt-10 space-y-2' key={index}>
          <img className='w-32 h-32' src={item.image} alt='Product_Image' />
          <h1>Product: {item.title.slice(0, 40)}</h1>
          <h1>Rating: {item.rating.rate}</h1>

          <h1>Price: {item.price} $</h1>
          <div className='flex items-center'>
            <h1 className='pr-4'>Quantity:</h1>
            <button className='bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold px-3 rounded-l' onClick={() => decrementQunaity(item)}>-</button>
            <p className='pr-3 pl-3'>{item.quantity}</p>
            <button className='bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold px-2 rounded-l' onClick={() => incrementQunaity(item)}>+</button>
          </div>
        </div>
      ))}
      </div>
    </div>
  )
}

export default HomePage
