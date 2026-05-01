// Download.jsx
const Download = () => {
  return (
    <section className="min-h-screen bg-brand-beige py-12 px-4 flex flex-col pt-35 sm:pt-27">

      {/* Heading Outside Container */}
      <div className="text-center mb-6">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-brand-brown break-words">
          Download <span className="text-brand-orange">Toyable</span>
        </h1>
        <p className="text-base sm:text-lg text-brand-brown/70 mt-4">
          Get the app on your favourite platform
        </p>
      </div>

      {/* Centered Buttons Container */}
      <div className="flex items-center justify-center">
        <div className="max-w-lg w-full text-center">
          <div className="flex flex-col gap-8 items-center">

            {/* App Store Button */}
            <a
              href="https://apps.apple.com/gb/app/toyable/id6760224339"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full max-w-md transition-transform duration-200 hover:scale-105"
            >
              <img
                src="/app-store-badge.svg"
                alt="Download on the App Store"
                className="w-full h-auto"
              />
            </a>

            {/* Google Play Button */}
            <a
              href="https://play.google.com/store/apps/details?id=com.toyable.app"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full max-w-md transition-transform duration-200 hover:scale-105"
            >
              <img
                src="/google-play-badge.svg"
                alt="Get it on Google Play"
                className="w-full h-auto"
              />
            </a>

            {/* Website Button */}
            <a
              href="https://toyable.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full max-w-md inline-flex items-center justify-center gap-3 px-8 py-5 rounded-xl border-2 border-brand-orange text-brand-orange font-semibold text-xl sm:text-2xl hover:bg-brand-orange hover:text-white transition-all duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 sm:w-7 sm:h-7"
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
      </div>

    </section>
  );
};

export default Download;