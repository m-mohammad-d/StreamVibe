import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Categories from "../components/Categories";
import Devices from "../components/Devices";
import FAQ from "../components/FAQ";
import HeroSection from "../components/HeroSection";
import Subscription from "../components/Subscription";

function Homepage() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div>
      <div className="relative bg-intro mt-4 w-full h-[700px] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/60 z-0"></div>
        <div className="relative z-10" data-aos="fade-up" data-aos-delay="100">
          <HeroSection />
        </div>
      </div>
      <div className="max-w-screen-2xl mx-auto">
        <div data-aos="fade-up">
          <Categories />
        </div>
        <div data-aos="fade-up" data-aos-delay="100">
          <Devices />
        </div>
        <div data-aos="fade-up" data-aos-delay="200">
          <FAQ />
        </div>
        <div data-aos="fade-up" data-aos-delay="300">
          <Subscription />
        </div>
      </div>
    </div>
  );
}

export default Homepage;
