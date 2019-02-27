import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import './index.css';
import App from './Containers/App';
import * as serviceWorker from './serviceWorker';

axios.defaults.baseURL = 'http://localhost/react-mvc/backend/Libraries/bootstrap.php';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();