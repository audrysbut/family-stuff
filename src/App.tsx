import React from "react";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import { DariusPage } from "./pages/darius/darius-page";

function Navigation() {
  return (
    <div>
      <div>Pages:</div>
      <Link to="/darius">Darius</Link>
    </div>
  );
}

function App() {
  return (
    <Router basename="/">
      <Switch>
        <Route exact path="/">
          <Navigation />
        </Route>
        <Route path="/darius">
          <DariusPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
