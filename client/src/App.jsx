import { useState } from "react";
import Header from "./components/Header";
import LoadingScreen from "./components/LoadingScreen";
import BottomNav from "./components/BottomNav";
import HomeCover from "./components/HomeCover";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import ApproachSection from "./components/ApproachSection";
import Footer from "./components/Footer";

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <Header />

      {loading && <LoadingScreen onFinish={() => setLoading(false)} />}

      {!loading && (
        <div className="fade-in">
          <HomeCover />
          <AboutSection />
          <ServicesSection />
          <ApproachSection />
          <Footer />
        </div>
      )}

      <BottomNav visible={!loading} />
    </>
  );
}

export default App;
