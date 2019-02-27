import React, { Component } from 'react';

import style from './Navigation.module.css'
import NavItem from './NavItem/NavItem';
import MobileNav from './MobileNav/MobileNav';


class Navigation extends Component {

    state = {
        sideDrawerOpen: false
    }

    sideDrawerHandler = () => {
        this.setState({ sideDrawerOpen: !this.state.sideDrawerOpen });
        console.log(this.state.sideDrawerOpen);
    }

    render() {
        //Stores what nav should render for big screens
        const bigNav = (
            <NavItem />
        )

        //Stores what nav should render for small screens
        const smallNav = (
            <MobileNav
                menuOpened={(event) => this.sideDrawerHandler(event)}
                menuOpen={this.state.sideDrawerOpen}
            />
        )

        const breakPoint = 1024;

        //Outputs different navs depending on the windows width
        let nav;
        window.innerWidth >= breakPoint ?
            nav = bigNav :
            nav = smallNav;

        return (
            <div className={style.Navigation}>
                {nav}
            </div>
        )
    }
}

export default Navigation;