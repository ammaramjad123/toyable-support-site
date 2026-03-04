const Hero = () => {
  return (
    <section id="download" className="relative bg-brand-beige overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 py-25 lg:py-29 sm:py-39">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* IMAGE - FIRST ON MOBILE */}
          <div className="relative flex justify-center lg:justify-end order-1 lg:order-2">
            {/* Background Glow */}
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
              Your Vintage Toy
              <span className="sm:whitespace-normal">
                {" "}
                Collection,
                <span className="text-brand-orange"> Connected.</span>
              </span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-brand-brown/80 max-w-xl mx-auto text-center lg:text-left lg:mx-0">
              Toyable is a powerful collection management platform designed for
              vintage toy collectors to track, showcase and analyse their
              collections.
            </p>

            {/* STORE BADGES */}
            <div className="mt-8 flex flex-col sm:flex-row gap-5 justify-center lg:justify-start items-center">
              {/* App Store */}
              <a
                href="#"
                className="transition-transform duration-200 hover:scale-105 scale-108 sm:scale-100"
              >
                <img
                  src="/app-store-badge.svg"
                  alt="Download on the App Store"
                  className="h-17 sm:h-19 w-auto"
                />
              </a>

              {/* Google Play */}
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
