"use client";
import { useEffect } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import { useRouter, redirect } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const checkUser = () => {
    const res = localStorage.getItem("token");
    const token = JSON.parse(res);
    if (token === null) {
      redirect('/login')
    }else {
      redirect('/products')
    }
  };

  useEffect(() => {
    checkUser();
  }, []);
  return (
    <div className={styles.container}>
      <Link href="/products">Go To Products Page</Link>
    </div>
  );
}
