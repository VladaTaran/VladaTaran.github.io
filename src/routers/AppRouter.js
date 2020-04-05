import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Header from 'components/header';
import Main from 'components/main';
import NextRound from 'pages/nextRound';
import Lose from 'pages/lose';
import NotFoundPage from 'pages/notFoundPage';

const AppRouter = () => (
  <HashRouter>
    <div>
      <Header />
      <Switch>
          <Route path="/" component={Main} exact />
          <Route path="/lose" component={Lose} exact />
          <Route path="/next-round" component={NextRound} props="some props"/>
          <Route component={NotFoundPage} />
      </Switch>
    </div>   
  </HashRouter>
);

export default AppRouter;
