function HeroSection() {
  return (
    <div className="max-w-screen-2xl mx-auto text-center flex flex-col items-center justify-center gap-6 py-16 px-4">
      <img
        src="/icon-logo.png"
        alt="logo"
        className="w-32 h-32 md:w-48 md:h-48 object-contain"
      />

      <h1 className="text-white text-4xl md:text-6xl font-bold tracking-wider typing-animation">
        The Best Streaming Experience
      </h1>

      <p className="text-grey-60 text-lg max-w-2xl leading-relaxed">
        StreamVibe is the best streaming experience for watching your favorite
        movies and shows on demand, anytime, anywhere. With StreamVibe, you can
        enjoy a wide variety of content, including the latest blockbusters,
        classic movies, popular TV shows, and more. You can also create your own
        watchlists to easily find the content you want to watch.
      </p>
      <button className="bg-primary-55 hover:bg-primary-45 transition-all duration-300 text-white px-8 py-3 rounded-xl text-lg font-medium shadow-lg">
        Start Watching Now
      </button>
    </div>
  );
}

export default HeroSection;
