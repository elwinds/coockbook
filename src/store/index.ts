﻿import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from './reducers';

declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers =

  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk)
  // other store enhancers if any
);

//создаем стор с помощью функции createstore
//принимает reducer и thunk для асинхронных экшенов
export const store = createStore(rootReducer, enhancer);