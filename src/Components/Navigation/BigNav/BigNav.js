import React from 'react';

import style from './BigNav.module.css';
import NavItem from '../NavItem/NavItem';

const bigNav = (props) => {

    const navItemHandler = props.items.map(item => {
        return (
            <NavItem
                text={item.text}
                key={item.id}
                clicked={(event) => props.navItemClicked(event)}
            />
        )
    })

    return (
        <div className={style.BigNav}>
            {navItemHandler}
        </div>
    )
}

export default bigNav;