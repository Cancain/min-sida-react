import React, { Component } from 'react';
import axios from 'axios';

import style from './Contact.module.css';

class Contact extends Component {

    state = {
        text: '',
        mail: '',
        error: false,
        mailSent: false,
        empty: false
    }

    render() {

        const resetText = () => {
            this.setState({ text: '', mail: '' })
        }

        //Updates the state when values changes in the form
        //The target parameter changes what state to update, "mail" for mail or "text" for text
        const handleChange = (event, target) => {

            if (target === 'mail') {
                this.setState({ mail: event.target.value })
            } else if (target === 'text') {
                this.setState({ text: event.target.value })
            }
        }

        const submitHandler = () => {
            //Variable holding the data from the state
            const data = {
                mail: this.state.mail,
                text: this.state.text
            }
            if (data.mail !== '' ||
                data.text !== '') {
                //sends the data to the backend
                axios.post(
                    'Users/sendMail/-1', data)
                    .then(response => {
                        //If successfull, updates error and mailSent state, and empties state of text and mail
                        this.setState({ error: false });
                        this.setState({ mailSent: true });
                        resetText()
                    })
                    .catch(e => {
                        //In case of error sets error to true and displays an error message 
                        //Sets mailSent to false, so the wrong response won't be shown
                        this.setState({ mailSent: false });
                        this.setState({ error: true });
                    });
            } else {
                //If either mail or text is empty
                this.setState({ empty: true });
                this.setState({ mailSent: false });
                this.setState({ error: false });
            }
        }

        return (
            <div className={style.Contact}>
                <div className={style.wrapper}>
                    <h1>Contact me</h1>
                </div>
                <div className={style.FormWrapper}>
                    <label>Email:</label>

                    <input
                        onChange={(event) => handleChange(event, 'mail')}
                        placeholder="Your email here..."
                        type="text"
                        value={this.state.mail}>
                    </input>

                    <label>Message:</label>
                    <textarea
                        onChange={(event) => handleChange(event, 'text')}
                        placeholder="Your message here..."
                        value={this.state.text}
                    >
                    </textarea>

                    <button onClick={submitHandler}>Send mail</button>
                </div>

                {/* Only renders when the post request fails */}
                {
                    this.state.error ?
                        <label
                            style={{ color: 'red' }}
                        >
                            Something went wrong, please try again later
                        </label>
                        : null
                }

                {/* Renders when the mail has been successfully been sent */}
                {
                    this.state.mailSent ?
                        <label
                            style={{ color: 'green' }}
                        >
                            Your mail has been sent!
                        </label>
                        : null
                }

                {/* Renders when any field is left empty */}
                {
                    this.state.empty ?
                        <label
                            style={{ color: 'red' }}
                        >
                            No field can be left empty
                        </label>
                        : null
                }

            </div >
        )
    }
}

export default Contact;