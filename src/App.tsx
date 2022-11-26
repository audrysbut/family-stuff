import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { AudriusPage } from "./pages/audrius/audrius-page";
import { DariusPage } from "./pages/darius/darius-page";
import { GabijaPage } from "./pages/gabija/gabija-page";
import { JolitaPage } from "./pages/jolita/jolita-page";
import { MathPage } from "./pages/math/math-page";
import { Navigation } from "./pages/navigation";

function Notfound() {
  return <div>Page not found</div>;
}

export default function App() {
  return (
    <Router basename="/">
      <Switch>
        <Route exact path="/">
          <Navigation />
        </Route>
        <Route path="/Darius">
          <DariusPage />
        </Route>
        <Route path="/Gabija">
          <GabijaPage />
        </Route>
        <Route path="/Audrius/:page">
          <AudriusPage />
        </Route>
        <Route path="/Jolita/:page">
          <JolitaPage />
        </Route>
        <Route path="/math">
          <MathPage />
        </Route>
        <Route path={"*"}>
          <Notfound />
        </Route>
      </Switch>
    </Router>
  );
}
