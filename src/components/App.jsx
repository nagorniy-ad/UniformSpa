import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { hot } from "react-hot-loader";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import FormPage from "./FormPage";
import SearchPage from "./SearchPage";
import MessagePage from "./MessagePage";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={FormPage} />
          <Route path="/search" component={SearchPage} />
          <Route render={props => (<MessagePage {...props} message="Страница не найдена." />)} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default hot(module)(App);