import {
  Navbar,
  Hero,
  Camp,
  Guide,
  Features,
  GetApp,
  Footer,
} from "./components";

import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      offset: 100,
    });
  }, []);

  return (
    <>
      <Navbar />
      <main className="relative overflow-hidden">
        <Hero />
        <Camp />
        <Guide />
        <Features />
        <GetApp />
      </main>
      <Footer />
    </>
  );
};

export default App;
