"use client";

import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { changeEmail } from "@/lib/slices/userSlice";
import { redirect } from "next/navigation";

const Page = () => {
  const user = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    localStorage.removeItem("token");
    redirect("/");
  };

  const handleEmailUpdate = () => {
    dispatch(changeEmail("test@gmail.com"));
  };

  return (
    <div>
      <h1>Profile Page</h1>
      <p>name: {user.username}</p>
      <p>email: {user.email}</p>
      <button onClick={handleEmailUpdate}>update male</button>
      <button onClick={handleLogout}>Log Out</button>
    </div>
  );
};

export default Page;
