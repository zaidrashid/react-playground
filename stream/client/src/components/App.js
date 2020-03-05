import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import {
  StreamCreate,
  StreamDelete,
  StreamEdit,
  StreamList,
  StreamShow,
} from './streams';
import Header from './Header';

const App = () => (
  <div className="ui container">
    <BrowserRouter>
      <Header />
      <Route path="/" exact component={StreamList} />
      <Route path="/streams/create" component={StreamCreate} />
      <Route path="/streams/edit" component={StreamEdit} />
      <Route path="/streams/delete" component={StreamDelete} />
      <Route path="/streams/show" component={StreamShow} />
    </BrowserRouter>
  </div>
);

export default App;
