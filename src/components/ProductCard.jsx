import React from "react";
import { assets } from "../assets/assets";
import { useAppContext } from "../context/AppContext";

const ProductCard = ({ product }) => {
  const { currency, addToCart, removeFromCart, cartItems, navigate } = useAppContext();

  return product && (
    <div
      onClick={() => {
        navigate(`/products/${product.category.toLowerCase()}/${product._id}`);
        scrollTo(0, 0);
      }}
      className="cursor-pointer flex flex-col justify-between border border-gray-300 rounded-lg bg-white p-4 w-full max-w-xs h-full shadow hover:shadow-md transition"
    >
      {/* Image */}
      <div className="flex items-center justify-center h-48 mb-3">
        <img
          className="max-h-full max-w-full object-contain transition-transform group-hover:scale-105"
          src={product.image[0]}
          alt={product.name}
        />
      </div>

      {/* Content */}
      <div className="flex-grow flex flex-col justify-between text-sm text-gray-600">
        <p className="mb-1 capitalize">{product.category}</p>
        <p className="text-gray-800 font-semibold text-lg truncate">{product.name}</p>

        {/* Ratings */}
        <div className="flex items-center gap-0.5 my-1">
          {Array(5).fill('').map((_, i) => (
            <img
              key={i}
              className="w-4"
              src={i < 4 ? assets.star_icon : assets.star_dull_icon}
              alt=""
            />
          ))}
          <p className="ml-1 text-xs">(4)</p>
        </div>

        {/* Price + Cart Buttons */}
        <div className="flex items-center justify-between mt-3">
          <p className="text-primary font-medium text-base">
            {currency}{product.offerPrice}
            <span className="text-xs text-gray-400 line-through ml-1">
              {currency}{product.price}
            </span>
          </p>

          <div onClick={(e) => e.stopPropagation()} className="text-primary">
            {!cartItems[product._id] ? (
              <button
                className="flex items-center gap-1 bg-primary/10 border border-primary/40 px-2 py-1 rounded-md text-sm"
                onClick={() => addToCart(product._id)}
              >
                <img src={assets.cart_icon} alt="cart" className="w-4 h-4" />
                Add
              </button>
            ) : (
              <div className="flex items-center bg-primary/20 rounded-md text-sm">
                <button
                  onClick={() => removeFromCart(product._id)}
                  className="px-2 py-1"
                >−</button>
                <span className="w-5 text-center">{cartItems[product._id]}</span>
                <button
                  onClick={() => addToCart(product._id)}
                  className="px-2 py-1"
                >+</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
