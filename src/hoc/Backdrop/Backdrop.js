import React from 'react';

import style from './Backdrop.module.css';

const backdrop = (props) => {
    return (
        <div
            className={props.open ? style.Backdrop : style.BackdropClosed}
            onClick={() => props.clicked()}
        >
        </div>
    )
}

export default backdrop;