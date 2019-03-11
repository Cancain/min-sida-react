import React from 'react';

import style from './LogIn.module.css'

const logIn = (props) => {
    return (
        <div className={style.LogIn}>
            <h1>Log in to access the admin panel</h1>
            <form action="" method="post">
                <input type="email" name="email" placeholder="Email adress"></input>
                <input type="password" name="password" placeholder="Password"></input>
                <input type="submit" value="Log in"></input>
            </form>
        </div>
    )
}

export default logIn;