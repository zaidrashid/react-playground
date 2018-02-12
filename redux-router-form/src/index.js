import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { APP_ROUTES } from './const/app-routes';
import promise from 'redux-promise';

import reducers from './reducers';
import PostsIndex from './components/post-index';
import PostNew from './components/post-new';
import PostsShow from './components/post-show';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path={APP_ROUTES.POST_NEW} component={PostNew} />
          <Route path={APP_ROUTES.POST_SHOW} component={PostsShow} />
          <Route path={APP_ROUTES.ROOT} component={PostsIndex} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
