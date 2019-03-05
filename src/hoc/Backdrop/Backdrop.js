import React from 'react';

import style from './Backdrop.module.css';

const backdrop = (props) => {
    return (
        <div className={props.open ? style.Backdrop : style.BackdropClosed}>
        </div>
    )
}

export default backdrop;