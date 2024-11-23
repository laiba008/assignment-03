'use client'
import {useRouter} from 'next/navigation'
import React from 'react'
import Link from 'next/link'

function Home() {
  const route = useRouter()
  return(
    <div>
    <h1>This is Home Page.</h1>

    {/* Linking */}
    <h2>Linking</h2>
    <ul>
      <li><Link href="/about">About</Link></li>
      <li><Link href="/contact">Contact</Link></li>
    </ul>

    {/* Navigation */}
    <h2>Navigation</h2>
    <button onClick={() => route.push("/about")}>Go to About Page</button>
    <br /> <br />
    <button onClick={() => route.push("/contact")}>Go to Contact Page</button>
    </div>
)}

export default Home