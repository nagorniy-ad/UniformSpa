import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { hot } from 'react-hot-loader';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import FormPage from './pages/FormPage';
import SearchPage from './pages/SearchPage';
import NotFoundPage from './pages/NotFoundPage';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={FormPage} />
          <Route path="/search" component={SearchPage} />
          <Route render={props => (<NotFoundPage {...props} />)} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default hot(module)(App);