/* global document */
import React from 'react';
import { createStore } from 'redux';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { css } from 'glamor';

import AppContainer from './components/AppContainer';
import conf from '../conf';
import reducer from './reducer';

const store = createStore(reducer);

// Default styles
css.global('html, body', { padding: 0 });
css.global('body', {
  backgroundColor: conf.styles.backgroundColor,
  color: conf.styles.primaryColor,
  fontFamily: 'sans-serif',
});

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('campaign-editor'),
);
