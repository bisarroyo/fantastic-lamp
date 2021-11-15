import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Layout from "./Layout";
import Home from "../pages/Home";
import BackOffice from "../pages/BackOffice";
import NotFound from "../pages/NotFound";

const App = () => (
  <Router>
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/backoffice" component={BackOffice} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </Router>
);

export default App;
