import { Route, Routes } from "react-router-dom";

import { Navbar, Landing, About, Support, Platforms, Pricing, Footer, GoToTop } from "./utils/importer";

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