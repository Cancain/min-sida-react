import React, { Fragment } from 'react';

import style from './SideDrawer.module.css';
import Backdrop from '../../../../hoc/Backdrop/Backdrop';

const sideDrawer = (props) => {
    return (
        <Fragment>

            <div className={style.SideDrawer}>
            </div>
            <Backdrop />
        </Fragment>
    )
}

export default sideDrawer;