"use client";

import { useAppDispatch } from "@/lib/hooks";
import { addToCart } from "@/lib/slices/cartSlice";

const AddToCartButton = ({ product }) => {
  const dispatch = useAppDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product))
  };
  return <button onClick={handleAddToCart}>add to cart {product.title}</button>;
};

export default AddToCartButton;
