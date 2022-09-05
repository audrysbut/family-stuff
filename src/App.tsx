import React from "react";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import { DariusPage } from "./pages/darius/darius-page";

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
        <Route path={"*"}>
          <Notfound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
