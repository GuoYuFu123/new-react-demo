import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import BasicLayout from './layout';
import './assets/css/cssreset.css';

/** ***********创建store***************************** */
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers';
import createSagaMiddleware from 'redux-saga';
import { registerWithMiddleware } from './sagas';
const sagaMiddleware = createSagaMiddleware();
let store = createStore(reducer, applyMiddleware(sagaMiddleware));
registerWithMiddleware(sagaMiddleware);

ReactDOM.render(
  <Provider store={store} >
    <BasicLayout />
  </Provider>,
  document.getElementById('root'));
