import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';
// import logo from '../../../public/assets/images/Logo.svg';

const Navbar = () => {
  return (
    <div>
      <div className='flex justify end'>
        <div>
          <Image
            width={100}
            height={100}
            src="/assets/images/Logo.svg"
            alt="logo"
          />
        </div>
        <div className="gap 6 flex flex-row">
          <Link href="/">Home</Link>
          <Link href="/our-academy">Our Academy</Link>
          <Link href="/about-us">About Us</Link>
          <a href="start-learning">
            <Button>Start Learning</Button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar
