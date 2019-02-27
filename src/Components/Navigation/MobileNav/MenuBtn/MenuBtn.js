import React from 'react';

import style from './MenuBtn.module.css';

const menuBtn = (props) => {
    return (
        <div
            className={style.MenuBtn}
            onClick={(event) => props.menuOpened(event)}

        >
            <div className={props.menuOpen ? style.Line1 : style.Line1Closed}></div>
            <div className={props.menuOpen ? style.Line2 : style.Line2Closed}></div>
            <div className={props.menuOpen ? style.Line3 : style.Line3Closed}></div>
        </div>
    )
}

export default menuBtn;