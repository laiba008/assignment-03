'use client'
import {useRouter} from 'next/navigation'
import Link from "next/link";
import React from "react";

function Contact(){
    const route = useRouter();
    return(
        <div>
            <h1>This is Contact Page</h1>

            {/* Linking */}
            <h1>Linking</h1>
            <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About</Link></li>
            </ul>

            {/* Navigation */}
    <h2>Navigation</h2>
    <button onClick={() => route.push("/")}>Go to Home Page</button>
    <br /> <br />
    <button onClick={() => route.push("/contact")}>Go to Contact Page</button>
        </div>
    )
}

export default Contact