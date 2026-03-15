const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-white flex items-center"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT SIDE */}
          <div className="text-center lg:text-left">

            <p className="text-brand-orange font-semibold tracking-wide text-xl sm:text-2xl mb-4">
              About Toyable
            </p>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-brown leading-tight">
              The Ultimate
              <span className="block text-brand-orange">
              Collector's Companion
              </span>
            </h2>

            <p className="mt-8 text-lg sm:text-xl text-brand-brown/80 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Toyable brings structure, clarity, and insight to vintage toy collecting — built for serious collectors and dealers, but great for casual hobbyists too.
            </p>

          </div>

          {/* RIGHT SIDE - FEATURE BLOCKS */}
          <div className="space-y-8">

            <div className="p-6 rounded-2xl border border-brand-brown/10 shadow-sm hover:shadow-md transition duration-300">
              <h3 className="text-xl font-semibold text-brand-brown mb-2">
                Structured Database
              </h3>
              <p className="text-brand-brown/70 leading-relaxed">
                Thousands of detailed entries from the 1960s to early 2000s, with accessory lists, images, and average sold price data from eBay where available.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-brand-brown/10 shadow-sm hover:shadow-md transition duration-300">
              <h3 className="text-xl font-semibold text-brand-brown mb-2">
                Personal Collection Tools
              </h3>
              <p className="text-brand-brown/70 leading-relaxed">
                Track ownership, upload your own images, showcase favourites in
                your Display Cabinet, and analyse your collection performance.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-brand-brown/10 shadow-sm hover:shadow-md transition duration-300">
              <h3 className="text-xl font-semibold text-brand-brown mb-2">
                Community Driven
              </h3>
              <p className="text-brand-brown/70 leading-relaxed">
                A community-maintained project where collectors contribute
                images and help expand the archive for everyone.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
