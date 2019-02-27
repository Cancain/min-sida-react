import React from 'react';

import style from './MobileNav.module.css';
import MenuBtn from './MenuBtn/MenuBtn';

const mobileNav = (props) => {
    return (
        <div>
            <MenuBtn
                menuOpened={(event) => props.menuOpened(event)}
                menuOpen={props.menuOpen}
            />
        </div>
    )
}

export default mobileNav;