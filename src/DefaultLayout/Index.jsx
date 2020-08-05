import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container } from "reactstrap";
import PostArchive from "../Views/PostArchive/PostArchive";
import PostSingle from "../Views/PostSingle/PostSingle";
import UsersTable from "../Views/Users/UsersTable";

function Index() {
  return (
    <Router>
      <Header />
      <Container>
        <Switch>
          <Route path="/users/:id"></Route>
          <Route path="/posts/:id">
            <PostSingle />
          </Route>
          <Route exact path="/posts">
            <PostArchive />
          </Route>
          <Route exact path="/users">
            <UsersTable />
          </Route>
          <Route exact path="/todos"></Route>
          <Route exact path="/"></Route>
        </Switch>
      </Container>
      <Footer />
    </Router>
  );
}

export default Index;
