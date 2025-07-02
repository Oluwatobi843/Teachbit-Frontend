import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';
// import logo from '../../../public/assets/images/Logo.svg';

const Navbar = () => {
  return (
    <div className="sticky top-0 bg-white z-50">
      <div className="main-padding flex justify-between items-center py-6">
        <div>
          <Image
            width={100}
            height={100}
            src="/assets/images/Logo.svg"
            alt="logo"
          />
        </div>
        <div className="gap-6 flex flex-row">
          <Link className="hover:text-[#E2B934]" href="/">
            Home
          </Link>
          <Link className="hover:text-[#E2B934]" href="/our-academy">
            Our Academy
          </Link>
          <Link className="hover:text-[#E2B934]" href="/about-us">
            About Us
          </Link>
          <a
            className="bg-[#E2B934] rounded-md cursor-pointer "
            href="start-learning"
          >
            <Button className="bg-transparent  ">Start Learning</Button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar
