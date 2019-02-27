import React from 'react';

import style from './Logo.module.css';

const logo = (props) => {
    return (
        <div className={style.Logo}>
            <h1>Tomas Eriksson</h1>
            <p>Web developer & educator</p>
        </div>
    )
}

export default logo;