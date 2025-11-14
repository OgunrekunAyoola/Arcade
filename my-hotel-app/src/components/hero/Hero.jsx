import React from "react";
import HeroTitle from "./HeroTitle";
import HeroSubtitle from "./HeroSubtitle";
import HeroButton from "./HeroButton";
import HeroImage from "./HeroImage";
import CheckAvailability from "./CheckAvalability";

const Hero = () => {
  return (
    <section className="relative w-full">
      {/* Background Image */}
      <HeroImage imageUrl="/ArcadeSuiteHeroImg.png" />

      {/* Overlay content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-12 lg:px-20 py-12 md:py-20">
        {/* Titles */}
        <div className="max-w-4xl w-full">
          <HeroTitle text="Experience the Luxury You Deserve" />
          <HeroSubtitle text="Welcome to Arcade Suites – where sophistication meets comfort in the heart of Abuja. Indulge in our exclusive suites designed for your ultimate relaxation and pleasure." />
          <HeroButton text="Book Your Stay" />
        </div>

        {/* Spacer for separation */}
        <div className="mt-10 w-full flex justify-center">
          <div className="w-full sm:w-[90%] md:w-[80%] lg:w-[70%]">
            <CheckAvailability />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
