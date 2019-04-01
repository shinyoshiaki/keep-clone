import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./containers/pages/home";
import * as serviceWorker from "./serviceWorker";
import { HashRouter, Route } from "react-router-dom";
import createStore from "./modules/createStore";
import Login from "./containers/pages/Login";
import Signup from "./containers/pages/Signup";
import { loadPersist } from "./modules/middleware/persist";

const { store } = createStore();

async function main() {
  // await loadPersist(store);

  ReactDOM.render(
    <Provider store={store}>
      <HashRouter>
        <div>
          <Route exact path="/" component={App} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
        </div>
      </HashRouter>
    </Provider>,
    document.getElementById("root")
  );

  if (process.env.NODE_ENV === "production") {
    //serviceWorker.register()
    serviceWorker.unregister();
  } else {
    serviceWorker.unregister();
  }
}

main();
