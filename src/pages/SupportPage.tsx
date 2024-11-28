import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import FAQ from "../components/FAQ";
import SupportForm from "../components/SupportForm";
import SupportPageIntro from "../components/SupportPageIntro";

function SupportPage() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div className="max-w-screen-2xl mx-auto px-4">
      <div
        className="flex flex-col lg:flex-row items-center justify-between gap-12 mx-4 mt-8"
        data-aos="fade-up"
      >
        <div className="lg:w-1/3 w-full" data-aos="fade-right">
          <SupportPageIntro />
        </div>

        <div className="lg:w-2/3 w-full space-y-6" data-aos="fade-left">
          <SupportForm />
        </div>
      </div>

      <div data-aos="fade-up" data-aos-delay="200">
        <FAQ />
      </div>
    </div>
  );
}

export default SupportPage;
