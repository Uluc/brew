import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";

import CheckoutPage from "./components/Checkout/CheckoutPage/";
import Menu from "./components/Menu/";
import MenuManager from "./components/Management/MenuManager/";
import Navbar from "./components/Navbar/";
import TableManager from "./components/TableManager/"

import { BrowserRouter, Route, Switch } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <main>
      <Navbar />

      <Switch>
        <Route path="/" component={Menu} exact />
        <Route path="/menumanager" component={MenuManager} />
        <Route path="/checkout" component={CheckoutPage} />
        <Route path="/tables" component={TableManager} />
      </Switch>
    </main>
  );
}

export default App;
