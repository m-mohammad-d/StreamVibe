import FAQ from "../components/FAQ";
import SupportForm from "../components/SupportForm";
import SupportPageIntro from "../components/SupportPageIntro";

function SupportPage() {
  return (
    <div className="max-w-screen-2xl mx-auto px-4">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mx-4 mt-8">
        <div className="lg:w-1/3 w-full">
          <SupportPageIntro />
        </div>

        <div className="lg:w-2/3 w-full space-y-6">
          <SupportForm />
        </div>
      </div>

      <FAQ />
    </div>
  );
}

export default SupportPage;
