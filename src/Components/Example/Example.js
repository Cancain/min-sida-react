import React, { Component, Fragment } from 'react';
import axios from 'axios';

class Example extends Component {

    state = {
        message: ''
    }

    messageHandler = () => {
        axios.get('Examples/hello/-1')
            .then(response => this.setState({ message: response.data }));
    }

    render() {
        return (
            <Fragment>
                <button onClick={this.messageHandler}>PRESS ME!</button>
                <h1>{this.state.message}</h1>
            </Fragment>
        )
    }
}

export default Example;