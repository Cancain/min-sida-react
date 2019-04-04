import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./Containers/App";
import * as serviceWorker from "./serviceWorker";

axios.defaults.baseURL =
  "https://tomaseriksson.net/backend/Libraries/bootstrap.php/";

const app = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

ReactDOM.render(app, document.getElementById("root"));
serviceWorker.unregister();
