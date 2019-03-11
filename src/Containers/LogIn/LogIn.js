import React, { Component } from 'react';
import axios from 'axios';

import style from './LogIn.module.css'

class LogIn extends Component {
    state = {
        email: null,
        password: null
    }

    submitHandler = () => {
        const data = {
            email: this.state.email,
            password: this.state.password
        };

        const json = JSON.stringify(data);
        axios.post('Users/logIn/-1', json)
            .then(response => {
                console.log(response);
            })
    }

    render() {
        return (
            <div className={style.LogIn}>
                <h1>Log in to access the admin panel</h1>
                <div>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email adress"
                        onChange={(event) => this.setState({ email: event.target.value })}
                    >
                    </input>

                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        onChange={(event) => this.setState({ password: event.target.value })}
                    >
                    </input>

                    <input
                        type="submit"
                        value="Log in"
                        onClick={this.submitHandler}
                    >
                    </input>
                </div>
            </div>
        )
    }
}

export default LogIn;