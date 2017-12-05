import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { AppContainer } from 'react-hot-loader';

import reducer from './reducers';
import App from './components/App';

const middlewares = [thunkMiddleware];

let store;

if (process.env.NODE_ENV === 'development') {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
  store = createStore(reducer, /* preloadedState, */ composeEnhancers(
    applyMiddleware(...middlewares)
  ));
} else {
  store = createStore(reducer, applyMiddleware(...middlewares));
}

const render = () => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <App />
      </Provider>
    </AppContainer>,
    document.getElementById('root')
  );
};

render(App);

/* 热更新 */
if (module.hot) {
  module.hot.accept('./components/App', () => {
    const NextApp = require('./components/App').default;
    render(NextApp);
  });
}
