import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from "react-redux";
import 'bulma/css/bulma.css';
import './styles.scss';
import {reducer} from "./reducers/reducer";
import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
  const store = createStore(reducer, applyMiddleware(thunk));
// console.log(store);

const rootElement = document.getElementById('root');
ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>, rootElement);
