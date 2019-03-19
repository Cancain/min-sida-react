import React from 'react';

import style from './Drawer.module.css';

const drawer = (props) => {

    let attachedStyles = [style.Drawer, props.open ?
        style.DrawerOpen :
        style.DrawerClosed];

    return (
        <div
            className={attachedStyles.join(' ')}
        >

            <div className={style.HeadLineWrapper}>
                {props.text}
            </div >

        </div >
    )
}

export default drawer;