import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/UI/header/Header";
import { Welcome } from "./components/routes/welcome/Welcome";

const AppRouter = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Welcome}></Route>
        <Route exact path="/contact-me" component={Contact}></Route>
      </Switch>
    </Router>
  );
};

export default AppRouter;

function Contact() {
  return <p style={{ color: "white" }}>Feel free to contact us</p>;
}
