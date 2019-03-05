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
            <strong className={style.plusMinus}>{props.open ? '-' : '+'}</strong>
        </div>
    )
}

export default handle;