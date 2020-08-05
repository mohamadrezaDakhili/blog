import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container } from "reactstrap";

function Index() {
  return (
    <Router>
      <Header />
      <Container>
        <Switch>
          <Route path="/users/:id"></Route>
          <Route path="/posts/:id">{/* <PostSingle /> */}</Route>
          <Route exact path="/posts">
            {/* <PostArchive /> */}
          </Route>
          <Route exact path="/users">
            {/* <Users /> */}
          </Route>
          <Route exact path="/todos"></Route>
          <Route exact path="/"></Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default Index;
