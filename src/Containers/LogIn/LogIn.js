import React, { Component } from 'react';
import axios from 'axios';

import style from './LogIn.module.css'

class LogIn extends Component {
    state = {
        email: null,
        password: null,
        errMsg: ''
    }

    validateFields = () => {
        if (this.state.email === null) {
            this.setState({ errMsg: 'Email cannot be empty' });
            return false;
        } else if (this.state.password === null) {
            this.setState({ errMsg: 'Password cannot be empty' });
            return false
        } else {
            return true;
        }
    }

    userHandler = (user) => {
        this.props.logInUser(user);
    }

    submitHandler = () => {

        if (this.validateFields()) {
            const data = {
                email: this.state.email,
                password: this.state.password
            };

            axios.post(
                'Users/logIn/-1', data)
                .then(response => {
                    this.setState({ errMsg: response.data['errMsg'] })
                    if (response.data['loginSuccess'] === true) {
                        console.log('sucess');
                        this.userHandler(response.data['foundUser']);
                    }
                });
        }

    }

    render() {
        const errorMessageHandler = this.state.errMsg !== null ?
            <span>{this.state.errMsg}</span> :
            null;

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
                {errorMessageHandler}
            </div>
        )
    }
}

export default LogIn;