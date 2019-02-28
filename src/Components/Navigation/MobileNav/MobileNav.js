import React from 'react';

// import style from './MobileNav.module.css';
import MenuBtn from './MenuBtn/MenuBtn';
import SideDrawer from '../MobileNav/SideDrawer/SideDrawer';

const mobileNav = (props) => {
    //renders the sidedrawer if the width is less then the breakpoint
    //and the prop menuopen is true
    let sideDrawer = null;
    if (window.innerWidth <= props.breakPoint &&
        props.menuOpen) {
        sideDrawer =
            <SideDrawer
                menuItems={props.menuItems}
            />;
    }
    return (
        <div>
            <MenuBtn
                menuOpened={(event) => props.menuOpened(event)}
                menuOpen={props.menuOpen}
            />
            {sideDrawer}
        </div>
    )
}

export default mobileNav;