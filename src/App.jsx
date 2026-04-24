import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import FeatureJourney from "./FeatureJourney";
import Sponsors from "./Sponsors";
import FAQ from "./FAQ";
import PrivacyPolicy from "./PrivacyPolicy";
import Contact from "./Contact";
import Footer from "./Footer";
import Download from "./Download";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <FeatureJourney />
              <Sponsors />
              <FAQ />
              <PrivacyPolicy />
              <Contact />
            </>
          }
        />
        <Route path="/download" element={<Download />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;