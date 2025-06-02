"use client";

import { useAppSelector } from "@/lib/hooks";

const page = () => {
  const user = useAppSelector((state) => state.user);
  const prods = useAppSelector((state) => state.cart);

  console.log("cart prods: ", prods);
  return <div>{user?.email}</div>;
};

export default page;
