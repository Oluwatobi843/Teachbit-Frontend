'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';
import { Menu, X } from "lucide-react";
// import logo from '../../../public/assets/images/Logo.svg';

const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: any) => {
      if (open && !dropdownRef.current?.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, [open]);

  const toggleMenu = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setOpen(prev => !prev);
  };

  return (
    <div className="sticky main-padding py-4 lg:py-6 top-0 bg-white z-50">
      <div className="flex justify-between items-center">
        <div>
          <Image
            width={100}
            height={100}
            src="/assets/images/Logo.svg"
            alt="logo"
          />
        </div>
        <div className="invisible md:visible lg:visible">
          <div className='gap-0 md:gap-6 lg:gap-6 flex flex-row items-center float-right'>
            <div className='flex gap-6'>
              <Link className="hover:text-[#E2B934]" href="/">
                Home
              </Link>
              <Link className="hover:text-[#E2B934]" href="/our-academy">
                Our Academy
              </Link>
              <Link className="hover:text-[#E2B934]" href="/about-us">
                About Us
              </Link>
            </div>
            <div>
              <a
                className="bg-[#E2B934] p-3 rounded-md cursor-pointer"
                href="start-learning"
              >
                <Button className="bg-transparent cursor-pointer hover:opacity-80">Start Learning</Button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className='visible md:invisible lg:invisible'>
        <div >
          <div className='-mt-12 pb-4'>
            <Image
              width={100}
              height={100}
              src="/assets/images/Logo.svg"
              alt="logo"
            />
          </div>
          <div className="ml-[300px] md:ml-[490px] mt-5 text-[#E2B934]">
            <div>
              <div onClick={toggleMenu} className='-mt-14 -lg:mt-2 pb-2 cursor-pointer'>
                {open ? <X /> : <Menu />}
              </div>
              {open && (
                <div ref={dropdownRef} className="absolute w-full mt-2 bg-white left-0 p-3 z-50 shadow-lg">
                  <div className="flex flex-col gap-3 pl-4 text-left text-sm">
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
                      className="bg-[#E2B934] w-32 rounded-md cursor-pointer"
                      href="start-learning"
                    >
                      <Button className="bg-transparent cursor-pointer hover:opacity-80">Start Learning</Button>
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar