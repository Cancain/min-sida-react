import React from 'react';

import style from './Logo.module.css';

const logo = (props) => {
    return (
        <div
            onClick={props.logoClick}
            className={style.Logo}
        >
            <h1>Tomas</h1>
            <h1>Eriksson</h1>
            <p>Web developer &</p>
            <p>educator</p>
        </div >
    )
}

export default logo;