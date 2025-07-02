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

      <div className="absolute inset-0 justify-center items-center flex flex-col gap-16">
        <h1 className="text-white">
          Learn by Building. Master Tech Through Practice
        </h1>
        <p className="text-white">
          Bridge the gap between knowledge and skill with real-world tech
          training, guided projects, and hands-on learning
        </p>

        <a
          className="bg-[#E2B934] rounded-md cursor-pointer "
          href="start-learning"
        >
          <Button className="bg-transparent  ">Start Learning</Button>
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