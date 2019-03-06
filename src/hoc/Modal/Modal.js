import React from 'react';

import style from './Modal.module.css';

const modal = (props) => {

    console.log(props.content)

    return (
        <div className={style.Modal}>
            {props.content}
        </div>
    )
}

export default modal;