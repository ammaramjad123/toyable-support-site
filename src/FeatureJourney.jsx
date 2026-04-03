import {
  Database,
  Image,
  CheckCircle,
  Upload,
  LineChart,
  DollarSign,
  FileDown,
  Users,
  Trophy,
  Star
} from "lucide-react";

const FeatureJourney = () => {
  return (
    <>
 {/* ================== FEATURES DIVIDER ================== */}
<section id="features" className="bg-brand-beige pt-20 text-center">
  <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-10">

    <p className="text-brand-orange font-semibold tracking-[0.25em] uppercase text-xs sm:text-sm">
      Platform Features
    </p>

    <h2 className="mt-6 text-[40px] sm:text-5xl lg:text-6xl font-bold text-brand-brown leading-tight">
      Built for Serious
      <span className="block text-brand-orange mt-2">
        Vintage Collectors
      </span>
    </h2>

    <div className="mt-10 w-24 h-1 bg-brand-orange mx-auto rounded-full"></div>

    <p className="mt-10 text-base sm:text-lg lg:text-xl text-brand-brown/80 leading-relaxed">
      From a comprehensive vintage toy archive and powerful collection tools
      to real-time pricing intelligence and the competitive Toyable 200 —
      every feature is designed to help collectors track, showcase, analyse,
      and celebrate their collections in one unified platform.
    </p>

  </div>
</section>



     {/* ================== SECTION 1 – THE ARCHIVE ================== */}
<section className="bg-brand-beige py-24 sm:py-28">
  {/* Full height container - let the grid stretch */}
  <div className="max-w-7xl mx-auto px-8 sm:px-10 lg:px-12">
    
    {/* Grid that stretches to full height */}
    <div className="grid lg:grid-cols-2 gap-16 items-stretch">
      
      {/* TEXT - normal flow, pushes height */}
      <div className="flex flex-col justify-center text-center lg:text-left">
        <p className="text-brand-orange font-semibold tracking-wide text-lg mb-4">
          The Archive
        </p>

        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-brown leading-tight">
          The Ultimate Vintage
          <span className="block text-brand-orange">
            Toy Database.
          </span>
        </h2>

        <p className="mt-8 text-lg sm:text-xl text-brand-brown/80 max-w-xl mx-auto lg:mx-0">
          A comprehensive archive covering thousands of toys from the
          1960s through the early 2000s — structured, searchable,
          and built for serious collectors.
        </p>

        <ul className="mt-10 space-y-5 max-w-md mx-auto lg:mx-0">
          {[
            "Thousands of toys across multiple decades",
            "Accessory image libraries for hundreds of toys",
            "Structured catalogue system",
            "Integrated average eBay valuation references"
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-left text-brand-brown/80">
              <CheckCircle className="text-brand-orange mt-1 flex-shrink-0" size={20} />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* VISUAL - FILLS ENTIRE VERTICAL SPACE, NO GAPS */}
      <div className="flex items-stretch">
        <div className="bg-white rounded-3xl shadow-xl w-full overflow-hidden">
          {/* Grid with NO gaps - images will tile perfectly */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-0 h-full">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <div key={num} className="overflow-hidden">
                <img 
                  src={`/toy${num}.png`} 
                  alt={`Toy ${num}`} 
                  className="w-full h-full object-cover object-center hover:scale-110 transition-transform duration-300"
                  style={{ aspectRatio: '1 / 1' }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

            {/* ================== SECTION 1B – THE TOYABLE 200 ================== */}
<section className="bg-white py-28 sm:py-32">
  <div className="max-w-7xl mx-auto px-8 sm:px-10 lg:px-12 grid lg:grid-cols-2 gap-20 items-center">

    {/* TEXT SIDE */}
    <div className="text-center lg:text-left">
      <p className="text-brand-orange font-semibold tracking-wide text-lg mb-4">
        The Toyable 200
      </p>

      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-brown leading-tight">
        Vintage Icons.
        <span className="block text-brand-orange">
          Ranked & Celebrated.
        </span>
      </h2>

      <p className="mt-8 text-lg sm:text-xl text-brand-brown/80 max-w-xl mx-auto lg:mx-0">
        A deep dive into the most legendary toy lines in history —
        featuring beautiful carded and boxed imagery from
        Teenage Mutant Ninja Turtles, Star Wars,
        Masters of the Universe, The Real Ghostbusters,
        Wrestlers, My Little Pony, and many more.
      </p>

      <ul className="mt-10 space-y-5 max-w-md mx-auto lg:mx-0">
        {[
          "Curated deep dives into iconic toy lines",
          "High-quality carded & boxed imagery",
          "Community voting in Shelf Wars",
          "The ultimate battle for vintage toy supremacy"
        ].map((item, i) => (
          <li key={i} className="flex items-start gap-3 text-left text-brand-brown/80">
            <CheckCircle className="text-brand-orange mt-1 flex-shrink-0" size={20} />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      {/* Iconic line badges */}
      <div className="mt-10 flex flex-wrap gap-3 justify-center lg:justify-start">
        {[
          "TMNT",
          "Star Wars",
          "MOTU",
          "Ghostbusters",
          "Wrestling",
          "My Little Pony",
          "Transformers (G1)",
          "Thundercats",
          "Action Force",
          "Mighty Max"
        ].map((line, i) => (
          <span
            key={i}
            className="px-4 py-2 bg-brand-beige text-brand-brown text-sm font-medium rounded-full shadow-sm"
          >
            {line}
          </span>
        ))}
      </div>
    </div>

    {/* VISUAL SIDE - BIG CARD WITH 4 IMAGES (2x2 GRID) */}
    <div className="flex items-stretch">
      <div className="bg-brand-beige rounded-3xl shadow-xl w-full overflow-hidden">
        {/* 2x2 Grid - 4 images total */}
        <div className="grid grid-cols-2 gap-0 h-full">
          {[1, 2, 3, 4].map((num) => (
            <div key={num} className="overflow-hidden">
              <img 
                src={`/toyable${num}.png`} 
                alt={`Toyable ${num}`} 
                className="w-full h-full object-cover object-center hover:scale-110 transition-transform duration-300"
                style={{ aspectRatio: '1 / 1' }}
              />
            </div>
          ))}
        </div>
        
        {/* Shelf Wars label at bottom */}
        <div className="py-4 text-center bg-brand-beige border-t border-brand-brown/10">
          <span className="text-brand-orange font-semibold text-sm tracking-wide uppercase">
            Shelf Wars Voting Live
          </span>
        </div>
      </div>
    </div>

  </div>
</section>



 {/* ================== SECTION 2 – COLLECTION ENGINE ================== */}
<section className="bg-brand-beige py-24 sm:py-28">
  <div className="max-w-7xl mx-auto px-8 sm:px-10 lg:px-12 grid lg:grid-cols-2 gap-16 items-center">

    {/* TEXT */}
    <div className="text-center lg:text-left order-1">
      <p className="text-brand-orange font-semibold tracking-wide text-lg mb-4">
        Your Collection Engine
      </p>

      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-brown leading-tight">
        From Database
        <span className="block text-brand-orange">
          To Your Display.
        </span>
      </h2>

      <p className="mt-8 text-lg sm:text-xl text-brand-brown/80 max-w-xl mx-auto lg:mx-0">
        Mark toys as owned or wished, upload images of your own instance,
        and showcase favourites inside your Display Cabinet.
        Your selections automatically flow into your public profile.
      </p>

      <ul className="mt-10 space-y-5 max-w-md mx-auto lg:mx-0">
        {[
          "Mark as Owned or Wish List",
          "Upload images of your toys",
          "Display Cabinet feature",
          "Automatic public profile sync",
          "Strict privacy controls",
          "Accessories tracker checklists"
        ].map((item, i) => (
          <li key={i} className="flex items-start gap-3 text-left text-brand-brown/80">
            <CheckCircle className="text-brand-orange mt-1 flex-shrink-0" size={20} />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>

    {/* VISUAL - SINGLE HORIZONTAL IMAGE WITH #fcfdfc BACKGROUND - NO ZOOM */}
    <div className="flex justify-center order-2">
      <div 
        className="rounded-3xl shadow-xl w-full overflow-hidden"
        style={{ backgroundColor: '#fcfdfc' }}
      >
        <div className="flex justify-center items-center">
          <img 
            src="/collection-engine.png" 
            alt="Collection Engine Dashboard" 
            className="w-full h-auto object-contain transition-transform duration-300"
            style={{ aspectRatio: '16 / 9' }}
          />
        </div>
      </div>
    </div>

  </div>
</section>


   {/* ================== SECTION 3 – MARKET INTELLIGENCE ================== */}
<section className="bg-white py-24 sm:py-28">
  <div className="max-w-7xl mx-auto px-8 sm:px-10 lg:px-12 grid lg:grid-cols-2 gap-16 items-center">

    {/* TEXT */}
    <div className="text-center lg:text-left">
      <p className="text-brand-orange font-semibold tracking-wide text-lg mb-4">
        Market Intelligence
      </p>

      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-brown leading-tight">
        Real Pricing.
        <span className="block text-brand-orange">
          Real Ownership Data.
        </span>
      </h2>

      <p className="mt-8 text-lg sm:text-xl text-brand-brown/80 max-w-xl mx-auto lg:mx-0">
        Track purchase & sales history privately, monitor valuations through regularly updated eBay average sold price data, analyse your collection performance, and export everything to CSV.
      </p>

      <ul className="mt-10 space-y-5 max-w-md mx-auto lg:mx-0">
        {[
          "Average eBay valuation links",
          "Private purchase & sale records",
          "Collection analytics dashboard",
          "Full CSV export"
        ].map((item, i) => (
          <li key={i} className="flex items-start gap-3 text-left text-brand-brown/80">
            <CheckCircle className="text-brand-orange mt-1 flex-shrink-0" size={20} />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>

    {/* VISUAL - SINGLE LARGE IMAGE */}
    <div className="flex flex-col items-center">
      <div className="bg-brand-beige rounded-3xl shadow-xl w-full overflow-hidden">
        <div className="overflow-hidden">
          <img 
            src="/market-intel.png" 
            alt="Market Intelligence Dashboard" 
            className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-300"
            style={{ aspectRatio: '4 / 3' }}
          />
        </div>
      </div>
      {/* Price disclaimer line */}
      <p className="mt-4 text-sm text-brand-brown/60 font-bold text-center">
        Prices also available in USD
      </p>
    </div>

  </div>
</section>

   {/* ================== SECTION 4 – COMMUNITY POWERED ================== */}
<section className="bg-brand-beige py-24 sm:py-28">
  <div className="max-w-7xl mx-auto px-8 sm:px-10 lg:px-12 grid lg:grid-cols-2 gap-16 items-center">

    {/* TEXT */}
    <div className="text-center lg:text-left">
      <p className="text-brand-orange font-semibold tracking-wide text-lg mb-4">
        Community Powered
      </p>

      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-brown leading-tight">
        Built By Collectors.
        <span className="block text-brand-orange">
          For Collectors.
        </span>
      </h2>

      <p className="mt-8 text-lg sm:text-xl text-brand-brown/80 max-w-xl mx-auto lg:mx-0">
        Toyable is community maintained. Collectors contribute images, expand the archive, earn recognition, compete in the XP leaderboard and champion their favourite lines in the Toyable 200 Shelf Wars.
      </p>

      <ul className="mt-10 space-y-5 max-w-md mx-auto lg:mx-0">
        {[
          "Community maintained database",
          "Image contribution credits",
          "XP & recognition system",
          "Toyable 200 participation"
        ].map((item, i) => (
          <li
            key={i}
            className="flex items-start gap-3 text-left text-brand-brown/80"
          >
            <CheckCircle
              className="text-brand-orange mt-1 flex-shrink-0"
              size={20}
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>

    {/* VISUAL – WOW CARD */}
    <div className="flex justify-center">
      <div className="relative bg-white rounded-3xl shadow-2xl p-10 w-80 sm:w-96 overflow-hidden">

        {/* Top Accent Strip */}
        <div className="absolute top-0 left-0 w-full h-2 bg-brand-orange"></div>

        {/* Title */}
        <div className="text-center mb-8">
          <p className="text-sm tracking-widest text-brand-brown/50 uppercase">
            Community Status
          </p>
          <h3 className="text-2xl font-bold text-brand-brown mt-2">
            Collector Impact
          </h3>
        </div>

        {/* Feature Blocks */}
        <div className="space-y-6">

          <div className="jiggle-hover transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex items-center justify-between bg-brand-beige rounded-2xl p-4">
            <div className="flex items-center gap-4">
              <Users className="text-brand-orange" size={26} />
              <span className="font-medium text-brand-brown">
                Active Contributors
              </span>
            </div>
            <span className="text-brand-orange font-semibold">
              Growing
            </span>
          </div>

          <div className="jiggle-hover transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex items-center justify-between bg-brand-beige rounded-2xl p-4">
            <div className="flex items-center gap-4">
              <Trophy className="text-brand-orange" size={26} />
              <span className="font-medium text-brand-brown">
                XP & Recognition
              </span>
            </div>
            <span className="text-brand-orange font-semibold">
              Earned
            </span>
          </div>

          <div className="jiggle-hover transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex items-center justify-between bg-brand-beige rounded-2xl p-4">
            <div className="flex items-center gap-4">
              <Star className="text-brand-orange" size={26} />
              <span className="font-medium text-brand-brown">
                Toyable 200 Voting
              </span>
            </div>
            <span className="text-brand-orange font-semibold">
              Live
            </span>
          </div>

        </div>

      </div>
    </div>

  </div>
</section>



    </>
  );
};

export default FeatureJourney;
