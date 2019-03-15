import React, { useState } from 'react';
import axios from 'axios';

import style from './Contact.module.css';

const contact = (props) => {

    let [mail, setMail] = useState();
    let [text, setText] = useState();

    const submitHandler = () => {
        const data = {
            mail: mail,
            text: text
        }
        axios.post(
            'Users/sendMail/-1', data)
            .then(response => {
                console.log(response.data);
            });
    }

    return (
        <div className={style.Contact}>
            <div className={style.wrapper}>
                <h1>Contact me</h1>
            </div>
            <div className={style.FormWrapper}>
                <label>Email:</label>

                <input
                    onChange={(event) => setMail(event.target.value)}
                    placeholder="Your email here..."
                    type="text">
                </input>

                <label>Message:</label>
                <textarea
                    onChange={(event) => setText(event.target.value)}
                    placeholder="Your message here..."
                >
                </textarea>

                <button onClick={submitHandler}>Send mail</button>
            </div>

        </div >
    )
}

export default contact;