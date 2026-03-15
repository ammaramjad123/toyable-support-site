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
          Toyable is sponsored by Leicester Vintage & Old Toy Shop and The Toy Amigos
        </p>

      </div>

      {/* SLIDER */}
      <div className="mt-16 relative overflow-hidden">

        <div className="sponsor-track">

          {/* Leicester */}
          <div className="sponsor-item">
            <img
              src="/leicester-logo.jpg"
              alt="Leicester Vintage & Old Toy Shop"
            />
          </div>

          {/* Toy Amigos */}
          <div className="sponsor-item">
            <img
              src="/toy-amigos-logo.jpg"
              alt="The Toy Amigos"
            />
          </div>

          {/* DUPLICATED FOR LOOP */}
          <div className="sponsor-item">
            <img
              src="/leicester-logo.jpg"
              alt="Leicester Vintage & Old Toy Shop"
            />
          </div>

          <div className="sponsor-item">
            <img
              src="/toy-amigos-logo.jpg"
              alt="The Toy Amigos"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Sponsors;
