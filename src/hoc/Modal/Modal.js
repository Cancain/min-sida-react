import React from 'react';

import style from './Modal.module.css';

const modal = (props) => {

    return (
        <div className={style.Modal}>
            <div
                onClick={props.closeBtnClicked}
                className={style.CloseBtn}>
                <h2>X</h2>
            </div>
            <div
                onClick={props.rightArrowClicked}
                className={style.RightArrow}>
                <h2>></h2>
            </div>
            <div
                onClick={props.leftArrowClicked}
                className={style.LeftArrow}>
                <h2>{'<'}</h2>
            </div>

            {props.content}
        </div>
    )
}

export default modal;