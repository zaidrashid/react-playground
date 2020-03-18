import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';


import {
  StreamCreate,
  StreamDelete,
  StreamEdit,
  StreamList,
  StreamShow,
} from './streams';
import Header from './Header';
import history from '../history';

const App = () => (
  <div className="ui container">
    <Router history={history}>
      <Header />
      <Switch>
        <Route path="/" exact component={StreamList} />
        <Route path="/streams/create" component={StreamCreate} />
        <Route path="/streams/edit/:id" component={StreamEdit} />
        <Route path="/streams/delete/:id" component={StreamDelete} />
        <Route path="/streams/:id" component={StreamShow} />
      </Switch>
    </Router>
  </div>
);

export default App;
