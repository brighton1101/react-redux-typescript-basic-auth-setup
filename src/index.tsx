import * as React from "react";
import { render } from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import App from "./App";

import rootReducer from "./reducers";
import { Provider } from "react-redux";
import { createStore } from "redux";

const store = createStore(rootReducer);

const rootElement = document.getElementById("root");

export default (Index = () => (
  <React.Fragment>
    <Provider store={store}>
      <App />
    </Provider>
  </React.Fragment>
));

render(<Index />, rootElement);
