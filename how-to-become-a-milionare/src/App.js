import React from "react";

import store, { history } from "./store";

import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";

import protectedRoutes from "./routes/protectedRoutes.js";
import "./App.css";


function App() {
  return (
    <div className="App">
      <Provider store={store}>
        {console.log(store.getState())}
        <ConnectedRouter history={history}>{protectedRoutes}</ConnectedRouter>
      </Provider>
    </div>
  );
}

export default App;
