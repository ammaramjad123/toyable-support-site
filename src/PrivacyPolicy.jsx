import { ShieldCheck, CheckCircle } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <section className="bg-brand-beige min-h-screen flex items-center py-20 sm:py-24">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-10">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-brand-orange font-semibold tracking-[0.25em] uppercase sm:text-xl text-sm">
            Privacy Policy
          </p>

          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-brown leading-tight">
            Toyable Image Policy
          </h1>

          <p className="mt-8 text-base sm:text-lg text-brand-brown/80 leading-relaxed">
            Built by collectors, for collectors — we respect image ownership,
            give proper credit, and act quickly if concerns arise.
          </p>
        </div>

        {/* Main Content Card */}
        <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-12 space-y-10">

          {/* Section 1 */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <ShieldCheck className="text-brand-orange" size={24} />
              <h2 className="text-xl sm:text-2xl font-semibold text-brand-brown">
                Image Ownership
              </h2>
            </div>

            <p className="text-brand-brown/80 text-sm sm:text-base leading-relaxed">
              Users retain ownership of any images they upload. By sharing
              images with Toyable, you grant us permission to display them
              within the Database, Toyable 200, and related features as part
              of our community-driven archive.
            </p>
          </div>

          {/* Section 2 */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <CheckCircle className="text-brand-orange" size={24} />
              <h2 className="text-xl sm:text-2xl font-semibold text-brand-brown">
                Our Commitment
              </h2>
            </div>

            <p className="text-brand-brown/80 text-sm sm:text-base leading-relaxed">
              We do not knowingly use copyrighted or watermarked images
              without consent. Contributors can receive image credit by
              enabling the “Show Image Credits” option in Privacy Settings.
            </p>
          </div>

          {/* Section 3 */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <CheckCircle className="text-brand-orange" size={24} />
              <h2 className="text-xl sm:text-2xl font-semibold text-brand-brown">
                Removal Requests
              </h2>
            </div>

            <p className="text-brand-brown/80 text-sm sm:text-base leading-relaxed">
              If you believe an image has been used without permission,
              please submit an Image Removal Request. Valid requests are
              reviewed promptly and handled as quickly as possible.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default PrivacyPolicy;
