import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AppContainer } from 'react-hot-loader';
import 'semantic-ui-css/semantic.min.css';
import HomePage from './screens/homepage';

const mountApp = document.getElementById('react-app');

const AppRoot = <Switch>
    <Route exact path="/" component={HomePage}/>
  </Switch> ;

ReactDOM.render(
  <AppContainer>
    <Router key={Math.random()} >
      {AppRoot}
    </Router>
  </AppContainer>
  , mountApp
);

if (module.hot) {
  module.hot.accept('./app.js', () => {
    ReactDOM.render((
      <AppContainer>
        <Router key={Math.random()} >
          {AppRoot}
        </Router>
      </AppContainer>
    ), mountApp);
  });
}

