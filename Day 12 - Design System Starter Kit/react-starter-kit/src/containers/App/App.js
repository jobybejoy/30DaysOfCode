import React from "react";
import logo from "../../images/logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// import DesignSystem from "../../components/Typography";
import Home from "../../components/Button";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="page__container">
          <Switch>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
