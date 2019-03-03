import React from 'react';

import style from './Handle.module.css';

const handle = (props) => {

    return (
        <div
            onClick={props.clicked}
            className={style.Handle}
        >

            <p>{props.text}</p>
            <p className={style.plusMinus}>{props.open ? '-' : '+'}</p>
        </div>
    )
}

export default handle;