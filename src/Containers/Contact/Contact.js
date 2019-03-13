import React, { useState } from 'react';

import style from './Contact.module.css';

const contact = (props) => {
    return (
        <div className={style.Contact}>
            <h1>Contact me</h1>
            <div className={style.Wrapper}>
                <label>Email:</label>
                <input placeholder="Your email here..." type="text"></input>
                <label>Message:</label>
                <textarea placeholder="Your message here..."></textarea>
                <button>Send mail</button>
            </div>
        </div >
    )
}

export default contact;