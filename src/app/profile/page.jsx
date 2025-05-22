"use client";

import { changeEmail } from "@/lib/slices/userSlice";
import { redirect } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";

const page = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

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

export default page;
