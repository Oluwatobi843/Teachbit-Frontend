import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
// import logo from '../../../public/assets/images/Logo.svg';

const Navbar = () => {
  return (
    <div>
      <Image width={100} height={100} src="/assets/images/Logo.svg" alt="logo" />

      <div>
        <Link href="/">Home</Link>
        <Link href="/our-academy">Our Academy</Link>
        <Link href="/about-us">About Us</Link>
        <Button href="/start-learning">Start Learning</Button>
      </div>
    </div>

    
  )
}

export default Navbar
