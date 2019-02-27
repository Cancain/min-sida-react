import React, { Fragment } from 'react';

import style from './NavItem.module.css';

const navItem = (props) => {
    return (
        <Fragment >
            <p className={style.NavItem}>NavItem</p>
        </Fragment>
    )
}

export default navItem;