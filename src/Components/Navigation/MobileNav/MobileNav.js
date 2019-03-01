import React from 'react';

// import style from './MobileNav.module.css';
import MenuBtn from './MenuBtn/MenuBtn';
import SideDrawer from '../MobileNav/SideDrawer/SideDrawer';

const mobileNav = (props) => {


    return (
        <div>
            <MenuBtn
                menuOpened={(event) => props.menuOpened(event)}
                menuOpen={props.menuOpen}
            />
            <SideDrawer
                menuOpen={props.menuOpen}
                menuItems={props.menuItems}
                navItemClicked={props.navItemClicked}
            />
        </div>
    )
}

export default mobileNav;