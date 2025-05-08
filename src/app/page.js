"use client";
import { useEffect } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import { useRouter, redirect } from "next/navigation";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    console.log(router.replace("/signup/login"));
    // redirect('/signup')
  }, []);
  return (
    <div className={styles.container}>
      <Link href="/products">Go To Products Page</Link>
    </div>
  );
}
