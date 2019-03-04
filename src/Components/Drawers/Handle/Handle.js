import React from 'react';

import style from './Handle.module.css';

const handle = (props) => {

    let classList = [style.Handle, props.subDrawer ? style.subDrawer : null];

    return (
        <div
            onClick={props.clicked}
            className={classList.join(' ')}
        >

            <p>{props.text}</p>
            <p className={style.plusMinus}>{props.open ? '-' : '+'}</p>
        </div>
    )
}

export default handle;