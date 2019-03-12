import React, { Component, Fragment } from 'react';
import axios from 'axios';

import './App.css';
import Layout from '../hoc/Layout/Layout';


class App extends Component {

  state = {
    currentUser: null,
    isAdmin: false
  }

  startUserSession = (user) => {
    this.isAdmin(user.id);
    this.setState({ currentUser: user.id })
  }

  isAdmin = (id) => {
    axios.get('Users/isAdmin/' + id)
      .then(response => {
        const admin = response.data;

        this.setState({ isAdmin: admin })
        console.log(this.state.isAdmin);
      })
  }

  render() {
    return (
      <Fragment>
        <Layout
          logInUser={(event) => this.startUserSession(event)}
          currentUser={this.state.currentUser}
        />
      </Fragment>
    );
  }
}

export default App;
