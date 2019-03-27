import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./pages/Home";
import * as serviceWorker from "./serviceWorker";
import { HashRouter, Route } from "react-router-dom";
import createStore from "./modules/createStore";
import { PersistGate } from "redux-persist/integration/react";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

import { Client, setDefaultClient } from "micro-graphql-react";

const url =
  process.env.NODE_ENV === "production"
    ? "https://echosome.tk:9443"
    : "https://localhost:1333";

const client = new Client({
  endpoint: url + "/query"
});

setDefaultClient(client);

const { store, persistor } = createStore();

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <HashRouter>
        <div>
          <Route exact path="/" component={App} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
        </div>
      </HashRouter>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA

if (process.env.NODE_ENV === "production") {
  //serviceWorker.register()
  serviceWorker.unregister();
} else {
  serviceWorker.unregister();
}
