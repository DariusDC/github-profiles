import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import User from "./pages/User";

interface AppProps {}

const App: React.FC<AppProps> = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route
          exact
          path="/user/:username"
          render={(props) => <User {...props} />}
        />
      </Switch>
    </Router>
  );
};

export default App;
