const Hero = () => {
  return (
    <section id="download" className="relative bg-brand-beige overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 py-25 lg:py-29 sm:py-39">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* IMAGE - FIRST ON MOBILE */}
          <div className="relative flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="absolute -z-10 w-72 h-72 sm:w-96 sm:h-96 bg-brand-orange/20 rounded-full blur-3xl"></div>

            <img
              src="/Toyable.png"
              alt="Toyable App Preview"
              className="w-56 sm:w-64 md:w-72 lg:w-96 drop-shadow-2xl"
            />
          </div>

          {/* CONTENT */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <p className="text-brand-orange font-semibold tracking-wide text-sm sm:text-base mb-4">
              Official App Support Site
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-brown leading-tight">
              Your Vintage Toy{" "}
              Collection,
              <span className="text-brand-orange"> Connected.</span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-brand-brown/80 max-w-xl mx-auto text-center lg:text-left lg:mx-0">
              Toyable is a powerful collection management platform designed for
              vintage toy collectors to track, showcase and analyse their
              collections.
            </p>

           {/* STORE BADGES + DESKTOP BUTTON WRAPPER */}
<div className="mt-8 w-full max-w-xl mx-auto lg:mx-0">

  {/* Badges Row */}
  <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start items-center">
    
    <a
      href="https://apps.apple.com/gb/app/toyable/id6760224339"
      target="_blank"
rel="noopener noreferrer"
      className="transition-transform duration-200 hover:scale-105 scale-108 sm:scale-100"
    >
      <img
        src="/app-store-badge.svg"
        alt="Download on the App Store"
        className="h-17 sm:h-19 w-auto"
      />
    </a>

    <a
      href="#"
      className="transition-transform duration-200 hover:scale-105 scale-108 sm:scale-100"
    >
      <img
        src="/google-play-badge.svg"
        alt="Get it on Google Play"
        className="h-15 sm:h-18 w-auto"
      />
    </a>
  </div>

  {/* DESKTOP VISIT WEBSITE BUTTON */}
  <div className="hidden sm:block mt-5">
    <a
      href="https://toyable.app/"
      target="_blank"
      rel="noopener noreferrer"
      className="w-[95%] sm:w-[85%] md:w-[85%] lg:w-[88%] xl:w-[85%] inline-flex items-center justify-center gap-2
      py-4
      rounded-xl
      border-2 border-brand-orange
      text-brand-orange font-semibold text-[20px]
      hover:bg-brand-orange hover:text-white
      transition-all duration-200"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M7 17L17 7M17 7H9M17 7V15"
        />
      </svg>
      Toyable Web Version
    </a>
  </div>

</div>
            {/* MOBILE VISIT WEBSITE BUTTON (unchanged) */}
            <a
              href="https://toyable.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="sm:hidden mt-4 inline-flex items-center justify-center gap-2
              px-5 py-2.5 rounded-full
              border-2 border-brand-orange
              text-brand-orange font-semibold text-base
              hover:bg-brand-orange hover:text-white
              transition-all duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H9M17 7V15" />
              </svg>
              Toyable Web Version
            </a>

            <p className="mt-6 text-sm text-brand-brown/60">
              Available on iOS, Android and Desktop.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;