import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="about/about">About Us</Link>
        </li>
        <li>
          <Link href="/recent/recent">Recent</Link>
        </li>
        <li>
          <Link href="/contact/contact">Contect</Link>
        </li>
      </ul>
    </>
  );
};

export default Navbar;
