function TrialBanner() {
  return (
    <div className="flex justify-center items-center mx-4 mt-20">
      <div className="max-w-screen-2xl w-full bg-trialBanner h-80 flex flex-col md:flex-row justify-between items-center p-8 md:p-20 rounded-lg bg-cover bg-center">
        <div className="flex flex-col text-white max-w-lg space-y-4 text-center md:text-left">
          <h2 className="text-3xl font-semibold">
            Start your free trial today!
          </h2>
          <p className="text-grey-60">
            This is a clear and concise call to action that encourages users to
            sign up for a free trial of StreamVibe.
          </p>
        </div>
        <button className="bg-primary-45 text-white py-3 px-6 rounded-lg hover:bg-primary-50 transition-all mt-6 md:mt-0">
          Start Free Trial
        </button>
      </div>
    </div>
  );
}

export default TrialBanner;
