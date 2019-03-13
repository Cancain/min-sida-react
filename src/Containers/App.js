import React, { Component, Fragment } from 'react';
import axios from 'axios';

import './App.css';
import Layout from '../hoc/Layout/Layout';


class App extends Component {

  state = {
    currentUser: null,
    isAdmin: false
  }

  //sets the loged in user as currentUser and if the user is admin, 
  //sets the isAdmin state to true
  startUserSession = (user) => {
    this.isAdmin(user.id);
    this.setState({ currentUser: user })
  }

  endUserSession = () => {
    this.setState({ currentUser: null, isAdmin: false });
    console.log('logging out');
  }

  //Reaches out to the API and checks if the users ID has admin right
  //if true sets the state of isAdmin to true
  isAdmin = (id) => {
    axios.get('Users/isAdmin/' + id)
      .then(response => {
        const admin = response.data;

        this.setState({ isAdmin: admin })
      })
  }

  render() {
    return (
      <Fragment>
        <Layout
          logInUser={(event) => this.startUserSession(event)}
          isAdmin={this.state.isAdmin}
          currentUser={this.state.currentUser}
          logOut={this.endUserSession}
        />
      </Fragment>
    );
  }
}

export default App;
