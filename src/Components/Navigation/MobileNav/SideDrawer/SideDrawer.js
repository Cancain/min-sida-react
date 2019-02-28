import React, { Fragment } from 'react';

import style from './SideDrawer.module.css';
import Backdrop from '../../../../hoc/Backdrop/Backdrop';
import NavItem from '../../NavItem/NavItem';

const sideDrawer = (props) => {

    //maps the menuitem array from the state in Navigation
    //renders a navitem for each member of the array
    let navItemHandler = props.menuItems.map(item => {
        return <NavItem text={item.text} key={item.id} />
    });

    return (
        <Fragment>
            <div className={style.SideDrawer}>
                {navItemHandler}
            </div>
            <Backdrop />
        </Fragment>
    )
}

export default sideDrawer;