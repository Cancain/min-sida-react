import React from 'react';

import style from './Modal.module.css';

const modal = (props) => {

    const leftDisabled = [style.LeftArrow, style.Closed]
    const rightDisabled = [style.RightArrow, style.Closed]

    return (
        <div className={style.Modal}>
            <div
                onClick={props.closeBtnClicked}
                className={style.CloseBtn}>
                <h2>X</h2>
            </div>
            <div
                onClick={props.rightArrowClicked}
                className={props.arrowDisabled === 'right' ? rightDisabled.join(' ') : style.RightArrow}>
                <h2>></h2>
            </div>
            <div
                onClick={props.leftArrowClicked}
                className={props.arrowDisabled === 'left' ? leftDisabled.join(' ') : style.LeftArrow}>
                <h2>{'<'}</h2>
            </div>

            {props.content}
        </div >
    )
}

export default modal;