import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
import { AudriusPage } from "./pages/audrius/audrius-page";
import { DariusPage } from "./pages/darius/darius-page";
import { GabijaPage } from "./pages/gabija/gabija-page";

const links = ["Darius", "Gabija", "Audrius"];

function Navigation() {
  const history = useHistory();
  return (
    <div style={{ marginTop: "1.5rem" }}>
      {links.map((r) => (
        <span
          style={{
            marginLeft: "0.5rem",
            padding: "1rem",
            border: "1px solid black",
            background: "lightgreen",
            borderRadius: "5px",
          }}
          onClick={() => history.push(`/${r}`)}
        >
          {r}
        </span>
      ))}
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
