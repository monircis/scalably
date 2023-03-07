import React from 'react'
import sidebar from "./Sidebar.module.css";
import Link from 'next/link'
import { useRouter } from "next/router";
function Sidebar() {
    const router = useRouter();
  return (
    <>
    <div id={sidebar.sidebar}>
        <nav className={sidebar.navbar}>
        <Link className={router.pathname == "/" ? "active" : ""} href="/">ハブ</Link>
        <Link href="/ab">ニュースアセット</Link>
        </nav>
    </div>
    </>
  )
}

export default Sidebar