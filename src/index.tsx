import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./pages/Home";
import * as serviceWorker from "./serviceWorker";
import { HashRouter, Route } from "react-router-dom";
import createStore from "./modules/createStore";

ReactDOM.render(
  <Provider store={createStore()}>
    <HashRouter>
      <div>
        <Route exact path="/" component={App} />
      </div>
    </HashRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
