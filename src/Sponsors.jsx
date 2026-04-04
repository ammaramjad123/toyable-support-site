import React from "react";

const Sponsors = () => {
  return (
    <section id="sponsors" className="bg-white py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 text-center">

        <p className="text-brand-orange font-semibold tracking-[0.3em] uppercase sm:text-xl text-sm">
          Official Sponsors
        </p>

        <h2 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-brown">
          Proudly Supported By
        </h2>

        <p className="mt-6 text-lg sm:text-xl text-brand-brown/80 max-w-3xl mx-auto">
          Toyable is sponsored by Leicester Vintage & Old Toy Shop
        </p>

      </div>

      {/* SINGLE LOGO - CENTERED */}
      <div className="mt-16">
        <div className="flex justify-center">
          <img
            src="/leicester-logo.jpg"
            alt="Leicester Vintage & Old Toy Shop"
            className="
              w-40        /* mobile */
              sm:w-46     /* small screens */
              md:w-50     /* tablets */
              lg:w-54     /* desktops */
              xl:w-[220px] 
              h-auto
              object-contain
            "
          />
        </div>
      </div>
    </section>
  );
};

export default Sponsors;