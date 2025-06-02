"use client";

import { useAppDispatch } from "@/lib/hooks";
import { addProductToCart } from "@/lib/slices/cartSlice";

const AddToCartButton = ({ product }) => {
  const dispatch = useAppDispatch();
  return (
    <button
      onClick={() => {
        dispatch(addProductToCart(product));
      }}
    >
      AddToCartButton
    </button>
  );
};

export default AddToCartButton;
