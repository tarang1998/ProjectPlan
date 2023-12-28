import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './store/reducers/rootReducer';
import {thunk} from 'redux-thunk';
import { Provider } from 'react-redux'

const store = createStore(rootReducer,applyMiddleware(thunk));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}><App /></Provider>
  </React.StrictMode>
);

