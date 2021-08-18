import ReactDOM from "react-dom";
import { isMobile, isTablet } from "react-device-detect";

import { Provider } from "react-redux";
import store from "./redux/store";

import App from "./App";
import IncompatibleDevicePage from "./IncompatibleDevice";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    {isMobile || isTablet ? <IncompatibleDevicePage /> : <App />}
  </Provider>,
  rootElement
);
