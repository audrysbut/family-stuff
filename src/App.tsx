import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { AudriusPage } from "./pages/audrius/audrius-page";
import { DariusPage } from "./pages/darius/darius-page";
import { GabijaPage } from "./pages/gabija/gabija-page";
import { JolitaPage } from "./pages/jolita/jolita-page";
import { MathPage } from "./pages/math/math-page";
import { Navigation } from "./pages/navigation";
import { MoreLessPage } from "./pages/more-less/more-less-page";

function Notfound() {
  return <div>Page not found</div>;
}

export default function App() {
  return (
    <Router basename="/">
      <Routes>
        <Route path="/Darius/:page" element={<DariusPage />} />
        <Route path="/Gabija" element={<GabijaPage />} />
        <Route path="/Audrius/:page" element={<AudriusPage />} />
        <Route path="/Jolita/:page" element={<JolitaPage />} />
        <Route path="/math" element={<MathPage />} />
        <Route path="/more-less" element={<MoreLessPage />} />
        <Route path="/" element={<Navigation />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </Router>
  );
}
