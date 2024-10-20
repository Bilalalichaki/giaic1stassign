import Link from "next/link";
import React from "react";


export default function Home () {
  return (
    <div>
      <h1>Bilal Ali's 1st Assignment</h1>
      <ul>
      <li><Link href="/">Home</Link></li>
      <li><Link href="/about">About</Link></li>
      <li><Link href="/contact">Contact</Link></li>
      <li><Link href="/service">service</Link></li> 
      </ul>
</div>
  )
}
