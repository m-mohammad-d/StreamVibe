import Categories from "../components/Categories";
import HeroSection from "../components/HeroSection";

function Homepage() {
  return (
    <div>
      <div className="relative bg-intro mt-4 w-full h-[700px] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/60 z-0"></div>
        <div className="relative z-10">
          <HeroSection />
        </div>
      </div>
      <div className="max-w-screen-2xl mx-auto">
        <Categories />
      </div>
    </div>
  );
}

export default Homepage;
