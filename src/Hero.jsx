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
              src="/app-mockup.png"
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
              <span className=" sm:whitespace-normal">
                {" "}
                Collection,
                <span className="text-brand-orange"> Connected.</span>
              </span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-brand-brown/80 max-w-xl mx-auto text-center lg:text-left lg:mx-0">
              Toyable is not a marketplace. It’s a powerful collection
              management platform designed for vintage toy collectors to track,
              showcase, and analyse their collections with live pricing
              insights.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-brand-orange hover:bg-brand-red text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer w-full max-w-xs mx-auto sm:w-auto sm:max-w-none sm:mx-0">
                App Store – Coming Soon
              </button>

              <button className="border-2 border-brand-brown text-brand-brown hover:bg-brand-brown hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 cursor-pointer w-full max-w-xs mx-auto sm:w-auto sm:max-w-none sm:mx-0">
                Google Play – Coming Soon
              </button>
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
