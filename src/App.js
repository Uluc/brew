import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";

import Checkout from "./components/Checkout";
import Menu from "./components/Menu";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <main>
      <Navbar />

      <Switch>
        <Route path="/" component={Menu} exact />
        <Route path="/cart" component={Cart} />
        <Route path="/checkout" component={Checkout} />
      </Switch>
    </main>
  );
}

export default App;
