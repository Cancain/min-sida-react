import React, { Component } from 'react';

import style from './Navigation.module.css'
import NavItem from './NavItem/NavItem';
import MobileNav from './MobileNav/MobileNav';


class Navigation extends Component {

    state = {
        sideDrawerOpen: false,
        menuItems: [
            { text: 'about me', id: 0 },
            { text: 'portfolio', id: 1 },
            { text: 'contact', id: 2 }
        ]
    }


    sideDrawerHandler = () => {
        this.setState({ sideDrawerOpen: !this.state.sideDrawerOpen });
    }

    render() {
        //Stores what nav should render for big screens
        const bigNav = (
            <NavItem />
        )

        //A breakpoint for switching between mobile and desktop layout 
        const breakPoint = 1024;

        //Stores what nav should render for small screens
        const smallNav = (
            <MobileNav
                menuItems={this.state.menuItems}
                menuOpened={(event) => this.sideDrawerHandler(event)}
                menuOpen={this.state.sideDrawerOpen}
                breakPoint={breakPoint}
            />
        )

        //Outputs different navs depending on the windows width
        let nav;
        window.innerWidth >= breakPoint ?
            nav = bigNav :
            nav = smallNav;

        return (
            <div className={style.Navigation}>
                <h2>Tomas Eriksson</h2>
                {nav}

            </div>
        )
    }
}

export default Navigation;