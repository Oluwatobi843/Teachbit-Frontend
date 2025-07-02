import Image from "next/image";
import { Button } from "./components/ui/button";

const LandingPage = () => {


  return (
    <div className="relative w-full h-fit">
      <div className="relative">
        <Image
          className="w-full h-full"
          width={100}
          height={100}
          src="/assets/images/hero.svg"
          alt="hero-image"
        />
      </div>

      <div className="absolute pt-60 lg:pt-35  inset-0 justify-center items-center flex flex-col gap-4 lg:gap-16">
        <h1 className="text-white text-center lg:leading-12 text-base lg:text-4xl font-bold">
          Learn by Building. <br /> Master Tech Through Practice
        </h1>
        <p className="text-white text-center text-sm max-w-[300px] lg:max-w-[900px] lg:text-2xl lg:leading-10 font-extralight lg:-mt-6">
          Bridge the gap between knowledge and skill with real-world tech
          training, guided <br /> projects, and hands-on learning
        </p>

        <a
          className="bg-[#E2B934] rounded-md cursor-pointer "
          href="start-learning"
        >
          <Button className="bg-transparent cursor-pointer hover:opacity-80">Start Learning</Button>
        </a>

        <div className="relative">
          <Image
            className="w-full h-full"
            width={100}
            height={100}
            src="/assets/images/heroframe.svg"
            alt="hero-image"
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;