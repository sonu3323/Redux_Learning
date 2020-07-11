import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import App from "./App";
import reducer from "./Reducer/reducer";
import thunk from "redux-thunk";
import wishReduer from "./Reducer/wishReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const masterReducer = combineReducers({
  name: reducer,
  wish: wishReduer
});
const store = createStore(
  masterReducer,
  composeEnhancers(applyMiddleware(thunk))
);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  rootElement
);
