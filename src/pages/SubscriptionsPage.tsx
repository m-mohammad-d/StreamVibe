import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import PlanComparison from "../components/PlanComparison";
import Subscription from "../components/Subscription";

function SubscriptionsPage() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div className="max-w-screen-2xl mx-auto px-4">
      <div data-aos="fade-up">
        <Subscription />
      </div>
      <div data-aos="fade-up" data-aos-delay="200">
        <PlanComparison />
      </div>
    </div>
  );
}

export default SubscriptionsPage;
