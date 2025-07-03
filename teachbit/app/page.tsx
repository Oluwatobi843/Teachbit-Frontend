import Image from "next/image";
import Webinar from "./components/page-sections/home/webinar";
import HeroSection from "./components/page-sections/home/hero-section";

const LandingPage = () => {


  return (
    <div className="w-full h-full bg-[#FCF8EB]">
      <div className="relative">
        <Image
          className="w-full h-full"
          width={100}
          height={100}
          src="/assets/images/hero.svg"
          alt="hero-image"
        />
      </div>

      <HeroSection />
      
      <Webinar />
    </div>
  );
};

export default LandingPage;