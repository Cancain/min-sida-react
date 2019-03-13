import React, { useState } from 'react';

import style from './Contact.module.css';

const contact = (props) => {
    return (
        <div>
            <h1>Contact me</h1>
            <label>Email:</label>
            <input placeholder="Your email here..." type="text"></input>
            <label>Message:</label>
            <textarea placeholder="Your message here..."></textarea>
        </div >
    )
}

export default contact;