import React from 'react';

import style from './Modal.module.css';

const modal = (props) => {

    return (
        <div className={style.Modal}>
            <div className={style.CloseBtn}><h2>X</h2></div>

            {props.content}
        </div>
    )
}

export default modal;