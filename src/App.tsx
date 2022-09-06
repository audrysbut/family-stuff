import React from "react";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import { AudriusPage } from "./pages/audrius/audrius-page";
import { DariusPage } from "./pages/darius/darius-page";
import { GabijaPage } from "./pages/gabija/gabija-page";

function Navigation() {
  return (
    <div
      style={{
        marginLeft: "0.5rem",
        display: "flex",
        gridRowGap: "1rem",
        gridColumnGap: "1rem",
      }}
    >
      <Link to="/Darius">Darius</Link>
      <Link to="/Gabija">Gabija</Link>
      <Link to="/Audrius">Audrius</Link>
    </div>
  );
}

function Notfound() {
  return <div>Page not found</div>;
}

function App() {
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
        <Route path="/Audrius">
          <AudriusPage />
        </Route>
        <Route path={"*"}>
          <Notfound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
