import React, { Component, Fragment } from 'react';

import './App.css';
import Layout from '../hoc/Layout/Layout';


class App extends Component {

  state = {
    loggedIn: null
  }

  render() {
    return (
      <Fragment>
        <Layout />
      </Fragment>
    );
  }
}

export default App;
