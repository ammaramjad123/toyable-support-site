import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import FeatureJourney from "./FeatureJourney";
import Sponsors from "./Sponsors";
import FAQ from "./FAQ";
import PrivacyPolicy from "./PrivacyPolicy";
import Contact from "./Contact";
import Footer from "./Footer";
const App = () => {
  return (
    <>
      <Navbar />
     <Hero />
     <About/>
    <FeatureJourney />
    <Sponsors/>
    <FAQ/>
    <PrivacyPolicy/>
    <Contact/>
    <Footer/>
    </>
  );
};

export default App;
