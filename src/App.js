import { Route, Routes } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Landing from "./components/landing/Landing";
import About from "./components/about/About";
import Support from "./components/support/Support";
import Platforms from "./components/platforms/Platforms";
import Pricing from "./components/pricing/Pricing";
import Footer from "./components/footer/Footer";
import GoToTop from "./components/go-to-top/GoToTop";

function App() {
  return (
    <div className="app">
      <Navbar />

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/support" element={<Support />} />
        <Route path="/platforms" element={<Platforms />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>

      <GoToTop />

      <Footer />
    </div>
  );
}

export default App;