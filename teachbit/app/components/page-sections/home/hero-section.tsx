import React from 'react';
import Image from "next/image";
import { Button } from '../../ui/button';

const HeroSection = () => {
  return (
    <div className="absolute pt-25 lg:pt-[615px] inset-0 justify-center items-center flex flex-col gap-4">
        <h1 className="text-white text-center lg:leading-12 text-base lg:text-4xl font-bold lg:pb-10">
          Learn by Building. <br /> Master Tech Through Practice
        </h1>
        <p className="text-white text-center text-sm max-w-[300px] lg:max-w-[900px] lg:text-2xl lg:leading-10 font-extralight pb-6 lg:-mt-6">
          Bridge the gap between knowledge and skill with real-world tech
          training, guided <br /> projects, and hands-on learning
        </p>

        <a
          className="bg-[#E2B934] rounded-md cursor-pointer"
          href="start-learning"
        >
          <Button className="bg-transparent cursor-pointer hover:opacity-80">Start Learning</Button>
        </a>

        <div className="relative mb-36">
          <Image
            className="w-full h-full"
            width={100}
            height={100}
            src="/assets/images/heroframe.svg"
            alt="hero-image"
          />
        </div>
      </div>
  )
}

export default HeroSection