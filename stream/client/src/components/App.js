import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import {
  StreamAdd,
  StreamDelete,
  StreamEdit,
  StreamList,
  StreamShow,
} from './streams';
import Header from './Header';

const App = () => {
  return (
    <div className="ui container">
      <BrowserRouter>
        <Header />
        <Route path="/" exact component={StreamList} />
        <Route path="/streams/add" component={StreamAdd} />
        <Route path="/streams/edit" component={StreamEdit} />
        <Route path="/streams/show" component={StreamShow} />
        <Route path="/streams/delete" component={StreamDelete} />
      </BrowserRouter>
    </div>
  )
};

export default App;