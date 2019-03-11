import React from 'react';

const logIn = (props) => {
    return (
        <form action="" method="post">
            <label>Log in to access the admin panel</label>
            <input type="email" name="email" placeholder="Email adress"></input>
            <input type="password" name="password" placeholder="Password"></input>
            <input type="submit" value="Log in"></input>
        </form>
    )
}

export default logIn;