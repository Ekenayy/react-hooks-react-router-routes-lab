import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Actors from "./Actors";
import Directors from "./Directors";
import Movies from "./Movies";

function App() {
  return (
    <div>
      <NavBar />
      <Switch >
        <Route exact path="/Actors">
          <Actors />
        </Route>
        <Route exact path="/Directors">
          <Directors />
        </Route>
        <Route exact path="/Movies">
          <Movies />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  )
}

export default App;
