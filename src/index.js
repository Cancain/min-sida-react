import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";

import "./index.css";
import App from "./Containers/App";
import * as serviceWorker from "./serviceWorker";

axios.defaults.baseURL =
  "https://tomaseriksson.net/backend/Libraries/bootstrap.php/";

ReactDOM.render(<App />, document.getElementById("root"));
serviceWorker.unregister();
